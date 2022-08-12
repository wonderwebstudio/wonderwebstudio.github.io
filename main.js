var submitBtn = document.getElementById("submit-btn");
var subscribeEmail = document.getElementById("email");


submitBtn.addEventListener('click', function(e){
    e.preventDefault();

    if(subscribeEmail.value === ""){
        alert("Please fill in your email!");
    } else{
        subscribeEmail.value = "";
        alert("Thank you for subscribing");
    }
})
