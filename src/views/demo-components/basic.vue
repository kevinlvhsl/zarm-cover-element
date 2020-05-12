<template>
  <div class="com-basic">
    <el-collapse v-model="activeNames" style="padding: 10px 20px;">
      <el-row :gutter="20">
        <el-col :span="24">
          <el-collapse-item title="button" name="1">
            主要覆盖按钮 hover、click
            <el-row>
              <el-button>默认按钮</el-button>
              <el-button type="primary">主要按钮</el-button>
              <el-button disabled>禁用按钮</el-button>
              <el-button type="success">成功按钮</el-button>
              <el-button type="info">信息按钮</el-button>
              <el-button type="warning">警告按钮</el-button>
              <el-button type="danger">危险按钮</el-button>
            </el-row>
          </el-collapse-item>
        </el-col>
      </el-row>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'basicDemo',

  data () {
    return {
      activeNames: ['1'],
    }
  },

  methods: {}
}
</script>

<style lang="" >

</style>
