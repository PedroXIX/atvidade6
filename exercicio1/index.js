/*1) Considerando a seguinte lista de valores: [10,12,15,35,40] crie funções para devolver os dados conforme solicitado:
Uma função que devolve os valores que são maiores que a média
Uma função que devolva o menor valor da lista
Uma função que devolva o valor da soma dos itens da lista
Uma função que devolva todos os valores que são menores que 20*/

const vet = [10,12,15,35,40]


function Media(vet){
    let valores = ""
    const media= vet.reduce((acumullator, current)=> acumullator+current,0)/vet.length
    vet.forEach(num => {
        if(num>media) valores+=num+" "
    })
    console.log(`Valores maiores que a média: ${valores} `)

}

Media(vet)

function MenorVal(vet){
    const menor = vet[0]
    vet.forEach(num => {
        if(num<menor) menor = num
    })
    console.log(`Menor valor: ${menor} `)
}

MenorVal(vet)


function Soma(vet){
        const sum= vet.reduce((acumullator, current)=> acumullator+current,0)
        console.log(`valor da soma dos números: ${sum} `)
}

Soma(vet)

function MenorQueVinte(vet){
    let valores = ""
    vet.forEach(num => {
        if(num<20) valores+=num+" "
    })
    console.log(`Valores menores que 20: ${valores} `)
}

MenorQueVinte(vet)