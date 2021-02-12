export const showContent = ( elementSelectorCSS, addClass , index) => {
    const tabContents = document.querySelectorAll(elementSelectorCSS);
    tabContents.forEach(item =>{
        item.classList.remove(addClass)
    })
    tabContents[index].classList.add(addClass);
   
};