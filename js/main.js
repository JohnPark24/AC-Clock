(function() {
  // Define an array of video URLs to cycle through for each hour
  const videoURLs = [
    {hour: 0, url:'https://www.youtube.com/watch?v=9j9YEuFeDAw'}, //12 AM GameCube  
    {hour: 1, url:'https://www.youtube.com/watch?v=UMMRXzXs-_k'}, //1 AM  
    {hour: 2, url:'https://www.youtube.com/watch?v=-GS2Uf2koDI'}, //2 AM  
    {hour: 3, url:'https://www.youtube.com/watch?v=se7iaIfFdoQ'}, //3 AM  
    {hour: 4, url:'https://www.youtube.com/watch?v=AzHvhnzxeEw'}, //4 AM  
    {hour: 5, url:'https://www.youtube.com/watch?v=1auEF6PRm7Q'},  //5 AM
    {hour: 6, url:'https://www.youtube.com/watch?v=hhlLbg4CRBc'},  //6 AM
    {hour: 7, url:'https://www.youtube.com/watch?v=jcPIAICO-DI'},  //7 AM
    {hour: 8, url:'https://www.youtube.com/watch?v=J22dco5U-nY'},  //8 AM
    {hour: 9, url:'https://www.youtube.com/watch?v=odevRs61OqY'},  //9 AM
    {hour: 10, url:'https://www.youtube.com/watch?v=uFq-VvnEa80'},  //10 AM
    {hour: 11, url:'https://www.youtube.com/watch?v=0dzoz1iOvws'},  //11 AM
    {hour: 12, url:'https://www.youtube.com/watch?v=4pmZrtO8_co'},  //12 PM
    {hour: 13, url:'https://www.youtube.com/watch?v=dAABrbS8QeA'},  //1 PM
    {hour: 14, url:'https://www.youtube.com/watch?v=hwENcKas4nU'},  //2 PM
    {hour: 15, url:'https://www.youtube.com/watch?v=TMFHHTFEMPQ'},  //3 PM
    {hour: 16, url:'https://www.youtube.com/watch?v=_m_cI7cssPQ'},  //4 PM
    {hour: 17, url:'https://www.youtube.com/watch?v=zcIDJd-ncHI'},  //5 PM
    {hour: 18, url:'https://www.youtube.com/watch?v=7nNsOcPfGxk'},  //6 PM
    {hour: 19, url:'https://www.youtube.com/watch?v=T_454gyj9PE'},  //7 PM
    {hour: 20, url:'https://www.youtube.com/watch?v=GlYzXvHQaDw'},  //8 PM
    {hour: 21, url:'https://www.youtube.com/watch?v=Au8cSsWgYUY'},  //9 PM
    {hour: 22, url:'https://www.youtube.com/watch?v=nB1xsg-X3-0'},  //10 PM
    {hour: 23, url:'https://www.youtube.com/watch?v=Ar8sNQNvi90'}  //11 PM
  ];


  // Function to change the video URL based on the current hour
  function changeVideoURL() {
    const now = new Date();
    const hour = now.getHours();
    const videoIframe = document.querySelector('.video iframe');
    const videoURL = videoURLs.find(entry => entry.hour === hour)?.url;
    if (videoURL) {
      videoIframe.src = videoURL;
    }
  }

  // Get the div element where the video player will be inserted
  const videoPlayerDiv = document.getElementById('video-player');

  // Create the video iframe element
  const newVideoIframe = document.createElement('iframe');
  newVideoIframe.width = '660';
  newVideoIframe.height = '415';
  newVideoIframe.frameBorder = '0';
  newVideoIframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  newVideoIframe.allowFullscreen = true;
  changeVideoURL();

  // Insert the video iframe element into the div element
  videoPlayerDiv.appendChild(newVideoIframe);

  // Add an event listener to the video iframe that changes the video every hour
  newVideoIframe.addEventListener('load', () => {
    setInterval(() => {
      changeVideoURL();
    }, 60 * 60 * 1000);    
  }); 
})();
