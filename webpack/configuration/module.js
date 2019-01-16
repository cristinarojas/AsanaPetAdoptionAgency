/* In this file we are creating all our rules that will manage our project */
import ExtractTextPlugin from 'extract-text-webpack-plugin';

// Saving production.
const isProduction = process.env.NODE_ENV === 'production';

// Rules to load js or jsx with babel-loader.
const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: 'babel-loader'
  },
  {
    test: /\.(png|jpg|gif|jpeg)$/,
    use: [
      {
        loader: 'file-loader',
        options: {}
      }
    ]
  }
];

// If is production then use the extract plugin to obtain the Css.
if (isProduction) {
  rules.push({
    test: /\.scss/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        'css-loader?modules=true&localIdentName=[name]_[local]_[hash:base64]',
        'sass-loader'
      ]
    })
  });
} else { // If is other mode then use sass-loader - stylus-loader - less-loader.
  rules.push({
    test: /\.scss$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: '[name]_[local]_[hash:base64]',
          sourceMap: true
        }
      },
      {
        loader: 'sass-loader'
      }
    ]
  });
}

export default {
  rules
};
