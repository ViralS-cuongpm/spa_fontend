<template>
  <div id="app-container" :class="getMenuType">
    <top-nav/>
    <!--<sidebar/>-->
    <div class="container" style="padding-top: 150px">
      <router-view/>
    </div>
  </div>
</template>
<script>
  import Sidebar from '@/containers/Sidebar'
  import TopNav from '@/containers/TopNavEn'
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return { show: false }
    },
    components: {
      TopNav,
      Sidebar
    },
    computed: {
      ...mapGetters(['getMenuType'])
    }
  }
</script>
