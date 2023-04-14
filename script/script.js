const thankYouEl = document.querySelector(".thank-you");
const interactiveRatingEl = document.querySelector(".interactive-rating");

const feedbackForm = document.querySelector("#feedback__form");
let allRadioBtn = document.querySelectorAll("input[type='radio']")
let userRating = document.querySelector(".js-user-rating");

feedbackForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    interactiveRatingEl.classList.add("hide-section");
    thankYouEl.classList.remove("hide-section");
    allRadioBtn.forEach(radioBtn =>{
        if(radioBtn.checked){
            userRating.textContent = radioBtn.value;
        }
    } )
})