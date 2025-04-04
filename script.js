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



//let intervalo = null;

//var timer = function(){
    //let count = 10;
    //intervalo = setInterval(() =>{
       // console.log(count);
       // count--
       // }, 1000)}

//var stop = function(){
   // setTimeout(() => {
       // clearInterval(intervalo)
       // console.log('Lançamento');        
         //   }, 10000)
  //  }

//timer();
//stop();
let ganho = 0 
let gasto = 0
let saldo = 0
let n = parseFloat(prompt('fale o total do seu gasto bruto no primeiro mês '));
let n2 = parseFloat(prompt('fale o total do seu gasto bruto no segundo mês '));
let n3 = parseFloat(prompt('fale o total do seu gasto bruto no terceiro mês '));
let n4 = parseFloat(prompt('fale o total do seu gasto bruto no quarto mês '));
let n5 = parseFloat(prompt('fale o total do seu gasto bruto no quinto mês '));
let n6 = parseFloat(prompt('fale o total do seu gasto bruto no sexto mês '));
let n7 = parseFloat(prompt('fale o total do seu gasto bruto no sétimo mês '));
let n8 = parseFloat(prompt('fale o total do seu gasto bruto no oitavo mês '));
let n9 = parseFloat(prompt('fale o total do seu gasto bruto no nono mês '));
let n10 = parseFloat(prompt('fale o total do seu gasto bruto no décimo mês '));
let n11 = parseFloat(prompt('fale o total do seu gasto bruto no décimo primeiro mês '));
let n12 = parseFloat(prompt('fale o total do seu gasto bruto no décimo segundo mês '));

let n0 = parseFloat(prompt('fale o total do seu ganho bruto no primeiro mês '));
let n21 = parseFloat(prompt('fale o total do seu ganho  bruto no segundo mês '));
let n31 = parseFloat(prompt('fale o total do seu ganho  bruto no terceiro mês '));
let n41 = parseFloat(prompt('fale o total do seu ganho  bruto no quarto mês '));
let n51 = parseFloat(prompt('fale o total do seu ganho  bruto no quinto mês '));
let n61 = parseFloat(prompt('fale o total do seu ganho  bruto no sexto mês '));
let n71 = parseFloat(prompt('fale o total do seu ganho  bruto no sétimo mês '));
let n81 = parseFloat(prompt('fale o total do seu ganho  bruto no oitavo mês '));
let n91 = parseFloat(prompt('fale o total do seu ganho  bruto no nono mês '));
let n101 = parseFloat(prompt('fale o total do seu ganho  bruto no décimo mês '));
let n111 = parseFloat(prompt('fale o total do seu ganho  bruto no décimo primeiro mês '));
let n121 = parseFloat(prompt('fale o total do seu ganho bruto no décimo segundo mês '));
 let soma = 0 


    ganho = ganho + n+n2+n3+n4+n5+n6+n7+n8+n9+n10+n11+n12
    console.log('seu ganho total no ano foi' , ganho)

    gasto = gasto + n0+n21+n31+n41+n51+n61+n71+n81+n91+n101+n111+n121
    console.log('seu gasto total no ano foi' , gasto)

    saldo =  ganho - gasto
    console.log('seu saldo total foi de' , saldo)
