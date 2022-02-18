export interface Transaction {
  sender: string;
  recipient: string;
  amount: string;
}

export interface Block {
  index: number;
  timestamp: number;
  data: string;
  nonce: number;
  hash: string;
  previousBlockHash: string;
}
