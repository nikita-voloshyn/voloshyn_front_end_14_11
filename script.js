document.getElementById('redirectButton').addEventListener('click', function() {
  let url = document.getElementById('urlInput').value.trim();

  if (!url.match(/^https?:\/\//i)) {
    url = 'https://' + url;
  }

  window.location.href = url;
});
