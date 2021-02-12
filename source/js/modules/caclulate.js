  


export function calculate(){
    let sex = 'female', height, weight, age, optionActivity = 1.2;  
    getStaticValue('.calculating__choose.calculating__choose_big','div','.calculating__choose-item','calculating__choose-item_active');
    getStaticValue('#gender','div', '.calculating__choose-item', 'calculating__choose-item_active');
    getInputValue('.calculating__choose.calculating__choose_medium','.calculating__choose-item');

    
    function calculateCall(resultsElementCSS){
        let result = document.querySelector(resultsElementCSS);
        if(!sex||!height||!weight||!age||!optionActivity){
            result.textContent = '____';
            return;
        }
       
        if (sex == 'female'){
            result.textContent = Math.round((655 + 9.5*weight + 1.8*height - 4.7*age) * optionActivity);;
    
        }else{
            result.textContent = Math.round((66 + 13.7*weight + 5*height - 6.76*age) * optionActivity);
        }
    
    }
    
    function getInputValue(inputsElementsCSS, targetElementCSS){
        const calculateInputs = document.querySelector(inputsElementsCSS);
        calculateInputs.addEventListener('input', (event)=>{
            const target = event.target;
            if (!target.matches(targetElementCSS)) return;
            switch (target.id){
                case "height":
                    height = +target.value;
                    break;
                case "weight":
                    weight = +target.value;
                    break;
                case "age":
                    age = +target.value;
                    break;
            };
        calculateCall('.calculating__result span');   
        })
    }
    
    function getStaticValue(parentElementCSS, elementsValueCSS, targetElementCSS, changeActiveClass){
        const parenElement = document.querySelector(parentElementCSS);
        const elementWithValue = parenElement.querySelectorAll(elementsValueCSS);
        parenElement.addEventListener('click', (event)=>{
            let target = event.target;
            if (!target.matches(targetElementCSS))return;
            elementWithValue.forEach(elem => elem.classList.remove(changeActiveClass));
            if (target.id == 'female' || target.id == 'male' ){
                sex = target.id;
            }else {
                switch (target.id){
                    case "low":
                        optionActivity = 1;
                        break;
                    case "small":
                        optionActivityht = 1.2;
                        break;
                    case "medium":
                        optionActivity = 1.3;
                        break;
                    case "high":
                        optionActivity = 1.6;
                        break;
             
                };
            }
            target.classList.add(changeActiveClass);
            calculateCall('.calculating__result span');
        })
       
    }
    




}






