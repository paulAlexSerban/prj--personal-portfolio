export const paths = {
  src: {
    meta: {
      metaFiles: "./source/meta/*"
    },
    assets: {
      assetFiles: ["../../assets/dist/**/*"],
      svgFiles: ["dist/assets/svgs"]
    },
    html: {
      htmlDir: "./source",
      htmlFiles:"./source/html/*.html"
    },
    styles: {
      scssDir: `../living-style-guide/source/`,
      scssFiles: [`../living-style-guide/source/**/*.scss`],
      scssPages: [`../living-style-guide/source/**/*.page.scss`, `../living-style-guide/source/**/*.page.devTools.scss`],
      scssLayers: [`../living-style-guide/source/**/*.layer.scss`],
    },
    scripts: {
      javaScriptDir: `../js-component-library/source/`,
      javaScriptFiles: [`../js-component-library/source/**/*.js`],
      javaScriptPages: [`../js-component-library/source/**/*.page.js`],
      javaScriptPages: [`../js-component-library/source/**/*.page.js`],
      javaScriptLayers: [`../js-component-library/source/**/*.layer.js`]
    }
  },
  dist: {
    dir: `./dist`,
  },
};
