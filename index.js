// TEST_COMMITS: 20251104173953 (#2)
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('App2 Changes successfully roled out with GitHub Actions + ArgoCD | End-to-End GitOps CI/CD Pipeline on Kubernetes');
});

app.listen(port, () => {
  console.log(`App2 running on http://localhost:${port}`);
});

