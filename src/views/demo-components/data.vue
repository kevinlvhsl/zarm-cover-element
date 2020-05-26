<template>
  <div class="com-data">
    <el-collapse v-model="activeNames" style="padding: 10px 20px;">
      <el-collapse-item title="table/pagination" name="1">
        <el-row :gutter="20">
          <el-col :span="24">
            <el-table
              highlight-current-row
              stripe
              :data="tableData"
              :default-sort="{prop: 'date', order: 'descending'}"
              style="width: 100%"
              max-height="250"
            >
              <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
              <el-table-column prop="name" label="姓名" width="120"></el-table-column>
              <el-table-column prop="province" label="省份" width="120"></el-table-column>
              <el-table-column prop="city" label="市区" minWidth="120"></el-table-column>
              <el-table-column fixed="right" label="操作" width="120">
                <template>
                  <el-button type="text" size="small">移除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-col>
          <el-col :span="24" style="text-align: right">
            <div class="mt20">
              分页靠右侧
              <el-pagination background layout="total, prev, pager, next, sizes, jumper" :total="1000"></el-pagination>
            </div>
          </el-col>
        </el-row>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'DataDemo',

  data() {
    return {
      activeNames: ['1'],
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        zip: 200333
      }, {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        zip: 200333
      }]
    }
  },

  methods: {}
}
</script>

<style lang="" >
</style>
