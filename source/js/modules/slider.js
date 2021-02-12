
 
export const slider = ({controlSelector, slElemsSelector, totalValueSelector, curentValueSelector, slWrapperSelector} ) =>{
    const slider = document.querySelector(slWrapperSelector);
    const sliderControl = document.querySelector(controlSelector); // parent node sliders control elements
    const sliderElements = document.querySelectorAll(slElemsSelector); // elements of slider
    const sliderTotalCauntElement = document.querySelector( totalValueSelector);
    sliderTotalCauntElement.innerHTML = sliderElements.length>10 ? sliderElements.length : `0${sliderElements.length}`;
    const sliderCurentElem = document.querySelector(curentValueSelector);
    
    if (!slider || !sliderControl || !sliderElements || !sliderTotalCauntElement || !sliderCurentElem){ 
        console.error(`Paramets must be CSS selectors elemenst`);
    }
    
    showSlideElement(+sliderCurentElem.innerHTML);

    if (slWrapperSelector){
        createDotSlider(slider, sliderElements.length);
        showActiveDot(+sliderCurentElem.innerHTML);
       
    }
    
    
    
    sliderControl.addEventListener('click', (event)=>{
             
        let sliderCurent = +sliderCurentElem.innerHTML;
        let sliderTotal = +sliderTotalCauntElement.innerHTML;
        if(event.target.matches('.offer__slider-prev')){
            if(sliderCurent == 1){
                sliderCurent = sliderTotal;
                showSlideElement(sliderCurent);
                showActiveDot(sliderCurent)
            }else{
                sliderCurent--;
                showSlideElement(sliderCurent);
                showActiveDot(sliderCurent)
            }
            
        }else if (event.target.matches('.offer__slider-next')){
            if(sliderCurent == sliderTotal){
                sliderCurent=1;
                showSlideElement(sliderCurent);
                showActiveDot(sliderCurent)
            }else {
                sliderCurent++;
                showSlideElement(sliderCurent);
                showActiveDot(sliderCurent)
            }
        
        }
        sliderCurent = sliderCurent>10 ? sliderCurent : `0${sliderCurent}`; 
        sliderCurentElem.innerHTML = sliderCurent;
    
    })



    function createDotSlider(parentNode,count){
        const dotContainer = document.createElement('ol');
        dotContainer.style.cssText = `position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;`;
        
        
        for (let i = 0; i<count; i++){
            let li = document.createElement('li')
            li.style.cssText= `box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;`;
            dotContainer.append(li);
        }
       
        parentNode.append(dotContainer);
    
    }
    
    function showActiveDot(index){
        const dots = document.querySelectorAll('.offer__slider ol li');
        dots.forEach(element =>{
            element.style.opacity = 0.5;
        })
        index--
        dots[index].style.opacity = 1;
    }


    function showSlideElement(index=1){
    
        sliderElements.forEach(element => {element.classList.remove('show'); element.classList.add('hide')})
        index--;
        sliderElements[index].classList.remove('hide');
        sliderElements[index].classList.add('show');
    }
    
    
    

}

