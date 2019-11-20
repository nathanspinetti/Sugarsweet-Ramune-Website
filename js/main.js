var rellax = new Rellax('.rellax');

var tl = new TimelineMax({paused:true});

tl.from( $('.steptilt1'), 1, { opacity: 0, ease: "back.out(1.7)" } ),
tl.from( $('.step1'), 1, { opacity: 0, ease: "back.out(1.7)" } ),
tl.from( $('.peell'), 1, { opacity: 0, ease: "back.out(1.7)" } ),
tl.from( $('.steptilt2'), 1, { opacity: 0, ease: "back.out(1.7)" } ),
tl.from( $('.step2'), 1, { opacity: 0, ease: "back.out(1.7)" } ),
tl.from( $('.linedup'), 1, { opacity: 0, ease: "back.out(1.7)" } ),
tl.from( $('.steptilt3'), 1, { opacity: 0, ease: "back.out(1.7)" } ),
tl.from( $('.step3'), 1, { opacity: 0, ease: "back.out(1.7)" } );
tl.from( $('.piece'), 1, { opacity: 0, ease: "back.out(1.7)" } ),
tl.from( $('.peeeel'), 1, { opacity: 0, ease: "back.out(1.7)" } ),
tl.from( $('.piece'), 2, { y: -20, ease: "back.out(1.7)" } ),

$('.startbutton').click(function(){
	tl.play();
})
document.querySelector("body > section.background1 > div > a > h1")

var tl1 = new TimelineMax({paused:true});

tl1.from( $('.q1'), 2, { opacity: 0, ease: "back.out(1.7)" } ),
tl1.from( $('.a1'), 2, { opacity: 0, ease: "back.out(1.7)" } ),
tl1.to( $('.q1, .a1'), 4, { delay:4, opacity: 0, ease: "back.out(1.7)" } ),
tl1.from( $('.q2'), 2, { opacity: 0, ease: "back.out(1.7)" } ),
tl1.from( $('.a2'), 2, { opacity: 0, ease: "back.out(1.7)" } ),
tl1.to( $('.q2, .a2'), 4, { delay:4, opacity: 0, ease: "back.out(1.7)" } ),
tl1.from( $('.q3'), 2, { opacity: 0, ease: "back.out(1.7)" } ),
tl1.from( $('.a3'), 2, { opacity: 0, ease: "back.out(1.7)" } ),
tl1.to( $('.q3, .a3'), 4, { delay:4, opacity: 0, ease: "back.out(1.7)" } ),
tl1.from( $('.q4'), 2, { opacity: 0, ease: "back.out(1.7)" } ),
tl1.from( $('.a4'), 2, { opacity: 0, ease: "back.out(1.7)" } ),
tl1.to( $('.q4, .a4'), 4, { delay:4, opacity: 0, ease: "back.out(1.7)" } ),
tl1.from( $('.q5'), 2, { opacity: 0, ease: "back.out(1.7)" } ),
tl1.from( $('.a5'), 2, { opacity: 0, ease: "back.out(1.7)" } ),
tl1.to( $('.q5, .a5'), 4, { delay:4, opacity: 0, ease: "back.out(1.7)" } ),
tl1.from( $('.q6'), 2, { opacity: 0, ease: "back.out(1.7)" } ),
tl1.from( $('.a6'), 2, { opacity: 0, ease: "back.out(1.7)" } ),
tl1.to( $('.q6, .a6'), 4, { delay:4, opacity: 0, ease: "back.out(1.7)" } );

$('.qbutton').click(function(){
	tl1.play();
})
document.querySelector("body > div.bg8 > section > a > h1")