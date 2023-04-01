/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}", "./src/*.{js,jsx}"],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                black: '#212121',
                white: '#FAFAFA',
                link: '#0091EA',
                amber: '#FFAB00',
                green: '#00C853',
                lightGrey: '#F5F5F5',
                darkGrey: '#424242'
            },
        },
    },
    plugins: []
}
