
# Ecommerce Network – Next.js React Frontend


Built a responsive e-commerce frontend with Next.js 13 and Tailwind CSS, integrated via REST APIs with a Laravel backend. Features include authentication, dynamic product listing, search with filters, shopping cart, and user dashboard. Used custom React hooks and followed modern App Router architecture for scalability and clean UI.




## Features

- Register, Login, Logout, Forgot Password, Reset Password, Email Verification
- Route protection with middleware and `useAuth` hook
- SWR-based session and user data management
- Global layout with responsive Header and BottomNavbar
- Product listing with filters (price, category) and category slider
- Product detail page with image gallery, stock info, related products
- Real-time search bar with local history
- Cart functionality: add/remove, quantity control, total calculation
- Checkout flow with address selection/form and interactive map
- Payment gateway integration and bank selection UI
- Order creation and confirmation, order history with details
- Profile page with user info editing and address management
- Favorites management with add/remove functionality
- Notifications dropdown with polling via SWR
- Role-based dashboard with user/admin views and charts
- Reusable components: buttons, inputs, cards, sliders, forms
- Custom hooks: `useAuth`, `useWindowSize`, `useClickOutside`, `NavigateToTop`
- Data fetching via centralized Axios and SWR for all entities
- Tailwind CSS for utility-first responsive design
- FontAwesome icon integration and custom global styles
- Structured project with Next.js App Router and clean directory hierarchy
- ESLint, Prettier, and environment variables for configuration
- Mobile-first UX with conditional layouts and navigation visibility

## Tech Stack
* Next.js 13 (App Router)
* React (functional components, hooks)
* SWR (data fetching and caching)
* Axios (HTTP client, with CSRF and cookie support)
* Tailwind CSS (utility-first styling)
* React-Leaflet & Leaflet (interactive map picker)
* FontAwesome (icon library)
* ESLint (linting)
* Prettier (code formatting)
* PostCSS & Autoprefixer (CSS processing)
* classnames (conditional className handling)
* JavaScript (ES6+) & JSX
* Environment variables (e.g., `NEXT_PUBLIC_BACKEND_URL`, `NEXT_PUBLIC_MAPBOX_TOKEN`)

## How it works


The Ecommerce Network frontend is built with Next.js 13 and interacts seamlessly with a Laravel backend via RESTful APIs. When a user visits the site, the global layout (`app/layout.jsx`) loads first, applying Tailwind CSS styles and ensuring FontAwesome icons are available. The application immediately checks for an active session by calling `/api/user` through the centralized Axios instance. If a valid session exists (Laravel Sanctum cookie-based authentication), the user data is cached by SWR and stored in the `useAuth` hook; otherwise, the user remains in a guest state.

**Authentication & Route Protection**
All authentication actions (register, login, logout, forgot password, reset password, email verification) occur through dedicated API endpoints on the Laravel backend. When a user submits their email and password on the Login page, Axios sends a POST to `/api/login` including CSRF headers. Upon success, Laravel Sanctum issues a session cookie, which SWR immediately uses to fetch `/api/user` and populate the `useAuth` state. Protected routes (e.g., “/profile” or any page with `middleware="auth"`) automatically redirect unauthenticated users to the login page; authenticated users attempting to access guest-only pages (register, login) are redirected to the homepage. For logout, the frontend calls `/api/logout` via `useAuth.logout()`, clearing the session cookie and resetting SWR’s cached user.

**Layout & Navigation**
Once authenticated (or browsing as a guest), the Main layout determines which navigation to render based on screen size (via `useWindowSize`): on desktop, the `<Header />` appears at the top, showing links to Home, Products, Cart, and Profile (or Login/Register when not authenticated); on mobile, a `<BottomNavbar />` is fixed at the bottom with the same core links. The `NavigateToTop` hook resets scroll position on each route change. Whenever the current path includes a product detail (`/products/[id]`) or a nested profile subpage, the bottom navbar hides automatically to maximize content area.

**Product Catalog & Browsing**
On the Products listing page, SWR fetches `/api/products` with any applied query parameters—such as `?search=`, `?category=`, `?price_min=`, or `?price_max=`—and stores the result in a cached object. The `<Filters />` sidebar (visible on desktop) lets users adjust a price range slider and select one or more categories; on mobile, filters open as a modal. Selecting a filter updates the URL query, SWR revalidates, and the product grid redraws with `<ProductCard />` components. Above the grid, a `<CategorySlider />` fetches `/api/categories`, displays each category as a horizontal scrollable card, and clicking one appends `?category={id}` to the URL to refresh the product list.

Clicking on a product card navigates to `/products/[id]`. On that detail page, SWR fetches `/api/products/{id}`, and the UI renders a gallery via `<ProductCardImage />` components, shows title, price, stock status, and description. The user can add the item to their cart by clicking `<AddToCartButton />`, which sends `POST /api/cart` with `{ product_id, quantity }`. Simultaneously, the cart count in the header updates via SWR’s revalidation on `/api/cart`.

**Search with History**
At any time, typing in the global search bar triggers a local match filter on previously searched terms stored in `localStorage`. Pressing Enter sends the user to `/products?search={query}`; SWR fetches `/api/products?search={query}`, and the term is saved to history. As the user types, the UI shows dropdown suggestions of past queries. Selecting a suggestion re-runs the search.

**Shopping Cart & Checkout**
The Cart page calls SWR on `/api/cart` to fetch all current cart items. Each `<CartProductCard />` displays product thumbnail, name, unit price, quantity controls (– / +), and a “Remove” button. Adjusting quantity triggers `PUT /api/cart/{cartItemId}` with the updated quantity. Removing an item triggers `DELETE /api/cart/{cartItemId}`. The subtotal, shipping, tax, and total update in real time on the client side. If the cart is empty, the “Proceed to Checkout” button remains disabled.

When the user clicks “Proceed to Checkout,” the frontend first checks if the user has at least one saved shipping address. If none exist, they are redirected to `/profile/my-information` and prompted to add a new address. Otherwise, the `<Checkout />` component fetches `/api/addresses` via SWR, displays existing addresses, and allows selecting one. If the user chooses to add a new address, `<NewAddressForm />` appears, letting them enter an address title, select province and city from `/api/provinces` and `/api/provinces/{id}/cities`, and pick a precise location on an interactive map powered by React-Leaflet (fetching map tiles with the `NEXT_PUBLIC_MAPBOX_TOKEN`). The form also validates postal code and phone number before submitting `POST /api/addresses`. Upon successful save, SWR revalidates `/api/addresses`, and the new address becomes selectable.

With an address selected, clicking “Place Order” calls `POST /api/orders` with `{ cart_id, address_id, payment_method }`. Laravel creates the order, clears the cart, and returns a payment URL. Next.js catches that URL in the API response and uses `router.push()` to redirect the user to the bank’s payment gateway. Once payment completes, the bank callback updates the order status on the backend. Back on the frontend, the Order Confirmation page fetches `/api/orders/{orderId}` to display order number, date, items, and payment status.

**Order History & Notifications**
In the user’s Profile under “Orders,” SWR fetches `/api/orders` and lists each past order in `<Order />` cards. Clicking an order toggles the display of its line items—product thumbnails, quantity, unit price, and total per item. If an order’s status changes (e.g., “shipped” or “delivered”), the `notifications` endpoint (`/api/notifications`) updates with a new item. A SWR polling hook fetches `/api/notifications` every minute; if there are unread notifications, a red dot appears on the bell icon in the header. Clicking the bell dropdown shows each `<Notification />`, and clicking a notification marks it as read via `PUT /api/notifications/{id}`.

**User Profile & Favorites**
Under “My Information,” SWR fetches `/api/user` (for name, email, phone) and `/api/addresses`. The user can click an “Edit” button next to a profile field to reveal an inline form that sends `PUT /api/user` on submit. Address cards each have “Edit” and “Delete” icons; editing reopens `<NewAddressForm />` populated with existing data (frontend fetches `/api/addresses/{id}`), and deleting calls `DELETE /api/addresses/{id}`. In “Favorites,” SWR fetches `/api/favorites`; each `<ProductCard />` in that list also displays a heart icon that toggles favorite status by calling `POST /api/favorites/{productId}` or `DELETE /api/favorites/{productId}`. Removing a favorite immediately revalidates the SWR cache so the item disappears from the list.

**Dashboard (Role-Based)**
If a logged-in user’s role equals “admin,” navigating to `/dashboard` triggers SWR to fetch `/api/admin/stats`. The Dashboard Home page displays total users and total orders from the API response and renders a sales chart over the past week using Recharts. Sidebar navigation uses `<NavLink />` to highlight the active admin route and offers links to “Manage Products” and “Manage Orders.” Both sections fetch respective data (e.g., `/api/admin/products`, `/api/admin/orders`) and allow inline actions: editing a product calls `PUT /api/admin/products/{id}`, deleting calls `DELETE /api/admin/products/{id}`, and updating an order’s status calls `PUT /api/admin/orders/{id}`.

If a user with role “customer” visits `/dashboard`, the page displays recent order history and quick links to their profile pages. The `useRouter` hook in the Dashboard Layout redirects non-admins away from admin routes to prevent unauthorized access.

**Reusable Components, Hooks & Utilities**
Across all pages, the frontend relies on a set of reusable UI components:

* **Buttons & Inputs**: `<Button />`, `<PrimaryButton />`, `<Input />`, `<FormLabel />`, `<InputError />`.
* **Cards & Sliders**: `<ProductCard />`, `<CartProductCard />`, `<OrderSlider />`, `<CategorySlider />`.
* **Address & Map**: `<Address />`, `<LocationPicker />`, `<NewAddressForm />`.

Custom hooks include:

* `useWindowSize` to toggle desktop vs. mobile layouts.
* `useClickOutside` to close dropdowns and modals when clicking away.
* `useAuth` to manage login, logout, and user data via SWR.
* `NavigateToTop` to automatically scroll to the top on each route change.

**Data Layer & API Interaction**
All HTTP requests use a single Axios instance (`src/lib/axios.js`) configured with `baseURL = process.env.NEXT_PUBLIC_BACKEND_URL` and `withCredentials = true` so Laravel Sanctum cookies are included. Every data-fetching component or hook uses SWR for caching, revalidation on window focus, and fallback UI during loading/error states. When a mutation occurs (e.g., updating quantity, placing an order, editing user info), the component calls the appropriate Axios endpoint and then triggers SWR’s `mutate()` on the affected key to refresh the UI with the latest data.

**Styling & Responsiveness**
Tailwind CSS provides a utility-first approach:

* Global styles and resets are defined in `global.css`.
* Components use class names like `flex`, `grid`, `gap-4`, and breakpoint prefixes (`tablet:`, `desktop:`) to adapt to different screen widths.
* Custom scrollbars and hover transitions enhance the user experience.

On mobile screens (width < 768px), the `<BottomNavbar />` appears, filters open as a full-screen modal, and sidebars collapse into hamburger menus. On desktop, sidebars remain visible, product grids adjust the number of columns, and hover states reveal additional actions (like “Add to Cart” or “Add to Favorites”).

**Environment & Tooling**
Environment variables in `.env` (e.g., `NEXT_PUBLIC_BACKEND_URL`, `NEXT_PUBLIC_MAPBOX_TOKEN`) configure API endpoints and map access. ESLint and Prettier enforce consistent code style across JavaScript/JSX files. PostCSS and Autoprefixer process Tailwind directives so the final CSS is optimized and compatible with all supported browsers.

---

**In summary, the Ecommerce Network frontend operates as follows:**

1. **Initial Load:** Checks for an existing Laravel Sanctum session with SWR.
2. **Authentication:** Provides secure login/register flows, session management, and route guards.
3. **Product Browsing:** Fetches products and categories via SWR, applies client-side filters and search queries, and displays results in a responsive grid.
4. **Cart & Checkout:** Manages cart state with add/remove and quantity updates; handles checkout with address forms, interactive map selection, order creation, and payment gateway redirection.
5. **Profile Management:** Allows editing user details, managing addresses, viewing past orders, and toggling favorites—each action driven by RESTful calls and SWR revalidation.
6. **Notifications:** Polls the backend for new alerts and displays them in a header dropdown.
7. **Dashboard:** Presents a role-based dashboard—admin users see statistics and management tools, while customers see quick links and recent activity.
8. **Reusable Utilities:** Employs custom hooks (`useAuth`, `useWindowSize`, `useClickOutside`, etc.) and shared UI components for consistency and maintainability.
9. **Styling & Responsiveness:** Uses Tailwind CSS to adapt layouts and interactions seamlessly between mobile and desktop.
10. **API Interaction:** Relies exclusively on a centralized Axios instance and SWR for all data operations, ensuring a tight coupling with the Laravel backend.
