//------- VARIAVEIS--------//
const inputs = document.querySelector(".div-inputs")
const submit = document.querySelector(".submit-btn")
const ratingCard = document.querySelector(".rating-card")
const thanksCard = document.querySelector(".thanks-card")
const span = document.querySelector(".your-rating")
let previousBtn;
let rating;




//------- FUNÇOES--------//





//------- LISTENERS--------//

submit.addEventListener("click", (e) => {
    e.preventDefault()
    
    if(rating != undefined) {
        span.innerHTML = rating
        ratingCard.style.display = "none"
        thanksCard.style.display = "block"
    } else {
        window.alert("select an option to continue")
    }
    
})

inputs.addEventListener("click", (e) => {
    const botao = e.target
    
    switch(botao.value) {
        case "1":
            rating = "1"
            previousBtn != undefined ? previousBtn.classList.toggle("active"): "";
            previousBtn = botao;
            botao.classList.toggle("active")
            break
        case "2":
            rating = "2"
            previousBtn != undefined ? previousBtn.classList.toggle("active"): "";
            previousBtn = botao;
            botao.classList.toggle("active")
            break
        case "3":
            rating = "3"
            previousBtn != undefined ? previousBtn.classList.toggle("active"): "";
            previousBtn = botao;
            botao.classList.toggle("active")
            break
        case "4":
            rating = "4"
            previousBtn != undefined ? previousBtn.classList.toggle("active"): "";
            previousBtn = botao;
            botao.classList.toggle("active")
            break
        case "5":
            rating = "5"
            previousBtn != undefined ? previousBtn.classList.toggle("active"): "";
            previousBtn = botao;
            botao.classList.toggle("active")
            break
        default:
            console.log("algo deu errado")
            break
        
    }
})