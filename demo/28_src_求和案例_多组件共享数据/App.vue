<template>
<div>
  <Count/>
  <hr>
  <Person/>
</div>
</template>

<script>
import Person from './components/Person.vue'
import Count from './components/Count.vue'
export default {
  name: 'App',
  components: { Count, Person }
}
</script>

<style>

</style>
