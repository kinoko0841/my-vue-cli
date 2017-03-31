<template>
  <h1>{{ msg }}</h1>
</template>
<script>
export default {
  name: 'admin',
  data () {
    return {
      msg: 'This is a admin.'
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
