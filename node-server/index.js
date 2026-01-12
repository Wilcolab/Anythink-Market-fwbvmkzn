const express = require('express');
const app = express();
const PORT = process.env.PORT || 8001;

app.use(express.json());
// No endpoints

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});