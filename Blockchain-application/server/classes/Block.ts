import * as crypto from "crypto";
import { ITransaction } from "../types/types";
import { Transaction } from "./Transaction";
import { blockchain } from "../index";
export class Block {
  readonly nonce: number = 0;
  readonly hash: string;
  constructor(
    readonly index: number,
    readonly previousBlockHash: string,
    readonly timestamp: number,
    readonly data: ITransaction | ""
  ) {
    const { nonce, hash } = this.mine();
    this.nonce = nonce;
    this.hash = hash;
  }

  private calculateHash(nonce: number): string {
    const data = this.index + this.previousBlockHash + this.timestamp + this.data + nonce;
    return crypto.createHash("sha256").update(data).digest("hex");
  }

  private mine(): { nonce: number; hash: string } {
    let hash: string;
    let nonce = 0;
    do {
      hash = this.calculateHash(++nonce);
    } while (hash.startsWith("00000") === false);
    console.log("BLOCK MINED: " + hash);
    return { nonce, hash };
  }

  addTransaction(transaction: Transaction): void {
    if (transaction != undefined) {
      if (this.previousBlockHash != "0") {
        transaction.process();
        blockchain.addBlock(transaction);
      }
    }
  }
}
