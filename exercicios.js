// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const alturaUser = Number(prompt('Qual é a altura do Retângulo?'))
  const larguraUser = Number(prompt('Qual é a largura do Retângulo?'))
  const area = alturaUser * larguraUser
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtualUser = Number(prompt('Qual é o ano atual?'))
  const anoNascimentoUser = Number(prompt('Em que ano você nasceu?'))
  const idade = anoAtualUser - anoNascimentoUser
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura*altura)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nomeUser = prompt('Qual é o seu nome?')
  const idadeUser = prompt('Qual é a sua idade?')
  const emailUser = prompt('Digite o seu e-mail!')
  console.log(`Meu nome é ${nomeUser}, tenho ${idadeUser} anos, e o meu email é ${emailUser}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const corUser1 = prompt('Qual a sua cor favorita?')
  const corUser2 = prompt('Qual a sua segunda cor favorita?')
  const corUser3 = prompt('Qual a sua terceira cor favorita?')

  const coresFavoritas = [corUser1, corUser2, corUser3]
  console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const ingressosMinimos = custo / valorIngresso
  return ingressosMinimos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const tamanhoIgual = string1.length === string2.length
  return tamanhoIgual
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimaPosicao = array[array.length -1]
  return ultimaPosicao
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array[0]
  const ultimoElemento = array[array.length - 1]

  array.splice(0, 1, ultimoElemento)
  array.splice(array.length - 1, 1, primeiroElemento)

  return array
  // https://www.youtube.com/watch?v=Eu1O9e4a2nY (vídeo me ajudou)
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const verificaIgualdade = string1.toUpperCase() === string2.toUpperCase()

  return verificaIgualdade
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Qual é o ano atual?'))
  const anoNascimentoUser = Number(prompt('Em que ano você nasceu?'))
  const identidadeEmitida = Number(prompt('Em que ano foi emitida sua carteira de identidade?'))

  const idade = anoAtual - anoNascimentoUser
 
  const renovadade5em5 = (idade <= 20)  && (identidadeEmitida + 5) <= anoAtual
  const renovadade10em10 = (idade <= 50) && (identidadeEmitida + 10) <= anoAtual
  const renovadade15em15 = (idade > 50) && (identidadeEmitida +15) < anoAtual
  console.log(renovadade5em5 || renovadade10em10 || renovadade15em15)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const condicaoTrue1 = ano % 400 === 0
  const condicaoTrue2 = ano % 4 ===0
  const condicaoFalse1 = ano % 100 === 0

  return condicaoTrue1 || (condicaoTrue2 && !condicaoFalse1)
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maioridadeUser = prompt('Você tem mas de 18 anos?')
  const ensinoMedioCompletoUser = prompt('Você possui ensino médio completo?')
  const disponibilidadeUser = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')

  const verdadeiroIdade = maioridadeUser === "sim"
  const verdadeiroEnsino = ensinoMedioCompletoUser === "sim"
  const verdadeiroDisponivel = disponibilidadeUser === "sim"

  const verificaInscricao = verdadeiroIdade && verdadeiroEnsino && verdadeiroDisponivel

  console.log(verificaInscricao)
}