<template>
  <div class = "mentor">
    <h1>{{ msg }}</h1>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: 'mentor',
  data () {
    return {
      msg: 'I am Mentor',
      activeName: 'second'
    }
  },
  methods: {
    gotoAddress (path) {
      this.$router.push(path)
    },
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style>
  .mentor {
    padding: 0 7%;
  }
</style>
