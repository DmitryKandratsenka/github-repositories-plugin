require('dotenv').config();
/* eslint-disable import/no-extraneous-dependencies */
require('@babel/register')({
  extensions: ['.js', '.ts'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          config: './config',
          test: './test',
        },
        root: ['./test'],
      },
    ],
  ],
});
