import { ref, readonly } from "vue";
import { Transaction } from "./types/types";

const transactions = ref<Array<any>>([]);
let show = ref<Boolean>(false);
export const useTransactions = () => {
  const add = (value: Transaction) => {
    transactions.value.push(value);
    console.log(transactions);
  };
  const set = () => {
    show.value = true;
  };
  const remove = () => {
    show.value = false;
    transactions.value.shift();
  };

  return { add, remove, set, show, transactions: readonly(transactions) };
};
