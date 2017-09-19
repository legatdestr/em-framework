require('./assets/stylesheets/styles.scss');

import web_logo from 'images/web_logo';

// demonstration of new feature - class declaration
class Demo {
    renderIntro() {
        const introList = [
            'Webpack + Webpack Dev Server',
            'ES2015/ES6 support with Babel loader (class, import)',
            'SCSS to CSS compilation',
            'CSS and JS minification',
            'CSS autoprefixer',
            'Images loader and minification',
            'Shortcut to  paths (aliases)',
            'UglifyJS',
            'Image Webpack Loader',
            'Hot-module-reloading support for styles',

        ];
        const html = '<ul><li>' + introList.join('</li><li>') + '</li></ul>';
        return html;
    }
}


let img = document.createElement('img');
img.src = `${web_logo}`;
document.querySelector('.logo').appendChild(img);

const demo = new Demo();

document.querySelector('.intro').innerHTML = (new Demo()).renderIntro();
