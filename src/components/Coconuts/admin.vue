<template>
  <h1>{{ msg }}</h1>
</template>
<script>
import advisorsData from '../../assets/advisor_test.json'
export default {
  name: 'admin',
  data () {
    return {
      msg: 'I am Admin',
      advisors: advisorsData
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
