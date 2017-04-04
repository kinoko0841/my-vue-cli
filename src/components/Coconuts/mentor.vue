<template>
  <div class = "mentor">
    <h1>{{ msg }}</h1>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="课程管理" name="课程管理">课程管理</el-tab-pane>
      <el-tab-pane label="服务管理" name="服务管理">服务管理</el-tab-pane>
      <el-tab-pane label="文件管理" name="文件管理">文件管理</el-tab-pane>
      <el-tab-pane label="payments" name="payments">payments</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: 'mentor',
  data () {
    return {
      msg: 'I am Mentor',
      activeName: '课程管理'
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
