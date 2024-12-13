document.addEventListener("DOMContentLoaded", function () {
  // 1st task
  const books = [
    {
      title: "Справочник по Raspberry Pi",
      price: "$14.99",
      image: "https://itbook.store/img/books/9781098130923.png",
      url: "https://itbook.store/books/9781098130923"
    },
    {
      title: "Python для анализа данных, 3-е издание",
      price: "$34.96",
      image: "https://itbook.store/img/books/9781098104030.png",
      url: "https://itbook.store/books/9781098104030"
    },
    {
      title: "Проектирование программ на C++",
      price: "$48.99",
      image: "https://itbook.store/img/books/9781098113162.png",
      url: "https://itbook.store/books/9781098113162"
    },
    {
      title: "Руководство по Flutter и Dart",
      price: "$42.99",
      image: "https://itbook.store/img/books/9781098119515.png",
      url: "https://itbook.store/books/9781098119515"
    }
  ];

  const booksWrapper = document.querySelector(".books");
  let html = "";

  for (const book of books) {
    html += `
      <a href="${book.url}" target="_blank" class="books-item">
        <div class="books-img">
          <img src="${book.image}" alt="">
        </div>
        <div class="books-info">
          <h6 class="books-title">${book.title}</h6>
          <span class="books-price">${book.price}</span>
        </div>
      </a>
    `;
  }
  booksWrapper.innerHTML = html;
  
  // 2nd task
  const sliderWrapper = document.querySelector(".testimonials");
  const sliderContainer = document.querySelector(".testimonials-container");
  const sliderItems = document.querySelectorAll(".testimonials-item");
  const sliderButtons= document.querySelectorAll(".testimonials-btn");
  const sliderLeftButton = sliderButtons[0];
  const sliderRightButton = sliderButtons[1];
  const offsetSize = sliderWrapper.offsetWidth;
  let sliderIndex = 0;

  function moveSlide(index) {
    sliderContainer.style.marginLeft = `-${index * offsetSize}px`;
  }

  function previousSlide() {
    if (sliderIndex !== 0) {
      sliderIndex--;
      moveSlide(sliderIndex); 
    }
  }

  function nextSlide() {
    if (sliderIndex !== sliderItems.length - 1) {
      sliderIndex++;
      moveSlide(sliderIndex); 
    }
  }

  sliderLeftButton.addEventListener("click", previousSlide);
  sliderRightButton.addEventListener("click", nextSlide);

  // 3rd task
  const supportForm = document.querySelector(".support-form");
  const nameInput = document.querySelector("input[name='name']");
  const emailInput = document.querySelector("input[name='email']");
  const messageInput = document.querySelector("textarea[name='message']");
  
  function validateInput(input, message) {
    const errorMessage = input.nextElementSibling;
    if (input.value.trim() === "") {
      input.classList.add("error");
      errorMessage.textContent = `${message} отсутствует. Заполните все поля.`;
      return false;
    } else {
      input.classList.remove("error");
      errorMessage.textContent = "";
      return true;
    }
  }

  supportForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const nameIsValid = validateInput(nameInput, "Имя");
    const emailIsValid = validateInput(emailInput, "Эл. почта");
    const messageIsValid = validateInput(messageInput, "Сообщение");

    if (nameIsValid && emailIsValid && messageIsValid) {
      alert("Сообщение успешно отправлено!");
      supportForm.reset();
    }
  });

  // 4th task
  const navLinks = document.querySelectorAll("a[href^='#']");

  for (const link of navLinks) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const id = link.getAttribute("href");
      document.querySelector(id).scrollIntoView({
        behavior: "smooth"
      });
    });
  }
});

// - element.offsetWidth/Height
// - nextElementSibling, previousElementSibling
// - form.reset() 
// - scrollIntoView()
// DRY - Don't repeat yourself