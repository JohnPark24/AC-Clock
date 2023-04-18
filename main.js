import { clock } from './clock.js';

// Call the clock function to get the current time
const currentTime = clock();

// Extract the hour from the current time
const currentHour = currentTime.getHours();

// Define an array of video URLs to cycle through
const videoURLs = [
  'https://www.youtube.com/watch?v=9j9YEuFeDAw', //12 AM GameCube
  'https://www.youtube.com/watch?v=UMMRXzXs-_k', //1 AM
  'https://www.youtube.com/watch?v=-GS2Uf2koDI'  //2 AM
];

// Function to change the video URL
function changeVideoURL() {
  // Get a random index from the videoURLs array
  const randomIndex = Math.floor(Math.random() * videoURLs.length);

  // Get the video iframe element
  const videoIframe = document.querySelector('.video iframe');

  // Set the new video URL
  videoIframe.src = videoURLs[randomIndex];
}

// Call the changeVideoURL function based on the current hour
if (currentHour >= 0 && currentHour < 1) {
  changeVideoURL();
}