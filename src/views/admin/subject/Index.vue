<template>
    <div>
        <b-row>
            <b-colxx xxs="12">
                <h1>{{ $t('menu.data-list') }}</h1>
                <div class="float-sm-right">
                    <router-link :to="`/admin/subject/create`" class="w-40 w-sm-100">
                        <button  class="btn btn-primary btn-lg"><i class="simple-icon-plus"></i> Add new</button>
                    </router-link>
                </div>
                <!--<piaf-breadcrumb/>-->

                <span>
                    <b-nav class="pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block">
                        <b-breadcrumb :items="['subject']"/>
                    </b-nav>
                </span>

                <div class="separator mb-5"/>
            </b-colxx>
        </b-row>

        <b-colxx class="disable-text-selection">
            <template>
                <b-row>
                    <b-colxx xxs="12" class="mb-3" v-for="(item,index) in items" :key="index" :id="item.id">
                        <b-card :class="{'d-flex flex-row':true,'active' : 1}" no-body>
                            <router-link :to="`?p=${item.id}`" class="d-flex">
                                <img src="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-9/67845243_908818239462158_7729538336351584256_n.jpg?_nc_cat=104&_nc_oc=AQlxAkJFIEyLHNor7FeFMY5toffe7SyNqDNZja5Vbuq8Qn6np4_NRgbdRpy_p7-8VUU&_nc_ht=scontent.fhan4-1.fna&oh=55439b5d8b3fc17fdbc51618b4ccbb15&oe=5DF66B61"
                                     class="list-thumbnail responsive border-0" :alt="item.title"/>
                            </router-link>
                            <div class="pl-2 d-flex flex-grow-1 min-width-zero">
                                <div class="card-body align-self-center d-flex flex-column flex-lg-row
                             justify-content-between min-width-zero align-items-lg-center">
                                    <router-link :to="`?p=${item.id}`" class="w-40 w-sm-100">
                                        <p class="list-item-heading mb-1 truncate">{{item.name}}</p>
                                    </router-link>
                                </div>
                            </div>
                            <div class="custom-control custom-checkbox pl-1 align-self-center pr-4">
                                <button class="btn btn-primary btn-xs"><i class="iconsminds-remove"></i> remove</button>

                                <router-link :to="`/admin/subject/edit/${item.id}`" class="w-40 w-sm-100">
                                    <button class="btn btn-primary btn-xs"><i class="simple-icon-pencil"></i> edit</button>
                                </router-link>
                            </div>
                        </b-card>
                    </b-colxx>
                </b-row>
            </template>
        </b-colxx>
    </div>

</template>
<script>
    import {DataListIcon, ThumbListIcon, ImageListIcon} from '@/components/Svg'
    import axios from 'axios'
    import {apiUrl} from '@/constants/config'

    export default {
        components: {},
        data () {
            return {
                apiBase: 'http://localhost:4005/api/crazy-courses',
                items: [],
            }
        },
        methods: {
            async loadItems () {
                const res = await axios.get(this.apiBase);
                this.items = res.data.data
            },
        },
        mounted () {
            this.loadItems()
        }
    }
</script>
