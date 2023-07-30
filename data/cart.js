export const cart=[];


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
          let totalQuantity=0;
          cart.forEach((item)=>{
            totalQuantity+=item.quantity;
          })
    
          
          document.body.querySelector('.js-cart-quantity').innerHTML=totalQuantity})
      });
}