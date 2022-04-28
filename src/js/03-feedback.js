import throttle from 'lodash.throttle'

const refs = {
  fbForm:document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
  textArea:document.querySelector('.feedback-form textarea')
}

refs.fbForm.addEventListener('submit', onFormSubmit);
refs.fbForm.addEventListener('input', onFormInput);


const INPUT_STORAGE_KEY = "feedback-form-state";
const obj = {};

//send data to obj from storage
Object.assign(obj, JSON.parse(localStorage.getItem(INPUT_STORAGE_KEY)))

refs.input.value = obj?.email ?? '';
refs.textArea.value = obj.message ?? '';

function onFormInput(e) { 
    const text = e.target.value;
    obj[e.target.name] = text;
    localStorage.setItem(INPUT_STORAGE_KEY, JSON.stringify(obj))
}

function onFormSubmit(e) { 

    e.preventDefault();
    console.log(obj);
    localStorage.removeItem(INPUT_STORAGE_KEY);
    e.currentTarget.reset();
}