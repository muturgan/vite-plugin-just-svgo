# vite-plugin-just-svgo
Simple [vite](https://vitejs.dev) plugin for svg files optimization. Compatible with any frontend framework.  
Just optimize all svg files in an outDir folder via [svgo](https://github.com/svg/svgo). Nothing more.

```js
// vite.config.js
import { defineConfig } from 'vite';
import justSvgo from 'vite-plugin-just-svgo';

export default defineConfig({
	plugins: [justSvgo()],
});
```
