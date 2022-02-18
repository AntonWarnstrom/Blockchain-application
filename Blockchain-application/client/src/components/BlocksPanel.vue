
<template>
    <h2>Completed blocks</h2>
    <div class="blockContainer">
        <div class="block" v-for="block in blockchain">
            <Block
                :index="block.index"
                :previous-block-hash="block.previousBlockHash"
                :hash="block.hash"
                :timestamp="block.timestamp"
                :data="block.data"
                :nonce="block.nonce"
            />
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useBlockchain } from '../useBlockchain';
import Block from './Block.vue';

export default defineComponent({
    name: "PendingTransactions",
    setup() {
        const blockchain = useBlockchain().blocks;
        return {
            blockchain
        };
    },
    components: { Block }
});
</script>

<style>
.blockContainer {
    font-family: "Source Code Pro", monospace;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>
