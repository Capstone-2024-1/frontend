export const getWebcam = (callback: (stream: MediaStream) => void): void => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const constraints = {
    video: { facingMode: isMobile ? { exact: "environment" } : "user" },
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