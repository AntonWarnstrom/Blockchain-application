
<template>
  <main id="main">
    <h1>Blockchain</h1>
    <TransactionForm />
    <PendingTransactionsPanel />
    <BlocksPanelVue />
  </main>
</template>

<script setup lang="ts">
import BlocksPanelVue from './components/BlocksPanel.vue';
import TransactionForm from './components/TransactionForm.vue';
import PendingTransactionsPanel from './components/PendingTransactionsPanel.vue';

</script>


<style lang="scss">
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
#app {
  display: flex;
  justify-content: center;
}
#main {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  color: #2c3e50;
}
</style>
