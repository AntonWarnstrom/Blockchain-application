
<template>
    <h2>Pending transactions</h2>
    <div class="pendingTransactionsContainer">
        <p v-for="(transactions, index) in pendingTransactions">
            {{ `#${index}: ${transactions.sender} &#10142; ${transactions.recipient}: $${transactions.amount}` }}
            <span>
                <p v-if="show">
                    <LLoading />
                </p>
            </span>
        </p>
    </div>
    <LButton @click="send(pendingTransactions[0])">Confirm transaction</LButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTransactions } from '../useTransactions';
import { useSocket } from '../useSocket';

export default defineComponent({
    name: 'PendingTransactions',
    setup() {
        const pendingTransactions = useTransactions().transactions;
        const { show } = useTransactions()
        const { send } = useSocket();

        return {
            show,
            send,
            pendingTransactions
        }
    },

});
</script>
<style lang="scss" scoped>
.pendingTransactionsContainer {
    min-height: 100px;
    border-color: #e1e3e6;
    border-style: solid;
    border-width: 1px;
    line-height: 1.25;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
}
p {
    font-family: "Source Code Pro", monospace;
    margin: 0.5px;
    padding: 0.5rem;
}
</style>