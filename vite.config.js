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

const preloadCss = () => {
  return {
    name: "preload-css",
    transformIndexHtml(html) {
      return html.replace(/<\/title>/, "</title>\n<link rel='preload' href='./template-scripts.css' as='style'>");
    }
  };
}

const asyncJs = () => {
  return {
    name: "async-js",
    transformIndexHtml(html) {
      return html.replace(/<script/, "<script async");
    }
  };
}

export default defineConfig({
  plugins: [
    moduleToJs(),
    noAttr(),
    preloadCss(),
    asyncJs(),
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
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      }
    }
  }
});