import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import path from 'path';

const moduleToJs = () => {
  return {
    name: "module-to-js",
    transformIndexHtml(html) {
      return html.replace(/module/, "text/javascript");
    }
  };
};

const noAttr = () => {
  return {
    name: "no-attribute",
    transformIndexHtml(html) {
      return html.replace(/ crossorigin/g, "");
    }
  };
};

export default defineConfig({
  plugins: [
    moduleToJs(),
    noAttr(),
    ViteImageOptimizer(),
  ],
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about-us.html'),
        contact: path.resolve(__dirname, 'contact.html'),
        gallery: path.resolve(__dirname, 'gallery.html'),
        services: path.resolve(__dirname, 'services.html'),
        // Add other pages here
      },
    }
  }
});