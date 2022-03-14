
const adviceContainer  = document.querySelector('.advice-container')
const adviceNumber  = document.querySelector('.heading-span')
const adviceContent  = document.querySelector('.advice')
const dice  = document.querySelector('.dice')
const loader  = document.querySelector('.loader')


const dataContainer = (id, advice) => {
    return `<p class="heading">ADVICE <span class="heading-span">#${id}</span> </p>
       <p class="advice">"${advice}"</p>`
}

const apiURL = `https://api.adviceslip.com/advice`
const fetchData =async function() {
    try {
     const res =  await fetch(apiURL)
    const data = await res.json()
    const {id, advice} = data?.slip
    if(data.slip !== undefined){
        loader.style.display = "none"
    }
    adviceContainer.innerHTML = dataContainer(id, advice)
    adviceContainer.style.visibility = "visible"
    // adviceNumber.innerText = id
    // adviceContent.innerText = advice
    console.log(slip)
    } catch (error) {
      console.log(error)  
    }
}

window.addEventListener('DOMContentLoaded', fetchData);
dice.addEventListener('click',fetchData)
