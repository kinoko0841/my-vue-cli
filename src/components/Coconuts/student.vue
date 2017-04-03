<template>
  <div  class="student">
    <div class = "form">
      <div>
        <p> 单选框 </p>
        <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
        <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>

        <p> 复选框 </p>
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="复选框 A"></el-checkbox>
          <el-checkbox label="复选框 B"></el-checkbox>
          <el-checkbox label="复选框 C"></el-checkbox>
          <el-checkbox label="禁用" disabled></el-checkbox>
          <el-checkbox label="选中且禁用" disabled></el-checkbox>
        </el-checkbox-group>

        <p> 输入框 </p>
        <el-input v-model="input" placeholder="请输入内容"></el-input>

        <p> 搜索框 </p>
        <el-input v-model="value1" placeholder="请输入内容" icon="search" :on-icon-click="handleIconClick"></el-input>

        <p> 复选框 </p>

        <span class="demonstration"></span>
        <el-date-picker v-model="value2" type="datetime" placeholder="选择日期时间" align="right" :picker-options="pickerOptions1">
        </el-date-picker>
      </div>
    </div>
    <div class = "answer">
      <p> 单选框 : {{radio}}</p>
      <p> 复选框 :
        <span v-for="check in checkList"> {{check}} </span>
      </p>
      <p> 输入框 : {{input}}</p>

      <p> 搜索框 : {{value1}}</p>

      <p> 日期 : {{value2}}</p>

    </div>
    
  </div>
</template>
<script>
export default {
  name: 'student',
  data () {
    return {
      pickerOptions1: {
        shortcuts: [{
          text: 'Today',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: 'yesterday',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: 'Tomorrow',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() + 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }]
      },
      radio: '',
      input: '',
      checkList: [],
      value1: '',
      value2: ''
    }
  },
  methods: {
    handleIconClick (ev) {
      console.log(ev)
    }
  },
  components: {
    // ElementUI
  }
}
</script>
<style lang="scss" scoped>
    @import 'src/style/mixin';
    .answer, .form {
      text-align: left;
      width: 30%;
      padding: 7%;
      display: inline-block;
    }
    .answer {
      // background-color: $cloud;
    }

</style>
