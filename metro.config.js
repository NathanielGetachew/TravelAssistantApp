const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

module.exports = {
  ...config,
  resolver: {
    ...config.resolver,
    sourceExts: ['ts', 'tsx', 'js', 'jsx'],
    blockList: [/\.js\.flow$/],
  },
};