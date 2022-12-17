console.log("beer")
var plaatje = document.querySelector("img")
var eetknop = document.querySelector("#eten")
var waterknop = document.querySelector("#water")
var bijenknop = document.querySelector(".bijen")
var mepperknop = document.querySelector("#mepper")
var pil = document.querySelector("#random")
var beerstatus = "neutraal"
var randomdieren = [
  "beer.png",
  "beereten.png",
  "beerwater.png",
  "beerdrink1.png",
  "beerdrink2.png",
  "beerbijen.png",
  "mepper.png",
]
var audio = new Audio("vomiting.mp3")
var audio1 = new Audio("bijen.mp3")
var audio2 = new Audio("meppen.mp3")
var audio3 = new Audio("eten.mp3")
var audio4 = new Audio("feestje.mp3")
var beertekst = document.getElementById("tekst_beer")
var discobal = document.getElementById("discobal")
var background = document.getElementById("background")

// 2-12-22 (Laatste keer gewerkt aan deze function)
function eten() {
  plaatje.src = "img/beereten.png" //https://www.flaticon.com/premium-icon/beehive_1686546?term=beehive&page=1&position=1&page=1&position=1&related_id=1686546
  beertekst.style.display = "none"
  discobal.style.display = "none"
  audio3.play()
}
eetknop.addEventListener("click", eten)

// 15-12-22 (Laatste keer gewerkt aan deze function)
function drink() {
  if (beerstatus == "neutraal") {
    plaatje.src = "img/beerwater.png"
    beertekst.style.display = "none"
    discobal.style.display = "none"
    beerstatus = "watermid"
  } else if (beerstatus == "watermid") {
    plaatje.src = "img/beerdrink1.png" //https://www.flaticon.com/premium-icon/plastic-bottle_2745060?term=water&page=1&position=44&page=1&position=44&related_id=2745060&origin=search
    beertekst.style.display = "block"
    discobal.style.display = "none"
    beerstatus = "watervol"
  } else {
    beerstatus = "kotsen"
    plaatje.src = "img/beerdrink2.png"
    discobal.style.display = "none"
    beertekst.style.display = "none"
    audio.play()
  }
}
waterknop.addEventListener("click", drink)

// 2-12-22 (Laatste keer gewerkt aan deze function)
function bijen() {
  plaatje.src = "img/beerbijen.png" //https://www.flaticon.com/premium-icon/bee_2116054?term=bees&page=1&position=20&page=1&position=20&related_id=2116054&origin=search
  beertekst.style.display = "none"
  discobal.style.display = "none"
  audio1.play()
}
bijenknop.addEventListener("click", bijen)

// 2-12-22 (Laatste keer gewerkt aan deze function)
function mepper() { // "mepper" function die wordt afgespeeld na klikken op "mepperknop"
  plaatje.src = "img/mepper.png"
  beertekst.style.display = "none"
  discobal.style.display = "none"
  audio2.play()
}
mepperknop.addEventListener("click", mepper)

// 2-12-22 (Laatste keer gewerkt aan deze function)
function xtcpil() {
  var welkdier = Math.floor(Math.random() * 7)
  var gekozendier = randomdieren[welkdier]
  document.querySelector("img").src = "img/" + gekozendier
  beertekst.style.display = "none"
  discobal.style.display = "none"
}
pil.addEventListener("click", xtcpil)

// 15-12-22 (Laatste keer gewerkt aan deze function)
function feestje() {
  plaatje.src = "img/beer.png"
  audio4.play()
  beertekst.style.display = "none"
  discobal.style.display = "block"
  document.body.style.backgroundColor = "#A8216B"
  setTimeout(function() {
    plaatje.src = "img/beer.png"
    document.body.style.backgroundColor = "#f08080"
    beertekst.style.display = "none";
    discobal.style.display = "none"
  }, 7000); // 7 seconden = Na 7000 milliseconden gaat website terug naar staat die wordt aangegeven tussen de {} bij "setTimeout"
}
background.addEventListener("click", feestje)
