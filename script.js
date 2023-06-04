const btn = document.querySelector("[main-btn]");
const input = document.querySelector("[main-input]");
const Invalid = document.querySelector("[invalid]");
const container = document.querySelector(".container");
const main = document.querySelector("main");
const firstHalf = document.querySelector("[first-half]");
const secondHalf = document.querySelector("[second-half]");
const success = document.querySelector("[success]");

const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

btn.addEventListener("click", () => {
    if (regex.test(input.value)) {
        
        HandleSuccess();

    } else {
        input.classList.add("error");
        Invalid.style.display = "block";
    }
})

function HandleSuccess() {
    if(regex.test(input.value)){
            firstHalf.classList.add("hide");
        secondHalf.classList.add("hide");
        success.classList.add("show");
        if (window.innerWidth > 992) {
            container.classList.add("success");
            // Just To Help me To test Website In Desktop (Useless Scripts)

            success.classList.remove("success-form");
            main.classList.remove("main-success")
            container.classList.remove("main-success")
            success.style.justifyContent = "";
            // 
        }
        if (window.innerWidth < 991) {

            if (window.innerWidth > 450) {
               container.classList.add("success");

            }
            // Just To Help me To test Website In Desktop (Useless Scripts)

            if (window.innerWidth < 450) {
               container.classList.remove("success");

            }
            // 
             success.classList.add("success-form");
            main.classList.add("main-success")
            container.classList.add("main-success")
            success.style.justifyContent = "space-between";


            }
}
}
// Just To Help me To test Website In Desktop (Useless Scripts)
window.addEventListener("resize", HandleSuccess);