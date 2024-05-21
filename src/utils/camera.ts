// 웹캠 스트림을 가져오는 함수
export const getWebcam = (callback: (stream: MediaStream) => void): void => {
  const constraints = {
    video: true,
    audio: false
  };
  navigator.mediaDevices.getUserMedia(constraints)
    .then(callback)
    .catch((err) => {
      console.log(err);
    });
}

// 스타일 정의
const Styles = {
  Video: { width: "100%", height: "100%", background: 'rgba(245, 240, 215, 0.5)' },
  None: { display: 'none' },
};

export default getWebcam;
