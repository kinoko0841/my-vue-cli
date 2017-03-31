<template>
  <div class="coconut">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="role in roles">
        <router-link :to=" '/' + role" >I am {{ role }}</router-link>
        <!-- <home :message = "role"></home> -->
      </li> 
    </ul>
  </div>
</template>

<script>
import home from '@/components/Coconuts/home'

export default {
  name: 'coconut',
  data () {
    return {
      roles: ['student', 'mentor', 'admin'],
      msg: 'This is a coconut tree.'
    }
  },
  components: {
    home
    // student,
    // mentor,
    // admin
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
