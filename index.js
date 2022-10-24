const toTop = document.getElementById('to-top')
const toTopCont = document.getElementById('cont-to-top')
const toTopNone = document.getElementById('to-top-none')
const itemList = document.getElementById('item')
const footer = document.getElementById('footer')
const nav = document.getElementById('nav')
const ul = document.getElementById('ul')
const toggle = document.getElementById('toggle')

toggle.addEventListener('click', e => {
    nav.classList.toggle('toggle')
    ul.classList.toggle('none')
    nav.classList.toggle('nav')
    
})

ul.addEventListener('click', e => {
    nav.classList.toggle('toggle')
    ul.classList.toggle('none')
    nav.classList.toggle('nav')

})


window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
  
    if(window.scrollY > 60){
      document.querySelector('#scroll-top').classList.add('active');
    }else{
      document.querySelector('#scroll-top').classList.remove('active');
    }
  
  }