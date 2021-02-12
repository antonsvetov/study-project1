

export function showModalElement(classModalParentElememntCSS, timerModal){
    const modalWrapper = document.querySelector(classModalParentElememntCSS);

    if(modalWrapper.classList.contains('show')) return;
    modalWrapper.classList.toggle('show');
    document.body.style.overflow='hidden';
    if(timerModal){
        clearTimeout(timerModal);
    }
}

export function closModalElement(classModalParentElememntCSS){
    const modalWrapper = document.querySelector(classModalParentElememntCSS);
    if (!modalWrapper.classList.contains('show')) return;
    modalWrapper.classList.toggle('show');
    document.body.style.overflow='';
}
    
export function showModalElementScroll(){
    if(document.documentElement.clientHeight + pageYOffset == document.documentElement.scrollHeight){
        showModalElement('.modal');
        window.removeEventListener('scroll', showModalElementScroll);
    }
}


export function modal(classModalParentElememntCSS,classModalClosElement, classModalOpenElement, timerModal){
    const modalWrapper = document.querySelector(classModalParentElememntCSS);
    const modalClose = document.querySelector(classModalClosElement);
    const modalOpen = document.querySelectorAll(classModalOpenElement);

    window.addEventListener('keydown', (event)=>{
        if (event.key !== 'Escape') return;
        closModalElement(classModalParentElememntCSS);
    })
    
    window.addEventListener('scroll', showModalElementScroll);
        
    modalWrapper.addEventListener('click', (event)=>{
        const target = event.target;
        if (target !== modalClose && target !== modalWrapper) return;
        closModalElement(classModalParentElememntCSS);
    })
    
    modalOpen.forEach(item =>{
        item.addEventListener('click', () => showModalElement(classModalParentElememntCSS, timerModal))
    })
}

