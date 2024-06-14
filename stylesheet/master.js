let main = document.getElementById("main");
// let stNumber = document.getElementById('stNumber')
let _name = document.getElementById("name");
let job = document.getElementsByClassName("job")[0];
let _email = document.getElementById("_email");
let socials = document.getElementsByClassName("socials")[0];
let pic = document.getElementsByClassName("pic")[0];
let sec2 = document.getElementsByClassName("sec2")[0];
let sec3 = document.getElementsByClassName("sec3")[0];
let sec3H2 = document.querySelector(".sec3>h2");
let sec4 = document.getElementsByClassName("sec4")[0];
let psec4 = document.getElementsByClassName("psec4")[0];
let psub1 = document.getElementsByClassName("psub1")[0];
let pro1 = document.getElementsByClassName("pro1")[0];
let sec5 = document.getElementsByClassName("sec5")[0];
let psec5 = document.getElementsByClassName("psec5")[0];
let psub2 = document.getElementsByClassName("psub2")[0];
let pro2 = document.getElementsByClassName("pro2")[0];
let sec6 = document.getElementsByClassName("sec6")[0];
let psec6 = document.getElementsByClassName("psec6")[0];
let psub3 = document.getElementsByClassName("psub3")[0];
let pro3 = document.getElementsByClassName("pro3")[0];
main.addEventListener("scroll", (e) => {
  let st = e.target.scrollTop;
  // stNumber.innerHTML = st
  _name.style.right = st * 2 + "px";
  job.style.left = st * 2 + "px";
  _email.style.right = st * 2 + "px";
  socials.style.left = st * 2 + "px";
  if (st > 0 && st <= 1000) {
    pic.style.display = "flex";
    pic.style.scale = (st + 2000) / 2000;
  }
  if (e.target.scrollTop >= sec2.offsetTop) {
    pic.style.position = "absolute";
    pic.style.top = "135%";
  } else {
    pic.style.position = "fixed";
    pic.style.top = "285px";
  }
  if (e.target.scrollTop >= sec3.offsetTop) {
    sec3H2.style.position = "fixed";
    sec3H2.style.top = "50%";
    sec3H2.style.zIndex = "50";
  } else {
    sec3H2.style.position = "absolute";
    sec3H2.style.top = "50%";
  }
  if (e.target.scrollTop >= psec4.offsetTop) {
    let x = st / psec4.offsetTop - 1;
    sec4.style.opacity = x;
    if (x >= 0.4928772258669166) {
      psub1.style.position = "fixed";
      psub1.style.right = st / 3.7 + "px";
      pro1.style.position = "fixed";
      pro1.style.left = -(st / 2) + "px";
    } else {
      psub1.style.position = "absolute";
      psub1.style.right = "0";
      pro1.style.position = "absolute";
      pro1.style.left = "0";
    }
  }
  if (e.target.scrollTop >= psec5.offsetTop) {
    let x = st / psec5.offsetTop - 1;
    sec5.style.opacity = x;
    if (x >= 0.2928852643419573) {
      psub2.style.position = "fixed";
      psub2.style.top = "70%";
      psub2.style.right = st / 6.7 + "px";
      pro2.style.position = "fixed";
      pro2.style.left = -(st / 3.6) + "px";
      pro2.style.top = "70%";
    } else {
      psub2.style.position = "absolute";
      psub2.style.right = "0";
      pro2.style.position = "absolute";
      pro2.style.left = "0";
    }
  }
  if (e.target.scrollTop >= psec6.offsetTop) {
    let x = st / psec6.offsetTop - 1;
    sec6.style.opacity = x;
    console.log(x);
    if (x >= 0.21892575928008995) {
      psub3.style.position = "fixed";
      psub3.style.top = "70%";
      psub3.style.right = st / 10 + "px";
      pro3.style.position = "fixed";
      pro3.style.left = -(st / 8) + "px";
      pro3.style.top = "70%";
    } else {
      psub3.style.position = "absolute";
      psub3.style.right = "0";
      pro3.style.position = "absolute";
      pro3.style.left = "0";
    }
  }
});

const x = 1;
