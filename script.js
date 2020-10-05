const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
     const target = +counter.getAttribute('data-target');
     const count = +counter.innerText;
     const inc = target / speed;

     if(count < target){

     } else{
         count.innerText = target;
     }
    }
    updateCount();
})