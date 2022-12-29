window.addEventListener('scroll', ()=>{
    let mountain1 = document.querySelector('.vision4');
    let mountain2 = document.querySelector('.vision3');
    let mountain3 = document.querySelector('.vision2');
    let mountain4 = document.querySelector('.vision1');

    let hands = document.querySelector('.historyBack');


    const top1 = mountain1.getBoundingClientRect().top;
    const top2 = mountain2.getBoundingClientRect().top;
    const top3 = mountain3.getBoundingClientRect().top;
    const top4 = mountain4.getBoundingClientRect().top;

    const top5 = hands.getBoundingClientRect().top;


    let value = window.scrollY;

    mountain1.style.top = ((value * 0.6)-300) + 'px';
    mountain2.style.top = ((value * 0.5)-200) + 'px';
    mountain3.style.top = ((value * 0.3)-150) + 'px';
    mountain4.style.top = ((value * 0.2)-100) + 'px';

    hands.style.top = ((value*0.15)-500)+'px';
  

});
window.addEventListener('scroll', ()=>{
    let mountain5 = document.querySelector('.mission4');
    let mountain6 = document.querySelector('.mission3');
    let mountain7 = document.querySelector('.mission2');
    let mountain8 = document.querySelector('.mission1');


    const top1 = mountain5.getBoundingClientRect().top;
    const top2 = mountain6.getBoundingClientRect().top;
    const top3 = mountain7.getBoundingClientRect().top;
    const top4 = mountain8.getBoundingClientRect().top;


    let value = window.scrollY;

    mountain5.style.top = ((value * (-0.5))+600) + 'px';
    mountain6.style.top = ((value * 0.5)-300) + 'px';
    mountain6.style.left = (-((value * 0.5)-400)) + 'px';
    mountain6.style.scale = 1+ (value -500)* 0.0001;
    mountain7.style.top = ((value * 0.3)-150) + 'px';
    mountain7.style.right = (-((value * 0.6)-400)) + 'px';
    mountain7.style.scale = 1+ (value -500)* 0.0001;
    mountain8.style.top = ((value * 0.2)-100) + 'px';
  

});

window.addEventListener('scroll',()=>{

    let navg = document.querySelector('.main-nav');
    let logo = document.querySelector('.logo');
    let link = document.querySelectorAll('.link');
    let about = document.querySelector('.about-us');
    let aboutD = document.querySelector('.about_d');
    let aboutBox = document.querySelector('.about-box');
    let missionD = document.querySelector('.mission_d');
    let visionD = document.querySelector('.vision_d');
    let mission = document.querySelectorAll('.mission');
    let vision = document.querySelectorAll('.vision');
    let video = document.querySelector('.video');
    
    
    var screenHeignt = navg.getBoundingClientRect().top;
    var aboutHeignt = about.getBoundingClientRect().top;
   
   
    if(screenHeignt <= 0){
         navg.classList.add('color');
         logo.classList.add('display-logo');
         link[0].classList.add('font-color');
         link[1].classList.add('font-color');
         link[2].classList.add('font-color');
         link[3].classList.add('font-color');
         link[4].classList.add('font-color');
   
       
    }else{
         navg.classList.remove('color');
         logo.classList.remove('display-logo');
         link[0].classList.remove('font-color');
         link[1].classList.remove('font-color');
         link[2].classList.remove('font-color');
         link[3].classList.remove('font-color');
         link[4].classList.remove('font-color');
   
         
    };

    if(aboutHeignt<=300 & aboutHeignt>-105){
        aboutD.classList.add('d-display');
        visionD.classList.remove('d-display');
        missionD.classList.remove('d-display');
        aboutBox.classList.remove('position-2');
        aboutBox.classList.remove('position-1');
        video.classList.remove('video-display');
        
  
      
   }else if(aboutHeignt<=-105 & aboutHeignt>-200){
        aboutD.classList.remove('d-display');
        visionD.classList.remove('d-display');
        missionD.classList.add('d-display');
        aboutBox.classList.add('position-1');
        aboutBox.classList.remove('position-2');

        mission[0].classList.remove('mv-not-display');
        mission[1].classList.remove('mv-not-display');
        mission[2].classList.remove('mv-not-display');
        mission[3].classList.remove('mv-not-display');
        vision[0].classList.remove('mv-display');
        vision[1].classList.remove('mv-display');
        vision[2].classList.remove('mv-display');
        vision[3].classList.remove('mv-display');

        video.classList.add('video-display');
        
        
  
        
   }else if(aboutHeignt<=-200){
        missionD.classList.remove('d-display');
        aboutD.classList.remove('d-display');
        visionD.classList.add('d-display');
        aboutBox.classList.add('position-2');
        aboutBox.classList.remove('position-1');

        mission[0].classList.add('mv-not-display');
        mission[1].classList.add('mv-not-display');
        mission[2].classList.add('mv-not-display');
        mission[3].classList.add('mv-not-display');
        vision[0].classList.add('mv-display');
        vision[1].classList.add('mv-display');
        vision[2].classList.add('mv-display');
        vision[3].classList.add('mv-display');
    

    
    };
   
   });
   let burger = document.querySelector('.burger');
   burger.addEventListener('click',()=>{
     document.querySelector('.nav-links').classList.toggle('nav-links-display');
     document.querySelector('.burger').classList.toggle('left');

   });