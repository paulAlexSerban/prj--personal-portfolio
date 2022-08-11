export const paths = {
  src: {
    meta: {
      metaFiles: "./source/meta/*"
    },
    assets: {
      assetFiles: ["../../assets/dist/**/*"],
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
    }
  },
  dist: {
    dir: `./dist`,
  },
};
