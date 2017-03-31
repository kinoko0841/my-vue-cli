<template>
  <h1>{{ msg }}</h1>
</template>
<script>
export default {
  name: 'student',
  data () {
    return {
      msg: 'This is a student.'
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
