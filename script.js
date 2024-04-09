let projCollection = document.getElementById('collectionGrid')

let jsonDatabase = [
     {
      "title" : "Bruno Mars ",
      "images" : "brunomars.jpg",
      "description" : ["That's What I like", "Talking to the Moon", "Grenade"]
    },
    {
      "title" : "HYBS",
      "images" : "HYBS.jpg",
      "description" : ["Dancing with my phone", "Ride", "Would You Mind"]
    },
    {
      "title" : "1975",
      "images" : "1975.jpg",
      "description" : ["I'm in Love with you", "Somebody Else","Sincerity is scary"]
    },
    {
      "title" : "Grent Perez",
      "images" : "grentperez.jpg",
      "description" : ["Conversation with the Moon", "Cherry Wine", "Wishful Thinking"]
    }
  ];

for (var i = 0; i < jsonDatabase.length; i++) {
  createCollection(jsonDatabase[i]);
}

function createCollection(incomingJSON) {
  let newProject = document.createElement("DIV");
  newProject.classList.add('projectItem');

  let newProjectTitle = document.createElement("H3");
  newProjectTitle.classList.add('projectTitle');
  newProjectTitle.innerText = incomingJSON['title'];
  newProject.appendChild(newProjectTitle);

  let newProjectSubhead = document.createElement("P");
  newProjectSubhead.innerText = "Best Songs:";
  newProject.appendChild(newProjectSubhead);

  let newProjectDescription = document.createElement("UL");
  newProject.appendChild(newProjectDescription);

  for (var j = 0; j < incomingJSON['description'].length; j++) {
    var newDescription = document.createElement("LI");
    newDescription.innerText = incomingJSON['description'][j];
    newProjectDescription.appendChild(newDescription);
  }

  let newImage = document.createElement("IMG");
  newImage.classList.add("projectImage");
  newImage.src = incomingJSON['images'];
  newProject.appendChild(newImage);

  projCollection.appendChild(newProject);
}

// Apply animation with Anime.js after DOM content loaded https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event not sure if website is right
document.addEventListener('DOMContentLoaded', function() {
  anime({
    targets: '.projectItem',
    translateY: [-100, 0],
    opacity: [0, 1],
    delay: anime.stagger(100), // Staggered start for each item
    easing: 'easeOutExpo' //https://easings.net/#easeInOutExpo
  });
});
