<template>
  <div>
    <!--header-->
    <div class="header_box"></div>
    <!--banner-->
    <div class="banner">
      <!-- 练习：编写banner的html和css-->
      <!-- 图片列表-->
      <ul>
        <li style="background: url(/static/images/banner_01.jpg) center 0 no-repeat; display: block;z-index: 20;"><a href="#" class="link"></a></li>
        <li style="background: url(/static/images/banner_02.jpg) center 0 no-repeat;"><a href="#" class="link"></a></li>
        <li style="background: url(/static/images/banner_03.jpg) center 0 no-repeat;"><a href="#" class="link"></a></li>
        <li style="background: url(/static/images/banner_04.jpg) center 0 no-repeat;"><a href="#" class="link"></a></li>
      </ul>
      <!-- 左右箭头-->
      <span class="cut prev"></span>
      <span class="cut next"></span>
      <!-- 小圆点指示器-->
      <div class="indicator">
        <a href="" class="cur"></a><a href=""></a><a href=""></a><a href=""></a>
      </div>
    </div>
    <!--main-->
    <div class="main container">
      <div class="ind_con1">
        <h2 class="title"><router-link to="/product" class="more">more</router-link>净美仕产品</h2>
        <ul class="clearfloat">
          <li><router-link to="/product_details" class="link"><img src="/static/images/01.jpg" alt=""/></router-link></li>
          <li><router-link to="/product_details" class="link"><img src="/static/images/02.jpg" alt=""/></router-link></li>
          <li><router-link to="/product_details" class="link"><img src="/static/images/03.jpg" alt=""/></router-link></li>
        </ul>
      </div>
      <div class="ind_con2 clearfloat">
        <div class="ind_about">
          <h2 class="title"><router-link to="/about" class="more">more</router-link>关于净美仕</h2>
          <p>北京净美仕环境科技有限公司自诞生起一直关注人类呼吸健康的问题，并专注于室内空气质量的研究与改善。2003年，非典来袭，环境安全威胁到了每个人的生命，全国陷入一片恐慌。净美仕肩负着为人类创造健康安全生活环境的使命应运而生。2012年7月，亿朗以“净美仕(Mfresh)”为品牌重塑，以崭新的面貌屹立在净化行业。 <router-link
            to="/about">查看更多</router-link></p>
        </div>
        <div class="ind_news">
          <h2 class="title"><router-link to="/news" class="more">more</router-link>公司动态</h2>
          <ul>
            <li><span>2016-02-21</span><router-link to="/news_details">空气净化器要逆天？ “玫瑰金”“土豪金”齐上阵</router-link></li>
            <li><span>2016-02-21</span><router-link to="/news_details">净美仕新风净化系统　助力校园新风行动</router-link></li>
            <li><span>2016-02-21</span><router-link to="/news_details">全国新风行动全面启动 助推净美仕战略升级</router-link></li>
            <li><span>2016-02-21</span><router-link to="/news_details">智能空气净化器翻盘：净美仕能否领衔?</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <!--footer-->
    <footer class="footer"></footer>
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
