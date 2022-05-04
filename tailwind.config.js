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
            'sans': ["'Roboto', sans-serif"]
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
                "50": "#FFF8EB",
                "100": "#FFEFD1",
                "200": "#FFDFA3",
                "300": "#FFD17A",
                "400": "#FFC14D",
                "500": "#FFB01F",
                "600": "#E69500",
                "700": "#AD7100",
                "800": "#704900",
                "900": "#382400"
            },
            blue: {
                "50": "#ECF3FE",
                "100": "#D8E6FD",
                "200": "#ACCAFB",
                "300": "#86B2F9",
                "400": "#5F99F7",
                "500": "#367EF5",
                "600": "#0B5FE4",
                "700": "#0846AA",
                "800": "#062E70",
                "900": "#000E50"
            },
            green: {
                "50": "#E7FDEF",
                "100": "#D0FBDE",
                "200": "#9CF7BA",
                "300": "#6DF39A",
                "400": "#3EEF79",
                "500": "#13E35A",
                "600": "#0FB847",
                "700": "#0B8935",
                "800": "#075923",
                "900": "#042F12"
            },
            pink: {
                "100": "#FFCCEE",
                "200": "#FF99DD",
                "300": "#FF66CC",
                "400": "#FF33BB",
                "500": "#FF00AA",
                "600": "#CC0088",
                "700": "#990066",
                "800": "#660044",
                "900": "#330022"
            },
            purple: {
                "50": "#F4F0FF",
                "100": "#ECE6FE",
                "200": "#DACEFD",
                "300": "#C7B5FD",
                "400": "#B49CFC",
                "500": "#A083FB",
                "600": "#6939F9",
                "700": "#3D07DE",
                "800": "#290594",
                "900": "#14024A"
            },
            teal: {
                "50": "#F3FAFB",
                "100": "#E4F4F6",
                "200": "#CDEBEF",
                "300": "#B2E0E6",
                "400": "#97D5DD",
                "500": "#7ECBD5",
                "600": "#4AB6C4",
                "700": "#328E9A",
                "800": "#226068",
                "900": "#102E32"
            }
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
