<template>
  <h1>{{ msg }}</h1>
</template>
<script>
export default {
  name: 'student',
  data () {
    return {
      msg: 'I am Student'
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
