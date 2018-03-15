var path = require('path')
var config = require('../config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}


//旧版 cssloaders配置

//exports.cssLoaders = function (options) {
//  options = options || {}
//  // generate loader string to be used with extract text plugin
//  function generateLoaders (loaders) {
//    var sourceLoader = loaders.map(function (loader) {
//      var extraParamChar
//      if (/\?/.test(loader)) {
//        loader = loader.replace(/\?/, '-loader?')
//        extraParamChar = '&'
//      } else {
//        loader = loader + '-loader'
//        extraParamChar = '?'
//      }
//      return loader + (options.sourceMap ? extraParamChar + 'sourceMap' : '')
//    }).join('!')
//
//    // Extract CSS when that option is specified
//    // (which is the case during production build)
//    if (options.extract) {
//      return ExtractTextPlugin.extract({
//        use: sourceLoader,
//        fallback: 'vue-style-loader'
//      })
//    } else {
//      return ['vue-style-loader', sourceLoader].join('!')
//    }
//  }
//
//  // http://vuejs.github.io/vue-loader/en/configurations/extract-css.html
//  return {
//    css: generateLoaders(['css']),
//    postcss: generateLoaders(['css']),
//    less: generateLoaders(['css', 'less']),
//    sass: generateLoaders(['css', 'sass?indentedSyntax']),
//    scss: generateLoaders(['css', 'sass']),
//    stylus: generateLoaders(['css', 'stylus']),
//    styl: generateLoaders(['css', 'stylus'])
//  }
//}


//测试新版配置
// 生成css、sass、scss等各种用来编写样式的语言所对应的loader配置
exports.cssLoaders = function (options) {
    options = options || {}
    // css-loader配置
    var cssLoader = {
        loader: 'css-loader',
        options: {
            // 是否最小化
            minimize: process.env.NODE_ENV === 'production',
            // 是否使用source-map
            sourceMap: options.sourceMap
        }
    }

    // generate loader string to be used with extract text plugin
    // 生成各种loader配置，并且配置了extract-text-pulgin
    function generateLoaders (loader, loaderOptions) {
        // 默认是css-loader
        var loaders = [cssLoader]
        // 如果非css，则增加一个处理预编译语言的loader并设好相关配置属性
        // 例如generateLoaders('less')，这里就会push一个less-loader
        // less-loader先将less编译成css，然后再由css-loader去处理css
        // 其他sass、scss等语言也是一样的过程
        if (loader) {
            loaders.push({
                loader: loader + '-loader',
                options: Object.assign({}, loaderOptions, {
                    sourceMap: options.sourceMap
                })
            })
        }

        // Extract CSS when that option is specified
        // (which is the case during production build)
        if (options.extract) {
            // 配置extract-text-plugin提取样式
            return ExtractTextPlugin.extract({
                use: loaders,
                fallback: 'vue-style-loader'
            })
        } else {
            // 无需提取样式则简单使用vue-style-loader配合各种样式loader去处理<style>里面的样式
            return ['vue-style-loader'].concat(loaders)
        }
    }

    // https://vue-loader.vuejs.org/en/configurations/extract-css.html
    // 得到各种不同处理样式的语言所对应的loader
    return {
        css: generateLoaders(),
        postcss: generateLoaders(),
        less: generateLoaders('less'),
        sass: generateLoaders('sass', { indentedSyntax: true }),
        scss: generateLoaders('sass'),
        stylus: generateLoaders('stylus'),
        styl: generateLoaders('stylus')
    }
}




// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  var output = []
  var loaders = exports.cssLoaders(options)
  for (var extension in loaders) {
    var loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      loader: loader
    })
  }
  return output
}
