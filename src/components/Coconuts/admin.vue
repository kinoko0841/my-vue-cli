<template>
  <div class = "admin">
    <h1>{{ msg }}</h1>
    <!-- <p>{{ computedadvisorsData }}</p> -->
    <el-table :data="advisors" borderstyle="width: 100%" :default-sort = "{prop: 'date', order: 'descending'}">
      <el-table-column prop="date" label="日期" sortable width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" sortable width="180"></el-table-column>
      <el-table-column prop="services" label="服务" sortable width="180"></el-table-column>
      <el-table-column prop="offers" label="Offers" sortable></el-table-column>
    </el-table>
  </div> 
</template>
<script>
// import {advisorsData} from '../../../static/advisor_test.json'
export default {
  name: 'admin',
  data () {
    return {
      msg: 'I am Admin',
      // advisors: advisorsData
      advisors: [
        {
          date: '2017-01-02',
          name: '张小婉',
          services: ['文书导师', '素质教育导师']
        }, {
          date: '2017-03-04',
          name: '王欣怡',
          services: ['GMAT / GRE / 雅思考前培训导师']
        }, {
          date: '2017-04-01',
          name: '张老师',
          services: ['线上讲座', '素质教育导师']
        }, {
          date: '2016-11-03',
          name: '周老师',
          services: ['线下校园讲座活动', '高中整体规划导师']
        }
      ]
    }
  },
  // computed: {
  //   // a computed getter
  //   computedadvisorsData: function () {
  //     return JSON.parse(this.advisorsData)
  //   }
  // },
  methods: {
    gotoAddress (path) {
      this.$router.push(path)
    }
  }
}
</script>
<style>
  .admin {
    padding: 0 10%;
  }
</style>
