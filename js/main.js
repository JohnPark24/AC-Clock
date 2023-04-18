import { currentTime } from './clock.js';

// Call the clock function to get the current time
const currentTime = currentTime();

// Extract the hour from the current time
const currentHour = currentTime.getHours();

// Define an array of video URLs to cycle through for each hour
const videoURLs = [  'https://www.youtube.com/watch?v=9j9YEuFeDAw', //12 AM GameCube  
                      'https://www.youtube.com/watch?v=UMMRXzXs-_k', //1 AM  
                      'https://www.youtube.com/watch?v=-GS2Uf2koDI', //2 AM  
                      'https://www.youtube.com/watch?v=se7iaIfFdoQ', //3 AM  
                      'https://www.youtube.com/watch?v=AzHvhnzxeEw', //4 AM  
                      'https://www.youtube.com/watch?v=1auEF6PRm7Q'  //5 AM
                      'https://www.youtube.com/watch?v=hhlLbg4CRBc'  //6 AM
                      'https://www.youtube.com/watch?v=jcPIAICO-DI'  //7 AM
                      'https://www.youtube.com/watch?v=J22dco5U-nY'  //8 AM
                      'https://www.youtube.com/watch?v=odevRs61OqY'  //9 AM
                      'https://www.youtube.com/watch?v=uFq-VvnEa80'  //10 AM
                      'https://www.youtube.com/watch?v=0dzoz1iOvws'  //11 AM
                      'https://www.youtube.com/watch?v=4pmZrtO8_co'  //12 PM
                      'https://www.youtube.com/watch?v=dAABrbS8QeA'  //1 PM
                      'https://www.youtube.com/watch?v=hwENcKas4nU'  //2 PM
                      'https://www.youtube.com/watch?v=TMFHHTFEMPQ'  //3 PM
                      'https://www.youtube.com/watch?v=_m_cI7cssPQ'  //4 PM
                      'https://www.youtube.com/watch?v=zcIDJd-ncHI'  //5 PM
                      'https://www.youtube.com/watch?v=7nNsOcPfGxk'  //6 PM
                      'https://www.youtube.com/watch?v=T_454gyj9PE'  //7 PM
                      'https://www.youtube.com/watch?v=GlYzXvHQaDw'  //8 PM
                      'https://www.youtube.com/watch?v=Au8cSsWgYUY'  //9 PM
                      'https://www.youtube.com/watch?v=nB1xsg-X3-0'  //10 PM
                      'https://www.youtube.com/watch?v=Ar8sNQNvi90'  //11 PM
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
if (currentHour === 0) {
  changeVideoURL();
} else if (currentHour === 1) {
  changeVideoURL();
} else if (currentHour === 2) {
  changeVideoURL();
} else if (currentHour === 3) {
  changeVideoURL();
} else if (currentHour === 4) {
  changeVideoURL();
} else if (currentHour === 5) {
  changeVideoURL();
} else if (currentHour === 6) {
  changeVideoURL();
} else if (currentHour === 7) {
  changeVideoURL();
} else if (currentHour === 8) {
  changeVideoURL();
} else if (currentHour === 9) {
  changeVideoURL();
} else if (currentHour === 10) {
  changeVideoURL();
} else if (currentHour === 11) {
  changeVideoURL();
} else if (currentHour === 12) {
  changeVideoURL();
} else if (currentHour === 13) {
  changeVideoURL();
} else if (currentHour === 14) {
  changeVideoURL();
} else if (currentHour === 15) {
  changeVideoURL();
} else if (currentHour === 16) {
  changeVideoURL();
} else if (currentHour === 17) {
  changeVideoURL();
} else if (currentHour === 18) {
  changeVideoURL();
} else if (currentHour === 19) {
  changeVideoURL();
} else if (currentHour === 21) {
  changeVideoURL();
} else if (currentHour === 22) {
  changeVideoURL();
} else if (currentHour === 23) {
  changeVideoURL();
}


// Get the div element where the video player will be inserted
const videoPlayerDiv = document.getElementById('video-player');

// Create the video iframe element
const videoIframe = document.createElement('iframe');
videoIframe.width = '660';
videoIframe.height = '415';
videoIframe.frameBorder = '0';
videoIframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
videoIframe.allowFullscreen = true;

// Set the initial video URL
videoIframe.src = 'https://www.youtube.com/embed/zcIDJd-ncHI';

// Insert the video iframe element into the div element
videoPlayerDiv.appendChild(videoIframe);