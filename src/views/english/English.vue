<template>
  <div>
    <!--<b-row>-->
      <!--<b-colxx xxs="12">-->
        <!--<piaf-breadcrumb :heading="$t('menu.carousel')"/>-->
        <!--<div class="separator mb-5"></div>-->
      <!--</b-colxx>-->
    <!--</b-row>-->
    <admin-sidebar/>
    <update/>
    <!--<writing/>-->
    <!--<reading/>-->

    <!--<intro/>-->
    <!--<courses/>-->
    <!--<news/>-->
    <!--<maps/>-->
  </div>
</template>

<script>
  import AdminSidebar from '@/containers/AdminSidebar'
  import Courses from './home/Courses'
  import Intro from './home/Intro'
  import Maps from './home/Maps'
  import News from './home/News'
  import Reading from './test/Reading'
  import Writing from "./test/Writing";
  import Update from "./crazy/Update";

  export default {
    components: {
      AdminSidebar,
      Update,
      Writing,
      Courses,
      Intro,
      Maps,
      News,
      Reading,
    },

    data() {
      return {

      }
    }

  }
</script>
