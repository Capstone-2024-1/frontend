const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export const sendImageToBackend = async (blob: Blob) => {
  const formData = new FormData();
  formData.append('menuImage', blob, 'image.jpg');
  try {
    const response = await fetch(`${baseURL}/menu`, {
      method: 'POST',
      body: formData,
    });
    if (response.ok) {
      const result = await response.json();
      console.log('Image uploaded successfully:', result);
    } else {
      console.error('Failed to upload image');
    }
  } catch (error) {
    console.error('Error uploading image:', error);
  }
};
