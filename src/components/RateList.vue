<template>
  <div class="rate-list">
  <table class="rate-list__content table is-striped" >
    <!-- <thead>
      <tr>
        <th>Currency</th>
        <th>Rate</th>
      </tr>
    </thead> -->
    <tbody>
      <tr v-for="rate in rates" :key="rate[0]">
        <td>{{ rate[0] }}</td>
        <td>{{ formatNum(rate[1], changedValue) }}</td>
        <td><a class="button is-small is-danger" v-on:click="remove(rates.indexOf(rate), rate[0])">(-)</a></td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
export default {
  name: 'RatesItem',
  props: ['rates','changedValue'],
  methods: {
    formatNum(num, changedValue) {
      const convertedAmount = num * changedValue
      return convertedAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    },
    remove: function(index, code) {
      this.$emit('remove', index, code)
    }
  }
}
</script>

<style>
.rate-list {
  display: flex;
  justify-content: center;
}

.rate-list__content {
  width: 35rem;
}

@media (max-width: 575.98px) {
  .rate-list__content {
    width: 100%;
  }
}
</style>