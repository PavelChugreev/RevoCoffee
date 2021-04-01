import data from "./data"
console.log(data)
export default function tabs(){
    const giftSection = document.querySelector(".gift");

    createTabs("tabs", 1);

    function createTabs(clazz, tabNum){
        const el = document.createElement("div");
        el.classList.add(`${clazz}`);
        giftSection.append(el);
        changeTabs(tabNum);
    }

    function changeTabs(cardNum){
        const {img, alt, price, title, description, beansType, height} = data[cardNum];
        const tabsBlock = document.querySelector(".tabs");
        tabsBlock.innerHTML = 
        `
            <div class="tabs__buttons">
                <div class="tabs__buttons-btn"><span>1</span></div>
                <div class="tabs__buttons-btn "><span>2</span></div>
                <div class="tabs__buttons-btn"><span>3</span></div>
            </div>
            <div class="tabs__img">
                <img src="${img}" alt="${alt}">
            </div>
            <div class="tabs__price">${price}</div>
            <div class="tabs__title">${title}</div>
            <div class="tabs__description">${description}</div>
            <div class="tabs__info">
                <div class="beans tabs__info-item">
                    <img src="./src/icons/beans.png" alt="beans">
                    <span>Loại hạt</span>
                    <span class="beans__type">${beansType}</span>
                </div>
                <div class="mount tabs__info-item">
                    <img src="./src/icons/mount.png" alt="mount">
                    <span>Độ cao</span>
                    <span class="mount__height">${height}</span>
                </div>
            </div>
            <div class="tabs__buy">MUA NGAY</div>
            <div class="tabs__adv">CHI TIẾT</div>
        `
        
        const tabsBtns = document.querySelectorAll(".tabs__buttons-btn");
        tabsBtns[cardNum-1].classList.add("active");
        tabsBtns.forEach((item, i) => item.addEventListener("click", () => changeTabs(i+1)));
    }
}