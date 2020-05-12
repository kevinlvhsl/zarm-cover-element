<template>
  <div class="page-home">
    <el-drawer
      size="1000px"
      title="组件开发状态"
      :visible.sync="navShow"
    >
      <div class="nav-list">
        <div>确认要修改以后，到views/demo-components/config.js中改一下名字和状态</div>
        <div class="com-item" v-for="(com, index) in componentGroups" :key="index">
          <el-row :gutter="30">
            <el-col :span="3">组件名：</el-col>
            <el-col :span="8">{{com.name}}</el-col>
            <el-col :span="3">开发者:</el-col>
            <el-col :span="4">{{com.owner || '暂未认领'}}</el-col>
            <el-col :span="3">状态：</el-col>
            <el-col :span="3">
              <div :class="{'undo': com.status == '0', 'dev': com.status == '1', 'done': com.status == '2', 'other': com.status == '3'}"
              >{{devStatusMap[com.status]}}</div>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-drawer>

    <div style="width: 1000px; flex: 1">
      <div>
        <H2>element-ui 组件样式改造成zarm-web</H2>
        设计稿:<a style="color: blue" target="_blank" href="https://lanhuapp.com/url/5uROH-0oGVy">https://lanhuapp.com/url/5uROH-0oGVy</a>
        饿了么:<a style="color: blue" target="_blank" href="https://element.eleme.io/#/zh-CN/component">https://element.eleme.io/#/zh-CN/component</a>
        <el-button class="ml20" type="primary" @click="navShow = true">查看组件开发状态</el-button>
      </div>
      <div class="mt20">
        <h3>基础 类组件/basic.vue</h3>
        <BasicDemo />
      </div>
      <div class="mt20">
        <h3>表单 类组件/form.vue</h3>
        <FormDemo />
      </div>
      <div class="mt20">
        <h3>数据展示 类组件/data.vue</h3>
        <DataDemo />
      </div>
      <div class="mt20">
        <h3>通知类组件notice.vue</h3>
        <NoticeDemo />
      </div>
      <div class="mt20">
        <h3>导航类组件/navigation.vue</h3>
        <NavigationDemo />
      </div>
      <div class="mt20">
        <h3>其他组件/others.vue</h3>
        <OthersDemo />
      </div>
    </div>
  </div>
</template>

<script>
import BasicDemo from './demo-components/basic.vue';
import FormDemo from './demo-components/form.vue';
import DataDemo from './demo-components/data.vue';
import NoticeDemo from './demo-components/notice.vue';
import NavigationDemo from './demo-components/navigation.vue';
import OthersDemo from './demo-components/others.vue';
import config, { COM_STATUS } from './demo-components/config.js';

export default {
  name: 'Home',
  components: {
    BasicDemo,
    FormDemo,
    DataDemo,
    NoticeDemo,
    NavigationDemo,
    OthersDemo,
  },
  data() {
    return {
      navShow: false,
      componentGroups: config,
      devStatusMap: COM_STATUS,
    };
  },

  methods: {

  },
};
</script>

<style lang="scss" >
@function colorness($color, $op: 1) {
  @return rgba(red($color), green($color), blue($color), $op);
}
$c: colorness($theme, 0.3);
.page-home {
  padding: 20px 50px;
  // color: $c;
  text-align: left;
  display: flex;
  .nav-list {
    color: #343434;
    .undo {
      color: '#999';
    }
    .dev {
      color: blue;
    }
    .done {
      color: $success;
    }
    .other {
      color: $warning;
    }
  }
  .el-collapse-item__header {
    background: fafafa;
    &.is-active {
      background-color: $c;
    }
  }
  .el-collapse-item__wrap {
    padding-top: 12px;
  }
  .el-collapse-item__header {
    font-weight: 700;
    font-size: 18px;
  }
  .mt20 {
    margin-top: 20px;
  }
  .ml20 {
    margin-left: 20px;
  }
  .mr20 {
    margin-right: 20px;
  }
}
</style>
