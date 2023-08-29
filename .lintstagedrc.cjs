module.exports = {
  '*.{js,ts}': [
    'eslint --fix', // 通过eslint重新格式化代码
    'prettier --write' // 通过prettier重新格式化代码---
  ],
  '*.{cjs,json}': ['prettier --write'],
  '*.{vue,html}': ['eslint --fix', 'prettier --write', 'stylelint --fix'],
  '*.{scss,css}': ['stylelint --fix', 'prettier --write'],
  '*.md': ['prettier --write']
}
