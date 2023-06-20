//cart
let cartIcon = document.querySelector('#cartIcon')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')

//open cart
cartIcon.onclick = () =>{
    cart.classList.add("active")
};
//close cart
closeCart.onclick = () =>{
    cart.classList.remove("active")
};

if(document.readyState == 'loading')
{
    document.addEventListener('DOMContentLoaded',ready);
}
else
{
    ready();
}

//Making function
function ready()
{
    //remove item from cart
    let removeCartButtons = document.getElementsByClassName('delete')
    console.log(removeCartButtons)
    for(let i = 0; i < removeCartButtons.length; i++)
    {
        let button = removeCartButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    //Quantity
    let quantityInputs = document.getElementsByClassName('Quantity')
    for(let i = 0; i < quantityInputs.length; i++)
    {
        let input = quantityInputs[i];
        input.addEventListener("change",quantityChange);
    }
    //add to cart
    let addCart = document.getElementsByClassName('add-cart')
    for(let i = 0; i < addCart.length; i++)
    {
        let button = addCart[i]
        button.addEventListener("click", addCartClicked);
    }
}

//remove item from cart
function removeCartItem(event)
{
    let buttonClicked = event.target
    buttonClicked.parentElement.remove()
    updatetotal();
}

//add to cart
function addCartClicked(event)
{
    let button = event.target
    let shopProducts = button.parentElement.parentElement
    let title = shopProducts.getElementsByClassName('P-name')[0].innerText;
    let price = shopProducts.getElementsByClassName('p-Price')[0].innerText;
    let productImg = shopProducts.getElementsByClassName('imgP')[0].innerText;

    addProductTOCart(title,price,productImg);
    updatetotal();
}

function addProductTOCart(title,price,productImg)
{
    let cartShopeBox = document.createElement('div')
    cartShopeBox.classList.add('cart-box')
    let cartItems = document.getElementsByClassName('cart-content')[0]
    let cartItemName = cartItems.getElementsByClassName('Pname')
    for(let i = 0; i < cartItemName.length; i++)
    {
        if(cartItemName[i].innerText == title)
        {
            alert("You have already add this items to cart");
            return;
        }
    }
}
let cartBoxContent = `
                        <img src="static/imgs/giorgio-removebg-preview.png" alt="" class="cart-img">
                        <div class="detail-box">
                            <div class="Pname">Maosa</div>
                            <div class="pPrice"><sup>OMR</sup>1.05</div>
                            <input type="number" value="1" class="Quantity">
                        </div>
                        <!-- remove button -->
                        <span class="material-symbols-outlined delete">delete</span>
`;
cartShopeBox.innerHTML = cartBoxContent
cartItems.append(cartShopeBox)
cartShopeBox.getElementsByClassName('delete')[0].addEventListener('click', removeCartItem)
cartShopeBox.getElementsByClassName('Quantity')[0].addEventListener('change', quantityChange)

//Quantity change
function quantityChange(event)
{
    let input = event.target
    if(isNaN(input.value) || input.value <= 0)
    {
        input.value = 1;
    }
    updatetotal();
}

//update total
function updatetotal()
{
    let carContent = document.getElementsByClassName('cart-content')[0]
    let cartBoxes = document.getElementsByClassName('cart-box')
    let total = 0;
    for(let i = 0; i < cartBoxes.length; i++)
    {
        let cartBox = cartBoxes[i]
        let priceElement = cartBox.getElementsByClassName('pPrice')[0]
        let quantityElement = cartBox.getElementsByClassName('Quantity')[0]
        let price = parseFloat(priceElement.innerText.replace("OMR",""))
        let quantity = quantityElement.value
        total = total + (price * quantity);
        
        //if price contain some .00 value
        total = Math.round(total * 100) / 100;

        document.getElementsByClassName("  total-price")[0].innerText = "OMR" + total
    }
}



