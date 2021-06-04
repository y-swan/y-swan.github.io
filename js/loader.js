class Loader {
  constructor(duration, background, color) {
    this.duration = duration;
    this.bg = background;
    this.color = color;
  }

  load() {
    const div = document.createElement("div"); 
    div.setAttribute("class", "wrapper");
    div.innerHTML = loaderContent;
    document.body.appendChild(div);
    div.style.background = this.bg;
    setTimeout(changePosition, this.duration);


    function changePosition() { 
      const svg = div.firstElementChild;
      // svg.style.position = "absolute";
      // svg.style.left = "50px";


      let position1 = svg.getBoundingClientRect();
      console.log(position1);
      svg.style.transform = "translateY(-520px) scale(0, 0)" ;
      // svg.style.transform = "scale(0, 0)"

      // svg.style.top = "20px";

      let position2 = svg.getBoundingClientRect();
      console.log(position2);
      // loader.style.width = "0"; 
    };




    // setTimeout(loaderChange, this.duration);
      
    // function loaderChange() { 
    //   loader.style.width = "0"; 
    // };
  }
  



  remove() {
    setTimeout(loaderRemove, this.duration+2500);
    function loaderRemove() {
    const loader = document.querySelector(".wrapper");
    loader.parentNode.removeChild(loader);
  };
  }
}




const loaderContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="80" height="86" viewBox="0 0 80 86" fill="none" class="logo-loader">
<style>
@keyframes a0_do { 0% { stroke-dashoffset: 500px; } 100% { stroke-dashoffset: 0px; } }
</style>
<path d="M55.1 13c1.2 2.7 3.4 8.6 3 11c-0.4 2.4-1.5-0.7-2-2.5c1.7-1.5 5-5.9 5-11.5c0-5.6-3.5-8-6.4-8c-3 0-8.5 3-8.5 12c0 8 5 15 16.4 29.5c11.4 14.5 14.4 19.5 14.4 27c0 7.5-5.5 12.5-15.9 12.5c-10.4 0-39.7 0-58.1 0c8.8-6.3 31.4-19 51.7-19c8.9 0 12.4 1.5 12.4 4.5c0 3-3.6 5-12.4 5c-8.9 0-30.5-6-40.8-9c5-4.8 18-14.5 30.3-14.5c6.5 0 9.5 1.5 9.5 3.5c0 2-2.5 4-9.5 4c-5.5 0-15.9-3.3-20.3-5" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dashoffset="500" stroke-dasharray="500" style="animation: 3s linear both a0_do;"/></svg>
      
      `




// function loaderBack() {
//   const loaderBack = document.querySelector(".loader-back");
//   loaderBack.style.height = "100vh";
// }

// function loader() {
//   const loader = document.querySelector(".wrapper");
//   loader.parentNode.removeChild(loader);
// }
