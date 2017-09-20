require("./assets/stylesheets/styles.scss");

// Importing
import webLogo from "images/web_logo";


/**
 * Demonstration of new feature - class declaration
 */
class Demo {
    /**
     * Renders greetings text
     * @returns {string} html code
     */
    static renderIntro() {
        let html = "<ul><li>";
        html +=
            [
                "Webpack + Webpack Dev Server",
                "ES2015/ES6 support with Babel loader (class, import)",
                "SCSS to CSS compilation",
                "CSS and JS minification",
                "CSS autoprefixer",
                "Images loader and minification",
                "Shortcut to  paths (aliases)",
                "UglifyJS",
                "Image Webpack Loader",
                "Hot-module-reloading support for styles",
                "Automatic code analyzing with ESLint"
            ].join("</li><li>");

        html += "</li></ul>";

        return html;
    }
}


const img = document.createElement("img");
img.src = `${webLogo}`;
document.querySelector(".logo").appendChild(img);
document.querySelector(".intro").innerHTML = Demo.renderIntro();

