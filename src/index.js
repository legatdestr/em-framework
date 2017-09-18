require('./styles.scss');


const hello = () => {
    "use strict";
    document.write('hi man')
}

hello();


var tt = '';

class MyCar {
    manufacturer(car) {
        document.write(`I have a ${car}`)
    }

}

const bmw = new MyCar();

bmw.manufacturer('bmw');