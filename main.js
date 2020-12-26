var hp = 0;
function lumos_fn() {
  if (hp == 0) {
    document.getElementById("wand").src =
      "https://cdn.instructables.com/ORIG/F8I/P58P/H82UF7YE/F8IP58PH82UF7YE.jpg?auto=webp";
    document.getElementById("lumos").value = "NOX";
    hp = 1;
  } else if (hp == 1) {
    document.getElementById("wand").src =
      "https://files.cults3d.com/uploaders/12510347/illustration-file/7647a11c-db30-4c14-bcb8-02d52bb248e6/Dumbledore-top_perspective.720_large.jpg";
    document.getElementById("lumos").value = "LUMOS";
    hp = 0;
  }
}
var i = Math.floor(Math.random() * 5);
var pecto = [
  "https://vignette.wikia.nocookie.net/harrypotter/images/f/fe/Patronus_PM_SilverStagPatronus_MomentIllust.jpg/revision/latest?cb=20170314002945",
  "https://66.media.tumblr.com/6d35758e4ba196a6d75595999d40bb65/tumblr_odykna82Ys1vgea2uo1_640.png",
  "https://s-media-cache-ak0.pinimg.com/originals/e6/6b/0b/e66b0b650497f73c33015c9a7c75c7b9.png",
  "https://i.pinimg.com/originals/ab/f3/07/abf3075bacd2d81ae15c14680d9d37f4.jpg"
];
function pat() {
  document.getElementById("wand").src = pecto[i];
}

function obli() {
  document.getElementById("s1").style.display = "none";
}
