// import { currentTime } from './clock.js';

(function() {
  function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";

    if(hh == 0){
      hh = 12;
    }
    if(hh > 12){
      hh = hh - 12;
      session = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss + " " + session;

    document.getElementById("clock").innerText = time; 
    changeVideoURL(hh);
  }

  // Define an array of video URLs to cycle through for each hour
  const videoURLs = [
    'https://www.youtube.com/watch?v=9j9YEuFeDAw', //12 AM GameCube  
    'https://www.youtube.com/watch?v=UMMRXzXs-_k', //1 AM  
    'https://www.youtube.com/watch?v=-GS2Uf2koDI', //2 AM  
    'https://www.youtube.com/watch?v=se7iaIfFdoQ', //3 AM  
    'https://www.youtube.com/watch?v=AzHvhnzxeEw', //4 AM  
    'https://www.youtube.com/watch?v=1auEF6PRm7Q',  //5 AM
    'https://www.youtube.com/watch?v=hhlLbg4CRBc',  //6 AM
    'https://www.youtube.com/watch?v=jcPIAICO-DI',  //7 AM
    'https://www.youtube.com/watch?v=J22dco5U-nY',  //8 AM
    'https://www.youtube.com/watch?v=odevRs61OqY',  //9 AM
    'https://www.youtube.com/watch?v=uFq-VvnEa80',  //10 AM
    'https://www.youtube.com/watch?v=0dzoz1iOvws',  //11 AM
    'https://www.youtube.com/watch?v=4pmZrtO8_co',  //12 PM
    'https://www.youtube.com/watch?v=dAABrbS8QeA',  //1 PM
    'https://www.youtube.com/watch?v=hwENcKas4nU',  //2 PM
    'https://www.youtube.com/watch?v=TMFHHTFEMPQ',  //3 PM
    'https://www.youtube.com/watch?v=_m_cI7cssPQ',  //4 PM
    'https://www.youtube.com/watch?v=zcIDJd-ncHI',  //5 PM
    'https://www.youtube.com/watch?v=7nNsOcPfGxk',  //6 PM
    'https://www.youtube.com/watch?v=T_454gyj9PE',  //7 PM
    'https://www.youtube.com/watch?v=GlYzXvHQaDw',  //8 PM
    'https://www.youtube.com/watch?v=Au8cSsWgYUY',  //9 PM
    'https://www.youtube.com/watch?v=nB1xsg-X3-0',  //10 PM
    'https://www.youtube.com/watch?v=Ar8sNQNvi90'  //11 PM
  ];

  // Keep track of the current index
  let currentIndex = 0;

  // Function to change the video URL based on the current hour
  function changeVideoURL(hh) {
    const videoIframe = document.querySelector('.video iframe');
    videoIframe.src = videoURLs[hh % videoURLs.length];
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

  // Add an event listener to the video iframe that changes the video every hour
  videoIframe.addEventListener('load', () => {
    setInterval(() => {
      currentIndex++;
      currentTime();
    }, 60 * 60 * 1000);
  }); 

  // Call the currentTime function to update the clock initially
  currentTime();
})();




// Function to change the video URL
// function changeVideoURL(currentHour) {
//   // Get the video iframe element
//   const videoIframe = document.querySelector('.video iframe');

//   // Set the new video URL
//   videoIframe.src = videoURLs[currentIndex];

//   // Update the current index
//   currentIndex = (currentIndex + 1) % videoURLs.length;
// }
