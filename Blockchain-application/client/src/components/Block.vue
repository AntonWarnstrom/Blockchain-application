<template>
    <div class="header">
        <div class="index">
            <h2>#{{ index }}</h2>
            <p>{{ timeString }}</p>
        </div>
    </div>
    <div class="body">
        <div class="left">
            <p>Previous hash:</p>
            <p v-tooltip="previousBlockHash">{{ previousBlockHash }}</p>
        </div>
        <div class="right">
            <p>Current hash:</p>
            <p v-tooltip="hash">{{ hash }}</p>
        </div>
    </div>
    <div class="footer">
        <p v-if="typeof data === 'string'">Genesis block</p>
        <p v-else>{{ `${data?.sender} → ${data?.recipient}: $${data?.amount}` }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, Prop, PropType } from 'vue';
import { useBlockchain } from '../useBlockchain';
import { Transaction } from '../types/types';
export default defineComponent({
    name: 'Block',
    props: {
        index: String,
        previousBlockHash: String,
        hash: String,
        timestamp: {
            type: Number as PropType<number>,
            required: true,
        },
        data: [String, Object] as PropType<string | Transaction>,
        nonce: Number,
    },
    setup(props) {
        const time = new Date(props.timestamp)
        const timeString = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} AM`
        const blockchain = useBlockchain().blocks;
        return {
            timeString,
            blockchain
        }
    },

});
</script>

<style lang="scss">
.block {
    margin: 0.5rem 0;
    padding: 1rem;
    border-color: #e1e3e6;
    border-style: solid;
    border-width: 1px;
    border-radius: 6px;
    width: 30.8rem;

    .index {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .body {
        display: flex;

        justify-content: space-between;
        flex-direction: row;
        p {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 10rem;
        }
    }
}
</style>