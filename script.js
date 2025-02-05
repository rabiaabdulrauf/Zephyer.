// function sendMail(){

//   var params={
//     name:document.getElementById("name").value,
//     email:document.getElementById("email").value,
//     message:document.getElementById("msg").value,
//     select:document.getElementById("choose").value,
//   };

//   const serviceID="service_933ivou";
//   const  tempID="template_7lcg51e";
  
//  emailjs
// .send(serviceID,tempID,params)
// .then((res) =>{
//     document.getElementById("name").value="";
//     document.getElementById("email").value="";
//     document.getElementById("message").value="";
//     document.getElementById("select").value="";
//     console.log(res);
//     alert("successful");
// })
// .catch((err) => console.log(err));
// }





function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  const images = document.querySelectorAll('.image-div img');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  let currentIndex = 0;
  
  leftArrow.addEventListener('click', () => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    images[currentIndex].classList.add('active');
  });
  
  rightArrow.addEventListener('click', () => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
  });
  const slider = document.querySelector('.Card-slider');
  const Cards = document.querySelectorAll('.Card');
  const totalCards = Cards.length;
  
  let currentIndexs = 0;
  
  document.getElementById('next').addEventListener('click', () => {
      if (currentIndexs < totalCards - 5) { // Prevent going out of bounds
          currentIndexs++;
          updateSlider();
      }
  });
  
  document.getElementById('prev').addEventListener('click', () => {
      if (currentIndexs > 0) { // Prevent going out of bounds
          currentIndexs--;
          updateSlider();
      }
  });
  
  function updateSlider() {
    const offset = -currentIndexs * (100 / 5); // Calculate the offset based on index
   slider.style.transform = `translateX(${offset}%)`;
 }    