// Carrinho de Compras
let cart = [];

// Função para adicionar itens ao carrinho
function addToCart(itemName, price) {
  const item = { name: itemName, price: price };
  cart.push(item);
  updateCartDisplay();
}

// Função para remover itens do carrinho
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartDisplay();
}

// Função para atualizar o display do carrinho
function updateCartDisplay() {
  const cartContainer = document.getElementById('cart-items');
  const totalContainer = document.getElementById('cart-total');
  cartContainer.innerHTML = '';

  if (cart.length === 0) {
    cartContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
    totalContainer.textContent = 'Total: R$ 0,00';
    return;
  }

  let total = 0;
  cart.forEach((item, index) => {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <p>${item.name} - R$ ${item.price.toFixed(2)}</p>
      <button class="remove-btn" onclick="removeFromCart(${index})">Remover</button>
    `;
    cartContainer.appendChild(cartItem);
    total += item.price;
  });

  totalContainer.textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Redirecionar para o carrinho ao clicar em "Comprar Agora"
document.querySelector('.cta-button').addEventListener('click', () => {
  addToCart('Ebook de Receitas Natalinas e Ano Novo', 29.90);
  window.location.href = '#cart';
});

function clearCart() {
    cart = [];
    updateCartDisplay();
  }

  function checkout() {
    if (cart.length === 0) {
      alert('Seu carrinho está vazio. Adicione itens antes de finalizar a compra.');
      return;
    }
    alert('Compra realizada com sucesso!');
    clearCart();
  }
  