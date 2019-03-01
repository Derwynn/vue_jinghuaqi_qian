<template>
  <div>
    <!--面包屑导航-->
    <div class="breadcrumb">
    <div class="container">
        <h2>
        <router-link to="/index">首页</router-link>&gt;<router-link to="/news">公司动态</router-link>
        </h2>
    </div>
    </div>
    <!--页面主体-->
    <div class="main container">
    <div class="news">
        <ul>
        <li><span>2016-02-21</span><router-link to="/news_details">空气净化器要逆天？ “玫瑰金”“土豪金”齐上阵</router-link></li>
        <li><span>2016-02-21</span><router-link to="/news_details">净美仕新风净化系统　助力校园新风行动</router-link></li>
        <li><span>2016-02-21</span><router-link to="/news_details">全国新风行动全面启动 助推净美仕战略升级</router-link></li>
        <!-- <li v-for="n in pager.data" >
            <span>{{n.pubTime}}</span>
            <a :href="n.nid">{{n.title}}</a>
        </li> -->
        </ul>
    </div>
    <!-- 分页导航-->
    <div class="pages">
        <a href="" class="">上一页</a>
        <a href="" class="cur">1</a>
        <a href="">2</a>
        <a href="">3</a>
        <a href="">4</a>
        <a href="">5</a>
        <a href="">下一页</a>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        pager:{}
    };
  },

  mounted:function(){
      let url = 'http://127.0.0.1:3000/news/list/1';
      this.$http.get(url).then((res)=>{
          this.pager = res.body;
      });
  },

watch: {},
  components: {},

  computed: {},

  methods: {}
}

</script>
<style scoped>
</style>