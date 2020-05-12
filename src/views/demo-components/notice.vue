<template>
  <div class="com-notice">
    <el-collapse v-model="activeNames" style="padding: 10px 20px;">
      <el-collapse-item title="Loading加载" name="1">
        <el-card v-loading="true" style="width: 200px">
          Loading
        </el-card>
        <el-button
        type="primary"
        @click="openFullScreen1"
        v-loading.fullscreen.lock="fullscreenLoading">
        指令方式
      </el-button>
      <el-button
        type="primary"
        @click="openFullScreen2">
        服务方式
      </el-button>
      </el-collapse-item>
      <el-collapse-item title="Message 全局提示" name="1">
        <el-button :plain="true" @click="open2">成功</el-button>
        <el-button :plain="true" @click="open3">警告</el-button>
        <el-button :plain="true" @click="open1">消息</el-button>
        <el-button :plain="true" @click="open4">错误</el-button>
      </el-collapse-item>
      <el-collapse-item title="MessageBox 弹框" name="1">
        <el-button @click="openBox">点击打开 Message Box</el-button>
      </el-collapse-item>
      <el-collapse-item title="Notification 通知" name="1">
        <el-button plain @click="openNot1">成功</el-button>
        <el-button plain @click="openNot2">普通</el-button>
        <el-button plain @click="openNot3">消息</el-button>
        <el-button plain @click="openNot4">错误</el-button>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'noticeDemo',

  data() {
    return {
      activeNames: ['1'],
      fullscreenLoading: false,
    };
  },

  methods: {
    openFullScreen1() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 2000);
    },
    openFullScreen2() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    },
    open1() {
      this.$message({ message: '这是一条消息提示' });
    },
    open2() {
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success',
        duration: 0
      });
    },

    open3() {
      this.$message({
        message: '警告哦，这是一条警告消息',
        type: 'warning'
      });
    },

    open4() {
      this.$message.error('错了哦，这是一条错误消息');
    },
    // 弹窗
    openBox() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    openNot1() {
      this.$notify({
        duration: 0,
        title: '成功',
        message: '这是一条成功的提示消息, 并且不会自动关闭',
        type: 'success'
      });
    },
    openNot2() {
      this.$notify({
        duration: 0,
        title: '普通',
        message: '这是一条普通的提示消息',
      });
    },

    openNot3() {
      this.$notify.info({
        title: '消息',
        message: '这是一条消息的提示消息'
      });
    },

    openNot4() {
      this.$notify.error({
        title: '错误',
        message: '这是一条错误的提示消息'
      });
    }
  },
};
</script>

<style lang="">

</style>
