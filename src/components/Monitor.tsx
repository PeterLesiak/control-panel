'use client';

import Image from 'next/image';
import { useEffect, useState, type MouseEvent as ReactMouseEvent } from 'react';
import io from 'socket.io-client';

export interface MonitorDisplayProps {
  name: string;
}

export default function Monitor({ name }: MonitorDisplayProps) {
  const enterFullscreen = async (event: ReactMouseEvent<HTMLImageElement>) => {
    const element = event.currentTarget;

    await element.requestFullscreen();
  };

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const socket = io('http://localhost:9696');

    let timeout: NodeJS.Timeout;

    socket.on('frame', (frame: ArrayBuffer) => {
      const blob = new Blob([new Uint8Array(frame)], { type: 'image/jpeg' });
      const objectUrl = URL.createObjectURL(blob);

      setImageSrc(objectUrl);
      setIsLoading(false);

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setIsLoading(true);
      }, 500);
    });

    return () => {
      socket.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="flex aspect-video flex-col items-center justify-center rounded-lg bg-background-700 shadow-md">
      {isLoading || !imageSrc ? (
        <div title="Loading..." className="grid h-full place-items-center">
          <div className="loader" />
        </div>
      ) : (
        <Image
          src={imageSrc}
          width={1920}
          height={1080}
          onClick={enterFullscreen}
          alt="Monitor"
          title="Click to view in fullscreen mode"
          className="cursor-pointer rounded-t-lg"
        />
      )}
      <h2 className="my-4 text-3xl font-bold">{name}</h2>
    </div>
  );
}
