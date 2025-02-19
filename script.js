document.getElementById("oqBtn").onclick = function(){
    document.body.style.background = '#C4B5A5 '
    document.body.style.color = 'black'
    document.getElementById('qoraBtn').style.background = 'black'
    alert('Light mode yoqildi')

}


document.getElementById("qoraBtn").onclick = function(){
    document.body.style.background = 'black'
    document.body.style.color = 'white'
    document.getElementById('qoraBtn').style.background = 'gray'
    alert('Dark mode yoqildi')
}
