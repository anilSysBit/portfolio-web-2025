import fs from 'node:fs/promises';
import express from 'express';
import compression from 'compression';
import sirv from 'sirv';

// Constants
const base = process.env.BASE || '/';

// Cached production assets
const templateHtml = await fs.readFile('./dist/client/index.html', 'utf-8');

const app = express();

// Production middlewares
app.use(compression());
app.use(base, sirv('./dist/client', { extensions: [] }));

// SSR route
app.get('*', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '');
    const { render } = await import('../dist/server/entry-server.js');

    const rendered = await render(url);

    const html = templateHtml
      .replace(`<!--app-head-->`, rendered.head ?? '')
      .replace(`<!--app-html-->`, rendered.html ?? '');

    res.status(200).set({ 'Content-Type': 'text/html' }).send(html);
  } catch (e) {
    console.error(e);
    res.status(500).end(e.stack);
  }
});

// ⚠️ Important: DO NOT listen()
// Export the app instead
export default app;
