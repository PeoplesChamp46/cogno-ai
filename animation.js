let tl = gsap.timeline({defaults: { Easings : Expo.EaseOut}});

tl.from('.bot-head', {duration : 1, opacity : 0, delay: 0.2})
  .from('.heading, .subheading, .title, #hello, #inner', { duration: 1, opacity: 0})
  .from('.bot-content', { duration: 1, opacity: 0})
  .from('.content-box, .button-container', { duration: 1, opacity: 0, stagger: 0.8})