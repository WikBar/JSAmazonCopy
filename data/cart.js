export const cart=[{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity:2
  },
  {
    
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity:1
  },
  {
    
    productId: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    quantity:3
  }
  
  
];


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