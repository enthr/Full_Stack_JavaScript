/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}" ],
    theme: {
        extend: {
            colors: {
                'blue': '#0C8BFD',
                'white': '#FAFAFA',
                'black': '#212121',
                'amber': '#FFAB00',
                'lightBlue': '#bbdefb',
                'lighterBlue': '#e3f2fd'
            }
        },
    },
    plugins: []
}
