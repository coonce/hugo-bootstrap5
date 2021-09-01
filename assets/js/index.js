import { Carousel} from 'bootstrap';
import Alpine from 'alpinejs';
import * as params from '@params';
import { postJson } from './contactform.js';

console.log(params.api);
console.log('foo');

window.greet = () => {
    return {
        message: "Thank you",
        messageText: "",
        submitForm() {
            this.messageText = this.message;
            //alert(this.message);
        }
    };
};

window.Alpine = Alpine;
Alpine.start();


console.log('done');

