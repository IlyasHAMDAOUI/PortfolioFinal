const corpsPortfolio = document.getElementById(corpsPortfolio);

fetch("baseDeDonne.json")
  .then((response) => response.json())
  .then((data) => {
console.log(data);

  });

// .catch