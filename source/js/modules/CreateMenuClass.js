export class CreateMenuItem{
    constructor(src, alt, title, description, prise, parentNode, transferCource = 27,  ...classes){
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.description = description;
        this.prise = prise*transferCource;
        this.classes = (classes.length===0) ? ["menu__item"] : classes;
        this.parentNode = document.querySelector(parentNode);
    }

    render(){
        const {src, alt , title, description, prise, parentNode, classes} = this;
        const div = document.createElement('div');
        classes.forEach(item => div.classList.add(item));
        
        div.innerHTML = `
        <img src=${src} alt=${alt} />
        <h3 class="menu__item-subtitle">${title}</h3>
        <div class="menu__item-descr">${description}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total"><span>${prise}</span> грн/день</div>
        </div>`
        parentNode.prepend(div);
    }

}