import { ITransaction } from "../types/types";
import { Block } from "./Block";

/**
 * chain: is an array with blocks within
 * get latestBlock() returns the last added transaction or block
 *
 * when constructing this object it automatically adds the genesis block to the chain
 *
 * addBlock() creates a new block object with information taken from previous block and
 * adds the transaction data
 */
export class Blockchain {
  private _chain: Block[] = [];
  private get latestBlock(): Block {
    return this._chain[this._chain.length - 1];
  }
  constructor() {
    this._chain.push(new Block(0, "0", Date.now(), ""));
    console.log(...this._chain);
  }
  async addBlock(data: ITransaction): Promise<void> {
    const block: Block = new Block(
      this.latestBlock.index + 1,
      this.latestBlock.hash,
      Date.now(),
      data
    );
    //console.log(block);
    this._chain.push(block);
    //console.log(...this._chain);
  }
  chain(): Block[] {
    return [...this._chain];
  }
}
