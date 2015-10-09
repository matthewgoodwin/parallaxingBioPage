//helps start or initiate skrollr
var s = skrollr.init();

//refresh skrollr after resizing our sections to 100% of the view port
s.refresh($(".homeSlide"));

// Init Skrollr
var s = skrollr.init({
    forceHeight: false
});