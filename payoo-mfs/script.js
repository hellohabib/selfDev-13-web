// btn-login functionality
document.getElementById('btn-login')
.addEventListener('click',function(event){
    console.log('clicked');
    event.preventDefault();
    //console.log(event);

    const mobileDbValue=123456;
    const pinDbValue=1234;
//input-mob
    const mobileEnteredByUser= parseInt(document.getElementById('input-mob').value); 

// input-pin
    const pinEnteredByUser=parseInt(document.getElementById('input-pin').value);

    if(mobileDbValue==mobileEnteredByUser && pinDbValue==pinEnteredByUser){
        console.log('Login Success');
        window.location.href="./home.html"

    }
    else{
        //console.log("Invalid Credentials");
        alert("Invalid Credentials");
    }
})