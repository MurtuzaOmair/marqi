/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      images: {
        domains: ["http://localhost:3000"], // Add your domain here
      },
      colors: {
        "body-color": "#e2e8f0", // Define your custom body color
      },
      "savanna-bg": "url('/images/savanna-background.jpg')", // Update with actual image paths
      "mountain-bg": "url('/images/mountain-background.jpg')",
      "sea-bg": "url('/images/sea-background.jpg')",
      "lake-bg": "url('/images/lake-background.jpg')",
      "forest-bg": "url('/images/forest-background.jpg')",
      "desert-bg": "url('/images/desert-background.jpg')",
      gridTemplateRows: {
        // Simple 36 row grid
        15: "repeat(15, minmax(0, 1fr))",
      },
      gridTemplateColumns: {
        // Simple 36 column grid
        15: "repeat(15, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        // Simple 36 row grid
        30: "repeat(30, minmax(0, 1fr))",
      },
      gridTemplateColumns: {
        // Simple 36 column grid
        30: "repeat(30, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        // Simple 36 row grid
        36: "repeat(36, minmax(0, 1fr))",
      },
      gridTemplateColumns: {
        // Simple 36 column grid
        36: "repeat(36, minmax(0, 1fr))",
      },
      gridColumnStart: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
        18: "18",
        19: "19",
        20: "20",
        21: "21",
        22: "22",
        23: "23",
        24: "24",
        25: "25",
        26: "26",
        27: "27",
        28: "28",
        29: "29",
        30: "30",
        31: "31",
        32: "32",
        33: "33",
        34: "34",
        35: "35",
        36: "36",
      },
      gridColumn: {
        "span-7": "span 7 / span 7",
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-10": "span 10 / span 10",
        "span-11": "span 11 / span 11",
        "span-12": "span 12 / span 12",
        "span-13": "span 13 / span 13",
        "span-14": "span 14 / span 14",
        "span-15": "span 15 / span 15",
        "span-16": "span 16 / span 16",
        "span-17": "span 17 / span 17",
        "span-18": "span 18 / span 18",
        "span-19": "span 19 / span 19",
        "span-20": "span 20 / span 20",
        "span-21": "span 21 / span 21",
        "span-22": "span 22 / span 22",
        "span-23": "span 23 / span 23",
        "span-24": "span 24 / span 24",
        "span-25": "span 25 / span 25",
        "span-26": "span 26 / span 26",
        "span-27": "span 27 / span 27",
        "span-28": "span 28 / span 28",
        "span-29": "span 29 / span 29",
        "span-30": "span 30 / span 30",
        "span-31": "span 31 / span 31",
        "span-32": "span 32 / span 32",
        "span-33": "span 33 / span 33",
        "span-34": "span 34 / span 34",
        "span-35": "span 35 / span 35",
        "span-36": "span 36 / span 36",
        "span-37": "span 37 / span 37",
      },
      gridRowStart: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
        18: "18",
        19: "19",
        20: "20",
        21: "21",
        22: "22",
        23: "23",
        24: "24",
        25: "25",
        26: "26",
        27: "27",
        28: "28",
        29: "29",
        30: "30",
        31: "31",
        32: "32",
        33: "33",
        34: "34",
        35: "35",
        36: "36",
      },
      gridRow: {
        "span-7": "span 7 / span 7",
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-10": "span 10 / span 10",
        "span-11": "span 11 / span 11",
        "span-12": "span 12 / span 12",
        "span-13": "span 13 / span 13",
        "span-14": "span 14 / span 14",
        "span-15": "span 15 / span 15",
        "span-16": "span 16 / span 16",
        "span-17": "span 17 / span 17",
        "span-18": "span 18 / span 18",
        "span-19": "span 19 / span 19",
        "span-20": "span 20 / span 20",
        "span-21": "span 21 / span 21",
        "span-22": "span 22 / span 22",
        "span-23": "span 23 / span 23",
        "span-24": "span 24 / span 24",
        "span-25": "span 25 / span 25",
        "span-26": "span 26 / span 26",
        "span-27": "span 27 / span 27",
        "span-28": "span 28 / span 28",
        "span-29": "span 29 / span 29",
        "span-30": "span 30 / span 30",
        "span-31": "span 31 / span 31",
        "span-32": "span 32 / span 32",
        "span-33": "span 33 / span 33",
        "span-34": "span 34 / span 34",
        "span-35": "span 35 / span 35",
        "span-36": "span 36 / span 36",
        "span-37": "span 37 / span 37",
      },
      transitionProperty: {
        "color-opacity": "color, opacity",
      },
      transitionDuration: {
        25: "0.25s",
      },
      transitionTimingFunction: {
        ease: "ease",
      },
      screens: {
        base: "0px",
        sm: "475px",
        sm2: "640px",
        md: "768px",
        lg: "990px",
        xl: "1200px",
        "2xl": "1536px",
        "3xl": "2000px",
      },
    },
  },
  plugins: [],
};
