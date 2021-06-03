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

function atvImg() {
  var d = document,
    de = d.documentElement,
    bd = d.getElementsByTagName("body")[0],
    htm = d.getElementsByTagName("html")[0],
    win = window,
    title = d.querySelectorAll(".title"),
    totalTitles = title.length,
    imgs = d.querySelectorAll(".atvImg"),
    totalImgs = imgs.length,
    supportsTouch = "ontouchstart" in win || navigator.msMaxTouchPoints;

  if (totalImgs <= 0) {
    return;
  }

  for (var l = 0; l < totalImgs; l++) {
    var thisImg = imgs[l],
      layerElems = thisImg.querySelectorAll(".atvImg-layer"),
      totalLayerElems = layerElems.length;

    if (totalLayerElems <= 0) {
      continue;
    }

    while (thisImg.firstChild) {
      thisImg.removeChild(thisImg.firstChild);
    }

    var containerHTML = d.createElement("div"),
      shineHTML = d.createElement("div"),
      shadowHTML = d.createElement("div"),
      layersHTML = d.createElement("div"),
      titleHTML = d.createElement("h1"),
      layers = [];

    thisImg.id = "atvImg__" + l;
    containerHTML.className = "atvImg-container";
    shineHTML.className = "atvImg-shine";
    shadowHTML.className = "atvImg-shadow";
    layersHTML.className = "atvImg-layers";
    titleHTML.className = "atvImg-title";

    for (var i = 0; i < totalLayerElems; i++) {
      var layer = d.createElement("div"),
        imgSrc = layerElems[i].getAttribute("data-img");

      layer.className = "atvImg-rendered-layer";
      layer.setAttribute("data-layer", i);
      layer.style.backgroundImage = "url(" + imgSrc + ")";
      layersHTML.appendChild(layer);

      layers.push(layer);
    }

    containerHTML.appendChild(shadowHTML);
    containerHTML.appendChild(layersHTML);
    containerHTML.appendChild(shineHTML);
    thisImg.appendChild(containerHTML);

    var w = thisImg.clientWidth || thisImg.offsetWidth || thisImg.scrollWidth;
    thisImg.style.transform = "perspective(" + w * 3 + "px)";

    if (supportsTouch) {
      win.preventScroll = false;

      (function(_thisImg, _layers, _totalLayers, _shine) {
        thisImg.addEventListener("touchmove", function(e) {
          if (win.preventScroll) {
            e.preventDefault();
          }
          processMovement(e, true, _thisImg, _layers, _totalLayers, _shine);
        });
        thisImg.addEventListener("touchstart", function(e) {
          win.preventScroll = true;
          processEnter(e, _thisImg);
        });
        thisImg.addEventListener("touchend", function(e) {
          win.preventScroll = false;
          processExit(e, _thisImg, _layers, _totalLayers, _shine);
        });
      })(thisImg, layers, totalLayerElems, shineHTML);
    } else {
      (function(_thisImg, _layers, _totalLayers, _shine) {
        thisImg.addEventListener("mousemove", function(e) {
          processMovement(e, false, _thisImg, _layers, _totalLayers, _shine);
        });
        thisImg.addEventListener("mouseenter", function(e) {
          processEnter(e, _thisImg);
        });
        thisImg.addEventListener("mouseleave", function(e) {
          processExit(e, _thisImg, _layers, _totalLayers, _shine);
        });
        thisImg.addEventListener("click", function(e) {
          processOpenPage(e, _thisImg, _layers, _totalLayers, _shine);
        });
      })(thisImg, layers, totalLayerElems, shineHTML);
    }
  }

  function processMovement(e, touchEnabled, elem, layers, totalLayers, shine) {
    var bdst = bd.scrollTop || htm.scrollTop,
      bdsl = bd.scrollLeft,
      pageX = touchEnabled ? e.touches[0].pageX : e.pageX,
      pageY = touchEnabled ? e.touches[0].pageY : e.pageY,
      offsets = elem.getBoundingClientRect(),
      w = elem.clientWidth || elem.offsetWidth || elem.scrollWidth,
      h = elem.clientHeight || elem.offsetHeight || elem.scrollHeight,
      wMultiple = 320 / w,
      offsetX = 0.52 - (pageX - offsets.left - bdsl) / w,
      offsetY = 0.52 - (pageY - offsets.top - bdst) / h,
      dy = pageY - offsets.top - bdst - h / 2,
      dx = pageX - offsets.left - bdsl - w / 2,
      yRotate = (offsetX - dx) * (0.07 * wMultiple),
      xRotate = (dy - offsetY) * (0.1 * wMultiple),
      imgCSS = "rotateX(" + xRotate + "deg) rotateY(" + yRotate + "deg)",
      arad = Math.atan2(dy, dx),
      angle = (arad * 180) / Math.PI - 90;

    if (angle < 0) {
      angle = angle + 360;
    }

    if (elem.firstChild.className.indexOf(" over") != -1) {
      imgCSS += " scale3d(1.07,1.07,1.07)";
    }
    elem.firstChild.style.transform = imgCSS;

    shine.style.background =
      "linear-gradient(" +
      angle +
      "deg, rgba(255,255,255," +
      ((pageY - offsets.top - bdst) / h) * 0.4 +
      ") 0%,rgba(255,255,255,0) 80%)";
    shine.style.transform =
      "translateX(" +
      offsetX * totalLayers -
      0.1 +
      "px) translateY(" +
      offsetY * totalLayers -
      0.1 +
      "px)";

    var revNum = totalLayers;
    for (var ly = 0; ly < totalLayers; ly++) {
      layers[ly].style.transform =
        "translateX(" +
        offsetX * revNum * ((ly * 2.5) / wMultiple) +
        "px) translateY(" +
        offsetY * totalLayers * ((ly * 2.5) / wMultiple) +
        "px)";
      revNum--;
    }
  }
  function processOpenPage(e, elem, layers, totalLayers, shine) {
    console.log(e);
    console.log(elem);
    console.log(layers);
    console.log(totalLayers);
    console.log(shine);
    id = elem.getAttribute("id");
    console.log(id);
    //   temp = document.querySelector("portfolio");
    //   temp.parentNode.removeChild(temp);
    // layer = elem.firstChild.querySelector(".atvImg-rendered-layer");
    // div.style.background = layer.getAttribute("style");
    setTimeout(caseCreate, 0);
    setTimeout(caseAppear, 500);
    setTimeout(removeStuff, 1000);

    //   elem.firstChild.className += " open";
    //   elem.className = elem.className.replace("cover", "cover__open");
    
    function caseCreate() {
      const div = document.createElement("div");
      div.setAttribute("class", "case " + id);
      div.innerHTML = "case content for " + id;
      const firstChild = document.body.firstChild;
      document.body.insertBefore(div, firstChild);
      // document.body.appendChild(div);
    }
    function caseAppear(){
      const casePage = document.querySelector(".case");
      casePage.style.height = "100vh";
    }
    function removeStuff() {
      const portfolio = document.querySelector(".portfolio");
      portfolio.parentNode.removeChild(portfolio);
      const hello = document.querySelector(".container");
      hello.parentNode.removeChild(hello);
    }
  }
  function processEnter(e, elem) {
    elem.firstChild.className += " over";
  }

  function processExit(e, elem, layers, totalLayers, shine) {
    var container = elem.firstChild;

    container.className = container.className.replace(" over", "");
    container.style.transform = "";
    shine.style.cssText = "";

    for (var ly = 0; ly < totalLayers; ly++) {
      layers[ly].style.transform = "";
    }
  }
}

const portfolioContent = `<div class="start-100">
<p class="title">Selected works</p>

</div>
<div class="container-portolio">
          <div class="cover atvImg">
            <div class="atvImg-layer" data-img="img/bg-1.svg"></div>
            <!-- <div class="atvImg-layer" data-img="img/thumb-1.svg"></div> -->
            
            <h1 class="title">Disaster alert mobile appliction</h1>
            <div class="tags">Branding, UI, UX, Producrt Design</div>
            <div class="desk">Disaster alert mobile appliction. Disaster alert mobile appliction. Disaster alert mobile appliction. </div>

          </div>

          <div class="cover atvImg">
            <div class="atvImg-layer" data-img="img/bg-2.svg"></div>
            <!-- <div class="atvImg-layer" data-img="img/thumb-2.png"></div> -->
          </div>

          <div class="cover atvImg">
              <div class="atvImg-layer" data-img="img/bg-3.svg"></div>
            <!-- <div class="atvImg-layer" data-img="http://robindelaporte.fr/codepen/visa.png"></div> -->
          </div>

          <div class="cover atvImg">
              <div class="atvImg-layer" data-img="img/bg-4.svg"></div>
            <!-- <div class="atvImg-layer" data-img="http://robindelaporte.fr/codepen/visa.png"></div> -->
          </div>
        </div>`;
