export const addActiveClass = (elementSelectorCSS, activeClass, index) => {
if( typeof elementSelectorCSS !== 'string' && typeof activeClass !== 'string' && typeof index !== 'number'){
        console.error('Error type attribute, must be "sting", "string", "number"');
        return;
    }
    if (activeClass.startsWith('.')){
        activeClass = activeClass.slice(1);
    }
    const tabElements = document.querySelectorAll(elementSelectorCSS);
    tabElements.forEach(item =>{
        item.classList.remove(activeClass)
    })
    tabElements[index].classList.add(activeClass);
};