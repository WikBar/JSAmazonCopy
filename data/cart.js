export let cart= JSON.parse(localStorage.getItem('cart'))||[]

export function totalQuantity(){
  let totalQuantity=0;
  cart.forEach((item)=>
      totalQuantity+=item.quantity
  )
  return totalQuantity
}
  


function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart))
}


export function addToCart(){
    document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
      let TimeoutId;
      button.addEventListener('click',()=>{
    
    
    
        const {productId}=button.dataset;
        let matchingItem;
    
        const selector = document.querySelector(`.js-product-quantity-${productId}`);
        let quantity = Number(selector.value);
    
        const added=document.querySelector(`.js-added-to-cart-${productId}`);
        added.classList.add('Added');
        
    
        clearTimeout(TimeoutId);
        
    
        if(added.classList.contains('Added')){
    
          TimeoutId=setTimeout(()=>{
            added.classList.remove('Added')
          },2000)
          
    
        }
        cart.forEach((item)=>{
          if(item.productId===productId){
            matchingItem=item;
          }
        });
    
          if(matchingItem)
          {
           matchingItem.quantity+=quantity; 
          }else{
              cart.push({
                productId,
                quantity
            });
          };

          // let totalQuantity=0;
          // cart.forEach((item)=>{
          //   totalQuantity+=item.quantity;
          // })
          saveToStorage()
          
          document.body.querySelector('.js-cart-quantity').innerHTML=totalQuantity()>0?totalQuantity():null})
          
      });
}

export function removeFromCart(item){
  const newCart=[];

  cart.forEach((product)=>{

    if (product.productId!==item){
      newCart.push(product)
    }   
  });

  cart=newCart
  saveToStorage()
  document.querySelector('.js-return-to-home-link').innerHTML=totalQuantity()>0?totalQuantity():null;

}