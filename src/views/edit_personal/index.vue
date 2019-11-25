<template>
  <div>
    <el-row>
      <el-col :span="7">
        <el-card>
          <div class="edit">
            修改信息
          </div>
          <el-form ref="ruleForm" :rules="rules" :model="form" label-width="80px" size="mini">
            <el-form-item label="姓名" placeholder="请输入姓名">
              <el-input disabled></el-input>
            </el-form-item>
            <el-form-item label="昵称" prop="name" placeholder="请输入昵称">
              <el-input v-model="form.nickname"></el-input>
            </el-form-item>
            <el-form-item label="投资年限" prop="year">
              <el-select v-model="form.year" placeholder="请选择投资年限">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="绑定邮箱" prop="email" placeholder="请输入绑定邮箱">
              <el-input v-model="form.eamil"></el-input>
            </el-form-item>
            <el-form-item label="绑定手机" prop="mobile" placeholder="请输入绑定手机">
              <el-input v-model="form.mobile"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="7">
        <el-card>
          <div class="edit">
            修改密码
          </div>
          <el-form ref="ruleFormPwd" :rules="rulesPwd" :model="formPwd" label-width="80px" size="mini">
            <el-form-item label="原密码" prop="old_pwd" placeholder="请输入原密码">
              <el-input v-model="formPwd.old_pwd"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="new_pwd" placeholder="请输入新密码">
              <el-input type="password" v-model="formPwd.new_pwd"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="check_pass" placeholder="请输入确认新密码">
              <el-input type="password" v-model="formPwd.check_pass"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitPwd('ruleFormPwd')">提交</el-button>
              <el-button @click="resetPwd('ruleFormPwd')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="7">
        <el-card>
          <div class="edit">
            手机服务
          </div>
          <el-form ref="rule_mobile" :rules="rules_mobile" :model="mobile_form" label-width="80px" size="mini">
            <el-form-item label="当前绑定手机" prop="now_mobile">
              <el-input v-model="mobile_form.now_mobile"></el-input>
            </el-form-item>
            <el-form-item label="基础短信服务" prop="type">
              <el-checkbox-group v-model="mobile_form.type">
                <el-checkbox label="网站密码找回" name="type"></el-checkbox>
                <el-checkbox label="提现申请短信验证" name="type"></el-checkbox>
                <el-checkbox label="提现申请提醒" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="可选短信服务" prop="note">
              <el-checkbox-group v-model="mobile_form.note">
                <el-checkbox label="投标通知" name="note"></el-checkbox>
                <el-checkbox label="满标/流标/撤销通知" name="note"></el-checkbox>
                <el-checkbox label="回款通知" name="note"></el-checkbox>
                <el-checkbox label="本息保障通知" name="note"></el-checkbox>
                <el-checkbox label="优质通知提醒" name="note"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('rule_mobile')">提交</el-button>
              <el-button @click="resetForm('rule_mobile')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'edit_personal',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.rulesPwd.new_pwd !== '') {
          this.$refs.ruleForm.validateField('new_pwd')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.rulesPwd.check_pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      form: {
        name: '',
        year: '',
        email: '',
        mobile: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
        ],
        year: [
          { required: true, message: '请选择投资年限', trigger: 'blur' },
          { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱~', trigger: 'blur' },
          { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入手机号码~' }
        ]
      },
      formPwd: {
        old_pwd: '',
        new_pwd: '',
        check_pass: ''
      },
      rulesPwd: {
        old_pwd: [
          { required: true, message: '请输入原密码', trigger: 'blur' }
        ],
        new_pwd: [
          { validator: validatePass, trigger: 'blur' }
        ],
        check_pass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      },
      mobile_form: {
        now_mobile: '',
        type: [],
        note: []
      },
      rules_mobile: {
        now_mobile: [
          { type: 'number', required: true, message: '请输入手机号码~', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个基础短信服务', trigger: 'change' }
        ],
        note: [
          { type: 'array', required: true, message: '请至少选择一个可选短信服务', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    // 密码
    submitPwd (ruleFormPwd) {
      this.$refs[ruleFormPwd].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetPwd (ruleFormPwd) {
      this.$refs[ruleFormPwd].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.el-col{
  margin: 10px;
  font-size: 13px;
}
.edit{
  width: 100%;
  line-height: 30px;
  font-size: 13px;
  margin-bottom: 20px;
  text-align: center;
  color: #fff;
  background-color: #3bc5ff;
}
</style>
