module.exports = (api) => {
  // cache the result of babel config execution funtion for dev builds for faster builds
  api.cache.using(() => process.env.NODE_ENV === 'development');

  return {
    env: {
      // Some performance optimization plugins for react
      production: {
        only: ['src'],
        plugins: [
          // Replaces React.createElement() with a helper that is more optimized for production.
          '@babel/plugin-transform-react-inline-elements',
          // Hoist elements that can be marked as constant to the highest scope for reuse.
          '@babel/plugin-transform-react-constant-elements',
        ],
      },
    },
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-syntax-dynamic-import',
    ],
    presets: [
      [
        '@babel/preset-env',
        {
          corejs: {
            proposals: true,
            version: 3,
          },
          useBuiltIns: 'usage',
        },
      ],
      [
        '@babel/preset-react',
        {
          development: process.env.NODE_ENV === 'development',
          runtime: 'automatic',
        },
      ],
      '@babel/preset-typescript',
    ],
  };
};
