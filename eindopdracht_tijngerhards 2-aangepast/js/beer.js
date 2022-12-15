console.log("beer")
var plaatje = document.querySelector("img")
var eetknop = document.querySelector("#eten")
var waterknop = document.querySelector("#water")
var bijenknop = document.querySelector("#bijen")
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
var beertekst = document.getElementById("tekst_beer")

function eten() {
  plaatje.src = "img/beereten.png" //https://www.flaticon.com/premium-icon/beehive_1686546?term=beehive&page=1&position=1&page=1&position=1&related_id=1686546
  beertekst.style.display = "none"
  audio3.play()
}
eetknop.addEventListener("click", eten)

// Ik heb samen met Sam gewerkt aan deze code
function drink() {
  if (beerstatus == "neutraal") {
    plaatje.src = "img/beerwater.png"
    beertekst.style.display = "none"
    beerstatus = "watermid"
  } else if (beerstatus == "watermid") {
    plaatje.src = "img/beerdrink1.png" //https://www.flaticon.com/premium-icon/plastic-bottle_2745060?term=water&page=1&position=44&page=1&position=44&related_id=2745060&origin=search
    beertekst.style.display = "block"
    beerstatus = "watervol"
  } else {
    beerstatus = "neutraal"
    plaatje.src = "img/beerdrink2.png"
    beertekst.style.display = "none"
    audio.play()
  }
}
waterknop.addEventListener("click", drink)

function bijen() {
  plaatje.src = "img/beerbijen.png" //https://www.flaticon.com/premium-icon/bee_2116054?term=bees&page=1&position=20&page=1&position=20&related_id=2116054&origin=search
  beertekst.style.display = "none"
  audio1.play()
}

bijenknop.addEventListener("click", bijen)

function mepper() {
  plaatje.src = "img/mepper.png"
  beertekst.style.display = "none"
  audio2.play()
}
mepperknop.addEventListener("click", mepper)

// sam heeft mij geholpen bij deze code
function xtcpil() {
  var welkdier = Math.floor(Math.random() * 7)
  var gekozendier = randomdieren[welkdier]
  document.querySelector("img").src = "img/" + gekozendier
  beertekst.style.display = "none"
}
pil.addEventListener("click", xtcpil)
