document.addEventListener("DOMContentLoaded", () => {
  // Fancybox for video
  // eslint-disable-next-line no-undef
  Fancybox.bind("[data-fancybox]")

  // Swiper
  const swipers = document.querySelectorAll(".swiper")
  if (swipers) {
    swipers.forEach((el) => {
      // eslint-disable-next-line no-new, no-undef
      new Swiper(el, {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          autoplay: {
            delay: 1000,
            disableOnInteraction: false,
          },
        },
      })
    })
  }

  // Open mobile menu
  const nav = document.querySelector(".nav")
  const burger = document.querySelector(".burger")
  if (nav && burger) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("show")
    })
  }

  if (window.matchMedia("(max-width: 992px)").matches) {
    const categoriesSectionListItems = document.querySelectorAll(
      ".categories-section__list__item",
    )
    categoriesSectionListItems.forEach((item) => {
      item.classList.remove("active")
    })
  }

  // Categories section
  const categoriesItems = document.querySelectorAll(
    ".categories-section__list__item",
  )

  if (categoriesItems) {
    const closeAllCategories = () => {
      categoriesItems.forEach((item) => {
        item.classList.remove("active")
      })
    }

    categoriesItems.forEach((item) => {
      item.addEventListener("click", () => {
        if (item.classList.contains("active")) {
          item.classList.remove("active")
        } else {
          closeAllCategories()
          item.classList.add("active")
        }
      })
    })
  }

  // Calculate height of navbar
  // if (document.querySelector(".nav-info")) {
  //   const handleResize = () => {
  //     document.body.style.setProperty(
  //       "--navHeight",
  //       `${
  //         document.querySelector(".nav-info").offsetHeight +
  //         document.querySelector(".nav").offsetHeight
  //       }px`,
  //     )
  //   }
  //   handleResize()
  //   window.addEventListener("resize", handleResize)
  // }

  // Adding the current year
  const copyright = document.querySelector(".footer-bottom ul li p")
  if (copyright) {
    copyright.textContent = `© ${new Date().getFullYear()} Copyright Stephen FitzMaurice`
  }
})
