// export const getWebcam = (callback: (stream: MediaStream) => void): void => {
//   const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
//   const constraints = {
//     video: { 
//       facingMode: isMobile ? { exact: "environment" } : "user",
//       width: { ideal: 1920 },  // 해상도 설정 (가로)
//       height: { ideal: 1080 }, // 해상도 설정 (세로)
//       frameRate: { ideal: 30 } // 프레임률 설정
//     },
//     audio: false
//   };

//   navigator.mediaDevices.getUserMedia(constraints)
//     .then(callback)
//     .catch((err) => {
//       console.log(err);
//     });
// }

// export const captureImage = (video: HTMLVideoElement): string | null => {
//   const canvas = document.createElement('canvas');
//   canvas.width = video.videoWidth;
//   canvas.height = video.videoHeight;
//   const context = canvas.getContext('2d');
  
//   if (context) {
//     context.drawImage(video, 0, 0, canvas.width, canvas.height);
//     return canvas.toDataURL('image/png');
//   } else {
//     console.error('Failed to get canvas context');
//     return null;
//   }
// }

// const Styles = {
//   Video: { width: "100%", height: "90%", background: 'rgba(245, 240, 215, 0.5)' },
//   None: { display: 'none' },
// };

// export default getWebcam;


import { sendImageToBackend, sendImageToBackendGroup, sendImageToBackendTest } from '@/apis/camera';

interface User {
  accessToken: string;
}

type CategorizeItemsFunction = (data: any) => void;

interface Router {
  push: (path: string) => void;
}

export const processImage = async (
  file: File,
  user: User,
  categorizeItems: CategorizeItemsFunction,
  currentGroup: number,
  router: Router
): Promise<void> => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (context) {
    const img = new Image();
    img.onload = async () => {
      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(img, 0, 0);
      const blob = await new Promise<Blob | null>((resolve) => {
        canvas.toBlob((blob) => {
          resolve(blob);
        }, 'image/png');
      });
      if (blob) {
        let data;
        let token = user.accessToken;
        if (token === "" || !token) {
          token = localStorage.getItem('accessToken') || "";
        }

        const selectGroup = localStorage.getItem('selectGroup');
        const groupId = selectGroup ? parseInt(selectGroup, 10) : currentGroup;

        if (token === '') {
          data = await sendImageToBackendTest(blob);
        } else {
          if (groupId === -1) {
            data = await sendImageToBackend(blob, token);
          } else {
            data = await sendImageToBackendGroup(blob, token, groupId);
          }
        }
        if (data) {
          console.log('Data received from backend:', data);
          categorizeItems(data);  // 결과 사용
          router.push('/menu');
        }
      }
    };
    img.src = URL.createObjectURL(file);
  } else {
    console.error('Failed to get canvas context');
  }
};
