
const image = document.querySelector('.image');

const hover = document.querySelector('.hover');

const model = document.querySelector('.model');

const close = document.querySelector('.close');

function show(){
    console.log("sdas")
    hover.classList.add('active');
    model.classList.add('show');
}
function hide(){
    hover.classList.remove('active');
    model.classList.remove('show');
}


image.addEventListener('click' , show);
close.addEventListener('click' , hide);


// Days to Calc
setInterval(scndfun , 1000);


function scndfun() {
    let d = new Date();
    let d2 = new Date();
    var years = new Date(new Date() - new Date('2018')).getFullYear() - 1970;
    var months = new Date(new Date() - new Date('2018')).getMonth();
    var past_date = new Date('10/9/2018');
    var current_date = new Date();
  
    var date1 = new Date("09/10/2018");
    var date2 = new Date(d2.getMonth()+"/"+d2.getDate()+"/"+d2.getFullYear());
    
    // To calculate the time difference of two dates
    var Difference_In_Time = date2.getTime() - date1.getTime();
    
    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  
    var difference = (current_date.getFullYear()*12 + current_date.getMonth()) - (past_date.getFullYear()*12 + past_date.getMonth());
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(2018, 9, 10);
    const secondDate = new Date(d2.getFullYear(), d2.getMonth()+1, d2.getDate());
  
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  
    document.getElementById("demoyear").innerHTML=
    years;
    document.getElementById("demomonth").innerHTML=
    difference;
    document.getElementById("demodays").innerHTML=
    diffDays;
  }


  //edu

  const schl = document.querySelector(".schl");
const clg = document.querySelector(".clg");
const wrkplce = document.querySelector(".wrkplce");

const school = document.querySelector(".school");
const College = document.querySelector(".College");
const Workcmy = document.querySelector(".Workcmy");
console.log(schl);

const bg_hoverclr = document.querySelectorAll(".overcor");

console.log(bg_hoverclr);
schl.addEventListener('click' , () => {
    console.log('ddclick here');

    for( i=0 ; i < bg_hoverclr.length;i++){
        bg_hoverclr[i].classList.remove('bg__coloredu');
    }
        
});



schl.addEventListener('click' , () => {
    console.log('click here');
    
    for( i=0 ; i < bg_hoverclr.length;i++){
        bg_hoverclr[i].classList.remove('bg__coloredu');
    }
    schl.classList.add('bg__coloredu');
    school.classList.remove('notdisplay');
    College.classList.add('notdisplay');
    Workcmy.classList.add('notdisplay');
});

clg.addEventListener('click' , () => {
    console.log('click here');
    for( i=0 ; i < bg_hoverclr.length;i++){
        bg_hoverclr[i].classList.remove('bg__coloredu');
    }
    clg.classList.add('bg__coloredu');
    College.classList.remove('notdisplay');
    school.classList.add('notdisplay');
    Workcmy.classList.add('notdisplay');
});

wrkplce.addEventListener('click' , () => {
    console.log('click here');
    for( i=0 ; i < bg_hoverclr.length;i++){
        bg_hoverclr[i].classList.remove('bg__coloredu');
    }
    wrkplce.classList.add('bg__coloredu');
    Workcmy.classList.remove('notdisplay');
    school.classList.add('notdisplay');
    College.classList.add('notdisplay');
  

});