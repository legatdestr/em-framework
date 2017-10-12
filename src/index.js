'use strict';

require('./assets/stylesheets/styles.scss');

window.calculator = window.calculator || {};

(function(global) {
    var
        getIntById = function(id) {
            return parseInt(document.getElementById(id).value, 10);
        },
        calculate = function() {
            var sum = getIntById('x') + getIntById('y');
            document.getElementById('result').innerHTML = isNaN(sum) ? 0 : sum;
        };

    global.calculator.init = function() {
        document.getElementById('add').addEventListener('click', calculate);
    };
})(window);