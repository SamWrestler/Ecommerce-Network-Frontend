module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            screens: {
                tablet: '768px',
                desktop: '1024px',
            },
            boxShadow: {
                custom: '0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)',
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '20px',
                    lg: '120px',
                },
            },
            fontFamily: {
                font: ['Rubik', 'iransans'],
            },
            colors: {
                bgPrimary: 'var(--color-bg-primary)',
                textPrimary: 'var(--color-text-primary)',
                textSecondary: 'var(--color-text-secondary)',
                border: 'var(--color-border)',
                bgInput: 'var(--color-bg-input)',
                success: 'var(--color-success)',
                warning: 'var(--color-warning)',
                error: 'var(--color-error)',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
