var codes = [
  { "code": "6", "country": "Польща" },
  { "code": "38", "country": "Україна" },
  { "code": "1", "country": "США" }
];

codes.forEach(function(item) {
  console.log(`Код ${item.code}: ${item.country}`);
});