


//모달팝업 

let modal_pop = document.querySelectorAll('.modal_pop');
let tabBox = document.querySelectorAll('.tabBox');
let closeBtn = document.querySelector('.close')


for(let i=0; i<tabBox.length; i++){
    tabBox[i].addEventListener("click", () => {
       modal_pop.forEach((e)=>{
        e.style.display ="block"
       })
    })
    closeBtn.addEventListener("click", () =>{
        modal_pop[i].style.display = "none";
    })
};


//섹션 배경 바뀌면서 컨텐츠 변경

let listT = document.querySelectorAll('.tab_title>ul>li');
let tab_wrap = document.querySelector('.section2 .tab_wrap');
let tab_wrap2 = document.querySelector('.tab_wrap2');
let tabCont = document.querySelectorAll('section2 .tabCont');


for(let i=0; i<listT.length; i++){
    listT[i].addEventListener('click', () =>{
        listT.forEach((e) =>{
            e.classList.remove('active');
            tabCont.forEach((e)=>{
                e.classList.remove('fadeCon');
            });
        })
        listT[i].classList.add('active');
        tabCont[i].classList.add('fadeCon');
    });

    listT[0].addEventListener('click', ()=>{
        tab_wrap.style.backgroundColor = '#95bbc4'
    })
    listT[1].addEventListener('click', ()=>{
        tab_wrap.style.backgroundColor = '#9cc4ae'
    })
    listT[2].addEventListener('click', ()=>{
        tab_wrap.style.backgroundColor = '#FCE3B2'
    })
    listT[3].addEventListener('click', ()=>{
        tab_wrap.style.backgroundColor = '#dfc6c6'
    })
    
}


let title_js = document.querySelectorAll('.title_js>ul>li');
let js_cont = document.querySelectorAll('.js_cont');

for(let j=0; j<title_js.length; j++){
    title_js[j].addEventListener('click', () =>{
        title_js.forEach((e) =>{
            e.classList.remove('active');
            js_cont.forEach((e)=>{
                e.classList.remove('fadeCon2');
            });
        })
        title_js[j].classList.add('active');
        js_cont[j].classList.add('fadeCon2');
    });

    title_js[0].addEventListener('click', ()=>{
        tab_wrap2.style.backgroundColor = '#F2F2F2'
    })
    title_js[1].addEventListener('click', ()=>{
        tab_wrap2.style.backgroundColor = '#E7E2D7'
    })
    title_js[2].addEventListener('click', ()=>{
        tab_wrap2.style.backgroundColor = '#D1D9E0'
    })
  
    
}
