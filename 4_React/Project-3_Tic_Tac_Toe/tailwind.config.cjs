/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/*.{js,jsx}', './src/**/*.{js,jsx}', './src/**/**/*.{js,jsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                black: '#212121',
                white: '#FAFAFA',
                green: '#00C853',
                red: '#D50000',
                blue: '#2962FF'
            }
        },
        plugins: []
    }
}