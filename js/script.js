/* DOM Pre loader
  -----------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  // var myVar;
  // setTimeout(preloaderFun, 1000);
  // setTimeout(preloaderFunhapus, 2500);

  // function preloaderFun() {
  //   document.querySelector(".preloader").classList.add("hilang");
  // }
  // function preloaderFunhapus() {
  //   document.querySelector(".preloader").classList.add("hapus");
  // }
  try {
    const carouselPedagang = document.getElementById("carouselPedagang");
    carouselPedagang.classList.add("hapus");
  } catch (error) {}
});

/* Button scroll top
  -----------------------------------------------*/
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

/* tabCarousel di index
  -----------------------------------------------*/
const tabCarousel = () => {
  const tombolAnggota = document.getElementById("tombolAnggota");
  const tombolPedagang = document.getElementById("tombolPedagang");
  const carouselAnggota = document.getElementById("carouselAnggota");
  const carouselPedagang = document.getElementById("carouselPedagang");
  tombolAnggota.addEventListener("click", () => {
    tombolAnggota.classList.add("active");
    tombolPedagang.classList.remove("active");
    tabChange("hilangin", carouselPedagang);
    tabChange("munculin", carouselAnggota);
  });
  tombolPedagang.addEventListener("click", () => {
    tombolPedagang.classList.add("active");
    tombolAnggota.classList.remove("active");
    tabChange("hilangin", carouselAnggota);
    tabChange("munculin", carouselPedagang);
  });
};

/* tutorialDOM
  -----------------------------------------------*/
const tutorialDOM = () => {
  const tombol = document.querySelector(".section-judul.link");
  const page = document.querySelector(".section-overlay");
  const tombolback = page.querySelector(".back");
  tombol.addEventListener("click", () => {
    page.classList.add("active");
  });
  tombolback.addEventListener("click", () => {
    page.classList.remove("active");
  });
};

/* tabTugas
  -----------------------------------------------*/
const tabTugas = () => {
  const tombol = document.querySelectorAll(".menu .item");
  const tab = document.querySelectorAll(".tab-tugas");
  for (let i = 0; i < tombol.length; i++) {
    tombol[i].addEventListener("click", () => {
      //hapus semua active
      for (let j = 0; j < tombol.length; j++) {
        tombol[j].children[0].classList.remove("active");
        tombol[j].children[1].classList.remove("active");
      }
      //tambah active pada tombol yang diklik
      tombol[i].children[0].classList.add("active");
      tombol[i].children[1].classList.add("active");
      //tambah/hapus tab-tugas
      for (let j = 0; j < tab.length; j++) {
        if (tab[j].id == tombol[i].children[0].innerHTML) {
          tabChange("munculin", tab[j]);
        } else {
          tabChange("hilangin", tab[j]);
        }
      }
    });
  }
};

/* tabChange untuk animasi fade out fade in pada tab
  -----------------------------------------------*/
const tabChange = (kondisi, node) => {
  if (kondisi == "hilangin") {
    setTimeout(opacityFun, 0);
    setTimeout(displayFun, 600);
    function opacityFun() {
      node.classList.add("hilang");
    }
    function displayFun() {
      node.classList.add("hapus");
    }
  } else if (kondisi == "munculin") {
    setTimeout(opacityFun, 350);
    setTimeout(displayFun, 600);
    function opacityFun() {
      node.classList.remove("hapus");
    }
    function displayFun() {
      node.classList.remove("hilang");
    }
  }
};
