import { createServer } from 'node:http';
import { Server } from 'socket.io';

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', socket => {
  console.log(`Client connected: ${socket.id}`);

  socket.on('frame', frame => {
    // Forward the frame to all other clients
    socket.broadcast.emit('frame', frame);
  });

  socket.on('disconnect', () => {
    console.log(`Client disconnected: ${socket.id}`);
  });
});

const port = 9696;

httpServer.listen(port, () => {
  console.log(`Socket.IO server running on http://localhost:${port}\n`);
});
