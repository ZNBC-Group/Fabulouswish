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

const tabCarousel = () => {
  const tombolAnggota = document.getElementById("tombolAnggota");
  const tombolPedagang = document.getElementById("tombolPedagang");
  const carouselAnggota = document.getElementById("carouselAnggota");
  const carouselPedagang = document.getElementById("carouselPedagang");
  tombolAnggota.addEventListener("click", () => {
    tombolAnggota.classList.add("active");
    tombolPedagang.classList.remove("active");
    setTimeout(opacityFun, 0);
    setTimeout(displayFun, 600);
    function opacityFun() {
      carouselAnggota.classList.remove("hapus");
      carouselPedagang.classList.add("hilang");
    }
    function displayFun() {
      carouselAnggota.classList.remove("hilang");
      carouselPedagang.classList.add("hapus");
    }
  });
  tombolPedagang.addEventListener("click", () => {
    tombolPedagang.classList.add("active");
    tombolAnggota.classList.remove("active");
    setTimeout(opacityFun, 0);
    setTimeout(displayFun, 600);

    function opacityFun() {
      carouselPedagang.classList.remove("hapus");
      carouselAnggota.classList.add("hilang");
    }
    function displayFun() {
      carouselPedagang.classList.remove("hilang");
      carouselAnggota.classList.add("hapus");
    }
  });
};

/* DOM Navbar
  -----------------------------------------------*/
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  let toggle = 0;
  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active");
    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.4
        }s`;
      }
    });
    // Burger animation
    // burger.classList.toggle("toggle-burger");
    if (toggle == 0) {
      burger.classList.remove("toggle-burger2");
      burger.classList.add("toggle-burger");
      toggle = 1;
      return;
    } else {
      burger.classList.remove("toggle-burger");
      burger.classList.add("toggle-burger2");
      toggle = 0;
      return;
    }
  });
};

/* Scroll Function
  -----------------------------------------------*/
const scrollPage = () => {
  const btnup = document.querySelector(".btnup");
  const nav = document.querySelector(".navbar");

  // When the user scrolls down 700px from the top of the document, show the button, when scrolls down 200px navbar background to white
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 700 ||
      document.documentElement.scrollTop > 700
    ) {
      btnup.classList.add("btnup_scroll");
    } else if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      nav.classList.add("animate");
    } else {
      nav.classList.remove("animate");
      btnup.classList.remove("btnup_scroll");
    }
  }
};

/* Shop Menu Button DOM
  -----------------------------------------------*/
const shopMenu = () => {
  const burgerButton = document.querySelector(
    ".section-judul .field-kiri .burger"
  );
  const link = document.querySelector(
    ".section-judul .field-kiri .menu .nav-links"
  );
  let jumlahLink = link.children.length;
  const menu = document.querySelector(".section-judul .field-kiri .menu");
  const burger = document.querySelector(".section-judul .field-kiri .burger");
  const gambarCustom = document.querySelector(
    ".flex-galeri.di-shop .gambar-custom"
  );
  // Ambil nodelist link kategori di kiri
  let ambilKategori = document.querySelectorAll(
    ".section-judul.dengan-menu .field-kiri .menu ul.nav-links li a"
  );
  let flexItem = document.querySelectorAll(".flex-galeri.di-shop .item");
  // element dengan atribut afudata
  // let elementafudata = document.querySelectorAll(
  //   '.flex-galeri.di-shop .item[afu-data="Stool"]'
  // );
  let toggle = 0;
  burgerButton.addEventListener("click", () => {
    menu.classList.toggle("animate");
    if (toggle == 0) {
      burger.classList.remove("toggle-burger2");
      burger.classList.add("toggle-burger");
      toggle = 1;
      return;
    } else {
      burger.classList.remove("toggle-burger");
      burger.classList.add("toggle-burger2");
      toggle = 0;
      return;
    }
  });
  for (let index = 0; index < jumlahLink; index++) {
    link.children[index].addEventListener("click", () => {
      // hapus semua item
      for (let i = 0; i < flexItem.length; i++) {
        itemFunction("hilangin", flexItem, i);
      }
      //kalau link custom
      if (ambilKategori[index].innerHTML == "Custom") {
        gambarFunction("munculin", gambarCustom);
      } else if (ambilKategori[index].innerHTML == "All") {
        gambarFunction("hilangin", gambarCustom);
        for (let index = 0; index < flexItem.length; index++) {
          itemFunction("munculin", flexItem, index);
        }
      } else {
        gambarFunction("hilangin", gambarCustom);
        for (let index2 = 0; index2 < flexItem.length; index2++) {
          if (
            ambilKategori[index].innerHTML ==
            flexItem[index2].getAttribute("afu-data")
          ) {
            itemFunction("munculin", flexItem, index2);
          }
        }
      }
    });
  }
};
const gambarFunction = (kondisi, gambarCustom) => {
  if (kondisi == "hilangin") {
    setTimeout(gambarFun, 0);
    setTimeout(gambarFunhapus, 600);

    function gambarFun() {
      gambarCustom.classList.add("hilang");
    }
    function gambarFunhapus() {
      gambarCustom.classList.add("hapus");
    }
  } else if (kondisi == "munculin") {
    setTimeout(gambarFunhapus, 0);
    setTimeout(gambarFun, 500);

    function gambarFun() {
      gambarCustom.classList.remove("hilang");
    }
    function gambarFunhapus() {
      gambarCustom.classList.remove("hapus");
    }
  }
};
const itemFunction = (kondisi, flexItem, index) => {
  if (kondisi == "hilangin") {
    setTimeout(itemFun, 0);
    setTimeout(itemFunhapus, 600);

    function itemFun() {
      flexItem[index].classList.add("hilang");
    }
    function itemFunhapus() {
      flexItem[index].classList.add("hapus");
    }
  } else if (kondisi == "munculin") {
    setTimeout(itemFunhapus, 600);
    setTimeout(itemFun, 800);

    function itemFun() {
      flexItem[index].classList.remove("hilang");
    }
    function itemFunhapus() {
      flexItem[index].classList.remove("hapus");
    }
  }
};
/* Qty Button DOM
  -----------------------------------------------*/
const qtyButton = () => {
  const qty = document.querySelector(
    ".section-product .field-teks .field-button .qty"
  );
  const qtytambah = qty.querySelector("#qty-tambah");
  const qtykurang = qty.querySelector("#qty-kurang");
  const angkaform = document.querySelector(
    '.button-cart form input[type="hidden"]#angkatext'
  );
  const angka = qty.querySelector(".angka");
  $jumlah = 1;
  qtytambah.addEventListener("click", () => {
    $jumlah = $jumlah + 1;
    angka.innerHTML = $jumlah;
    angkaform.value = $jumlah;
  });
  qtykurang.addEventListener("click", () => {
    if (angka.innerHTML == 0) {
      return;
    } else {
      $jumlah = $jumlah - 1;
      angka.innerHTML = $jumlah;
      angkaform.value = $jumlah;
    }
  });
};

/* Zoom Button DOM
  -----------------------------------------------*/
const zoomButton = () => {
  const buttonZoom = document.querySelector(
    ".section-product .field-gambar .icon"
  );
  const overlayGambar = document.querySelector(".overlay-gambar");
  buttonZoom.addEventListener("click", () => {
    overlayGambar.classList.add("animate");
  });
  overlayGambar.addEventListener("click", () => {
    overlayGambar.classList.remove("animate");
  });
};

/* Assembly Button DOM
  -----------------------------------------------*/
const assemblyButton = () => {
  const buttonAssembly = document.querySelector(
    ".section-product .field-teks .field-button .button.assembly"
  );
  const overlayBackground = document.querySelector(".overlay-background");
  const sectionAssembly = document.querySelector(".section-assembly");
  const crossButton = sectionAssembly.querySelector(".cross");
  buttonAssembly.addEventListener("click", () => {
    overlayBackground.classList.add("animate");
    sectionAssembly.classList.add("animate");
  });
  overlayBackground.addEventListener("click", () => {
    overlayBackground.classList.remove("animate");
    sectionAssembly.classList.remove("animate");
  });
  crossButton.addEventListener("click", () => {
    overlayBackground.classList.remove("animate");
    sectionAssembly.classList.remove("animate");
  });
};

/* Detail Button DOM
  -----------------------------------------------*/
const detailButton = () => {
  const buttonDetail = document.querySelector(
    ".section-product .field-teks .field-button .button.detail"
  );
  const overlayBackground = document.querySelector(".overlay-background");
  const sectionDetail = document.querySelector(".section-detail");
  const crossButton = sectionDetail.querySelector(".cross");
  buttonDetail.addEventListener("click", () => {
    overlayBackground.classList.add("animate");
    sectionDetail.classList.add("animate");
  });
  overlayBackground.addEventListener("click", () => {
    overlayBackground.classList.remove("animate");
    sectionDetail.classList.remove("animate");
  });
  crossButton.addEventListener("click", () => {
    overlayBackground.classList.remove("animate");
    sectionDetail.classList.remove("animate");
  });
};

const afuCustomSelect = () => {
  document.addEventListener("DOMContentLoaded", () => {
    var api_key = "607f3451fbb532ae4d0e59486658bd73";
    let afuket = "belum";

    $.ajax({
      type: "GET",
      url: "/api/province",
      dataType: "json",
      success: function (hasil) {
        $("#province").empty();
        $("#district").empty();
        $("#shipping").empty();
        $("#province").append(
          "<option selected>" + "Choose Province" + "</option>"
        );
        $.each(hasil.rajaongkir.results, function (index, item) {
          $("#province").append(
            "<option value=" +
              item.province_id +
              ">" +
              item.province +
              "</option>"
          );
        });
        // buat custom select provinsi
        customSelect();

        const afuprov = document.querySelector(
          ".pembungkus-input .custom-select select#province"
        );
        // ambil data kabupaten ketika data memilih provinsi
        afuprov.parentElement.children[1].addEventListener("click", () => {
          // var id = $(this).val();
          let id = afuprov ? afuprov.value : null;
          if (id) {
            $.ajax({
              type: "GET",
              url: "/api/district/" + id,
              dataType: "json",
              success: function (hasil) {
                $("#district").empty();
                $("#shipping").empty();
                $("#district").append(
                  "<option selected>" + "Choose District" + "</option>"
                );
                $.each(hasil.rajaongkir.results, function (index, item) {
                  $("#district").append(
                    "<option value=" +
                      item.city_id +
                      ">" +
                      item.city_name +
                      "</option>"
                  );
                });
                if (afuket == "belum") {
                  // buat custom select district
                  customSelect2();
                  afuket = "sudah";
                } else if (afuket == "sudah") {
                  // karena custom select sudah dicreate, hapus terlebih dahulu
                  const afudistrict = document.querySelector(
                    ".pembungkus-input .custom-select select#district"
                  );
                  const afuselect =
                    afudistrict.parentElement.querySelector(".select-selected");
                  const afuselectitems =
                    afudistrict.parentElement.querySelector(".select-items");
                  afudistrict.parentElement.removeChild(afuselect);
                  afudistrict.parentElement.removeChild(afuselectitems);
                  // buat kembali
                  customSelect2();
                }
              },
            });
          }
        });
      },
    });
  });
};

/* Custom Select
  -----------------------------------------------*/
const customSelect = () => {
  try {
    var x, i, j, l, ll, selElmnt, a, b, c;
    /*look for any elements with the class "custom-select": (html collection)*/
    x = document.getElementsByClassName("custom-select");
    l = x.length;
    for (i = 0; i < l; i++) {
      selElmnt = x[i].getElementsByTagName("select")[0];
      ll = selElmnt.length;
      /*for each element, create a new DIV that will act as the selected item:*/
      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      x[i].appendChild(a);
      /*for each element, create a new DIV that will contain the option list:*/
      b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");
      for (j = 1; j < ll; j++) {
        /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
          /*when an item is clicked, update the original select box,
        and the selected item:*/
          var y, i, k, s, h, sl, yl;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          sl = s.length;
          h = this.parentNode.previousSibling;
          for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              yl = y.length;
              for (k = 0; k < yl; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          h.click();
        });
        b.appendChild(c);
      }
      x[i].appendChild(b);
      a.addEventListener("click", function (e) {
        /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
      });
    }
  } catch (error) {}
  function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
  except the current select box:*/
    var x,
      y,
      i,
      xl,
      yl,
      arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i);
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  /*if the user clicks anywhere outside the select box,
then close all select boxes:*/
  document.addEventListener("click", closeAllSelect);
};

/* Custom Select2
  -----------------------------------------------*/
const customSelect2 = () => {
  try {
    var x, i, j, l, ll, selElmnt, a, b, c;
    /*look for any elements with the class "custom-select": (html collection)*/
    x = document.getElementsByClassName("custom-select");
    l = x.length;
    selElmnt = x[2].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[2].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
      /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[2].appendChild(b);
    a.addEventListener("click", function (e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  } catch (error) {}
  function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
  except the current select box:*/
    var x,
      y,
      i,
      xl,
      yl,
      arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i);
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  /*if the user clicks anywhere outside the select box,
then close all select boxes:*/
  document.addEventListener("click", closeAllSelect);
};
