const form = document.getElementById("signupForm");
const thankYou = document.getElementById("thankYouMessage");

form.addEventListener("submit", function(e){

    e.preventDefault();

    form.classList.add("fade-out");

    setTimeout(() => {

        form.style.display = "none";

        thankYou.style.display = "block";

        setTimeout(()=>{
            thankYou.classList.add("fade-in");
        },50);

    },800);

});
     