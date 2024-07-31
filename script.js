const accordionTitles = document.querySelectorAll(
  ".accordionwrapper .accordion"
);

accordionTitles.forEach((accordionTitle) => {
  accordionTitle.addEventListener("click", () => {
    if (accordionTitle.classList.contains("active")) {
      accordionTitle.classList.remove("active");
    } else {
      const accordionTitlesWithIsOpen = document.querySelectorAll("active");
      accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
        accordionTitleWithIsOpen.classList.remove("active");
      });
      accordionTitle.classList.add("active");
    }
  });
});
