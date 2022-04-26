const refs = {
  fbForm:document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
  textArea:document.querySelector('.feedback-form textarea')
}


refs.fbForm.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', onFormInput);
refs.textArea.addEventListener('input' , onFormTextAreaInput)

const INPUT_STORAGE_KEY = "feedback-form-state";
const obj = {}



function onFormInput(e) { 
    const value = e.target.value;
    obj.email = value;
    localStorage.setItem(INPUT_STORAGE_KEY, JSON.stringify(obj))
}

function onFormTextAreaInput(e) { 
    const text = e.target.value;
    obj.message = text;
    localStorage.setItem(INPUT_STORAGE_KEY, JSON.stringify(obj))
}

function getStorageInfo() { 
    const storageInfo = localStorage.getItem(INPUT_STORAGE_KEY);
    return JSON.parse(storageInfo);
}

const storageValue = getStorageInfo();
    

function InfoFromStorege() {

    if (storageValue){
        refs.input.value = storageValue.email;
        refs.textArea.value = storageValue.message;
    }
}

InfoFromStorege();

function consoleObj() { 
    if (Object.keys(obj).length == 0) {
        console.log(storageValue);
    }
    else { 
        console.log(obj)
    }
}

function onFormSubmit(e) { 

    e.preventDefault();
    consoleObj();
    localStorage.removeItem(INPUT_STORAGE_KEY);
    e.currentTarget.reset();
}