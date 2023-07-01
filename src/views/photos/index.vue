<template>
  <ContentBase>
    <Carousel1 />
    <Carousel2 />
    <div class="thanks">
      <span class="saying">
        <span><strong>Acknowledgments</strong></span>
Coach Xiang Chen initially designed this homepage. It was developed by Yilin Huang (Grade-21 majoring in CS) and Shaoyu Yang (Grade-20 majoring in SE) who are honorary members of NTUACM. Thank them for their outstanding contributions!
      </span>
    </div>
  </ContentBase>
</template>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
import ContentBase from '@/components/ContentBase.vue'
const Carousel1 = () => import('./components/carousel.vue')
const Carousel2 = () => import('./components/carousel.vue')

export default {
  name: 'Photos',
  components: { ContentBase, Carousel1, Carousel2 }
}
</script>

<style scoped>
.thanks {
  box-sizing: content-box;
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: #555454;
  background-color: #dddddd;
  text-align: center;
}
.saying {
  color: #696969;
  font-family: var(--e-global-typography-primary-font-family ), Sans-serif;
  font-weight: var(--e-global-typography-primary-font-weight );
  padding: 0;
  margin: 0;
  line-height: 1;
}
</style>
