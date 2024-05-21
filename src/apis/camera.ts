const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export const sendImageToBackend = async (blob: Blob) => {
  const formData = new FormData();
  formData.append('file', blob, 'image.jpg');
  try {
    const response = await fetch(`${baseURL}/menu`, {
      method: 'POST',
      body: formData,
    });
    if (response) {
      console.log(response);
    }
  } catch (error) {
    console.error('Error uploading image:', error);
  }
};