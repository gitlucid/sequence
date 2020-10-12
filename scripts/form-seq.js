// Get the Sequence element
var sequenceElement = document.getElementById("sequence");

// Place your Sequence options here to override defaults
// See: http://sequencejs.com/documentation/#options
var options = {
  startingStepAnimatesIn: true,
  autoPlay: true,
  autoPlayPauseOnHover: false,
  /* Make this the same as the animateCanvasDuration */
  phaseThreshold: 5,
  animateCanvasDuration: 5,
  hideStepsUntilPreloaded: true,
  reverseWhenNavigatingBackwards: false,
  fadeStepWhenSkipped: false,
  cycle: false
}


// Launch Sequence on the element, and with the options we specified above
var mySequence = sequence(sequenceElement, options);

$( document ).ready(function() {

  // Get the Sequence element
var sequenceElement = document.getElementById("sequence");

// Place your Sequence options here to override defaults
// See: http://sequencejs.com/documentation/#options
var options = {
  startingStepAnimatesIn: true,
  autoPlay: true,
  autoPlayPauseOnHover: false,
  autoPlayInterval: 3000,
  /* Make this the same as the animateCanvasDuration */
  phaseThreshold: 5,
  animateCanvasDuration: 5,
  hideStepsUntilPreloaded: true,
  reverseWhenNavigatingBackwards: false,
  fadeStepWhenSkipped: false,
  cycle: false
}

// Launch Sequence on the element, and with the options we specified above
var mySequence = sequence(sequenceElement, options);



// When autoPlay is stopped
mySequence.animationStarted = function() {

if (mySequence.currentStepId % 2 == 0) {
      
        mySequence.start();

    } else {
        
        mySequence.stop();
    }

}


  });

