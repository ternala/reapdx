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
        closeAllCategories()
        item.classList.add("active")
      })
    })
  }

  // Calculate height of navbar
  if (document.querySelector(".nav-info")) {
    const handleResize = () => {
      document.body.style.setProperty(
        "--navHeight",
        `${
          document.querySelector(".nav-info").offsetHeight +
          document.querySelector(".nav").offsetHeight
        }px`,
      )
    }
    handleResize()
    window.addEventListener("resize", handleResize)
  }
})
