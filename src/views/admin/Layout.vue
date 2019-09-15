<template>
    <div id="app-container" :class="getMenuType">
        <top-nav/>
        <admin-sidebar/>
        <div class="container" style="padding-top: 150px">
            <router-view/>
        </div>
    </div>
</template>
<script>
    import TopNav from '@/containers/TopNavEn'
    import { mapGetters } from 'vuex'
    import AdminSidebar from '@/containers/AdminSidebar'

    export default {
        data () {
            return { show: false }
        },
        components: {
            TopNav,
            AdminSidebar
        },
        computed: {
            ...mapGetters(['getMenuType'])
        }
    }
</script>
