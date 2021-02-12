import {slider} from './modules/slider';
import {startActionTimer} from './modules/startActionTimer';
import {showTabs} from './modules/showTabs';
import {modal, showModalElement} from './modules/modal';
import {calculate} from './modules/caclulate';
import {getFetch} from './modules/service/fetFetch';
import {CreateMenuItem} from './modules/CreateMenuClass';
import forms from './modules/form';




document.addEventListener('DOMContentLoaded', ()=>{
    showTabs('.tabheader__items', '.tabheader__item');
    startActionTimer('2021-04-12', 'days', 'hours', 'minutes', 'seconds');
    const timerModal = setTimeout(() => showModalElement('.modal', timerModal), 5000);
    modal('.modal','.modal__close','.js-modal',timerModal);
    calculate();
    getFetch('http://localhost:3000/menu')
    .then((data) => { 
        data.forEach(({img, altimg, title, descr, price}) => {new CreateMenuItem(img, altimg, title, descr, price,'.menu__field .container' ).render()})
                    
    });
    forms('form');
    slider({controlSelector:'.offer__slider-counter' , slElemsSelector: '.offer__slide', totalValueSelector: '#total', curentValueSelector: '#current', slWrapperSelector: '.offer__slider'});


    // const tabs = document.querySelector('.tabheader__items');
    // const tabElements = tabs.querySelectorAll('.tabheader__item');
    // const tabContents = document.querySelectorAll('.tabcontent');

    // const showTabContents = (index = 0) => {
    //     tabContents.forEach(item =>{
    //         item.classList.remove('show')
    //     })
    //     tabContents[index].classList.add('show');
    //     tabElements.forEach(item =>{
    //         item.classList.remove('tabheader__item_active')
    //     })
    //     tabElements[index].classList.add('tabheader__item_active');

    // };

    // showTabContents();

    // tabs.addEventListener('click', (event) =>{
    //     const target = event.target;
    //     if (!target.matches('.tabheader__item')) return;
    //     tabElements.forEach((item, index)=>{
    //         if(target != item) return;
    //         showTabContents(index);
    //     })
    // })

    // Timer
    // let dedline = '2021-04-12';

    // function getActionTime(endtime){
    //     const totalSeconds = Math.floor((new Date(endtime)-new Date())/1000);
    //     const days = convertTime(Math.floor(totalSeconds/(3600*24)));
    //     const hours = convertTime(Math.floor((totalSeconds/3600)%24));
    //     const minutes = convertTime(Math.floor((totalSeconds/60)%60));
    //     const seconds = convertTime(Math.floor(totalSeconds%60));

    //     return {totalSeconds, days, hours, minutes, seconds};
    // }

    // function convertTime(time){
    //     return time>=10 ? `${time}` : `0${time}`;
    // }

    // function getArrayElementsByID(...arr){
    //    return arr.map(item =>{
    //         return document.getElementById(item)
    //     })
    // }

    // function setActionDate(){
    //     const [day, hour, minute, second] = getArrayElementsByID('days', 'hours', 'minutes', 'seconds');
    //     const {totalSeconds, days, hours, minutes, seconds} = getActionTime('2021-04-12');
    //     if (totalSeconds==0)return null;
    //     day.innerHTML=`${days}`;
    //     hour.innerHTML=`${hours}`;
    //     minute.innerHTML=`${minutes}`;
    //     second.innerHTML=`${seconds}`;
    // }

    // function startActionTimer () {
    //     setActionDate();
    //     let intervalID = setInterval(setActionDate, 1000);
    //     if(setActionDate()===null) {
    //         clearInterval(intervalID)
    //     }
    // }
    



 
    // //Modal

    // const modalOpen = document.querySelectorAll('.js-modal');
    // const modalWrapper = document.querySelector('.modal');
    // const modalClose = document.querySelector('.modal__close');
    

    // function showModalElement(){
    //     if(modalWrapper.classList.contains('show')) return;
    //     modalWrapper.classList.toggle('show');
    //     document.body.style.overflow='hidden';
    //     clearTimeout(timerModal);
    // }

    // function closModalElement(){
    //     if (!modalWrapper.classList.contains('show')) return;
    //     modalWrapper.classList.toggle('show');
    //     document.body.style.overflow='';
    // }
     
    // function showModalElementScroll(){
    //     if(document.documentElement.clientHeight + pageYOffset == document.documentElement.scrollHeight){
    //         showModalElement();
    //         window.removeEventListener('scroll', showModalElementScroll);
    //     }
    // }

    
    // window.addEventListener('keydown', (event)=>{
    //     if (event.key !== 'Escape') return;
    //     closModalElement();
    // })
    
    // window.addEventListener('scroll', showModalElementScroll);
        
    // modalWrapper.addEventListener('click', (event)=>{
    //     const target = event.target;
    //     if (target !== modalClose && target !== modalWrapper) return;
    //     closModalElement();
    // })

    // modalOpen.forEach(item =>{
    //     item.addEventListener('click', showModalElement)
    // })

    // const timerModal = setTimeout(showModalElement, 5000);

    //Class для конструирования меню

    // async function getFetch(url){
    //     const response = await fetch(url);
    //     if (!response.ok){
    //         throw new Error(`При выполнении Вашего запроса произошла ошибка. Статутус ошибки: ${response.status}, URL ошибки: ${url}`);
    //     }
    //     return await response.json();
    // }
    // class CreateMenuItem{
    //     constructor(src, alt, title, description, prise, parentNode, transferCource = 27,  ...classes){
    //         this.src = src;
    //         this.alt = alt;
    //         this.title = title;
    //         this.description = description;
    //         this.prise = prise*transferCource;
    //         this.classes = (classes.length===0) ? ["menu__item"] : classes;
    //         this.parentNode = document.querySelector(parentNode);
    //     }
    
    //     render(){
    //         const {src, alt , title, description, prise, parentNode, classes} = this;
    //         const div = document.createElement('div');
    //         classes.forEach(item => div.classList.add(item));
            
    //         div.innerHTML = `
    //         <img src=${src} alt=${alt} />
    //         <h3 class="menu__item-subtitle">${title}</h3>
    //         <div class="menu__item-descr">${description}</div>
    //         <div class="menu__item-divider"></div>
    //         <div class="menu__item-price">
    //           <div class="menu__item-cost">Цена:</div>
    //           <div class="menu__item-total"><span>${prise}</span> грн/день</div>
    //         </div>`
    //         parentNode.prepend(div);
    //     }
    
    // }
    
   

    //Form requare
    // const modalDialog = document.querySelector('.modal .modal__dialog')

    // const forms = document.querySelectorAll('form');
    // forms.forEach(item => sendFormsData(item));
    
    // const serviseMessage = {
    //     loading: ['Запрос обрабатывается', 'img/spinner.svg'],
    //     load: 'Данные успешно отправлены. Мы вам перезвоник в течение 30 минут',
    //     error: 'При отправке данных произошла ошибка. Проверьте правильность заполения формы и повторите отправку'
    // }

    // async function postFetch(url, data){
    //     const response = await fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/json',
    //         },
    //         body: data,
    //     });
    //     if (!response.ok){
    //         throw new Error(`При выполнении Вашего запроса произошла ошибка. Статутус ошибки: ${response.status}, URL ошибки: ${url}`)
    //     }
    //     return await response.json();
    // }

    // function sendFormsData(form){
    //     form.addEventListener('submit', (e) =>{
    //         e.preventDefault();
    //         showMessageModal(null, form, serviseMessage.loading)

    //         const formData = new FormData(form);
    //         const json = JSON.stringify(Object.fromEntries(formData.entries()));
           
    //         postFetch('http://localhost:3000/requests', json)
    //         .then(data =>{
    //             console.log(data);
    //             showMessageModal(data, form, serviseMessage.load)
    //         })
    //         .catch(() =>{
    //             showErrorModalMessage(form, serviseMessage.error)
    //         });
    //     })
    // }

    
    
    // function showErrorModalMessage(form, message){
    //     const modalMessage = document.querySelector('.modal__content');
    //     const messageModal = document.createElement('div');
    //     messageModal.classList.add('modal__content');
    //     showModalElement('.modal');
    //     modalMessage.style.display = "none";
    //     messageModal.innerHTML = `<div class="modal__title">${message}</div>`;
    //     modalDialog.append(messageModal);
    //     const timerReq = setTimeout(()=>{messageModal.remove(); form.reset(); modalMessage.style.display = ""; closModalElement('.modal');clearTimeout(timerReq)}, 4000)


    // }
    
   
    // function showMessageModal(data, form, message){
    //     const modalMessage = document.querySelector('.modal__content');
    //     const messageModal = document.createElement('div');
    //     messageModal.classList.add('modal__content');
    //     showModalElement('.modal');
    //     modalMessage.style.display = "none";
        
    //     if (data===null){
    //         messageModal.innerHTML = `<div class="modal__title">${message[0]}</div><img src = ${message[1]} width="38px" height="38px">`;
    //        return
    //     }
    //     messageModal.innerHTML = `<div class="modal__title">${message}</div>`;
    //     modalDialog.append(messageModal);
    //     const timerReq = setTimeout(()=>{messageModal.remove(); form.reset(); modalMessage.style.display = ""; closModalElement('.modal');clearTimeout(timerReq)}, 4000)
        
    // }

    //Slider
    // const slider = document.querySelector('.offer__slider')
    // const sliderControl = document.querySelector('.offer__slider-counter');
    // const sliderElements = document.querySelectorAll('.offer__slide');
    // const sliderTotalCauntElement = document.querySelector('#total');
    // sliderTotalCauntElement.innerHTML = sliderElements.length>10 ? sliderElements.length : `0${sliderElements.length}`;
    // const sliderCurentElem = document.querySelector('#current');


    // showSlideElement(+sliderCurentElem.innerHTML);
    // createDotSlider(slider, sliderElements.length);
    // showActiveDot(+sliderCurentElem.innerHTML);
    



    // sliderControl.addEventListener('click', (event)=>{
             
    //     let sliderCurent = +sliderCurentElem.innerHTML;
    //     let sliderTotal = +sliderTotalCauntElement.innerHTML;
    //     if(event.target.matches('.offer__slider-prev')){
    //         if(sliderCurent == 1){
    //             sliderCurent = sliderTotal;
    //             showSlideElement(sliderCurent);
    //             showActiveDot(sliderCurent)
    //         }else{
    //             sliderCurent--;
    //             showSlideElement(sliderCurent);
    //             showActiveDot(sliderCurent)
    //         }
            
    //     }else if (event.target.matches('.offer__slider-next')){
    //         if(sliderCurent == sliderTotal){
    //             sliderCurent=1;
    //             showSlideElement(sliderCurent);
    //             showActiveDot(sliderCurent)
    //         }else {
    //             sliderCurent++;
    //             showSlideElement(sliderCurent);
    //             showActiveDot(sliderCurent)
    //         }
        
    //     }
    //     sliderCurent = sliderCurent>10 ? sliderCurent : `0${sliderCurent}`; 
    //     sliderCurentElem.innerHTML = sliderCurent;

    // })



    // function showSlideElement(index=1){
        
    //     sliderElements.forEach(element => {element.classList.remove('show'); element.classList.add('hide')})
    //     index--;
    //     sliderElements[index].classList.remove('hide');
    //     sliderElements[index].classList.add('show');
    // }
    


    // function createDotSlider(parentNode,count){
    //     const dotContainer = document.createElement('ol');
    //     dotContainer.style.cssText = `position: absolute;
    //     right: 0;
    //     bottom: 0;
    //     left: 0;
    //     z-index: 15;
    //     display: flex;
    //     justify-content: center;
    //     margin-right: 15%;
    //     margin-left: 15%;
    //     list-style: none;`;
        
        
    //     for (let i = 0; i<count; i++){
    //         let li = document.createElement('li')
    //         li.style.cssText= `box-sizing: content-box;
    //         flex: 0 1 auto;
    //         width: 30px;
    //         height: 6px;
    //         margin-right: 3px;
    //         margin-left: 3px;
    //         cursor: pointer;
    //         background-color: #fff;
    //         background-clip: padding-box;
    //         border-top: 10px solid transparent;
    //         border-bottom: 10px solid transparent;
    //         opacity: .5;
    //         transition: opacity .6s ease;`;
    //         dotContainer.append(li);
    //     }
       
    //     parentNode.append(dotContainer);

    // }

    // function showActiveDot(index){
    //     const dots = document.querySelectorAll('.offer__slider ol li');
    //     dots.forEach(element =>{
    //         element.style.opacity = 0.5;
    //     })
    //     index--
    //     dots[index].style.opacity = 1;
    // }


    // //Calculate

   
    
    // let sex = 'female', height, weight, age, optionActivity = 1.2;    

    



    // function calculateCall(){
    //     let result = document.querySelector('.calculating__result span');
    //     if(!sex||!height||!weight||!age||!optionActivity){
    //         result.textContent = '____';
    //         return;
    //     }
       
    //     if (sex == 'female'){
    //         result.textContent = Math.round((655 + 9.5*weight + 1.8*height - 4.7*age) * optionActivity);;

    //     }else{
    //         result.textContent = Math.round((66 + 13.7*weight + 5*height - 6.76*age) * optionActivity);
    //     }
    
    // }

    // function getInputValue(){
    //     const calculateInputs = document.querySelector('.calculating__choose.calculating__choose_medium');
    //     calculateInputs.addEventListener('input', (event)=>{
    //         const target = event.target;
    //         if (!target.matches('.calculating__choose-item')) return;
    //         switch (target.id){
    //             case "height":
    //                 height = +target.value;
    //                 break;
    //             case "weight":
    //                 weight = +target.value;
    //                 break;
    //             case "age":
    //                 age = +target.value;
    //                 break;
    //         };
    //     calculateCall();   
    //     })
    // }

    // function getCalculateValue(){
    //     const sexValue = document.getElementById('gender');
    //     const sexElements = sexValue.querySelectorAll('div');
    //     sexValue.addEventListener('click', (event)=>{
    //         let target = event.target;
    //         if (!target.matches('.calculating__choose-item'))return;
    //         sexElements.forEach(elem => elem.classList.remove('calculating__choose-item_active'));
    //         if (target.id == 'female'){
    //             sex = target.id;
    //         }else if (target.id == 'male'){
    //             sex = target.id;
               
    //         }
    //         target.classList.add('calculating__choose-item_active');
    //         calculateCall();
    //     })

    //     const optionElem = document.querySelector('.calculating__choose.calculating__choose_big');
    //     const optElements = optionElem.querySelectorAll('div');
    //     optionElem.addEventListener('click', (event)=>{
    //         let target = event.target;
    //         if (!target.matches('.calculating__choose-item'))return;
    //         optElements.forEach(elem => elem.classList.remove('calculating__choose-item_active'));
    //         switch (target.id){
    //             case "low":
    //                 optionActivity = 1;
    //                 break;
    //             case "small":
    //                 optionActivityht = 1.2;
    //                 break;
    //             case "medium":
    //                 optionActivity = 1.3;
    //                 break;
    //             case "high":
    //                 optionActivity = 1.6;
    //                 break;
         
    //         };
    //         target.classList.add('calculating__choose-item_active');
    //         calculateCall();  

    //     })
    // }
    // getCalculateValue();
    // getInputValue();

});







