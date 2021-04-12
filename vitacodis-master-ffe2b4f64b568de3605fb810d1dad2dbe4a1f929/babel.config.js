module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./src'],
        extensions: ['.js', '.ios.js', '.android.js'],
        alias: {
          _assets: './src/assets',
          _components: './src/components',
          _mockApi: './src/mockApi',
          _navigations: './src/navigations',
          _constants: './src/constants',
          _redux: './src/redux',
          _actions: './src/redux/actions',
          _reducers: './src/redux/reducers',
          _screens: './src/screens',
          _services: './src/services',
          _styles: './src/styles',
          _utils: './src/utils',
        },
      },
    ],
  ],
};
