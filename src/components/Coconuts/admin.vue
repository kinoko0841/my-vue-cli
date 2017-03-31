<template>
  <h1>{{ msg }}</h1>
</template>
<script>
export default {
  name: 'admin',
  data () {
    return {
      msg: 'I am Admin'
    }
  },
  methods: {
    gotoAddress (path) {
      this.$router.push(path)
    }
  }
}
</script>
<style></style>
