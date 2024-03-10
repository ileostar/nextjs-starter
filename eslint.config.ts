import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  formatters: true,
  react: true,
  markdown: true,
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
  stylistic: true,
})
