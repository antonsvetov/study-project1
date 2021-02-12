import {showContent} from './service/showContent';
import {addActiveClass} from './service/addActiveClass';

const showTabs = (elementSelectorCSS, tabsElemCSS) => {
    const tabs = document.querySelector(elementSelectorCSS);
    const tabElements = document.querySelectorAll(tabsElemCSS)
    showContent('.tabcontent', 'show',0);
    addActiveClass('.tabheader__item', 'tabheader__item_active', 0 );
    
    tabs.addEventListener('click', (event) =>{
        const target = event.target;
        if (!target.matches('.tabheader__item')) return;
        tabElements.forEach((item, index)=>{
            if(target != item) return;
            showContent('.tabcontent', 'show',index);
            addActiveClass('.tabheader__item', 'tabheader__item_active', index );
        })
    })

};

// showTabs('.tabheader__items');

export {showTabs}; 

