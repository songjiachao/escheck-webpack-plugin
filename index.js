const path = require('path')
const fs = require('fs')
const acorn = require('acorn')

const defaultOptions = {
  ecmaVersion: 'latest'
}

class ESCheckPlugin {
  constructor(options) {
    this.options = { ...defaultOptions, ...options }
  }
  apply(compiler) {
    compiler.hooks.emit.tapAsync('ESCheckPlugin', (compilation,callback) => {
      if(process.env.NODE_ENV==='production'){
        for (const [name, asset] of Object.entries(compilation.assets)) {
          const extname = path.extname(name)
          const basename = path.basename(name)
          const code = asset.source()
          if (extname === '.js') {
            try {
              acorn.parse(code, {
                ecmaVersion: this.options.ecmaVersion,
              })
            } catch (err) {
              // 将有问题的文件写入到output文件夹中
              const outputPath = compilation.outputOptions.path
              fs.writeFileSync(path.join(outputPath, basename), code, { encoding: 'utf-8' })
              const { line, column } = err.loc
              const arr = code.split(/\r?\n/)
              const errLine = arr[line - 1]
              throw new Error(err.message +'\n' + 'filename: ' + name + '\n' + JSON.stringify(err.loc) + '\n' + errLine.slice(column, column + 20))
            }
          }
        }
      }
      callback()
    })
  }
}

module.exports = ESCheckPlugin
