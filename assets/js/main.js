(function ($) {
  "use strict";

  // Mobile Menu JS
  $(".sub-btn").click(function (event) {
      $(this).next(".submenu").slideToggle();
      event.preventDefault();
  });
  $(".hamburger-menu, .hamburger-menu-v2").click(function () {
      $(".nav-wrapper-v1, .nav-wrapper-v2").addClass("active");
  });
  $(".close-btn").click(function () {
      $(".nav-wrapper-v1, .nav-wrapper-v2").removeClass("active");
  });

    /* Input date */
    $('#date_1').calendar({
      type: 'date'
    });
    $('#date_2').calendar({
      type: 'date'
    });
  

  // Coming soon JS
  $("div#clock").countdown("2025/07/29", function (event) {
    var $this = $(this);
      switch (event.type) {
        case "seconds":
        case "minutes":
        case "hours":
        case "days":
        case "weeks":
        case "months":
        case "daysLeft":
          $this.find("p#" + event.type).html(event.value);
          break;
        case "finished":
          $this.hide();
          break;
      }
  });

  $(window).on("load", function () {
    // Window Loading JS
    $(".jurispro-loader").fadeOut();
    $(".loader").delay(450).fadeOut("slow");
  });

})(jQuery);

// Slider trusted JS
let swiper = new Swiper(".slider-trusted", {
  slidesPerView: 6,
  spaceBetween: 70,
  speed: 700,
  autoplay: {
    delay: 5000,
  },
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    300: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    500: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    2000: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});

// Testimonial slider JS
let testimonialHome = new Swiper(".testimonial-slider", {
  slidesPerView: 1,
  spaceBetween: 45,
  speed: 700,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Lawer review slider JS
let lawyerSlider = new Swiper(".review-lawer-slider", {
  slidesPerView: 1,
  spaceBetween: 45,
  speed: 700,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// slider practice JS
let practiceSlider = new Swiper(".slider-practice", {
  slidesPerView: 4,
  spaceBetween: 0,
  speed: 700,
  autoplay: {
    delay: 5000,
  },
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    300: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    2000: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});

// slider practice JS
let teamSlider = new Swiper(".team-info-v3-slider", {
  slidesPerView: 3,
  spaceBetween: 0,
  speed: 700,
  autoplay: {
    delay: 5000,
  },
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    2000: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});

// related post slider
let relatedPostSlider = new Swiper(".related-post-slider", {
  slidesPerView: 2,
  spaceBetween: 0,
  speed: 700,
  autoplay: {
    delay: 5000,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    2000: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

const itemsPerPage = 8; // Number of items per page
let currentPage = 1;
const itemsContainer = document.getElementById('items');
const items = Array.from(itemsContainer.getElementsByClassName('single-lawyer'));

function renderItems() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    // Hide all items
    items.forEach(item => item.style.display = 'none');

    // Show only the items for the current page
    items.slice(start, end).forEach(item => item.style.display = 'block');

    renderPageNumbers();
}

function renderPageNumbers() {
    const pageCount = Math.ceil(items.length / itemsPerPage);
    const pageNumbersContainer = document.getElementById('page-numbers');
    pageNumbersContainer.innerHTML = "";

    for (let i = 1; i <= pageCount; i++) {
        const a = document.createElement('a');
        a.href = "#";
        a.textContent = i;
        if (i === currentPage) {
            a.classList.add('active');
        }
        a.addEventListener('click', function (e) {
            e.preventDefault();
            currentPage = i;
            renderItems();
        });
        pageNumbersContainer.appendChild(a);
    }
}

document.getElementById('prev').addEventListener('click', function(e) {
    e.preventDefault();
    if (currentPage > 1) {
        currentPage--;
        renderItems();
    }
});

document.getElementById('next').addEventListener('click', function(e) {
    e.preventDefault();
    const pageCount = Math.ceil(items.length / itemsPerPage);
    if (currentPage < pageCount) {
        currentPage++;
        renderItems();
    }
});

// Initial render
renderItems();
