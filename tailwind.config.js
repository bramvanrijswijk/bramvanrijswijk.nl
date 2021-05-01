module.exports = {
    purge: {
        content: ['./public/**/*.html', './src/**/*.vue'],
        options: {
            whitelistPatterns: [
                /-(leave|enter|appear)(|-(to|from|active))$/,
                /^(?!(|.*?:)cursor-move).+-move$/,
                /^router-link(|-exact)-active$/
            ],
        },
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            width: {
                'xs-logo': '300px',
                'sm-logo': '60rem',
                'md-logo': '70rem',
                'lg-logo': '80rem',
            }
        },
    },
    variants: {
        extend: {
            fontWeight: ['hover', 'group-hover'],
            fontStyle: ['hover', 'group-hover'],
            display: ['hover', 'group-hover']
        }
    },
    plugins: [],
}