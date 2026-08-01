'use strict'

const botaoCadastrar = document.getElementById("cadastrar")

 function cadastrarfoto(){
    const caixafoto = document.getElementById('foto')
    const galeria = document.getElementById('galeria')

    const novaImagem = document.createElement('img')

    novaImagem.src = caixafoto.value

    galeria.append(novaImagem)
 }

 botaoCadastrar.addEventListener('click',cadastrarfoto)