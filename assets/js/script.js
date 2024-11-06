const priceTxts = document.querySelectorAll('.price');

function priceChange(){
  if(priceChangeInput.checked === true){
    for (let i = 0; i < priceTxts.length; i++) {
      priceTxts[0].innerText = '19.99';
      priceTxts[1].innerText = '24.99';
      priceTxts[2].innerText = '39.99';
    }
  } else{
    for (let i = 0; i < priceTxts.length; i++) {
      priceTxts[0].innerText = '199.99';
      priceTxts[1].innerText = '249.99';
      priceTxts[2].innerText = '399.99';
    }
  }
}


priceChangeInput.addEventListener('input', priceChange);