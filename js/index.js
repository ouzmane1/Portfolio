
var typed = new Typed('#typed', {
    strings: ["NDOME Ousmane", "Ousmane NDOME"],
    typeSpeed: 100,  //la vitesse en ms
    loop: 1,  // pour la boucle
    startDelay: 100,  // temps avant que le typed commence
    backSpeed: 100,   // vitesse de l'espacement en ms
    
  });

var btn = document.getElementById('btn-contact');
btn.addEventListener('click', ()=>{
  window.location.href = '#contact';
})

$(window).scroll(function(){
  if($(this).scrollTop() > 0){
    $('header').fadeIn('slow').css('display','flex');
  }else{
    $('header').fadeOut('slow').css('display','none');
  }
})


// function menuMobile(){
//     var btn = document.querySelector(".navbar-toggler");
//     var nav = document.querySelector(".navbar-nav");
//     btn.addEventListener('click',affiche);
//     function affiche(){
//         document.body.;
//     }
// }
// menuMobile();
// $(document).ready(function(){
//     $('.navbar-toggler').click(function(){
//         $('.navbar-nav').toggle();
//     })
// })

const observerIntersectionAnimation = () => {
    const skills = document.querySelectorAll('.about .bar');
  
    skills.forEach((elem, index) => {
      elem.style.width = "0";
      elem.style.transition = "all 1.6s";
    });
  
    let sectionObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let elem = entry.target;
          elem.style.opacity = 1;
        }
      });
    });
  
    let skillsObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let elem = entry.target;
          elem.style.width = elem.dataset.width + '%';
        }
      });
    });
  
    skills.forEach(skill => {
      skillsObserver.observe(skill);
    });
  }
  
  observerIntersectionAnimation();