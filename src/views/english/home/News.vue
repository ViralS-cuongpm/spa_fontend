<template>
    <div>
      <!--<b-row>-->
        <!--<b-colxx xxs="12">-->
          <!--<h2 class="mb-4 card-title">News and Events</h2>-->
          <!--<p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>-->
        <!--</b-colxx>-->
      <!--</b-row>-->

        <b-row>
            <b-colxx xxs="12">
                <b-card title="News and Events">
                    <!--<p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>-->
                    <!--<b-refresh-button @click="refreshButtonClick"/>-->
                    <vue-perfect-scrollbar
                            class="scroll dashboard-list-with-thumbs"
                            :settings="{ suppressScrollX: true, wheelPropagation: false }"
                    >
                        <recent-order-item v-for="(order,index) in products.slice(0,6)"
                                           :order="order"
                                           detail-path="/app/pages/details"
                                           :key="index"
                        />
                    </vue-perfect-scrollbar>
                </b-card>
            </b-colxx>
        </b-row>
    </div>
</template>

<script>

    import RecentOrderItem from '@/components/Listing/RecentOrderItem'
    import products from '@/data/products'

    export default {
        components: {
            RecentOrderItem,
        },
        data() {
            return {
                swiperTopRatedOption: {
                    slidesPerView: 1,
                    breakpoints: {
                        0: { slidesPerView: 1 },
                        480: { slidesPerView: 1 },
                        992: { slidesPerView: 2 }
                    }
                },
                products,
            }
        },
        methods: {
            refreshButtonClick () {
                console.log('refreshButtonClick')
            },
        },
    }
</script>

<style scoped>

</style>
