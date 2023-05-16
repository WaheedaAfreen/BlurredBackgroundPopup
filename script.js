const main = document.querySelector(".main");
const btn = document.querySelector(".btn");
const last = document.querySelector(".last");
const closeIcon = document.querySelector(".closeIcon");
//
// btn.addEventListener("click", ()=>{
//     alert(this);
//
// });

btn.addEventListener("click", () => {
    main.classList.add("active");
   last.classList.remove("active");
});

closeIcon.addEventListener("click", () => {
 main.classList.remove("active");
   last.classList.add("active");
});