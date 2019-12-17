<template>
  <div>1</div>
</template>

<script>
export default {
  props: ['items'],
  render: function(createElement) {
    if (this.items.length) {
      return createElement('ul', this.items.map(function(item) {
        return createElement('li', item.name)
      }))
    } else {
      return createElement('p', 'No items found.')
    }
  }
}
</script>

<style>

</style>
