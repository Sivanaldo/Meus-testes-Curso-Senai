var nome = 'luis'
var idade = 18
var datadoevento = '26/11/2021'
var dataAtual = '27/11/2021'
var quantidade = 4
const participantes = ['Juliana','Paula','Marcio','Rodrigo']

console.log('Cadastro de Eventos')
console.log('')
console.log("Data Atual: " + dataAtual)
console.log('')
console.log('A data do Evento é: ' + datadoevento)
if (datadoevento == dataAtual){
    console.log('Não é possível realizar o Cadastro')
    console.log('Consulte adata do evento e tente novamente!')
}else{
    console.log('Cadastro em Andamento!')
}

console.log('Nome do Participante: ' + nome+ ',e sua idade é: ' + idade  +  'anos')
if (idade >=18){
    console.log('Idade permitida')
    console.log('Cadastro em Andamento!')
}else{
    console.log('Menor de 18 anos, cadastro não permitido!')   
}
console.log('')
console.log('Lista de Participantes')
console.log(''+ participantes)
console.log('Quantidade de participantes' + quantidade)
console.log('')
if (quantidade >100){
    console.log('Cadastro não realizado')
    console.log('Quantidade excedeu o limite de 100 pessoas')
}else{
    console.log('Cadastro concluído com sucesso')
}
