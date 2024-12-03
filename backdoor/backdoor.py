from PIL import ImageGrab
import socketio
import cv2
import numpy as np
import time

io = socketio.Client()

@io.event
def connect():
    print("Connected to the server.")

@io.event
def disconnect():
    print("Disconnected from the server.")

def stream_video():
    io.connect("http://localhost:9696")

    jpeg_quality = 100

    fps = 30

    frame_interval = 1.0 / fps

    try:
        while True:
            start_time = time.time()

            screenshot = ImageGrab.grab()
            frame = np.array(screenshot)

            frame = cv2.cvtColor(frame, cv2.COLOR_BGRA2RGB)
            _, encoded_image = cv2.imencode(".jpg", frame, [int(cv2.IMWRITE_JPEG_QUALITY), jpeg_quality])

            io.emit("frame", encoded_image.tobytes())

            elapsed_time = time.time() - start_time
            sleep_time = frame_interval - elapsed_time

            if sleep_time > 0:
                time.sleep(sleep_time)
    except KeyboardInterrupt:
        pass
    finally:
        io.disconnect()

if __name__ == "__main__":
    stream_video()
