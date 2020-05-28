module.exports = {
  env: {
    browser: true,
    node: true,
  },
  // use node plugin, 可以 lint node program
  extends: ['airbnb', 'prettier', 'plugin:node/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error', // 不符合 prettier 自訂規則 就會 error
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'func-names': 'off', // 允許可以使用 function
    // 'no-process-exit': 'off', // 當使用 process.exit(); 會噴 error, 所以要關閉
    'object-shorthand': 'off', // 在 object 中 可以 不強制使用 shorthand
    // 'class-methods-use-this': 'off',
  },
};
