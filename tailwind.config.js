/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "hero-pattern":
                    "linear-gradient(to right, rgba(101, 0, 163, 0.9), rgba(24, 120, 175, 0.9)), url('https://images.unsplash.com/photo-1546453667-8a8d2d07bc20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=100')",
            },
        },
    },
    plugins: [],
};
