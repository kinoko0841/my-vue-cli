<template>
  <a href = ""> I am {{ message }}</a>
</template>
<script>
export default {
  name: 'home',
  props: ['message'],
  data () {
    return {
      // msg: 'I am Student'
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
