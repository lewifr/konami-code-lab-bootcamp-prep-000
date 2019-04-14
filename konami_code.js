const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;

function onKeyDownHandler(e) {
  const key = e.key;

  if (key === codes[index]) {
    index++;
    if (index === alphabet.length) {
      alert('Konaaaaaamiiiiiiii !!!');
      index = 0;
    }
  } else {
    index = 0;
  }
}

function init() {
  document.body.addEventListener('keydown', function (e) {alert('yo')})

  document.body.addEventListener('keydown', function(e) {
  if (e.key === "g") {
    return e.preventDefault()
  } else {
    console.log(e.key)
  }
});
}
