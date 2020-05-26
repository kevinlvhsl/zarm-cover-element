<template>
  <div class="com-form">
    <el-collapse v-model="activeNames" style="padding: 10px 20px;">
      <el-collapse-item title="input" name="1">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-input v-model="input1" placeholder="普通输入框"></el-input>
            <br />
            <el-input placeholder="禁止输入的" v-model="input1" disabled></el-input>
          </el-col>
          <el-col :span="6">
            <el-input placeholder="带前缀的输入框" v-model="input1">
              <template slot="prepend">Http://</template>
            </el-input>
            <br />
            <el-input placeholder="禁止输入的" v-model="input1" disabled>
              <template slot="prepend">Http://</template>
            </el-input>
            <div>
              <el-input
                type="textarea"
                placeholder="请输入内容(展示字数限制的)"
                v-model="textarea"
                maxlength="30"
                show-word-limit
              >
              </el-input>
            </div>
          </el-col>
          <el-col :span="6">
            <el-input placeholder="请输入内容" v-model="input1" class="input-with-select">
              <el-select v-model="select1" slot="prepend" placeholder="请选择">
                <el-option label="餐厅名" value="1"></el-option>
                <el-option label="订单号" value="2"></el-option>
                <el-option label="用户电话" value="3" disabled></el-option>
              </el-select>
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </el-col>
          <el-col :span="6">
            <el-input-number v-model="number" :step="2"></el-input-number>
            <br />
            <el-input-number v-model="number" controls-position="right" :min="1" :max="10"></el-input-number>
            <br />禁用
            <el-input-number v-model="number" disabled></el-input-number>
          </el-col>
        </el-row>
      </el-collapse-item>
      <el-collapse-item title="select" name="2">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-select v-model="select2" clearable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
          <el-col :span="6">
            <el-select v-model="select2" disabled placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
          <el-col :span="6">
            <el-select v-model="select3" multiple placeholder="请选择">
              <el-option
                v-for="(item, index) in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="index == 2"
              ></el-option>
            </el-select>
          </el-col>
          <el-col :span="6"></el-col>
        </el-row>
      </el-collapse-item>
      <el-collapse-item title="radio/checkbox" name="3">
        <el-row :gutter="20">
          <el-col :span="6">
            <div>单选</div>
            <el-radio v-model="radio" label="1">备选项</el-radio>
            <el-radio v-model="radio" label="2">备选项</el-radio>
            <div>
              <el-radio v-model="radio" label="1" border>带框的</el-radio>
              <el-radio v-model="radio" label="2" border>备选项2</el-radio>
            </div>
            <div>
              <el-radio-group v-model="radio20" size="medium">
                <el-radio-button label="上海" ></el-radio-button>
                <el-radio-button label="北京"></el-radio-button>
                <el-radio-button label="广州"></el-radio-button>
                <el-radio-button label="深圳"></el-radio-button>
              </el-radio-group>
            </div>
          </el-col>
          <el-col :span="6" style="margin-top: 20px">
            <div>复选</div>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="复选框 A"></el-checkbox>
              <el-checkbox label="复选框 B"></el-checkbox>
              <el-checkbox label="复选框 C"></el-checkbox>
              <el-checkbox label="禁用" disabled></el-checkbox>
              <el-checkbox label="选中且禁用" disabled></el-checkbox>
            </el-checkbox-group>
            <div>
              <el-checkbox-group v-model="checkboxGroup4">
                <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
              </el-checkbox-group>
            </div>
          </el-col>
          <el-col :span="6"></el-col>
          <el-col :span="6"></el-col>
        </el-row>
      </el-collapse-item>
      <el-collapse-item title="form/form-item" name="4">
        <div>
          <h3>注意 验证错误时的form-item下划线颜色</h3>
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="活动名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" prop="region">
              <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动时间" required>
              <el-col :span="11">
                <el-form-item prop="date1">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="ruleForm.date1"
                    style="width: 100%;"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-form-item prop="date2">
                  <el-time-picker
                    placeholder="选择时间"
                    v-model="ruleForm.date2"
                    style="width: 100%;"
                  ></el-time-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label="即时配送" prop="delivery">
              <el-switch v-model="ruleForm.delivery"></el-switch>
              <el-switch v-model="ruleForm.delivery" disabled>加载中</el-switch>
            </el-form-item>
            <el-form-item label="即时配送" prop="date3">
              <el-date-picker
                v-model="ruleForm.date3"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="活动性质" prop="type">
              <el-checkbox-group v-model="ruleForm.type">
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源" prop="resource">
              <el-radio-group v-model="ruleForm.resource">
                <el-radio label="线上品牌商赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
              </el-radio-group>
              <div style="margin-top: 20px">
              <el-radio-group v-model="radio20" size="medium">
                <el-radio-button label="上海" ></el-radio-button>
                <el-radio-button label="北京"></el-radio-button>
                <el-radio-button label="广州"></el-radio-button>
                <el-radio-button label="深圳"></el-radio-button>
              </el-radio-group>
            </div>
            </el-form-item>
            <el-form-item label="活动形式" prop="desc">
              <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-collapse-item>
      <el-collapse-item title="多选-组件" name="5">
        <div class="mt20">
          单选框-组
          <el-radio-group v-model="radio2" size="medium">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
          </el-radio-group>
        </div>
        <div class="mt20">
          多选-按钮组
          <el-checkbox-group v-model="checkboxGroup" size="medium">
            <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
          </el-checkbox-group>
        </div>
        <div class="mt20">
          <el-date-picker
            v-model="date4"
            type="week"
            format="yyyy 第 WW 周"
            placeholder="选择周">
          </el-date-picker>
        </div>
      </el-collapse-item>
      <el-collapse-item title="Cascader-级联选择器" name="6">
        <el-cascader
          :options="casaderOptions"
          :props="{ checkStrictly: true }"
          clearable
        ></el-cascader>
      </el-collapse-item>
      <el-collapse-item title="Switch-开关" name="7">
        <div>禁用
          <el-switch
            v-model="switch1"
            disabled>
          </el-switch>
          <el-switch
            v-model="switch2"
            disabled>
          </el-switch>
        </div>
        <div>普通用法
          <el-switch
            v-model="switch1"
            size="small"
          ></el-switch>
          设置颜色
          <el-switch
            v-model="switch1"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
          <el-switch
            style="display: block"
            v-model="switch2"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="按月付费"
            inactive-text="按年付费"
          >
          </el-switch>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import { casaderOptions } from './mock.js';
export default {
  name: 'FormDemo',

  data () {
    const cityOptions = ['上海', '北京', '广州', '深圳'];
    return {
      activeNames: ['1'],
      input1: '',
      textarea: '',
      select1: '1',
      number: 1,
      select2: '',
      select3: [],
      radio: '1',
      radio2: '',
      radio20: '', // 单选框按钮组
      date4: '',
      switch1: true,
      switch2: false,
      checkList: [],
      checkboxGroup: ['上海'],
      checkboxGroup4: ['上海'],
      cities: cityOptions,
      casaderOptions,
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],

      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        date3: '',
        delivery: true,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      },
    }
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style lang="" >

</style>
