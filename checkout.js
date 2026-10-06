// ===== SEÇÃO 1: CARRINHO (laços de repetição) =====

function calcularSubtotal(itens) {
  // TODO
}

function contarItens(itens) {
  // TODO
}


// ===== SEÇÃO 2: CUPOM (estruturas condicionais) =====

function aplicarCupom(subtotal, codigo) {
   let desconto = 0;

    if (codigo === "DESC10") {
        desconto = subtotal * 0.10;

    } else if (codigo === "DESC20") {
        if (subtotal >= 200) {
            desconto = subtotal * 0.20;
        }

    } else if (codigo === "FRETEGRATIS") {
        desconto = 15;
    }

    if (desconto > subtotal) {
        desconto = subtotal;
    }

    return desconto;
}


// ===== SEÇÃO 3: CHECKOUT (integração) =====

function finalizarCompra(itens, codigoCupom) {
  const subtotal = calcularSubtotal(itens);
  const desconto = aplicarCupom(subtotal, codigoCupom);
  const total = subtotal - desconto;
  return { subtotal: subtotal, desconto: desconto, total: total };
}


// ===== SEÇÃO 4: TESTES =====

const itens = [
  { nome: "Camiseta", preco: 50, quantidade: 2 },
  { nome: "Tênis", preco: 150, quantidade: 1 }
];
console.log(finalizarCompra(itens, "DESC10"));