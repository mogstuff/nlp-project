function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value
    Client.checkForName(formText);

    console.log("::: Form Submitted :::");    

    let data = { url : encodeURI(formText) };

    console.log(data); 

  postUrl('http://localhost:8081/postData', data).then(updateUI()).catch((error) => {
    console.error(error);
});

}


const postUrl = async(url = '', data = {}) => {

    console.info('posting data to Api');
    console.log(data);

    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(data)

    });

    try {
        const data = await response.json();
        console.info('response from posting data to Api: ');
        console.log(data);
        return data;

    } catch (error) {
        displayErrors(error);
        console.error('error posting data to API', error);
    }

};


function displayErrors(error){
    console.log(error);
}


const updateUI = async () => {
    console.log('update ui here');
}


export { handleSubmit }
