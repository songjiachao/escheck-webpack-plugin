# escheck-webpack-plugin

<p align="center">
<a href="https://github.com/songjiachao/escheck-webpack-plugin"><img height="200" src="https://raw.githubusercontent.com/songjiachao/images/main/escheck-webpack-plugin/logo.png" alt="escheck-webpack-plugin"></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/escheck-webpack-plugin" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/npm/v/escheck-webpack-plugin" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/escheck-webpack-plugin" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/npm/dt/escheck-webpack-plugin" alt="NPM Downloads" /></a>
  <a href="https://github.com/songjiachao/escheck-webpack-plugin/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/github/license/songjiachao/escheck-webpack-plugin" alt="License" /></a>
</p>

## 📖 Introduction

Check all the webpack generated files to find whether the code match the selected ES version. If doesn't match the plugin will thorw an error and stop webpack emit files.

![Demo](https://raw.githubusercontent.com/songjiachao/images/main/escheck-webpack-plugin/demo.gif)

## 📦 Installation
```
yarn add -D escheck-webpack-plugin
```

## 🛠 Usage

```js
// webpack.config.js
module.exports = {
  plugins: [
    new new ESCheck({
      // type ecmaVersion = 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 'latest'
      ecmaVersion: 5 // 可以不传，默认值为5
    })
  ]
}
```

```js
// vue.config.js
const ESCheck = require('escheck-webpack-plugin')
module.exports = defineConfig({
  configureWebpack: (config) => {
    config.plugins.push(new ESCheck(options))
  },
})
```




