const price_bar = document.querySelector(".price-bar");
const reviews_amount = document.querySelector(".reviews-amount");
const reviews_price = document.querySelector(".reviews-price");
const switch_input = document.querySelector(".switch-input")

let price = 16;
let pageviews = 100;


price_bar.addEventListener("input", ChangeAll)
switch_input.addEventListener("input", ChangeAll)

function ChangeAll() {
    let rangeValue = Number(price_bar.value)
    pageviews = rangeValue
    
    price = SetPrice(rangeValue)
  
    RenderHTML();
};

function SetPrice(value) {
    let price = 0;
    switch(value) {
        case 0:
            price = 0;
            break;
        case 50:
            if(switch_input.checked === false){
                price = 9;
            } else {
                price = PriceDiscount(9)
            }
            break;
        case 100:
            if(switch_input.checked === false){
                price = 16;
            } else {
                price = PriceDiscount(16)
            }
            break;
        case 150:
            if(switch_input.checked === false){
                price = 16;
            } else {
                price = PriceDiscount(16)
            }
            break;
        case 200:
            if(switch_input.checked === false){
                price = 22;
            } else {
                price = PriceDiscount(22)
            }
            break;
        default:
            break;
    }
    
    return price;
}

function PriceDiscount(value) {
    const valorfinal = value - ((value * 25)/ 100)
    return valorfinal; 
}

function Log(e) {
    console.log(e)
}

function RenderHTML(){
    
    const priceFixed = price.toFixed(2)
    
    reviews_price.innerHTML = `$${priceFixed}`
    reviews_amount.innerHTML = `${pageviews}K PAGEVIEWS`
}


