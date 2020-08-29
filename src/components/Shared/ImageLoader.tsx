import React from 'react';

interface ImagLoaderProps {
  preview: string;
  src: string;
  render: (src: string, style: React.CSSProperties) => JSX.Element;
  transitionTime?: number;
  timingFunction?: string;
  initialBlur?: number;
}

const loadImage = (src: string): Promise<string> => new Promise((resolve) => {
  const image = new Image();
  image.src = src;
  image.addEventListener('load', () => resolve(src), false);
});

export const ImageLoader: React.FC<ImagLoaderProps> = ({
  preview,
  src,
  render,
  transitionTime = 500,
  timingFunction = 'ease',
  initialBlur = 10,
}) => {
  const [localSrc, setLocalSrc] = React.useState(preview);
  const [blur, setBlur] = React.useState(initialBlur);
  const isMounted = React.useRef(false);

  React.useEffect(() => {
    (async function setImage() {
      const srcDataURI = await loadImage(src);

      if (isMounted.current) {
        return;
      }
      setLocalSrc(srcDataURI);
      setBlur(0);
    }());

    return () => {
      isMounted.current = false;
    };
  }, []);

  const basicStyle: React.CSSProperties = {
    filter: `blur(${blur}px)`,
    transition: `filter ${transitionTime}ms ${timingFunction}`,
    width: '100%',
    height: '100%',
  };

  return render(localSrc, basicStyle);
};
