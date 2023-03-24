
gsap.registerPlugin(ScrollTrigger);

gsap.to("#text", {
	attr: {
		startOffset: -1000
	},
	scrollTrigger: {
		start: 100,
		end: 200,
		scrub: 1
	}
});
