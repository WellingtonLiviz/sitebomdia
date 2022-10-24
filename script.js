function carregar() {        
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 13
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 6 && hora <12 ) {
    //Bom dia
    img.src = 'dia450.jpg'
    document.body.style.background = '#005C7C'
    
} else if (hora >=12 && hora <=18) {
    //Boa Tarde
    img.src = 'tarde450.jpg'
    document.body.style.background = '#FD8D01'
} else {
    //Boa Noite
    img.src = 'noite450.jpg' 
    document.body.style.background = '#0E2648'
}
}