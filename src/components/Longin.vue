<template>
  <div>
    <div class="login_box">
        <div class="container">
            <div class="login">
            <h2>用户登录</h2>
            <dl class="clearfloat">
                <dt><span class="tips" id="uname_prompt_text"></span>用户名：</dt>
                <dd>
                <input type="text" id="uname" placeholder="邮箱/手机号"/>
                <em class="icon_user"></em>
                <i class="icon_error" id="uname_prompt_icon"></i>
                </dd>
            </dl>
            <dl>
                <dt><span class="tips" id="pwd_prompt_text">请输入密码</span>密码：</dt>
                <dd>
                <input type="password" id="pwd" placeholder="密码"/>
                <em class="icon_pwd"></em>
                <i class="icon_error" id="pwd_prompt_icon"></i>
                </dd>
            </dl>
            <p><lable>
                <input type="checkbox"/>
                <span>自动登录</span>
            </lable></p>
            <button type="button" id="login">立 即 登 录</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

watch: {},
  components: {},

  computed: {},

  methods: {}
}

</script>
<style scoped>
</style>