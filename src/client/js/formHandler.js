import { response } from "express";

function handleSubmit(event) {

    try {      

        event.preventDefault();

        let formText = document.getElementById('url').value;
        
        if (formText.length < 1) {
            throw "url field cannot be empty";
        }
        
        let validText = Client.checkForUrl(formText);
        
        if (!validText) {
            throw `invalid url: ${formText}`;
        }

        console.info('SEND THE REQUEST TO THE API HERE');     

    } catch (error) {

            console.log(error);

            let errors = document.getElementById('validation');
            errors.innerHTML = '';
            let p = document.createElement('p');
            p.classList.add('error');
            p.innerText = error;
            errors.appendChild(p);
    }
}

export { handleSubmit }
