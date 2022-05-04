let plugin = require('tailwindcss/plugin')

module.exports = {
    content: ["./src/pug/**/*.{pug,js}", "./src/javascripts/Tabs.js" ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1200px',
        },
        fontFamily: {
            'sans': ["'Roboto', sans-serif"],
        },
        fontSize: {
            xs: ['8px', '14px'],
            base: ['10px', '16px'],
            sm: ['12px', '18px'],
            md: ['14px', '20px'],
            lg: ['16px', '22px'],
            xl: ['20px', '26px'],
            sl: ['24px', '32px'],
            xxl: ['30px', '38px'],
            xsl: ['36px', '46px'],
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',

            black: '#000',
            white: '#fff',

            red: {
                200: '#ffcccc',
            },
            orange: {
                500: '#FFB01F',
            },
            blue: {
                100: '#D0D4F1',
                200: '#ADB5E6',
                300: '#8A95DB',
                400: '#6777D0',
                500: '#4458C5',
                600: '#3447A8',
                700: '#0B1D6E',
                800: '#000E50',
                900: '#080C1B'
            },
            pink: {
                500: '#FF00AA',
            },

        },
        extend: {
            dropShadow: {
                'modal': '0 -10px 6px rgb(0 0 0 / 0.12)',
            }
        },
    },
    plugins: [
        plugin(function ({addVariant}) {
            addVariant('forth', '&:nth-child(4n - 2)')
        }),
        require('@tailwindcss/forms'),
        require('tailwind-css-variables')(
            {
                colors: 'color',
                screens: false,
                fontFamily: false,
                fontSize: false,
                fontWeight: false,
                lineHeight: false,
                letterSpacing: false,
                backgroundSize: false,
                borderWidth: false,
                borderRadius: false,
                width: false,
                height: false,
                minWidth: false,
                minHeight: false,
                maxWidth: false,
                maxHeight: false,
                padding: false,
                margin: false,
                boxShadow: false,
                zIndex: false,
                opacity: false,
            },
            {
                // options
            }
        )
    ],
}
