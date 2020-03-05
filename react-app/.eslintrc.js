module.exports = {
  // 为我们提供运行环境，一个环境定义了一组预定义的全局变量
  env: {
    browser: true,
    es6: true
  },
  // 一个配置文件可以被基础配置中的已启用的规则继承。
  extends: ["airbnb", "plugin:react/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/jsx-filename-extension": "off",
    "import/no-unresolved": "off",
    "react/prop-types": "off",
    "no-bitwise": "off",
    "no-unused-vars": "off"
  }
};
