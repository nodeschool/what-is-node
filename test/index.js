var test = require('tap').test
var win = require('..')
var path = require('path')

test('getting the path of a simple variant', function (t) {
  t.equal(win.getVariantPath('simple', 'en'), path.join(path.dirname(__dirname), 'simple.en.md'))
  t.end()
})
test('make sure that lang other than `en` is not supported', function (t) {
  t.throws(function () {
    win.getVariantPath('simple', 'fr')
  }, TypeError)
  t.end()
})
test('make sure that lang other than `md` is not supported', function (t) {
  t.throws(function () {
    win.getVariantPath('simple', 'fr', 'txt')
  }, TypeError)
  t.end()
})
