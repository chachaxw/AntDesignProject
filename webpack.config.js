// Learn more on how to config.
// - https://github.com/ant-tool/atool-build#配置扩展

module.exports = function(webpackConfig) {
  webpackConfig.babel.presets.push('react', 'es2015', 'stage-0');
  webpackConfig.babel.plugins.push('transform-runtime','transform-decorators-legacy');
  webpackConfig.babel.plugins.push(['import', {
    libraryName: 'antd',
    style: 'css',
  }]);

  return webpackConfig;
};
