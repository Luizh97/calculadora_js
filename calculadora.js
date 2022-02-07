function calculadora(){ 

    const operacao = Number(prompt('Escolha uma opção: \n 1 - Soma (+) \n 2 - Subtração (-) \n 3 - Divisão (/) \n 4 - Multiplicação (*)'));
    

    if(!operacao || operacao >= 5){
        alert('Operação inválida!')
        calculadora()
    }
     else{
    
        let n1 = Number(prompt('Insira o primeiro valor: '));
        let n2 = Number(prompt('Insira o segundo valor: '));
        let resultado;

        if (!n1 || !n2){
            alert('Parametros inválidos!')
            calculadora();
        }else{
        


            function soma(){
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                repeteCalculadora();
            }
            function subtracao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                repeteCalculadora();
            }
            function divisao(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                repeteCalculadora();
            }
            function multiplicacao(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                repeteCalculadora();
            }
            
            
            function repeteCalculadora(){
            
            let opcao =  prompt('Deseja realizar uma nova operação? \n 1 - SIM \n 2 - NÃO');

            if(opcao == 1){
                calculadora();
            }else if (opcao == 2){
                alert('Até mais!')
            }else {
                alert('Digite uma opção válida!')
                repeteCalculadora();
            }

            
            }
            
        

            switch(operacao){
                case 1:
                    soma()
                        break;
                
                case 2:
                    subtracao()
                        break;
                
                case 3:
                    divisao()
                        break;
                
                case 4:
                    multiplicacao()
                        break;

            }
        
        
        
     }
        
        }

        
 }   
   
calculadora();


