<template>
    <div>
        <b-card class="mb-4" :title="$t('table.vue-pagination')">
            <vuetable
                    ref="vuetable"
                    :api-url="vuetableItems.apiUrl"
                    :fields="vuetableItems.fields"
                    :per-page="5"
                    pagination-path
                    @vuetable:pagination-data="onPaginationData"
            ></vuetable>
            <vuetable-pagination-bootstrap
                    ref="pagination"
                    @vuetable-pagination:change-page="onChangePage"
            ></vuetable-pagination-bootstrap>
        </b-card>
    </div>
</template>

<script>
    import { apiUrl } from '@/constants/config'
    import Vuetable from 'vuetable-2/src/components/Vuetable'
    import VuetablePaginationBootstrap from '@/components/Common/VuetablePaginationBootstrap'

    export default {
        name: "Pagination",
        components: {
            Vuetable,
            VuetablePaginationBootstrap
        },
        data () {
            return {
                vuetableItems: {
                   // apiUrl: apiUrl + '/cakes/fordatatable',
                    apiUrl: 'http://localhost:8001/api/admin/v1/funds',
                    fields: [
                        {
                            name: 'id',
                            sortField: 'id',
                            title: 'ID',
                            titleClass: '',
                            dataClass: 'list-item-heading'
                        },
                        {
                            name: 'broker_id',
                            sortField: 'broker_id',
                            title: 'Broker',
                            titleClass: '',
                            dataClass: 'text-muted'
                        },
                        {
                            name: 'is_active',
                            sortField: 'is_active',
                            title: 'Active',
                            titleClass: '',
                            dataClass: 'text-muted'
                        },
                        {
                            name: 'lot',
                            sortField: 'lot',
                            title: 'Lot',
                            titleClass: '',
                            dataClass: 'text-muted'
                        }
                    ]
                },
            }
        },
        methods: {
            onPaginationData (paginationData) {
                this.$refs.pagination.setPaginationData(paginationData)
            },
            onChangePage (page) {
                this.$refs.vuetable.changePage(page)
            },
        }
    }
</script>

<style scoped>

</style>