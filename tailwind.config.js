let plugin = require('tailwindcss/plugin')

module.exports = {
    content: ["./src/pug/**/*.{pug,js}", "./src/javascripts/Tabs.js" ],
    theme: {
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

            gray: {
                100: '#f3f5f6',
                200: '#e1e6e9',
                300: '#cfd0d7',
                400: '#ccd5db',
                500: '#919597',
                600: '#73787F',
                700: '#606060',
                750: '#353b45',
                800: '#29384A',
                850: '#252B35',
                900: '#161E29',
            },
            red: {
                200: '#ffcccc',
                300: '#E7CECE',
                600: '#FF0000',
                700: '#D62929',
            },
            orange: {
                200: '#fdebd0',
                600: '#F39C12',
            },
            green: {
                100: '#F0FFED',
                200: '#d2f3cc',
                400: '#96ed88',
                600: '#1dc400',
                700: '#1C790B',
                800: '#105405',
                900: '#083300',
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
                200: '#f8ccff',
                600: '#DB00FF',
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
