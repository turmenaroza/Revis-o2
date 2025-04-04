//let n1 = 0
//let n3 = 0
//let soma = 0
//let n = parseFloat(prompt('quantos números você quer somar?'));

//do {
    //let n3 = parseFloat(prompt('Digite um número'));
    //soma = soma + n3
    //console.log(soma + n3)
    ///n1 = n1 + 1
//}
//while (n > n1);



let intervalo = null;

var timer = function(){
    let count = 10;
    intervalo = setInterval(() =>{
        console.log(count);
        count--
        }, 1000)}

var stop = function(){
    setTimeout(() => {
        clearInterval(intervalo)
        console.log('Lançamento');        
            }, 10000)
    }

timer();
stop();



