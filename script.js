let itemCard = document.querySelectorAll('.cart-item')
function addingCart(){
    for(const card of itemCard){
         
        const cardImg = card.parentNode.querySelector('.card-img')
        const cardName = card.querySelector('.card-name').innerHTML;
        const cardPrice = card.querySelector('.card-price').innerHTML;


        const cardItem = {
            img: cardImg,
            name: cardName,
            price: cardPrice
        }
        addtocart(cardItem)

    }

}

 
 let bttonAddcart = document.querySelectorAll('.add-cart');
  bttonAddcart.forEach(button => {
    button.addEventListener('click', addingCart())
  })



     function addtocart(cards){
        const divCards = document.getElementById('last-div');
        const  cardItem = document.createElement('div')

        cardItem.innerHTML = `<img src="${cards.img}"> <span>${cards.name} </span> <span>${cards.price}</span>`
        divCards.appendChild(cardItem)
     }