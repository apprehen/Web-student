<template>
<div>
  <Search/>
  <List/>
</div>
</template>

<script>
import List from './components/List.vue'
import Search from './components/Search.vue'

export default {
  components: { Search, List }
}
</script>
