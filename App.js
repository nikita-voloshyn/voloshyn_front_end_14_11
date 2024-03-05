document.getElementById('redirectButton').addEventListener('click', function() {
  let url = document.getElementById('urlInput').value.trim();

  // Перевірка і додавання протоколу, якщо потрібно
  if (!url.match(/^https?:\/\//i)) {
    url = 'https://' + url;
  }

  // Переадресація
  window.location.href = url;
});
