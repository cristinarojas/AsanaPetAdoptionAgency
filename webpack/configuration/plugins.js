/* In this file: we are calling all the plugins that will be manage our project. */

// Dependencies.
import HtmlWebPackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import WebpackNotifierPlugin from 'webpack-notifier';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

// Saving production.
const isProduction = process.env.NODE_ENV === 'production';

// HtmlWebPackPlugin is to load the html code.
const plugins = [
  new HtmlWebPackPlugin({
    title:'Asana pet adoption',
    template: './src/index.html',
    filename: './index.html',
    favicon:  './src/shared/images/pet.ico',
  })
];

// Pushing to the plugins array only if is production.
if (isProduction) {
  plugins.push(
    new ExtractTextPlugin({
      allChunks: true,
      filename: './css/[name].css'
    })
  );
} else { // if not is production.
  plugins.push(
    new BundleAnalyzerPlugin(),
    new WebpackNotifierPlugin({
      title: 'React'
    })
  );
}

export default plugins;
