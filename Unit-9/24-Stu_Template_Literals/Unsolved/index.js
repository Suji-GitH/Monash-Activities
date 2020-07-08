// music should be an object with title, artist, and album properties
const music = {
  title: artist,
  title2: artist2,
  title3: artist3
};

// Write code between the <div> tags to output the data from the music object above.
// Use an h2 element for the title and a p element for artist and title
const songSnippet = `
  <div class="song">
  <h2>${music.title}</h2>
  <p>${music.title.title2}</p>
  <p>${music.title3}</p>
  </div>
`;

const element = document.getElementById("music");
element.innerHTML = songSnippet;

