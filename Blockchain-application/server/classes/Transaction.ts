import * as crypto from "crypto";
import { ITransaction } from "../types/types";
export class Transaction implements ITransaction {
  readonly sender;
  readonly recipient;
  readonly amount: number;
  readonly timestamp: number;
  private sequence: number = 0;
  signature: string = "";
  constructor(sender: any, recipient: any, amount: number, timestamp: any) {
    this.sender = sender;
    this.recipient = recipient;
    this.amount = amount;
    this.timestamp = timestamp;
  }
  calculateHash(): string {
    this.sequence++; //increase the sequence to avoid 2 identical transactions having the same hash
    return crypto
      .createHash("sha256")
      .update(`${this.sender}${this.recipient}${this.sequence}`)
      .digest("hex");
  }

  /**
   * Implement payment
   */
  process() {
    this.signature = this.calculateHash();
  }

  getDetails() {
    const { sender, recipient, amount, timestamp } = this;
    return {
      sender,
      recipient,
      amount,
      timestamp,
    };
  }
}
