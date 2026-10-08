/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Tokyo Night palette — matches the theme used on the GitHub profile cards
        tk: {
          bg:      '#1a1b26', // base background
          bgDark:  '#16161e', // deeper background
          panel:   '#24283b', // card / panel surface
          panel2:  '#1f2335', // secondary surface
          border:  '#2f334d', // subtle border
          text:    '#c0caf5', // primary text
          muted:   '#a9b1d6', // secondary text
          dim:     '#565f89', // dimmed / labels
          blue:    '#7aa2f7', // primary accent
          cyan:    '#7dcfff', // secondary accent
          purple:  '#bb9af7', // tertiary accent
          green:   '#9ece6a', // success
          yellow:  '#e0af68', // warning
          orange:  '#ff9e64', // highlight
          red:     '#f7768e', // danger
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', '"PingFang SC"', '"Microsoft YaHei"', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'blink': 'blink 1.05s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}