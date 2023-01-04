const preloadImage = (imageSrc: string) => {
  return new Promise<void>((resolve) => {
    const image = new Image();

    image.onload = () => {
      resolve();
    };

    image.src = imageSrc;
  });
};

export { preloadImage };
