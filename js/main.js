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