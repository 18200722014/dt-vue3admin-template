module.exports = {
  // 扩展
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier-scss',
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue/scss'
  ],
  // 插件
  plugins: ['stylelint-scss', 'stylelint-order'],
  // 不同格式的文件指定自定义语法
  overrides: [
    {
      files: ['**/*.(scss|css|vue|html)'],
      customSyntax: 'postcss-scss'
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html'
    }
  ],
  /** 不需要样式校验的文件 */
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.json',
    '**/*.md',
    '**/*.yaml',
    'dist/**',
    'node_modules/**'
  ],
  // 规则
  rules: {
    'no-empty-source': null, // 关闭静止style内容空
    'block-no-empty': null, // 关闭块不能为空规则
    'custom-property-empty-line-before': null, // 自定义属性之前的空行
    'no-descending-specificity': null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
    // 选择器命名规范
    'selector-class-pattern': [
      '^([a-z][a-z0-9]*)((-|__)[a-z0-9]+)*$',
      {
        message: 'Expected class selector to be kebab-case'
      }
    ],
    'selector-pseudo-element-no-unknown': [
      // 禁止未知的伪元素选择器
      true,
      {
        ignorePseudoElements: ['v-deep'] // v-deep 视为可用的伪元素选择器
      }
    ],
    'selector-pseudo-class-no-unknown': [
      // 禁止使用未知的选择器伪类
      true,
      {
        ignorePseudoClasses: ['deep'] // deep 视为可用的选择器伪类
      }
    ],
    // 指定css样式书写的顺序
    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'justify-content',
      'align-items',
      'float',
      'clear',
      'overflow',
      'overflow-x',
      'overflow-y',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'font-size',
      'font-family',
      'text-align',
      'text-justify',
      'text-indent',
      'text-overflow',
      'text-decoration',
      'white-space',
      'color',
      'background',
      'background-position',
      'background-repeat',
      'background-size',
      'background-color',
      'background-clip',
      'border',
      'border-style',
      'border-width',
      'border-color',
      'border-top-style',
      'border-top-width',
      'border-top-color',
      'border-right-style',
      'border-right-width',
      'border-right-color',
      'border-bottom-style',
      'border-bottom-width',
      'border-bottom-color',
      'border-left-style',
      'border-left-width',
      'border-left-color',
      'border-radius',
      'opacity',
      'filter',
      'list-style',
      'outline',
      'visibility',
      'box-shadow',
      'text-shadow',
      'resize',
      'transition'
    ]
  }
}
