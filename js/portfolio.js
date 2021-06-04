class Portfolio {
  constructor(duration) {
    this.duration = duration;
  }

  appear() {
    const div = document.createElement("div");
    div.setAttribute("class", "portfolio");
    // div.innerHTML = document.getElementById("loader").innerHTML;
    div.innerHTML = portfolioContent;
    document.body.appendChild(div);
    atvImg();

    const portfolio = document.querySelector(".portfolio");
  }
}

const portfolioContent = `
<div class="start-100">
  <p class="title">Selected works</p>
</div>
<div class="container-portolio">

<div class="cover">
  <img class="img" src="img/bg-2.jpg" alt="Girl in a jacket">
  <div class="case-title">Disaster alert mobile appliction</div>
  <div class="tags">Branding, UI, UX, Producrt Design</div>
  <div class="desk">Disaster alert mobile appliction. Disaster alert mobile appliction. Disaster alert mobile appliction. </div>
</div>
<div class="cover">
  <img class="img" src="img/bg-2.jpg" alt="Girl in a jacket">
  <div class="case-title">Disaster alert mobile appliction</div>
  <div class="tags">Branding, UI, UX, Producrt Design</div>
  <div class="desk">Disaster alert mobile appliction. Disaster alert mobile appliction. Disaster alert mobile appliction. </div>
</div>
<div class="cover">
  <img class="img" src="img/bg-2.jpg" alt="Girl in a jacket">
  <div class="case-title">Disaster alert mobile appliction</div>
  <div class="tags">Branding, UI, UX, Producrt Design</div>
  <div class="desk">Disaster alert mobile appliction. Disaster alert mobile appliction. Disaster alert mobile appliction. </div>
</div>

</div>
`;
