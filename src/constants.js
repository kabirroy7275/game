let isDesktop = true;
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  isDesktop = false;
}

export const isMobile = !isDesktop;

const containerDiv = document.querySelector("#container");
export const containerWidth = containerDiv.clientWidth;
export const containerHeight = containerDiv.clientHeight;
export const leftOffset = (window.innerWidth - containerWidth) / 2;
export const topOffset = (window.innerHeight - containerHeight) / 2;

export const RIM_HEIGHT = 0.16*containerHeight;
export const RIM_WIDTH = 0.2*containerWidth;
export const TOPOFRIM = 0.3*containerHeight;
export const LEFTOFRIM = 0.4*containerWidth;

export const LEFTOFTIMER = 0.18*containerWidth;
export const TOPOFTIMER = 0.06*containerHeight;
export const TIMERWIDTH = 0.27 * containerWidth;
export const TIMERHEIGHT = 0.04* containerHeight;


export const LEFTOFTIMERTEXT = 0.058*containerWidth;
export const TOPOFTIMERTEXT = 0.037*containerHeight;
export const TIMERTEXTWIDTH = 0.22*containerWidth
export const TIMERTEXTHEIGHT = 0.045*containerHeight;

export const LEFTOFBG = 0.5*containerWidth ;
export const TOPOFBG =0.5* containerHeight;
export const BGWIDTH = containerWidth;
export const BGHEIGHT = containerHeight;

export const LEFTOFSCORE = containerWidth - LEFTOFTIMER ;

export const LEFTOFSCORETEXT = 0.7*containerWidth;

export const LEFTOFBOARD =  0.5 * containerWidth;
export const TOPOFBOARD = 0.26* containerHeight;
export const WIDTHBOARD =  0.5 * containerWidth;
export const HEIGHTBOARD = 0.2 * containerHeight;

