# Frontend and API Performance - Assignment 1

This project is an optimization of [this template](https://www.free-css.com/free-css-templates/page293/bricker). The original template was a static website with no backend, only HTML, CSS, and JavaScript. The goal of this project is to optimize the website's performance by using different techniques and tools.  

## Running and building the project

To run the project, you need to have Node.js installed. If you don't have it installed, you can download it from [here](https://nodejs.org/). After installing Node.js, you can run the following commands to run the project:

```bash
# Install the dependencies
npm install

# Run the project
npm run dev
```

To build the project, you can run the following command:

```bash
npm run build
```

The build will be generated in the `dist` folder.

> *Not all optimizations are applied during dev mode. In order to apply them generate a build and open those files*  

## Optimizations

- [Vite](https://vitejs.dev/) was added to generate an optimized build. Some of the optimizations are handled by Vite by default, and others required manual editing of the code, or the addition of custom plugins.
- All dependencies were added as `devDependencies` to avoid unnecessary files in the production build.
- CSS and JavaScript files were minified and bundled. Also, the plugin [vite-plugin-image-optimizer](https://www.npmjs.com/package/vite-plugin-image-optimizer) was installed in order to minify images. After adding this plugin in the `vite.config.js` file, the images are minified automatically upon building. You can see a report in the console after building the project.
- The project uses [JQuery](https://jquery.com/) as dependency. Originally it was added directly as a downloaded script in the project folder. This was replaced with a cdn link to the minified version of the library. This way, the library is not included in the build, and it is loaded from the cdn when the website is accessed. This is also the case for the plugin [Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/), which is used for the carousel in the index page. Also the call to this plugin was removed from the other files and left only in the index.html file, since it is only used there.
- All images are now lazy loaded. This way, they are loaded only when they are in the viewport.
- Custom plugins were created in the `vite.config.js` file to preload the local minified CSS bundle and to asynchronously load the JS bundle. This is done to avoid render blocking.  
