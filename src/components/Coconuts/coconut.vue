<template>
  <div class="coconut">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'coconut',
  data () {
    return {
      msg: 'This is a coconut.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
