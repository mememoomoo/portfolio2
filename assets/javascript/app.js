//STICKY NAVBAR
window.onscroll = function() {stickyNavbar()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

$("#chinollo").click(function(){
  chinolloCard();
});

$("#kognate").click(function(){
  kognateCard();
});

$("#vellere").click(function(){
  vellereCard();
});

$("#ws").click(function(){
  wsCard();
});

$("#bitzerBanker").click(function(){
  bitzerBankerCard();
});

$("#whetherWeather").click(function(){
  whetherWeather();
});

function clearCard(){
 $(".portInfo").empty()
};

function chinolloCard(){
  clearCard();
  var portCard = `
  <div class="row">
      <div class="container portfolioContainer mt-2 ml-2">
          <div class="row">
              <div class="col-6">
                  <div class="row">
                      <img class="m-3" src="assets/images/chinollo-310x158.jpg">
                  </div>
                  <div class="row">
                      <p class="technology ml-3">Technology Used</p>
                  </div>
                  <div class="row">
                      <img class="technologyIcon ml-3 mt-2 mb-2 mr-1" alt="Adobe Muse"
                          src="assets/images/adobemuse.svg">
                      <img class="technologyIcon mt-2 mb-2 mr-1" alt="Adobe Photoshop"
                          src="assets/images/adobephotoshop.svg">
                      <img class="technologyIcon mt-2 mb-2 mr-1" alt="Adobe Illustrator"
                          src="assets/images/adobeillustrator.svg">
                  </div>
              </div>
              
              <div class="col-6">
                  <h2 class="mt-3">Chinollo</h2>
                  <p class="mb-2">Chinollo is a hip hand crafted mexican fusion eatery that needed a
                      website to reflect
                      that. We rebranded and built their website from ground up.</p>
                  <a href="http://chinollo.larsenwebdesign.com/" target="_blank">
                      <button class="btn btnCustom" type="button">View</button>
                  </a>
              </div>
          </div>
      </div>
  </div>`
$(".portInfo").append(portCard)
};

function chinolloCard(){
  clearCard();
  var portCard = `
  <div class="row">
      <div class="container portfolioContainer mt-2 ml-2">
          <div class="row">
              <div class="col-6">
                  <div class="row">
                      <img class="m-3" src="assets/images/chinollo-310x158.jpg">
                  </div>
                  <div class="row">
                      <p class="technology ml-3">Technology Used</p>
                  </div>
                  <div class="row">
                      <img class="technologyIcon ml-3 mt-2 mb-2 mr-1" alt="Adobe Muse"
                          src="assets/images/adobemuse.svg">
                      <img class="technologyIcon mt-2 mb-2 mr-1" alt="Adobe Photoshop"
                          src="assets/images/adobephotoshop.svg">
                      <img class="technologyIcon mt-2 mb-2 mr-1" alt="Adobe Illustrator"
                          src="assets/images/adobeillustrator.svg">
                  </div>
              </div>
              
              <div class="col-6">
                  <h2 class="mt-3">Chinollo</h2>
                  <p class="mb-2">Chinollo is a hip hand crafted mexican fusion eatery that needed a
                      website to reflect
                      that. We rebranded and built their website from ground up.</p>
                  <a href="http://chinollo.larsenwebdesign.com/" target="_blank">
                      <button class="btn btnCustom" type="button">View</button>
                  </a>
              </div>
          </div>
      </div>
  </div>`
$(".portInfo").append(portCard)
};

function kognateCard(){
  clearCard();
  var portCard = `
  <div class="row">
      <div class="container portfolioContainer mt-2 ml-2">
          <div class="row">
              <div class="col-6">
                  <div class="row">
                      <img class="m-3" src="assets/images/kognate-310x158.jpg">
                  </div>
                  <div class="row">
                      <p class="technology ml-3">Technology Used</p>
                  </div>
                  <div class="row">
                      <img class="technologyIcon ml-3 mt-2 mb-2 mr-1" alt="Adobe Muse"
                          src="assets/images/adobemuse.svg">
                      <img class="technologyIcon mt-2 mb-2 mr-1" alt="Adobe Photoshop"
                          src="assets/images/adobephotoshop.svg">
                      <img class="technologyIcon mt-2 mb-2 mr-1" alt="Adobe Illustrator"
                          src="assets/images/adobeillustrator.svg">
                  </div>
              </div>
              
              <div class="col-6">
                  <h2 class="mt-3">Kognate</h2>
                  <p class="mb-2">Kognate needed something modern but not too modern. They needed to say to investors "We are on the cutting edge." Without giving up on user exerience.</p>
                  <a href="http://kognate.io/" target="_blank">
                      <button class="btn btnCustom" type="button">View</button>
                  </a>
              </div>
          </div>
      </div>
  </div>`
$(".portInfo").append(portCard)
};

function vellereCard(){
  clearCard();
  var portCard = `
  <div class="row">
      <div class="container portfolioContainer mt-2 ml-2">
          <div class="row">
              <div class="col-6">
                  <div class="row">
                      <img class="m-3" src="assets/images/vellere-310x158.jpg">
                  </div>
                  <div class="row">
                      <p class="technology ml-3">Technology Used</p>
                  </div>
                  <div class="row">
                      <img class="technologyIcon ml-3 mt-2 mb-2 mr-1" alt="Adobe Muse"
                          src="assets/images/adobemuse.svg">
                      <img class="technologyIcon mt-2 mb-2 mr-1" alt="Adobe Photoshop"
                          src="assets/images/adobephotoshop.svg">
                      <img class="technologyIcon mt-2 mb-2 mr-1" alt="Adobe Illustrator"
                          src="assets/images/adobeillustrator.svg">
                  </div>
              </div>
              
              <div class="col-6">
                  <h2 class="mt-3">Vellere</h2>
                  <p class="mb-2">Vellere is a custom jewelery company that tailored to a very specific customer and needed a website that spoke to them.</p>
                  <a href="http://www.vallere.larsenwebdesign.com/" target="_blank">
                      <button class="btn btnCustom" type="button">View</button>
                  </a>
              </div>
          </div>
      </div>
  </div>`
$(".portInfo").append(portCard)
};

function wsCard(){
  clearCard();
  var portCard = `
  <div class="row">
      <div class="container portfolioContainer mt-2 ml-2">
          <div class="row">
              <div class="col-6">
                  <div class="row">
                      <img class="m-3" src="assets/images/ws_china_bistro-310x158.jpg">
                  </div>
                  <div class="row">
                      <p class="technology ml-3">Technology Used</p>
                  </div>
                  <div class="row">
                      <img class="technologyIcon ml-3 mt-2 mb-2 mr-1" alt="Adobe Muse"
                          src="assets/images/adobemuse.svg">
                      <img class="technologyIcon mt-2 mb-2 mr-1" alt="Adobe Photoshop"
                          src="assets/images/adobephotoshop.svg">
                      <img class="technologyIcon mt-2 mb-2 mr-1" alt="Adobe Illustrator"
                          src="assets/images/adobeillustrator.svg">
                  </div>
              </div>
              
              <div class="col-6">
                  <h2 class="mt-3">Ws China Bistro</h2>
                  <p class="mb-2">Ws China Bistro is delicious; their website was not. We fixed that.</p>
                  <a href="https://www.wschinabistro.com/" target="_blank">
                      <button class="btn btnCustom" type="button">View</button>
                  </a>
              </div>
          </div>
      </div>
  </div>`
$(".portInfo").append(portCard)
};

function bitzerBankerCard(){
  clearCard();
  var portCard = `
  <div class="row">
      <div class="container portfolioContainer mt-2 ml-2">
          <div class="row">
              <div class="col-6">
                  <div class="row">
                      <img class="m-3" src="assets/images/bitzerbanker-310x158.jpg">
                  </div>
                  <div class="row">
                      <p class="technology ml-3">Technology Used</p>
                  </div>
                  <div class="row">
                      <img class="technologyIcon ml-3 mt-2 mb-2 mr-1" alt="Adobe Muse"
                          src="assets/images/adobemuse.svg">
                      <img class="technologyIcon mt-2 mb-2 mr-1" alt="Adobe Photoshop"
                          src="assets/images/adobephotoshop.svg">
                      <img class="technologyIcon mt-2 mb-2 mr-1" alt="Adobe Illustrator"
                          src="assets/images/adobeillustrator.svg">
                  </div>
              </div>
              
              <div class="col-6">
                  <h2 class="mt-3">Bitzer Banker</h2>
                  <p class="mb-2">Bitzer Banker is the home to some of the most talented engineers. We gave them a break and focused on building their gorgeous website for them.</p>
                  <a href="https://www.bitzerbanker.com/" target="_blank">
                      <button class="btn btnCustom" type="button">View</button>
                  </a>
              </div>
          </div>
      </div>
  </div>`
$(".portInfo").append(portCard)
};

function whetherWeather(){
  clearCard();
  var portCard = `
  <div class="row">
      <div class="container portfolioContainer mt-2 ml-2">
          <div class="row">
              <div class="col-6">
                  <div class="row">
                      <img class="m-3" src="assets/images/wheather_weather-310x158.jpg">
                  </div>
                  <div class="row">
                      <p class="technology ml-3">Technology Used</p>
                  </div>
                  <div class="row">
                      <img class="technologyIcon ml-3 mt-2 mb-2 mr-1" alt="HTML 5"
                          src="assets/images/html5.svg">
                      <img class="technologyIcon mt-2 mb-2 mr-1" alt="CSS 3"
                          src="assets/images/css3.svg">
                      <img class="technologyIcon mt-2 mb-2 mr-1" alt="Javascript"
                          src="assets/images/javascript.svg">
                      <img class="technologyIcon mt-2 mb-2 mr-1" alt="Adobe Photoshop"
                          src="assets/images/adobephotoshop.svg">
                      <img class="technologyIcon mt-2 mb-2 mr-1" alt="Adobe Illustrator"
                          src="assets/images/adobeillustrator.svg">
                  </div>
              </div>
              
              <div class="col-6">
                  <h2 class="mt-3">Whether Weather</h2>
                  <p class="mb-2">Web App to Find Fun Events in Your Area.</p>
                  <a href="https://mememoomoo.github.io/Whether_Weather/" target="_blank">
                      <button class="btn btnCustom" type="button">View</button>
                  </a>
              </div>
          </div>
      </div>
  </div>`
$(".portInfo").append(portCard)
};