const prevBtn = document.querySelectorAll(".prev-btn");
const nextBtn = document.querySelectorAll(".next-btn");
const wrapper = document.querySelectorAll(".wrapper");

nextBtn.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    if (wrapper[i].classList.contains("wrapper-1")) {
      const firstCard = wrapper[i].firstElementChild;
      wrapper[i].appendChild(firstCard);
      wrapper[i].scrollLeft += firstCard.clientWidth + 30;
    } else {
      const cardWidth = wrapper[i].firstElementChild.clientWidth;
      wrapper[i].scrollLeft += cardWidth;
    }
  });
});

prevBtn.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    if (wrapper[i].classList.contains("wrapper-1")) {
      const lastCard = wrapper[i].lastElementChild;
      wrapper[i].prepend(lastCard);
      wrapper[i].scrollLeft -= lastCard.clientWidth + 30;
    } else {
      const cardWidth = wrapper[i].firstElementChild.clientWidth;
      wrapper[i].scrollLeft -= cardWidth;
    }
  });
});
