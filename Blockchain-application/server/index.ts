import { createServer } from "http";
import { Server, Socket } from "socket.io";
import { Blockchain } from "./classes/Blockchain";
import { ITransaction } from "./types/types";

const PORT = 8081;
const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: true,
    methods: ["GET", "POST"],
  },
});

enum BlockActions {
  ADD_TRANSACTION = "add_transaction",
}

export const blockchain = new Blockchain();

io.on("connection", (socket: Socket) => {
  socket.on(BlockActions.ADD_TRANSACTION, async (transaction: ITransaction, callback) => {
    await blockchain.addBlock(transaction);
    callback(blockchain.chain());
  });
});

httpServer.listen(PORT, () => {
  console.log("Listening to port: " + PORT);
});
