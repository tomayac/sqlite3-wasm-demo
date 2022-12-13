const express = require('express');
const app = express();
const port = 3000;

app.use(
  express.static('public', {
    setHeaders: function (res, path, stat) {
      res.set('Cross-Origin-Embedder-Policy', 'require-corp');
      res.set('Cross-Origin-Opener-Policy', 'same-origin');
    },
  })
);

app.listen(port, () => {
  console.log(`SQLite Wasm demo app listening on port ${port}`);
});
