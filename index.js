'use strict'
var path = require('path')

exports.getVariantPath = function (type, language, format) {
  if (!format) {
    format = 'md'
  }
  if (format !== 'md') {
    throw new TypeError('No implementation for other formats yet')
  }
  if (language !== 'en') {
    throw new TypeError('Languages are not implemented yet')
  }
  return path.join(__dirname, type + '.' + language + '.md')
}
