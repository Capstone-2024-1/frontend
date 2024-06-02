//1
// export const getWebcam = (callback: (stream: MediaStream) => void): void => {
//   const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
//   const constraints = {
//     video: {
//       facingMode: isMobile ? { exact: "environment" } : "user",
//       width: { ideal: 1280 },
//       height: { ideal: 720 },
//     },
//     audio: false
//   };

//   navigator.mediaDevices.getUserMedia(constraints)
//     .then(callback)
//     .catch((err) => {
//       console.log(err);
//     });
// }

// const Styles = {
//   Video: { width: "100%", height: "100%", background: 'rgba(245, 240, 215, 0.5)' },
//   None: { display: 'none' },
// };

// export default getWebcam;

//2
// export const getWebcam = (callback: (stream: MediaStream) => void): void => {
//   const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
//   const constraints = {
//     video: { facingMode: isMobile ? { exact: "environment" } : "user" },
//     audio: false
//   };

//   navigator.mediaDevices.getUserMedia(constraints)
//     .then(callback)
//     .catch((err) => {
//       console.log(err);
//     });
// }

// const Styles = {
//   Video: { width: "100%", height: "100%", background: 'rgba(245, 240, 215, 0.5)' },
//   None: { display: 'none' },
// };

// export default getWebcam;

// //3 초점 모드 시도 - 대부분 브라우저에서 지원 안 함
// export const getWebcam = (callback: (stream: MediaStream) => void): void => {
//   const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
//   const constraints = {
//     video: { 
//       facingMode: isMobile ? { exact: "environment" } : "user",
//       // width: { ideal: 1280 },
//       // height: { ideal: 720 },
//       focusMode: "continuous" // 초점 모드 설정 (지원되는 경우)
//     },
//     audio: false
//   };

//   navigator.mediaDevices.getUserMedia(constraints)
//     .then(callback)
//     .catch((err) => {
//       console.log(err);
//     });
// }

// const Styles = {
//   Video: { width: "100%", height: "100%", background: 'rgba(245, 240, 215, 0.5)' },
//   None: { display: 'none' },
// };

// export default getWebcam;


//4
export const getWebcam = (callback: (stream: MediaStream) => void): void => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const constraints = {
    video: { 
      facingMode: isMobile ? { exact: "environment" } : "user",
      width: { ideal: 1920 },  // 해상도 설정 (가로)
      height: { ideal: 1080 }, // 해상도 설정 (세로)
      frameRate: { ideal: 30 } // 프레임률 설정
    },
    audio: false
  };

  navigator.mediaDevices.getUserMedia(constraints)
    .then(callback)
    .catch((err) => {
      console.log(err);
    });
}

const Styles = {
  Video: { width: "100%", height: "100%", background: 'rgba(245, 240, 215, 0.5)' },
  None: { display: 'none' },
};

export default getWebcam;
