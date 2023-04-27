const chartComponent = document.querySelector(".user-week-chart-component")
const weekChart = document.querySelector(".user-week-chart-component")

weekChart.addEventListener("mouseover", PriceAnimation)

async function FormatData() {
    
    const data = await GetData();
    
    const getamounts = data.map((x) => {
        const { amount } = x
        
        const numbers = []
        numbers.push(amount)
        
        return numbers
    })
    
    
    const maior = getamounts.reduce((x, y) => {
        return Math.max(x,y)
    })
    
    const barComponent = data.map((x) => {
        let { day, amount } = x
        
        let html = "";
        
        if (amount === maior) {
            html += `
                <div class="bar-component">
                    <div id='${day}' style='height: ${amount * 1.5}%' class="expense-bar">
                        <span class='${day}-bar-color bar-color top-expense'></span>
                        <span class="expense-price ${day}">$${amount}</span>
                    </div>
                    <h2>${day}</h2>
                </div>
            `;
        } else {
            html += `
                <div class="bar-component">
                    <div id='${day}' style='height: ${amount * 1.5}%' class="expense-bar">
                        <span class='${day}-bar-color bar-color'></span>
                        <span class="expense-price ${day}">$${amount}</span>
                    </div>
                    <h2>${day}</h2>
                </div>
            `;
        }
        return html;
    }).join("")
    
    return barComponent;
}

function PriceAnimation(e) {
    console.log(e.target)
    const elementClass = e.target.getAttribute("class")
    
    if (elementClass === null || elementClass.includes("expense-bar") === false) {
        return
    }
    
    const bar = e.target
    const price = document.querySelector(`.${bar.id}`)
    const barColor = document.querySelector(`.${bar.id}-bar-color`)


    bar.onmouseenter = () => {
        barColor.style.opacity = "0.5";
        bar.style.cursor = "pointer";
        
        price.style.visibility = "visible"
        price.style.opacity = "1"
        price.style.top = "-30px"
        
        
    }
    bar.onmouseleave = () => {
        barColor.style.opacity = "1";
        
        price.style.opacity = "0"
        price.style.top = "-18px"
        price.style.visibility = "hidden"
    }
    
    
}

async function GetData() {
    const getData = await fetch("suporte/data.json")
    const data = await getData.json();
    return data
}

async function RenderHTML() {
    chartComponent.innerHTML = await FormatData();
}

RenderHTML();