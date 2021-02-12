import postFetch from './service/postFetch';
import {showModalElement, closModalElement} from './modal';


const forms = (formsSelector) =>{
    const forms = document.querySelectorAll(formsSelector);
    forms.forEach(item => sendFormsData(item));
    
    const serviseMessage = {
        loading: ['Запрос обрабатывается', '../img/spinner.svg'],
        load: 'Данные успешно отправлены. Мы вам перезвоник в течение 30 минут',
        error: 'При отправке данных произошла ошибка. Проверьте правильность заполения формы и повторите отправку'
    }


    function sendFormsData(form){
        form.addEventListener('submit', (e) =>{
            e.preventDefault();
            showMessageModal(null, form, serviseMessage.loading)
    
            const formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            
            postFetch('http://localhost:3000/requests', json)
            .then(data =>{
                console.log(data);
                showMessageModal(data, form, serviseMessage.load)
            })
            .catch(() =>{
                showErrorModalMessage(form, serviseMessage.error)
            });
        })
    }
    
    
    
    function showErrorModalMessage(form, message){
        const modalDialog = document.querySelector('.modal .modal__dialog')
        const modalMessage = document.querySelector('.modal__content');
        const messageModal = document.createElement('div');
        messageModal.classList.add('modal__content');
        showModalElement('.modal');
        modalMessage.style.display = "none";
        messageModal.innerHTML = `<div class="modal__title">${message}</div>`;
        modalDialog.append(messageModal);
        const timerReq = setTimeout(()=>{messageModal.remove(); form.reset(); modalMessage.style.display = ""; closModalElement('.modal');clearTimeout(timerReq)}, 4000)
    
    
    }
    
    
    function showMessageModal(data, form, message){
        const modalDialog = document.querySelector('.modal .modal__dialog')
        const modalMessage = document.querySelector('.modal__content');
        const messageModal = document.createElement('div');
        messageModal.classList.add('modal__content');
        showModalElement('.modal');
        modalMessage.style.display = "none";
        
        if (data===null){
            messageModal.innerHTML = `<div class="modal__title">${message[0]}</div><img src = ${message[1]} width="38px" height="38px">`;
            return
        }
        messageModal.innerHTML = `<div class="modal__title">${message}</div>`;
        modalDialog.append(messageModal);
        const timerReq = setTimeout(()=>{messageModal.remove(); form.reset(); modalMessage.style.display = ""; closModalElement('.modal');clearTimeout(timerReq)}, 4000)
        
    }


}

export default forms;






