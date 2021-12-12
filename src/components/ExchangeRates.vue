<template>
  <div class="exchange-rates section">
    <div v-if='rates.length === 0'>
      <span class="loader is-size-2" />
    </div>
    <div v-else>
      <h1 class="subtitle is-3">United Stated Dollar<br>Foreign Exchange Rates: {{ date }}</h1>
      <amount-input v-bind:inputValue="getInputValue" @inputAmount="getInputValue" />
      <!-- <currency-add @addData="getAdd" /> -->
      <text-filter @searchData="getSearch" />
      <sort-dropdown v-bind:sortBy="sortBy" @sortKey="getSortBy" />
      <rate-list v-bind:rates="filteredList" v-bind:changedValue="inputValue"
      @remove="getOnRemove" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import RateList from './RateList.vue'
import AmountInput from './AmountInput.vue'
// eslint-disable-next-line no-unused-vars
import CurrencyAdd from './CurrencyAdd.vue'
import TextFilter from './TextFilter.vue'
import SortDropdown from './SortDropdown.vue'

const URL = 'https://api.exchangerate.host/latest?base=USD'

export default {
  name: 'exchange-rates',
  components: {
    RateList,
    AmountInput,
    TextFilter,
    SortDropdown
  },
  data: () => ({
    date: [],
    rates: [],
    index: -1,
    codeDel: '',
    errors: [],
    inputValue: 10,
    searchText: '',
    sortBy: 'currency'
  }),
  mounted() {
    this.fetchData()
  },
  computed: {
    filteredList: function() {
      if (this.codeDel !== '') {
        delete this.rates[this.codeDel]
      }
      const result =  Object.entries(this.rates)
        .filter((item) => {
          return (
            (item[0] !== 'USD' && (item[0] === 'CAD' || item[0] === 'IDR' || item[0] === 'GBP' || item[0] === 'CHF' 
            || item[0] === 'SGD' || item[0] === 'INR' || item[0] === 'MYR' || item[0] === 'JPY' || item[0] === 'KRW'))
            && item[0].includes(this.searchText.toUpperCase())
          )
        })
        .sort((a, b) => {
          if (this.sortBy === 'rate') {
            return a[1] > b[1] ? 1 : -1
          }
          return a[0] > b[0] ? 1 : -1
        })

        return result
    }
  },
  methods: {
    fetchData() {
      axios
        .get(URL)
        .then(response => {
          this.rates = response.data.rates
          this.date = response.data.date
        })
        .catch(error => this.errors.push(error))
    },
    getOnRemove: function (index, codeDel) {
      this.index = index
      this.codeDel = codeDel
    },
    getInputValue: function(decimal) {
      this.fetchData()
      this.inputValue = decimal
    },
    getSearch: function(txt) {
      this.searchText = txt
    },
    getSortBy: function(item) {
      this.sortBy = item
    }
  }
}
</script>

<style scoped>
.exchange-rates {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color:#232931;
  color:#eeeeee
}

.subtitle {
  color:#eeeeee
}
</style>
