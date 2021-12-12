<template>
  <div class="amountinput">
    <div class="field">
      <p class="control has-icons-right">
          <input
            class="input form-control"
            type="number"
            min="1"
            step="any"
            placeholder="Input amount"
            aria-label="Input"
            v-model="inputValue"
            oninput="validity.valid||(value='');"
          />
          <span class="icon is-small is-right">
            <font-awesome-icon :icon="['fas', 'dollar-sign']" />
          </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AmountInput',
  data() {
    return {
      inputValue: 10
    }
  },
  watch: {
    inputValue: function(){
      this.$emit('inputAmount', this.inputValue)
    }
  }
}
</script>

<style scoped>
.amountinput {
  width: 35rem;
}

@media (max-width: 575.98px) {
  .amountinput {
    width: 100%;
  }
}
</style>
