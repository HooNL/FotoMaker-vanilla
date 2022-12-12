const path = require('path')

const newLocal = path.resolve(__dirname, '/dist')
module.exports = {
  entry: '/index.js',
  output: {
    filename: 'main.js',
    path: newLocal,
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    
  },
}
