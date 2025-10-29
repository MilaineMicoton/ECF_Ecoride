document.getElementById("switch-vers-inscription").addEventListener('click',(event)=>{
    event.preventDefault()
    document.querySelector(".wrapper").classList.add("hidden")
})

document.getElementById("switch-vers-connexion").addEventListener('click',(event)=>{
    event.preventDefault()
    document.querySelector(".wrapper").classList.remove("hidden")
})