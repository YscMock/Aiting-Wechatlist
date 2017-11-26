<template>
    <div class="login">
      <el-row class="logo" type="flex">
        <el-col :sm="11">
          <div class="grid-content"></div>
        </el-col>
        <el-col :sm="2">
          <div class="grid-content">
             <img src="../assets/logo_white.png" />
          </div>
        </el-col>
        <el-col :sm="11">
          <div class="grid-content"></div>
        </el-col>
      </el-row> 
      <el-row type="flex"> 
          <el-col :sm="8" :xs="0"><div class="grid-content"></div></el-col>
          <el-col :sm="8" :xs="24">
              <div class="grid-content">
                <div class="logo-box">
                   <el-form :label-position="labelPosition" :model="formLabelAlign">
                      <el-form-item>
                        <el-input v-model="formLabelAlign.name" placeholder="邮箱"></el-input>
                      </el-form-item>
                      <el-form-item>
                        <el-input v-model="formLabelAlign.region" type="password" placeholder="密码"></el-input>
                      </el-form-item>
                      <el-form-item>
                        <el-row>
                           <el-col :sm="12">
                              <div class="grid-content">
                                 <el-input v-model="formLabelAlign.type"></el-input>
                              </div>
                          </el-col>
                           <el-col :sm="12">
                              <div class="grid-content">
                              </div>
                           </el-col>
                         </el-row>
                      </el-form-item>
                      <el-row type="flex">
                         <el-col :sm="20" xs="20" class="ta-l">
                            <div class="grid-content">
                               <el-checkbox label="记住密码" name="type" ></el-checkbox>
                            </div>
                         </el-col>
                         <el-col :sm="3" xs="3">
                            <div class="grid-content">
                               <el-button type="primary" @click="isLogin">立即登录</el-button>
                            </div>
                         </el-col>
                      </el-row>
                   </el-form>
                </div>
              </div>
          </el-col>
      </el-row>     
    </div>
</template>

<style scoped>
  .login{
    background : linear-gradient(#1A2E50,#1B3455,#276488, #328DB3);
    height:700px;
    overflow-y: hidden;  
  }
  .logo{
     margin-top:5%;
     margin-bottom:18px;
  }
  .logo-box{
    padding:7%;
    background:#fff;
    border-radius:8px;
  }
  input[type="text"], input[type="password"]{
    text-indent:18px;
  }
  .logo img{
    width:100%;
    height:100%;
  }
</style>

<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        // name:'',
        // pwd:'',
        // error:''
      };
    },
    computed: {
      user() {
          return this.$store.state.user
      }
    },
    methods:{
     isLogin () {
        console.log(this.$router)
        if(this.formLabelAlign.name!=null&&this.formLabelAlign.region.length>0){
             this.$router.push('/Home')
        }else{
          alert("密码不正确，或密码不能为空")
        }
     }
    }
  }
</script>