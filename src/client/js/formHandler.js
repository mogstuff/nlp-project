function handleSubmit(event) {
    event.preventDefault();

    let formText = document.getElementById('url').value
    Client.checkForName(formText); 

    let data = { url: encodeURI(formText) };

  showPreloader();

    postUrl('http://localhost:8081/postData', data);
}


const postUrl = async (url = '', data = {}) => {   

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
        console.log('response from api');
        console.log(data);
        updateUI(data);

       return data;     

    } catch (error) {
        displayErrors(error);
        console.error('error posting data to API', error);
    }
};


function displayErrors(error) {
    console.log(error);
}


const updateUI = async (result) => {
    console.log('update ui here');
    console.log(result);

    console.log('result.score_tag: ');
    console.log(result.score_tag);

    let results = document.getElementById('results');    
    results.classList.remove('loader');
    results.innerHTML = '';
    results.scrollIntoView({behavior: "smooth"});

    let heading = document.createElement('h3');
    heading.innerText = 'Analysis Results';
    results.appendChild(heading);

      // score tag
      let score_tag = document.createElement('div');
      score_tag.innerHTML = '<span>Score Tag: </span>' + result.score_tag;
      score_tag.classList.add('score_tag');
      results.appendChild(score_tag);
     
    // Confidence
    let confidence = document.createElement('div');
    confidence.innerHTML = '<span>Confidence: </span>' + result.confidence;
    confidence.classList.add('confidence');
    results.appendChild(confidence);

    // Subjectivity
    let subjectivity = document.createElement('div');
    subjectivity.innerHTML = '<span>Subjectivity: </span>' + result.subjectivity;
    subjectivity.classList.add('subjectivity');
    results.appendChild(subjectivity);


    // agreement
    let agreement = document.createElement('div');
    agreement.innerHTML = '<span>Agreement: </span>' + result.agreement;
    agreement.classList.add('agreement');
    results.appendChild(agreement);
   
    // irony
    let irony = document.createElement('div');
    irony.innerHTML = '<span>Irony: </span>' + result.irony;
    irony.classList.add('irony');
    results.appendChild(irony);  
  

    document.getElementById('results-section').classList.add('roundGrayBorder');

}

function showPreloader(){
  
    let results = document.getElementById('results');    
    results.innerHTML = '';
    results.scrollIntoView({behavior: "smooth"});

    let loader = document.createElement('div');
    loader.classList.add('loader');
    results.appendChild(loader); 

    let heading = document.createElement('div');
    heading.innerHTML = '<p>.... processing data</p>';
    results.appendChild(heading);

}


export { handleSubmit }
