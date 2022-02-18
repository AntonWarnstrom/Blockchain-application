
<template>
    <div class="inputContainer">
        <LInput v-model="dto.sender" placeholder="sender" />&#10142;
        <LInput v-model="dto.recipient" placeholder="recipient" />
        <LInput v-model="dto.amount" placeholder="amount" style="max-width: 100px;" />
        <LButton
            @click="add({
                sender: dto.sender,
                recipient: dto.recipient,
                amount: dto.amount,
            })"
        >Add transaction</LButton>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useTransactions } from "../useTransactions"
export default defineComponent({
    name: 'TransactionForm',
    setup() {
        const dto = reactive({ sender: "", recipient: "", amount: "" })
        const { add } = useTransactions();

        return {
            add,
            dto,
        }
    },

});
</script>

<style lang="scss">
.input {
    margin: 0 0.5rem 0 0.5rem;
}
#container {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
