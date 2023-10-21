/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: {
        content: [
            './src/*.{tsx,ts}',
            './src/audioComponents/*.{tsx,ts}',
            './src/components/*.{tsx,ts}',
            './src/pages/*.{tsx,ts}',
        ],
        enabled: false, // Disable tree shaking
    },
    safelist: [
        {
            pattern: /^.*$/, // Match any class pattern during development
        },
    ],
    content: [],
    theme: {
        extend: {
            colors: {
                moneyBackgroundBlue: "#E7F1FF",
                moneyLightBlue: "#1DBBFF",
                moneyLimeGreen: "#61FF5E",
                moneyYellow: "#FFEA2A",
                moneyDarkGreen: "#00B607",
                moneyError: "#f59a9a",
                moneyMessage: "#c4ffc4",
                moneyWarning: "#fe5d5d",
            },
        },
    },
    plugins: [],
}
