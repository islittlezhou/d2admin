module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-debugger': 'off',
    'no-tabs': 'off',
    "indent": 'off',//缩进为 2 个空格
    "linebreak-style": 'off',//强制使用一致的换行符风格
    "quotes": 'off',//使用单引号
    "semi": 'off',//结束添加分号,
    "space-before-function-paren":0,
    "no-trailing-spaces": 0
  },
  parserOptions: {
    // parser: 'babel-eslint'   
     plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-export-default-from'],
  }
}
