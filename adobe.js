// Use the 'data-hide-slide-number="true"' attribute to turn off the slide number
// for a section.
Reveal.addEventListener('slidechanged', (event) => {
  const isSnOn = (event.currentSlide.dataset.hideSlideNumber !== 'true');
  if( isSnOn ) {
      Reveal.configure({ slideNumber: 'c/t' });
  }
  else {
      Reveal.configure({ slideNumber: false });
  }
});
