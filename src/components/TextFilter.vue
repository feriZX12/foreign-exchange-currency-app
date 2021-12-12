<template>
  <div class="textfilter">
    <div class="field">
      <p class="control has-icons-right">
          <input
            class="input form-control"
            type="text"
            placeholder="Search currency"
            aria-label="Search"
            v-model="searchText"
          />
          <span class="icon is-small is-right">
            <font-awesome-icon :icon="['fas', 'search']" />
          </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextFilter',
  data() {
    return {
      searchText: ''
    }
  },
  watch: {
    searchText: function(){
      this.$emit('searchData', this.searchText)
    }
  }
}
</script>

<style scoped>
.textfilter {
  width: 35rem;
}

@media (max-width: 575.98px) {
  .textfilter {
    width: 100%;
  }
}
</style>
