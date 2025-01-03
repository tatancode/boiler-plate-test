module.exports = {
  extends: ['next/core-web-vitals', 'prettier', 'plugin:tailwindcss/recommended'],
  plugins: ['tailwindcss'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    'tailwindcss/no-custom-classname': 'off',
  },
  settings: {
    tailwindcss: {
      callees: ['cn', 'cva'],
      config: 'tailwind.config.js',
    },
    next: {
      rootDir: true,
    },
  },
}
