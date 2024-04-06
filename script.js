gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();



  






function cursorEffect(){
        var page1Content = document.querySelector("#page1-content");
var crsr = document.querySelector("#cursor");

page1Content.addEventListener("mousemove", function(event) {
    gsap.to(cursor,{
        x:event.x,
        y:event.y
    })
})

page1Content.addEventListener("mouseenter", function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
    
})
page1Content.addEventListener("mouseleave", function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
    }
    cursorEffect()

 
    function page2Animation(){
        gsap.from(".elem h1",{
            y:120,
            stagger:0.2,
            duration:1,
            scrollTrigger:{
                trigger:"#page2",
                scroller:"#main",
                start:"top 40%",
                end:"top 37%",
                // markers:true,
                scrub:2
        
                }
        
            })
    }
    page2Animation()