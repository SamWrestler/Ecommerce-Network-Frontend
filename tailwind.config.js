module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            screens: {
                mobile: { max: '765px' },
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
                lalezar: ['lalezar'],
            },
            colors: {
                bgPrimary: ({ opacityValue }) => {
                    if (opacityValue !== undefined) {
                        return `rgba(var(--color-bg-primary), ${opacityValue})`
                    }
                    return 'rgb(var(--color-bg-primary))'
                },
                textPrimary: ({ opacityValue }) => {
                    if (opacityValue !== undefined) {
                        return `rgba(var(--color-text-primary), ${opacityValue})`
                    }
                    return 'rgb(var(--color-text-primary))'
                },
                textSecondary: ({ opacityValue }) => {
                    if (opacityValue !== undefined) {
                        return `rgba(var(--color-text-secondary), ${opacityValue})`
                    }
                    return 'rgb(var(--color-text-secondary))'
                },
                border: ({ opacityValue }) => {
                    if (opacityValue !== undefined) {
                        return `rgba(var(--color-border), ${opacityValue})`
                    }
                    return 'rgb(var(--color-border))'
                },
                bgInput: ({ opacityValue }) => {
                    if (opacityValue !== undefined) {
                        return `rgba(var(--color-bg-input), ${opacityValue})`
                    }
                    return 'rgb(var(--color-bg-input))'
                },
                success: ({ opacityValue }) => {
                    if (opacityValue !== undefined) {
                        return `rgba(var(--color-success), ${opacityValue})`
                    }
                    return 'rgb(var(--color-success))'
                },
                warning: ({ opacityValue }) => {
                    if (opacityValue !== undefined) {
                        return `rgba(var(--color-warning), ${opacityValue})`
                    }
                    return 'rgb(var(--color-warning))'
                },
                error: ({ opacityValue }) => {
                    if (opacityValue !== undefined) {
                        return `rgba(var(--color-error), ${opacityValue})`
                    }
                    return 'rgb(var(--color-error))'
                },
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
