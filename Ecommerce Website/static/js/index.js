
function ready()
{
    let removeCartItem = document.getElementsByClassName('remove');
    console.log(removeCartItem);
    for(let i = 0; i < removeCartItem.length; i++)
    {
        let button = removeCartItem[i];
        button.addEventListener('click', removeCartItem)
    }

    let quantityBtn = document.getElementsByClassName('count');
    for(let i = 0; i < quantityBtn.length; i++)
    {
        let button = quantityBtn[i];
        button.addEventListener('change',quantityBtn)
    }

    let addTOCartBtu = document.getElementsByClassName('btnAdd');
    for(let i = 0; i < addTOCartBtu.length; i++)
    {
        let button =addTOCartBtu[i];
        button.addEventListener('click',addTOCartBtu)
    }
}
function removeCartItem(event)
{
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    console.log(buttonClicked)
}
function addTOCartBtu(event)
{
    let button = event.target;
    let shopItemBox = button.parentElement.parentElement;
    let name = shopItemBox.getElementsByClassName('name')[0].innerText;
    let price = shopItemBox.getElementsByClassName('price')[0].innerText;
    console.log(name,price);
}
