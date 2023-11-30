let carBrands = [
  {
    brand: "Toyota",
    cars: [
      "Camry",
      "Corolla",
      "Prius",
      "Avalon",
      "Yaris",
      "86",
      "Sienna",
      "RAV4",
      "Highlander",
      "4Runner",
      "Sequoia",
      "Land Cruiser",
      "C-HR",
      "Venza",
      "Supra",
    ],
  },
  {
    brand: "Lexus",
    cars: [
      "Lexus ES",
      "Lexus IS",
      "Lexus GS",
      "Lexus LS",
      "Lexus RX",
      "Lexus NX",
      "Lexus GX",
      "Lexus LX",
      "Lexus RC",
      "Lexus LC",
    ],
  },
  {
    brand: "Infiniti",
    cars: [
      "Infiniti Q50",
      "Infiniti Q60",
      "Infiniti Q70",
      "Infiniti QX30",
      "Infiniti QX50",
      "Infiniti QX60",
      "Infiniti QX80",
    ],
  },
];

const brandSelect = document.getElementById("brandSelect");
const carDiv = document.getElementById("carDiv");

brandSelect.innerHTML = carBrands.map((el) => {
  return `
    <option value="${el.brand}">${el.brand}</option>
    `;
});
brandSelect.onchange = () => {
  const selectedBrand = brandSelect.value;
  const selectedBrandObj = carBrands.find((el) => el.brand === selectedBrand);

  carDiv.innerHTML = selectedBrandObj.cars
    .map(
      (car) => `<label><li><input type="radio" name="car">${car}</li></label>`
    )
    .join("");
};
