const tl = gsap.timeline({
    default:{
        duration: 2.5, 
        ease: "power2.out",
    }
})

tl.from(".Main_Span", {
    x:"100%",
    duration:2,
    onStart: function () {
        $('.Main_Span').textillate({
            in: {
                effect: 'flipInX',
                //callback: function () {
                   // $('.Main_Span').textillate("out")
                //}
            },
            //out: { effect: 'fadeOutUp' }

        });

    }
})
tl.from(".Small_icon", {
    y:"80%",
    opacity:0,
    duration:1,
}, "<")
tl.from(".small_footer", {
    x:"100%",
    opacity:0,
    duration:1, 
}, "<")

gsap.from(".Card1", {
    scrollTrigger:{
        trigger:".Card1",
        scroller:"body",
        start: "top 60%",
    },
    opacity:0,
    x:"100%",
    duration:1,
     
})
gsap.from(".Card2", {
    scrollTrigger:{
        trigger:".Card1",
        scroller:"body",
        start: "top 60%",
    },
    opacity:0,
    x:"100%",
    duration:1,
    delay:1,
     
})
gsap.from(".Last", {
    scrollTrigger:{
        trigger:".Card1",
        scroller:"body",
        start: "top 60%",
    },
    opacity:0,
    x:"100%",
    duration:1,
    delay:.5,
     
})
tl.from(".page2_p", {

    scrollTrigger:{
        trigger:".page2_p",
        scroller:"body",
        start: "top 60%",
    },
    x:"-130%",
    duration:1,
    onStart: function () {
        $('.page2_p').textillate({
            in: {
                effect: 'flipInX',
                //callback: function () {
                   // $('.Main_Span').textillate("out")
                //}
            },
            //out: { effect: 'fadeOutUp' }

        });

    }
}, "<")
/*
 scrollTrigger: {
        trigger: ".Card1",
        scroller: "body",
        start: "top 60%",
    },
*/
gsap.to(".Star_fish", {
    scrollTrigger:{
        trigger:".Star_fish",
        scroller:"body",
        start: "top 60%",
    },
    rotate:360,
    duration: 7,
    ease: "elastic.out(1, 0.3)",
    repeat:-1,
})

gsap.from(".page3_img1", {
    scrollTrigger:{
        trigger:".page3_img1",
        scroller:"body",
        start: "top 60%",
    },
    y:"-30%",
    opacity:0,
    duration: 2,
    ease: "power3.out",
     
}, "<")
gsap.from(".page3_img2", {
    scrollTrigger:{
        trigger:".page3_img2",
        scroller:"body",
        start: "top 60%",
    },
    x:"100%",
    opacity:0,
    duration: 2,
    ease: "power3.out",
     
}, "<")
gsap.from(".page3_img3", {
    scrollTrigger:{
        trigger:".page3_img3",
        scroller:"body",
        start: "top 60%",
    },
    y:"30%",
    opacity:0,
    duration: 2,
    ease: "power3.out",
     
}, "<")

tl.from(".page3_p", {

    scrollTrigger:{
        trigger:".page3_p",
        scroller:"body",
        start: "top 60%",
    },
    x:"-130%",
    duration:2,
    onStart: function () {
        $('.page3_p').textillate({
            in: {
                effect: 'flipInX',
                //callback: function () {
                   // $('.Main_Span').textillate("out")
                //}
            },
            //out: { effect: 'fadeOutUp' }

        });

    }
}, "<")

gsap.from(".page4_img_content", {
    scrollTrigger:{
        trigger:".page4_img_content",
        scroller:"body",
    },
    opacity:0,
    scale:0.2,
    duration:1,
    ease: "power3.out",
})

tl.from(".page5_img_content_p", {

    scrollTrigger:{
        trigger:".page5_img_content_p",
        scroller:"body",
        start: "top 60%",
    },
  opacity:0,
    onStart: function () {
        $('.page5_img_content_p').textillate({
            in: {
                effect: 'flipInX',
                //callback: function () {
                   // $('.Main_Span').textillate("out")
                //}
            },
            //out: { effect: 'fadeOutUp' }

        });

    }
}, "<")

tl.from(".page6_p", {

    scrollTrigger:{
        trigger:".page6_p",
        scroller:"body",
        start: "top 60%",
    },
    x:"-100%",
    opacity:0,
    duration:1,
    onStart: function () {
        $('.page6_p').textillate({
            in: {
                effect: 'flipInX',
                //callback: function () {
                   // $('.Main_Span').textillate("out")
                //}
            },
            //out: { effect: 'fadeOutUp' }

        });

    }
}, "<")

gsap.from(".page6_img1", {
    scrollTrigger:{
        trigger:".page6_img1",
        scroller:"body",
    },
    opacity:0,
    x:"100%",
    duration:1,
    ease: "power3.out",
}, "<")
gsap.from(".page6_img2", {
    scrollTrigger:{
        trigger:".page6_img2",
        scroller:"body",
    },
    opacity:0,
    x:"100%",
    duration:1,
    delay:0.5,
    ease: "power3.out",
}, "<")
gsap.from(".page6_img3", {
    scrollTrigger:{
        trigger:".page6_img3",
        scroller:"body",
    },
    opacity:0,
    x:"100%",
    duration:1,
    delay:1,
    ease: "power3.out",
}, "<")


tl.from(".page7_p", {

    scrollTrigger:{
        trigger:".page7_p",
        scroller:"body",
        start: "top 60%",
    },
    x:"-100%",
    opacity:0,
    duration:1,
    onStart: function () {
        $('.page7_p').textillate({
            in: {
                effect: 'flipInX',
                //callback: function () {
                   // $('.Main_Span').textillate("out")
                //}
            },
            //out: { effect: 'fadeOutUp' }

        });

    }
}, "<")

gsap.from(".page7_span", {
    scrollTrigger:{
        trigger:".page7_span",
        scroller:"body",
    },
    opacity:0,
    y:"100%",
    duration:2,
    ease: "power3.out",
}, "<")
gsap.from(".page7_span2", {
    scrollTrigger:{
        trigger:".page7_span2",
        scroller:"body",
    },
    x:"-100%",
    duration:1,
    ease: "power3.out",
})

gsap.from(".page7_div_conten3", {
    scrollTrigger:{
        trigger:".page7_div_conten3",
        scroller:"body",
    },
    opacity:0,
    scale:0.2,
    duration:1,
    
    ease: "power3.out",
})
gsap.from(".page7_div_content2", {
    scrollTrigger:{
        trigger:".page7_div_conten3",
        scroller:"body",
    },
    opacity:0,
    scale:0.2,
    duration:1,
    delay:0.2,
    ease: "power3.out",
})
gsap.from(".page7_div_content", {
    scrollTrigger:{
        trigger:".page7_div_conten3",
        scroller:"body",
    },
    opacity:0,
    scale:0.2,
    delay:0.4,
    duration:1,
    ease: "power3.out",
})

gsap.from(".page7_img1", {
    scrollTrigger:{
        trigger:".page7_img1",
        scroller:"body",
    },
    opacity:0,
    scale:0.2,
    delay:0.4,
    duration:1,
    ease: "power3.out",
})