const smallImg1 = document.querySelector('#img-1');
const smallImg2 = document.querySelector('#img-2');
const smallImg3 = document.querySelector('#img-3');
const smallImg4 = document.querySelector('#img-4');
const mainImg = document.querySelector('.large-img-div img');


smallImg1.addEventListener('click', () =>{
    if (window.innerWidth <= 800) {
    //add the classList to the element
    smallImg1.classList.add('toggled-image');

    //remove other elements styles
    smallImg2.classList.remove('toggled-image');
    smallImg3.classList.remove('toggled-image');
    smallImg4.classList.remove('toggled-image');

    //change the large img
    mainImg.src = 'images/image-product-1.jpg';        
    }else{
        1 == 1;
    }

})

smallImg2.addEventListener('click', () =>{
    if (window.innerWidth <= 800) {
    //add the classList to the element
    smallImg2.classList.add('toggled-image');

    //remove other elements styles
    smallImg1.classList.remove('toggled-image');
    smallImg3.classList.remove('toggled-image');
    smallImg4.classList.remove('toggled-image');

    //change the large img
    mainImg.src = 'images/image-product-2.jpg';   
    }else{
        1 == 1;
    }
})

smallImg3.addEventListener('click', () =>{
    if (window.innerWidth <= 800) {
    //add the classList to the element
    smallImg3.classList.add('toggled-image');

    //remove other elements styles
    smallImg1.classList.remove('toggled-image');
    smallImg2.classList.remove('toggled-image');
    smallImg4.classList.remove('toggled-image');

    //change the large img
    mainImg.src = 'images/image-product-3.jpg';   
    }else{
        1 == 1;
    }
})

smallImg4.addEventListener('click', () =>{
    //add the classList to the element
    smallImg4.classList.add('toggled-image');

    //remove other elements styles
    smallImg1.classList.remove('toggled-image');
    smallImg2.classList.remove('toggled-image');
    smallImg3.classList.remove('toggled-image');

    //change the large img
    mainImg.src = 'images/image-product-4.jpg';
})

//pop-up
const littleImg1 = document.querySelector('.little-img-1');
const littleImg2 = document.querySelector('.little-img-2');
const littleImg3 = document.querySelector('.little-img-3');
const littleImg4 = document.querySelector('.little-img-4');
const bigImg = document.querySelector('.big-img');


littleImg1.addEventListener('click', () =>{
    //add the classList to the element
    littleImg1.classList.add('toggled-image');

    //remove other elements styles
    littleImg2.classList.remove('toggled-image');
    littleImg3.classList.remove('toggled-image');
    littleImg4.classList.remove('toggled-image');

    //change the large img
    bigImg.src = 'images/image-product-1.jpg';
})

littleImg2.addEventListener('click', () =>{
    //add the classList to the element
    littleImg2.classList.add('toggled-image');

    //remove other elements styles
    littleImg1.classList.remove('toggled-image');
    littleImg3.classList.remove('toggled-image');
    littleImg4.classList.remove('toggled-image');

    //change the large img
    bigImg.src = 'images/image-product-2.jpg';   
})

littleImg3.addEventListener('click', () =>{
    //add the classList to the element
    littleImg3.classList.add('toggled-image');

    //remove other elements styles
    littleImg1.classList.remove('toggled-image');
    littleImg2.classList.remove('toggled-image');
    littleImg4.classList.remove('toggled-image');

    //change the large img
    bigImg.src = 'images/image-product-3.jpg';   
})

littleImg4.addEventListener('click', () =>{
    //add the classList to the element
    littleImg4.classList.add('toggled-image');

    //remove other elements styles
    littleImg1.classList.remove('toggled-image');
    littleImg2.classList.remove('toggled-image');
    littleImg3.classList.remove('toggled-image');

    //change the large img
    bigImg.src = 'images/image-product-4.jpg';   
})


//make the cancel btn change color
const cancelBtn = document.querySelector('.cancel img');

cancelBtn.addEventListener('mouseover', () =>{
    cancelBtn.src = 'images/icon-close.svg';
})

cancelBtn.addEventListener('mouseout', () =>{
    cancelBtn.src = 'images/icon-close - Copy.svg';
})

//show the pop-up
mainImg.addEventListener('click', () =>{
    popUp.style.display = 'block';
})

//cancel the pop-up
popUp = document.querySelector('.pop-up-wrapper');
cancelBtn.addEventListener('click', () =>{
    popUp.style.display = 'none';
})

const cartDivPopUp = document.querySelector('.cart-pop-up');
cartDivPopUp.addEventListener('reload', () =>{
    let height = cartDivPopUp.offsetHeight;
    console.log(height);
})

cartDivPopUp.addEventListener('onload', () =>{
    let height = cartDivPopUp.offsetHeight;
    console.log(height);
})

//make the cart pop up
const cartBtn = document.querySelector('.cart-icon');
const cartPopUp = document.querySelector('.cart-pop-up');
cartBtn.addEventListener('click', () =>{
    cartPopUp.classList.toggle('cart-pop-up-active');
})


/*addToCart = document.getElementById('addToCart');
addToCart.addEventListener('click', () =>{
    if (document.getElementById('cart-number').innerHTML = 0) {
        alert('Cart is empty');
    } else {
        document.getElementById('number-div').style.display = 'block';
    }
})*/

//make the add to cart button to display the number of items
//name the button
addToCartBtn = document.querySelector('.cart');
//name the number shit to show
numberDiv = document.querySelector('.number-div');
numberDivP = document.getElementById('number-div-number');
//name the counter value
cartNumber = document.getElementsByClassName('.cart-number');
cartNumberValue = cartNumber.innerHTML;

addToCartBtn.addEventListener("click", () =>{
    if (cartNumberValue = 0) {
        numberDivP = 0;
    }else if(cartNumberValue = 1 || cartNumberValue > 1){
        numberDiv.style.opacity = '1.0';
        numberDivP.innerHTML = cartNumberValue;
        emptyText.style.opacity = 0;
        document.querySelector('.card').style.opacity = 1;
    }    
})

//numberDivP = cartNumberValue;

//cart counter
let count = 0;
const numberOfItems = document.querySelector('#numberSpan');
let total = document.querySelector('#total');
const amount = document.querySelector('#amount');

//assign roles to the btns
document.getElementById('minus').addEventListener('click', () =>{
    if (document.getElementById('cart-number').innerHTML <= 0) {
        count = 0;
    }
    else{
        count -= 1;
    }
    document.getElementById('cart-number').innerHTML = count;
    numberDivP.innerHTML = count;
    numberSpan.innerHTML = count;

    total.innerHTML = count * amount.innerHTML;
})

document.getElementById('plus').addEventListener('click', () =>{
    count += 1;
    document.getElementById('cart-number').innerHTML = count;
    numberDivP.innerHTML = count;
    numberSpan.innerHTML = count;

    total.innerHTML = count * amount.innerHTML;
})

//Total


// To delete the items in cart
delImg = document.querySelector('#delImg');
card = document.querySelector('.card');
emptyText = document.querySelector('#empty-text');
delImg.addEventListener('click', () =>{
    card.style.opacity = 0;
    emptyText.style.opacity = 1;
    numberDivP == 0;
    cartNumberValue == 0;
})

//slide in the navbar
const grayOverlay = document.querySelector('.gray-overlay');
const navLinks = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');

burger.addEventListener('click', () =>{
    grayOverlay.style.left = '0';
    grayOverlay.style.display = 'block';
    navLinks.style.left = '0';
})

//slide-out the navlinks
const navCancel = document.querySelector('.cancelBtnNavLinks');

navCancel.addEventListener('click', () =>{
    grayOverlay.style.left = '-100%';
    navLinks.style.left = '-100%';
})

function waveAside(){
    grayOverlay.style.left = '-100%';
    navLinks.style.left = '-100%';
}

let startX, endX

navLinks.addEventListener('touchstart', (e) =>{
    startX = e.touches[0].clientX;
})

navLinks.addEventListener('touchstart', (e) =>{
    //PREVENT SCROLLIG WHILE SWIPING
    e.preventDefault();
})

navLinks.addEventListener('touchstart', (e) =>{
    endX = e.changedTouches[0].clientX;

    //calculate swipe distance and direction
    let deltaX = endX - startX;

    //threshold for swipe distance
    let threshold = 50;

    if (Math.abs(deltaX) > threshold) {
        if (deltaX > 0) {
            //swipe right
            console.log('swipe right');
        } else {
            //swipe left
            console.log('swipe left');
        }
    }
})
