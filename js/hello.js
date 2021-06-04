class Hello {
  constructor(duration) {
    this.duration = duration;

  }

  appear() {
    const div = document.createElement("div");
    div.setAttribute("class", "container");
    // div.innerHTML = document.getElementById("loader").innerHTML;
    div.innerHTML = helloContent;
    document.body.appendChild(div);
    const left = document.querySelector(".left");
    const photo = document.querySelector(".photo");
    const title = document.querySelector(".start");

    setTimeout(leftAppear, this.duration+500);
    setTimeout(photoAppear, this.duration+1000);
    setTimeout(titleAppear, this.duration+1500);
    setTimeout(btn, this.duration+1500);
    setTimeout(logo, this.duration+1500);

    
    function leftAppear() {
      left.style.opacity = "1";
    }

    function photoAppear() {
      photo.style.opacity = "1";
    }

    function titleAppear() {
      title.style.opacity = "1";
      title.style.padding = "20px 0 0 0";
    }

    function logo() {
      const logoImg = document.getElementById("logo");
      logoImg.style.width = "100px";
      logoImg.style.height = "100px";
      // logoImg.addEventListener("mouseover", function() {
      //   console.log(logoImg);
      //   this.style.cursor = "pointer";
      //   this.style.width = "150px";
      //   this.style.height = "150px";
      // });

    }

    function btn() {
        const btn = document.getElementById("link");
        btn.addEventListener("mouseover", function() {
          console.log("Mouse over");
          this.style.cursor = "pointer";
          this.style.padding = "30px 0 0 0";
        });
        btn.addEventListener("mouseout", function() {
          this.style.padding = "0 0 0 0";
        });
        btn.addEventListener("click", function() {
          window.scrollBy({
            top: window.innerHeight,
            left: 0,
            behavior: "smooth"
          });
        });
      }
  }


  // window.addEventListener('scroll', function() {
  //   document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
  // });
}

const helloContent = `<div class="left">
    <div class="start">
    <div class="logo"><img src="img/logo-swan-curve.svg" alt="logo" id="logo" /></div>
      <p class="title">
      Hello! I am Yúrii.</p>
      <p>Experienced digital designer with a passion for UX and branding.
        I confess user centered design principles.
        My approach based on simplicity and functionality in combination with an attractive look.
      </p>
      
      <div class="arrow" id="link"><img src="img/arrow-v.svg" alt="arrow" /></div>
    </div>
    </div>
<div class="photo">
    <video autoplay loop id="video-background" muted>
        <source src="video/comp13.mp4" type="video/mp4" />
        <source src="video/-.webm" type="video/webm" />
        <source src="video/-.ogg" type="video/ogg" />
      </video>
</div>
</div>
</div>`








{/* <div class="portfolio">
  <div class="start-100">
    <p class="title">Selected works</p>
  </div>
</div>; */}

// function onScroll2(){
//   window.addEventListener('scroll', function() {
//     document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
//   });
// }
