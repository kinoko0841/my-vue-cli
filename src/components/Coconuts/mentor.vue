<template>
  <h1>{{ msg }}</h1>
</template>
<script>
export default {
  name: 'mentor',
  data () {
    return {
      msg: 'This is a mentor.'
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
