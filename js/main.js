window.addEventListener("load", function() {
  // const tool = new Tool();
  // tool.height(); //

  const loader = new Loader(3000, "#222127", "#fff");
  const hello = new Hello(2000);
  const portfolio = new Portfolio(2000);
  loader.load();
  loader.remove();
  hello.appear();
  portfolio.appear();
});

// window.addEventListener("scroll", function() {
//   document.getElementById("showScroll").innerHTML = pageYOffset + "px";
// });




// window.addEventListener('scroll', function (event) {
// 	if (isInViewport(portfolio)) {
//     var portfolio = document.querySelector('.portfolio');
// 		portfolio.innerHTML = '<h1>It\'s fucking portfolio</h1>';
// 	}
// }, false);





// var isInViewport = function (elem) {
//   var bounding = elem.getBoundingClientRect();
//   return (
//       bounding.top >= 0 &&
//       bounding.left >= 0 &&
//       bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// };