<template>
  <div class="coconut">
    <h1>{{ msg }}</h1>
    <ul>
      <li><student></student></li>
      <li><mentor></mentor></li>
      <li><admin></admin></li>   
    </ul>
    
    
  </div>
</template>

<script>
import student from '@/components/Coconuts/student'
import mentor from '@/components/Coconuts/mentor'
import admin from '@/components/Coconuts/admin'
export default {
  name: 'coconut',
  data () {
    return {
      msg: 'This is a coconut.'
    }
  },
  components: {
    student,
    mentor,
    admin
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
