const clocks = document.getElementById("clock")

setInterval(function(){
    const dates = new Date()
    // console.log(dates.toLocaleDateString () )
    clocks.innerHTML = dates.toLocaleTimeString()
}, 1000)