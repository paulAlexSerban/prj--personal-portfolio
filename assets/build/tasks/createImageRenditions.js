import gm from "gulp-gm";
import { src, dest } from "gulp";
import plumber from "gulp-plumber";
import { paths } from "../config/paths";
import size from "gulp-size";
import debug from "gulp-debug";
import rename from "gulp-rename";

const renditions = [
    {
        width: 320,
    },
    {
        width: 480,
    },
    {
        width: 960,
    },
    {
        width: 1440,
    },
    {
        width: 1920,
    },
];

export const createImageRenditions = () => {
    return new Promise((resolve, reject) => {
        return renditions.forEach((rendition) => {
            src(paths.src.assets.images)
                .pipe(
                    plumber()
                )
                .pipe(
                    gm(function (gmfile) {
                        gmfile.resize(rendition.width);
                        gmfile.quality(85)
                        gmfile.noProfile()
                        gmfile.setFormat("webp");
                        return gmfile;
                    })
                )
                .pipe(
                    rename((path) => {
                        path.basename = `${path.basename}-${rendition.width}w`;
                    })
                )
                .pipe(
                    size({
                        title: "createImageRenditions : ",
                        showFiles: true,
                        showTotal: true,
                    })
                )
                .pipe(dest(`${paths.dist.dir}/images`))
                .on("error", reject)
                .on("end", resolve);
        });
    });
};
