var triangle = {
    base: 20,
    altezza: 40
}

var area = (triangle.base * triangle.altezza) / 2
console.log("L'area è " + area + "cm2");

var ipotenusa = Math.sqrt(Math.pow(triangle.altezza, 2) + (Math.pow(triangle.base, 2)));
console.log(ipotenusa);

var perimeter = ipotenusa + triangle.altezza + triangle.base
console.log("Il perimetro è " + perimeter) + "cm";