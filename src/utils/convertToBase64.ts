export const toBase64 = (file: File | null): Promise<string> =>
  new Promise((resolve, reject) => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
    } else {
      return null;
    }
  });
