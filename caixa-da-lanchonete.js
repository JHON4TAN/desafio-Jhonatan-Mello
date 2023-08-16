class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {
      const cardapio = {
        cafe: 3.00,
        chantily: 1.50,
        suco: 6.20,
        sanduiche: 6.50,
        queijo: 2.00,
        salgado: 7.25,
        combo1: 9.50,
        combo2: 7.50,
      };
  
      const formasDePagamentoValidas = ['debito', 'credito', 'dinheiro'];
      if (!formasDePagamentoValidas.includes(metodoDePagamento)) { 
          
        return 'Forma de pagamento inválida!';
      }
  
      let total = 0;
      let mensagemErro = '';
  
      for (const itemInfo of itens) {
          
        const [codigo, quantidade] = itemInfo.split(',');
  
        if (!cardapio.hasOwnProperty(codigo)) {
          mensagemErro = 'Item inválido!';
          break;		  
        }
  
        if (codigo !== 'chantily' && codigo !== 'queijo') {
          total += cardapio[codigo] * parseInt(quantidade);
            
        } else {
            
          const itemPrincipal = codigo === 'chantily' ? 'cafe' : 'sanduiche';
            
          if (!itens.includes(`${itemPrincipal},${quantidade}`)) {			
            mensagemErro = 'Item extra não pode ser pedido sem o principal';
            break;
              
          } else if (codigo === 'chantily' || codigo === 'queijo') {			
            total += cardapio[codigo] * parseInt(quantidade);			
          }
        }
      }
  
      if (itens.length === 0) {
        return 'Não há itens no carrinho de compra!';
      }
  
      if (mensagemErro) {
        return mensagemErro;
      }
  
      if (metodoDePagamento === 'dinheiro') {
        total *= 0.95; 
          
      } else if (metodoDePagamento === 'credito') {
        total *= 1.03;
          
      }
  
      return `R$ ${total.toFixed(2)}`;
    }
  }
  
  const caixa = new CaixaDaLanchonete();
  
  let resultadoExemplo1 = caixa.calcularValorDaCompra('debito', ['chantily,1']);
  console.log(resultadoExemplo1);
  
  let resultadoExemplo2 = caixa.calcularValorDaCompra('debito', ['cafe,1','chantily,1']);
  console.log(resultadoExemplo2);
  
  let resultadoExemplo3 = caixa.calcularValorDaCompra('credito', ['combo1,1','cafe,2']);
  console.log(resultadoExemplo3); 
  
  let resultadoExemplo4 = caixa.calcularValorDaCompra('debito', ['sanduiche,1','queijo,1']);
  console.log(resultadoExemplo4);