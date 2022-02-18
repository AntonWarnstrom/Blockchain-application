import io, { Socket } from "socket.io-client";
import { ref } from "vue";
import { Block, Transaction } from "./types/types";
import { useTransactions } from "./useTransactions";
import { useBlockchain } from "./useBlockchain";
const socket = ref<Socket | null>(null);

export const useSocket = () => {
  const { add, remove, set } = useTransactions();
  const { addBlocks } = useBlockchain();
  const send = (transaction: Transaction) => {
    socket.value?.emit(
      "add_transaction",
      { ...transaction, timestamp: Date.now() },
      (blocks: Block[]) => {
        set();
        addBlocks(blocks);
        remove()
      }
    );
    //add(transaction);
  };

  const connect = () => {
    socket.value = io("http://localhost:8081");

    socket.value.on("connect", () => {
      console.log(socket.value?.connected);
    });
  };

  return { socket, send, connect };
};
