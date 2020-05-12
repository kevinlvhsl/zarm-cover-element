<template>
  <div class="com-others">
    <el-collapse v-model="activeNames" style="padding: 10px 20px;">
      <el-collapse-item title="drawer抽屉" name="1">
        需要修改抽屉 标题、关闭按钮 样式
        <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">点我打开</el-button>
        <el-drawer
          size="800px"
          title="我是标题"
          :visible.sync="drawer">
          <span>我来啦!</span>
        </el-drawer>
      </el-collapse-item>

      <el-collapse-item title="dialog对话框" name="2">
        body边距
        <div class="mt20">
          <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
          <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
          </el-dialog>
        </div>
      </el-collapse-item>

      <el-collapse-item title="popConfirm气泡确认框" name="3">
        <el-popconfirm title="这是一段内容确定删除吗？">
          <el-button slot="reference">删除</el-button>
        </el-popconfirm>
      </el-collapse-item>

      <el-collapse-item title="popover气泡卡片" name="4">
        <el-popover content="纯文本解释说明气泡；纯文本解释说明气泡；纯文本解释说明气泡" width="200">
          <el-button slot="reference" type="success">文本气泡</el-button>
        </el-popover>
        <el-popover width="300">
          <p>气泡确认框；按钮自定义，content不设置，就是定制化的popConfirm</p>
          <div style="text-align: right; margin: 0">
            <el-button type="default" size="mini" @click="visible = false">取消</el-button>
            <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
          </div>
          <el-button slot="reference" type="success" style="margin-left: 20px">气泡确认</el-button>
        </el-popover>
      </el-collapse-item>
      <el-collapse-item title="Card 卡片" name="5">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-collapse-item>

    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'othersDemo',

  data() {
    return {
      activeNames: ['1'],
      drawer: false, // 抽屉
      dialogVisible: false, // 对话框
    };
  },

  methods: {},
};
</script>

<style lang="scss" >
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
