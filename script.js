//Toggling FAQs
// let ques1 = document.getElementById('ques1');
// let ques2 = document.getElementById('ques2');
// let ques3 = document.getElementById('ques3');
// let ques4 = document.getElementById('ques4');
// let ques5 = document.getElementById('ques5');
// let ques6 = document.getElementById('ques6');

// let ans1 = document.getElementById('ans1');
// let ans2 = document.getElementById('ans2');
// let ans3 = document.getElementById('ans3');
// let ans4 = document.getElementById('ans4');
// let ans5 = document.getElementById('ans5');
// let ans6 = document.getElementById('ans6');

// let flag_one = false,
//     flag_two = false,
//     flag_three = false,
//     flag_four = false,
//     flag_five = false,
//     flag_six = false;

// ques1.addEventListener("click", ()=>{
//     if(flag_one == false){
//         ans1.style.display = 'block';
//         flag_one = true;
//     }
//     else{
//         ans1.style.display = 'none';
//         flag_one = false;
//     }  
// });

// ques2.addEventListener("click", ()=>{
//     if(flag_two == false){
//         ans2.style.display = 'block';
//         flag_two = true;
//     }
//     else{
//         ans2.style.display = 'none';
//         flag_two = false;
//     }  
// });

// ques3.addEventListener("click", ()=>{
//     if(flag_three == false){
//         ans3.style.display = 'block';
//         flag_three = true;
//     }
//     else{
//         ans3.style.display = 'none';
//         flag_three = false;
//     }  
// });

// ques4.addEventListener("click", ()=>{
//     if(flag_four == false){
//         ans4.style.display = 'block';
//         flag_four = true;
//     }
//     else{
//         ans4.style.display = 'none';
//         flag_four = false;
//     }  
// });

// ques5.addEventListener("click", ()=>{
//     if(flag_five == false){
//         ans5.style.display = 'block';
//         flag_five = true;
//     }
//     else{
//         ans5.style.display = 'none';
//         flag_five = false;
//     }  
// });

// ques6.addEventListener("click", ()=>{
//     if(flag_six == false){
//         ans6.style.display = 'block';
//         flag_six = true;
//     }
//     else{
//         ans6.style.display = 'none';
//         flag_six = false;
//     }  
// });

// Making Navbar sticky
let nav = document.querySelector(".my_navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("on-scroll");
    }
    else{
        nav.classList.remove("on-scroll");
    }
}

//removing box-shadow of navbar toggle button
let toggle_button = document.getElementById("nav-toggler-btn");
let toggle_icon = document.getElementById("nav_toggler_icon");

toggle_icon.addEventListener("click", ()=>{
    toggle_button.style.boxShadow = 'none';
});

//close navbar on click
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');

navBar.forEach(function(link){
    link.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    });
});