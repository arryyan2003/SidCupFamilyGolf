const crsr = document.querySelector("#cursor");
const crsrblur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove",(dets)=>{
    crsrblur.style.left = dets.x-200+"px";
    crsr.style.left = dets.x-10+"px";
    crsr.style.top = dets.y-10+"px";
    crsrblur.style.top = dets.y-200+"px";
})

gsap.to("#nav",{
    backgroundColor : "#000",
    duration: 0.6,
    height : "100px",
    scrollTrigger : {
        trigger: "#nav",
        scroller: "body",
        start: "top -5%",
        end: "top -7%",
        scrub : 1
    },
})

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.height = "60px";
    crsr.style.width = "60px";
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
    crsr.style.transition = "all ease 0.2s";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.height = "20px";
    crsr.style.width = "20px";
    crsr.style.border = "none";
    crsr.style.backgroundColor = "#95C11E";
    crsr.style.transition = "none";

  });
});

gsap.from(".card", {
    scale: 0.9,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger: "#main",
        scroller : "body",
        start : "top -20%",
        end : "top -50%",
        scrub : 3,
    }
})


gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });

  gsap.from("#page4 h1", {
    y: 30,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      start: "top 75%",
      end: "top 70%",
      scrub: 2,
    },
  });
