import '@babel/core';
import '@babel/polyfill';

import app from './config/app';

const PORT = 4200;

app.listen(PORT, () => {
  console.log('Comprehend server listening on ', { PORT });
});
