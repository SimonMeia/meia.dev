/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        extend: {
            colors: {
                orange: "#F89207",
                black: "#141918",
                grey: "#808080",
            },
            fontFamily: {
                clashdisplay: ['"Clash Display"'],
                opensans: ['"Open Sans"'],
                dmsans: ['"DM Sans"']
            },
        },
    },
    plugins: [
        require("@tailwindcss/line-clamp"),
    ],
};
