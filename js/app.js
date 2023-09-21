$(document).ready(function () {
  // Header searchbox controller

  let openBTN = $("header .header-top .searchbox .open-search");
  let closeBTN = $("header .header-top .searchbox .search-input div");
  let searchBox = $("header .header-top .searchbox");

  $(openBTN).click(function () {
    $(searchBox).addClass("active");
  });
  $(closeBTN).click(function () {
    $(searchBox).removeClass("active");
  });

  let mobileMenuOpen = $("header .open-mobile");
  let mobileMenuClose = $(".mobile-menu .close-btn");
  let mobileMenu = $(".mobile-menu");
  $(mobileMenuOpen).click(function () {
    $(mobileMenu).addClass("active");
  });
  $(mobileMenuClose).click(function () {
    $(mobileMenu).removeClass("active");
  });
});

// Hero slider controller

$(".hero-section .slider-area").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

function postsCarousel() {
  var checkWidth = $(window).width();
  var owlPost = $(".announcement .slider-section");
  if (checkWidth < 992) {
    if (typeof owlPost.data("owl.carousel") != "undefined") {
      owlPost.data("owl.carousel").destroy();
    }
    owlPost.removeClass("owl-carousel");
  } else if (checkWidth > 991) {
    $(owlPost).addClass("owl-carousel");
    $(owlPost).owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
    $(".announcement .slider-section .owl-prev").html(
      '<i class="fa fa-chevron-left"></i>'
    );
    $(".announcement .slider-section .owl-next").html(
      '<i class="fa fa-chevron-right"></i>'
    );
  }
}

postsCarousel();
$(window).resize(postsCarousel);

function showCards() {
  var heroSection = document.querySelector(".hero-section");
  var announcement = document.querySelector(".announcement");
  announcement.innerHTML = "";
  heroSection.innerHTML = "";
  fetch("our-cards.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("cards").innerHTML = html;

      var backgroundController = document.querySelector(
        ".hero-section .background-controller"
      );
      backgroundController.style.backgroundColor = "white";
      var kartlarimiz = document.getElementById("kartlarimizLink");
      var kampanyalar = document.getElementById("kampanyalarLink");
      var istanbulkart = document.getElementById("istanbulkartLink");
      kampanyalar.style.color = "black";
      istanbulkart.style.color = "black";
      kartlarimiz.style.color = "rgb(0, 213, 255)";
    });
}

function istMobil() {
  var heroSection = document.querySelector(".hero-section");
  var announcement = document.querySelector(".announcement");
  announcement.innerHTML = "";
  heroSection.innerHTML = "";
  fetch("ist-card.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("cards").innerHTML = html;

      var backgroundController = document.querySelector(
        ".hero-section .background-controller"
      );
      backgroundController.style.backgroundColor = "white";
      var istanbulkart = document.getElementById("istanbulkartLink");
      var kartlarimiz = document.getElementById("kartlarimizLink");
      var kampanyalar = document.getElementById("kampanyalarLink");
      istanbulkart.style.color = "rgb(0, 213, 255)";
      kartlarimiz.style.color = "black";
      kampanyalar.style.color = "black";
    });
}

function kampanyalar() {
  var heroSection = document.querySelector(".hero-section");
  var announcement = document.querySelector(".announcement");
  announcement.innerHTML = "";
  heroSection.innerHTML = "";

  fetch("kampanyalar.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("cards").innerHTML = html;
      var kampanyalar = document.getElementById("kampanyalarLink");
      var kartlarimiz = document.getElementById("kartlarimizLink");
      var istanbulkart = document.getElementById("istanbulkartLink");
      kampanyalar.style.color = "rgb(0, 213, 255)";
      kartlarimiz.style.color = "black";
      istanbulkart.style.color = "black";
      var gecmis = document.getElementsByClassName("gecmis");
      gecmis[0].style.display = "none";
      btnChange();
    });
}

function btnChange() {
  var gecmisButton = document.getElementById("gecmisButton");
  var gecmisBtn = document.getElementById("gecmisBtn");
  gecmisButton.style.backgroundColor = "white";
  gecmisBtn.style.color = " #acb6bd";
}

function btnGuncel() {
  var guncelButton = document.getElementById("guncelButton");
  var guncelBtn = document.getElementById("guncelBtn");
  guncelButton.style.backgroundColor = "#383c52";
  guncelBtn.style.color = " white";
  var gecmisButton = document.getElementById("gecmisButton");
  var gecmisBtn = document.getElementById("gecmisBtn");
  gecmisButton.style.backgroundColor = "white";
  gecmisBtn.style.color = "#383c52";
  var guncel = document.getElementsByClassName("guncel");
  var gecmis = document.getElementsByClassName("gecmis");
  guncel[0].style.display = "flex";
  gecmis[0].style.display = "none";
}
function btnGecmis() {
  var gecmisButton = document.getElementById("gecmisButton");
  var gecmisBtn = document.getElementById("gecmisBtn");
  gecmisButton.style.backgroundColor = "#383c52";
  gecmisBtn.style.color = "white";
  var guncelButton = document.getElementById("guncelButton");
  var guncelBtn = document.getElementById("guncelBtn");
  guncelButton.style.backgroundColor = "white";
  guncelBtn.style.color = "#383c52";
  var guncel = document.getElementsByClassName("guncel");
  var gecmis = document.getElementsByClassName("gecmis");
  guncel[0].style.display = "none";
  gecmis[0].style.display = "flex";
}
function cardClick() {
  var kampanyalar = document.getElementById("kampanyalarLink");
  kampanyalar.style.color = "black";

  var heroSection = document.querySelector(".hero-section");
  var announcement = document.querySelector(".announcement");
  announcement.innerHTML = "";
  heroSection.innerHTML = "";

  fetch("card-detail.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("cards").innerHTML = html;
    });
}

function fetchData(){
    fetch("cardDetail.json")
    .then(response => response.json())
    .then(data => {
        
        console.log("data",data)
        var baslikElement = document.querySelector('.card-container h1');
var resimElement = document.querySelector('.card-container img');
var metinElement = document.querySelector('.detail-text p:first-child');
var tarihElement = document.querySelector('.detail-text p:last-child');
var kosullarButton = document.querySelector('.detail-button button');

baslikElement.textContent = data.desc;
resimElement.src = data.img;
metinElement.textContent = data.text-1;
tarihElement.textContent = data.text-2;
tarihElement.textContent = data.offerText;
    })
}
fetchData()