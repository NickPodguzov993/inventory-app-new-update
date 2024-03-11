/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",],
    theme: {
        screens: {
            lg: '1920px',
            md: '1440px',
            sm: '1024px',
            tb: '768px'
        },
        extend: {
            animation: {
                'rotate_full': 'full_circle 60s linear infinite',
                "move": "move 2s ease-in-out infinite",
                'marquee': 'marquee 8s linear infinite',
                "slide-down": "slide-down 0.8s",
                "fade-in": "fade-in 0.8s",
                "open-mobile-menu": "slide-left 0.5s",
                'key-slide-up': 'slide_up 0.5s ease-in-out',
                'key-appear': 'key-appear 0.3s ease-in-out',
                'key-disappear': 'key-disappear 0.3s ease-in-out',
                'key-slide-text': 'key-slide-text 0.3s ease-in-out',
                'key-slide-down-text': 'key-slide-down-text 0.3s ease-in-out',
                'link-hover': 'link-hover 0.3s ease-in-out',
                'mobile_cube_zoom': 'mobile_cube_zoom 0.9s ease-in-out',
                'hover_joke': 'joke 5s linear infinite'
            },
            keyframes: {
                'joke': {
                    '0%': {transform: 'translateY(200px) translateX(-200px) rotate(0deg)', scale: 100},
                    '5%': {transform: 'translateY(145px) translateX(200px) rotate(180deg)', scale: 95},
                    '10%': {transform: 'translateY(-265px) translateX(-300px) rotate(360deg)', scale: 90},
                    '15%': {transform: 'translateY(325px) translateX(100px) rotate(180deg)', scale: 85},
                    '20%': {transform: 'translateY(-225px) translateX(-365px) rotate(0deg)', scale: 80},
                    '25%': {transform: 'translateY(225px) translateX(225px) rotate(180deg)', scale: 75},
                    '30%': {transform: 'translateY(-425px) translateX(-325px) rotate(360deg)', scale: 70},
                    '35%': {transform: 'translateY(325px) translateX(325px) rotate(180deg)', scale: 65},
                    '40%': {transform: 'translateY(-225px) translateX(-225px) rotate(0deg)', scale: 60},
                    '45%': {transform: 'translateY(325px) translateX(425px) rotate(180deg)', scale: 55},
                    '50%': {transform: 'translateY(-425px) translateX(-425px) rotate(360deg)', scale: 50},
                    '55%': {transform: 'translateY(425px) translateX(225px) rotate(180deg)', scale: 45},
                    '60%': {transform: 'translateY(-225px) translateX(-325px) rotate(0deg)', scale: 40},
                    '65%': {transform: 'translateY(325px) translateX(225px) rotate(180deg)', scale: 35},
                    '70%': {transform: 'translateY(-225px) translateX(-225px) rotate(360deg)', scale: 30},
                    '75%': {transform: 'translateY(425px) translateX(425px) rotate(180deg)', scale: 25},
                    '80%': {transform: 'translateY(-430px) translateX(-330px) rotate(0deg)', scale: 20},
                    '85%': {transform: 'translateY(260px) translateX(260px) rotate(180deg)', scale: 15},
                    '90%': {transform: 'translateY(-370px) translateX(-170px) rotate(360deg)', scale: 10},
                    '95%': {transform: 'translateY(200px) translateX(200px) rotate(180deg)', scale: 5, opacity: 1},
                    '100%': {transform: 'translateY(0px) translateX(0px) rotate(1800deg)', scale: 0, opacity: 0},
                },
                'mobile_cube_zoom': {
                    '0%': {transform: 'rotate(0)', scale: 0},
                    '100%': {transform: 'rotate(360deg)', scale: 100}
                },
                'link-hover': {
                    '0%': {transform: 'translateY(-10px)'},
                    '100%': {transform: 'translateY(10px)'}
                },
                'key-slide-text': {
                    '0%': {opacity: 0, transform: 'translateY(100px)'},
                    '100%': {opacity: 1, transform: 'translateY(0px)'}
                },
                'key-slide-down-text': {
                    '0%': {opacity: 1, transform: 'translateY(0px)'},
                    '100%': {opacity: 0, transform: 'translateY(200px)'}
                },
                'key-appear': {
                    '0%': {opacity: 1, transform: 'translateY(200px)'},
                    '100%': {opacity: 1, transform: 'translateY(0px)'}
                },
                'key-disappear': {
                    '0%': {opacity: 1, transform: 'translateY(-200px)'},
                    '100%': {opacity: 1, transform: 'translateY(0)'}
                },
                'slide_up': {
                    '0%': {transform: 'translateY(0)'},
                    '100%': {transform: 'translateY(-200px)'}
                },
                'full_circle': {
                    '0%': {transform: 'rotate(0)'},
                    '25%': {transform: 'rotate(90deg)'},
                    '50%': {transform: 'rotate(180deg)'},
                    '75%': {transform: 'rotate(270deg)'},
                    '100%': {transform: 'rotate(360deg)'}
                },
                "move": {
                    '0%, 100%': {transform: 'translate(0, 0)'},
                    '25%': {transform: 'translate(50px, 0)'},
                    '50%': {transform: 'translate(50px, 50px)'},
                    '75%': {transform: 'translate(0, 50px)'},
                },
                'marquee': {
                    '0%': {transform: 'translateX(0)'},
                    '100%': {transform: 'translateX(-50%)'}
                },
                "slide-left": {
                    "0%": {
                        transform: "translateX(300px)",
                    },
                    "100%": {
                        transform: "translateY(0)",
                    },
                },
                right: {
                    '0%, 100%': {transform: 'translateX(-25%)'},
                    '50%': {transform: 'none'}
                },
                "slide-down": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(-50px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                "fade-in": {
                    "0%": {
                        opacity: "0",
                    },
                    "100%": {
                        opacity: "1",
                    },
                },
            },
            colors: {
                light_blue: "#44699F",
                dark_blue: "#0E2146",
                bg: "#D9E6F9"
            }
        },
    },
    plugins: [
        require('tailwindcss-animated')
    ],
}

