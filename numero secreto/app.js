 let numeroSecreto = parseInt(Math.random() * 11)
 let tentativas = 1
 let lance

 alert('Boas vindas ao jogo do número secreto')
 let NomeJogador = prompt ("Qual seu nome amor?")
 let numQuent = prompt ("Devo sortear um número de 0 a quanto?")
 let numerosecreto = parseInt(Math.random() * parseInt(numQuent) + 1)
 while (lance != numeroSecreto) {
     let lance = prompt('Escolha um número entre 1 e 10')
     if (lance == numeroSecreto) {
         break
     } else {
         if (chute > numeroSecreto) {
             alert('O número secreto é menor')
         } else {
           alert('O número secreto é maior')
         }
     }
     tentativas++
 }

 let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' 
 alert(`O número secreto era ${numeroSecreto} e você acertou com apenas ${tentativas} ${palavraTentativa}`)