export interface Block {
  index: number;
  timestamp: number;
  data: string;
  nonce: number;
  hash: string;
  previousBlockHash: string;
}

export interface ITransaction {
  sender: string;
  recipient: string;
  amount: number;
  timestamp: number;
}
