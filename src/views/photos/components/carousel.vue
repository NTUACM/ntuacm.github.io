<template>
  <el-row :gutter="20" class="item">
    <el-card shadow="hover">
      <div class="panel-heading">
        <span class="panel-heading-time">
          2020级ACMer留影
        </span>
      </div>
      <div class="photo">
        <el-carousel key="carousel2" ref="carousel" :interval="4000" type="card" height="240px" width="100%" style="padding-top: 20px;" @change="carouselChange">
          <el-carousel-item v-for="item in images" :id="item.id" :key="item.id">
            <img :src="item.url" class="image">
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-card>
  </el-row>
</template>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
import ContentBase from '@/components/ContentBase.vue'
import $ from 'jquery'

export default {
  name: 'Photos',
  components: { ContentBase },
  data() {
    return {
      images: [
        { id: 3, url: require('@/assets/images/acmlogo.png') },
        { id: 4, url: require('@/assets/images/acmlogo.png') },
        { id: 5, url: require('@/assets/images/acmlogo.png') }
      ],
      // 浏览器宽度
      screenWidth: 0,
      carouseId: 0,
    }
  },
  methods:{
    setSize: function() {
      // 通过浏览器宽度(图片宽度)实现计算高度
      this.bannerHeight = 400 / 1920 * this.screenWidth;
    },
    setPY:function(){
			var _carouseId = this.carouseId;
			if(_carouseId === 3){
				$("#3").css("left","-2.5%");
				$("#3").next().css("left","8%");
				$("#3").next().next().css("left","-18%");
			}else if(_carouseId === 4){
				$("#4").css("left","-2.5%");
				$("#4").prev().css("left","-18%");
				$("#4").next().css("left","8%");
			}else if (_carouseId === 5){
				$("#5").css("left","-2.5%");
				$("#5").prev().css("left","-18%");
				$("#5").prev().prev().css("left","8%");
			}
		},
    carouselChange: function(now, old){
			// console.log(now+"，"+old);
			this.carouseId = now;
			this.setPY();
		}
	},
  mounted() {
      this.setPY(),
      this.screenWidth =  window.innerWidth,
      this.setSize(),
      // 窗口大小发生改变时,调用一次
      window.onresize = () =>{
      this.screenWidth =  window.innerWidth;
      this.setSize();
    }
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 1px;
}

.el-card:hover {
    box-shadow: 2px 2px 10px lightgrey;
    transition: 500ms;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

img{
     /*设置图片宽度和浏览器宽度一致*/
      width:100%;
      height:inherit;
    }

.panel-heading {
  box-sizing: content-box;
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: #555454;
  background-color: #dddddd;
  border-color: #bbbbbb;
}

.panel-heading-time {
  color: #696969;
  font-family: var(--e-global-typography-primary-font-family ), Sans-serif;
  font-weight: var(--e-global-typography-primary-font-weight );
  padding: 0;
  margin: 0;
  line-height: 1;
}

</style>
