<template>
  <div class="dropdown__container">
    <div class="dropdown__content">
      Sort by
      <div class="dropdown" :class="{ 'is-active': isActive }">
        <div class="dropdown-trigger">
            <a @click="toggleDropdown">
              <span class="dropdown__label" >{{ sortBy }}</span>
            </a>
        </div>

        <div class="dropdown-menu">
          <div class="dropdown-content">
            <a href="#" class="dropdown-item" @click="handleClick('currency')">
              Currency
            </a>
            <a href="#" class="dropdown-item" @click="handleClick('rate')">
              Rate
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dropdown-item',
  data() {
    return {
      isActive: false
    }
  },
  props: ['sortBy'],
  methods: {
    toggleDropdown: function() {
      return this.isActive = !this.isActive
    },
    handleClick: function(item) {
      return (
        this.$emit('sortKey', item),
        this.toggleDropdown()
      )
    }
  }
}
</script>

<style scoped>
.dropdown__container {
  display: flex;
  justify-content: flex-end;
  margin: 1rem 0;
}

.dropdown__content {
  width: 8em;
  text-align: left;
}

.dropdown__label {
  text-transform: capitalize;
}

</style>
