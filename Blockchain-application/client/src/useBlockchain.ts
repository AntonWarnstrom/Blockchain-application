import { ref, readonly } from "vue";
import { Block } from "./types/types";

const blockchain = ref<Array<any>>([]);

export const useBlockchain = () => {
  const addBlocks = (value: Block[]) => {
    blockchain.value = value;
  };

  return { addBlocks, blocks: readonly(blockchain) };
};
