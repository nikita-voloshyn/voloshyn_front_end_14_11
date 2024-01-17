
const testimonialsData = [
  { name: "Іван", text: "Дуже задоволений вашими послугами. Рекомендую!" },
  { name: "Ольга", text: "Прекрасний досвід співпраці. Швидко та якісно." },
  { name: "Петро", text: "Ваша команда зробила чудову роботу. Дякую!" },
];

function displayTestimonials(testimonials) {
  const testimonialsContainer = document.getElementById("testimonials");

  testimonials.forEach((testimonial) => {
    const testimonialElement = document.createElement("div");
    testimonialElement.classList.add("testimonial");

    const nameElement = document.createElement("h3");
    nameElement.textContent = testimonial.name;

    const textElement = document.createElement("p");
    textElement.textContent = testimonial.text;

    testimonialElement.appendChild(nameElement);
    testimonialElement.appendChild(textElement);

    testimonialsContainer.appendChild(testimonialElement);
  });
}


window.onload = function () {
  displayTestimonials(testimonialsData);
};
