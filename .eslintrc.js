module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true,
  },
  parser: 'vue-eslint-parser',
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 关闭eslint检查文件名是否为驼峰命名
    'vue/multi-word-component-names': 'off',
    'arrow-parens': 0, // 箭头函数用小括号括起来
    'generator-star-spacing': 0, // 生成器函数*的前后空格
    semi: [2, 'always'], // 语句强制分号结尾
    // 'indent': ['error', 2], // 缩进2个空格 prettier中已存在缩进格式规范，此处不使用
    'eol-last': 2, // 强制非空文件末尾至少一个换行符
    'no-useless-escape': 2, // 禁止不必要的转译
    'default-case': 2, // switch语句最后必须有default
    'no-plusplus': 2, // 禁止使用一元操作符 ++ 和 --，改为使用 i += 1
    eqeqeq: 2, // 要求使用=== 或 !==
    'no-eval': 2, // 禁止使用eval
    'no-var': 2, // 禁止使用var
    'no-unused-vars': 2, // 禁止未使用过的变量
    'prefer-template': 2, // 使用模板字符串而非使用字符串连接
    'no-loop-func': 2, // 禁止循环中存在函数定义
    'no-trailing-spaces': 2, // 禁用行尾空白
    'no-multiple-empty-lines': 2, // 禁止多个空行
    'no-new-func': 2, // 禁用Function构造函数
    'no-nested-ternary': 2, // 禁止使用嵌套的三元表达式
    'no-unneeded-ternary': 1, // 使用可以表达更简单结构的三元操作符
    'object-shorthand': 2, // 要求对象字面量简写语法
    'array-callback-return': 2, // 要求数组方法的回调函数中有return语句
    'no-param-reassign': 2, // 禁止对函数参数再赋值
    'dot-notation': 1, // 要求使用点号
    'no-underscore-dangle': 1,
    'import/first': 0,
    'no-multi-assign': 2, // 禁止在单个语句中使用多个分配
    'spaced-comment': ['error', 'always'], // 要求注释 // 或 /* 后保留一致的空格
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ], // 末尾必须要有逗号
    'no-shadow': ['error'], // 禁止变量声明与外层作用域的变量同名
    'space-before-function-paren': [
      'error',
      {
        // 函数定义空格要求
        anonymous: 'always', // 匿名函数需要有空格
        named: 'never', // 命名函数不要空格
        asyncArrow: 'always', // 箭头函数需要空格
      },
    ],
    'max-len': [
      // 单行最大长度200
      2,
      200,
      4,
      {
        ignoreUrls: true,
      },
    ],
    'prefer-const': [
      // 定义首选 const
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: false,
      },
    ],
    'guard-for-in': 'error', //for in循环要用if语句过滤
  },
};
