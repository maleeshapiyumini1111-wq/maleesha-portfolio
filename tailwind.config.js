/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { ink: "#0a0a0a", slate: "#0f172a", electric: "#3b82f6", neon: "#a855f7" },
      fontFamily: { mono: ["var(--font-mono)", "ui-monospace", "monospace"], sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
      boxShadow: {
        glowBlue: "0 0 24px rgba(59,130,246,.55)",
        glowPurple: "0 0 28px rgba(168,85,247,.45)",
      },
    },
  },
  plugins: [],
};
