'use client';

import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from 'react';
import io from 'socket.io-client';

export interface MonitorDisplayProps {
  name: string;
}

export default function Monitor({ name }: MonitorDisplayProps) {
  const enterFullscreen = async (event: ReactMouseEvent<HTMLVideoElement>) => {
    const element = event.currentTarget;

    await element.requestFullscreen();
  };

  const [isLoaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const socket = io('http://localhost:8080');

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="flex aspect-video flex-col items-center justify-center rounded-lg bg-background-700 shadow-md">
      {isLoaded ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          width={1920}
          height={1080}
          onClick={enterFullscreen}
          title="Click to view in fullscreen mode"
          className="cursor-pointer rounded-t-lg"
        />
      ) : (
        <div title="Loading..." className="grid h-full place-items-center">
          <div className="loader" />
        </div>
      )}
      <h2 className="my-4 text-3xl font-bold">{name}</h2>
    </div>
  );
}
