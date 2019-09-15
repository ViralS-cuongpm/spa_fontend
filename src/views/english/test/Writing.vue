<template>
    <div>
        <b-row>
            <b-colxx>
                <h2>Listen & Read & Sort</h2>
            </b-colxx>
        </b-row>
        <b-row>
            <b-colxx xxs="12">
                <b-card class="mb-4">
                    <audio controls>
                        <source src="horse.mp3" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                </b-card>
            </b-colxx>
        </b-row>
        <b-row>
            <b-colxx xxs="12">
                <b-card class="mb-4">
                    <!--<draggable type="ul" class="list-unstyled" v-model="enArr">-->
                        <!--<li v-for="(en, key) in enArr">-->
                            <b-input-group v-for="(en, key) in enArr" :prepend="(key+1) + ''" class="mb-1" size="sm">
                                <b-form-input :placeholder="en[1]" v-model="answers[en[0]]"></b-form-input>
                            </b-input-group>
                        <!--</li>-->
                    <!--</draggable>-->
                </b-card>
            </b-colxx>

            <!--<b-colxx xxs="6">-->
                <!--<b-card class="mb-4">-->
                    <!--<draggable type="ul" class="list-unstyled" v-model="viArr">-->
                        <!--<li v-for="(vi, key) in viArr">-->
                            <!--&lt;!&ndash;<input type="hidden" :value="vi[0]">&ndash;&gt;-->
                            <!--<p>{{vi[1]}}</p>-->
                        <!--</li>-->
                    <!--</draggable>-->
                <!--</b-card>-->
            <!--</b-colxx>-->
        </b-row>
        <b-row>
            <b-colxx>
                <b-card class="mb-4">
                    <button class="btn btn-primary" @click="submit()">Submit</button>
                </b-card>
            </b-colxx>
        </b-row>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    import IconCard from '@/components/Cards/IconCard'
    import axios from 'axios'

    export default {
        components: {
            draggable,
            IconCard
        },
        async created () {
            const url = 'http://localhost:4005/api/test/crazy-write/1';
            const result = await axios.get(url);

            const {ens, vis} = result.data.data;

            for(let i in ens) {
                this.enArr.push([i, ens [i]]);
            }
        },
        async mounted() {

        },
        data () {
            return {
                ens: [],
                enArr: [],
                vis: [],
                viArr: [],
                answers: {}
            }
        },
        computed: {

        },
        methods: {
            async submit()
            {
                console.log(this.answers)

                const url = 'http://localhost:4005/api/test/crazy-write/1';
                const result = await axios.post(url, this.answers);

                console.log(result);
            },

            shuffle(array)
            {
                var currentIndex = array.length, temporaryValue, randomIndex;

                // While there remain elements to shuffle...
                while (0 !== currentIndex) {

                    // Pick a remaining element...
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;

                    // And swap it with the current element.
                    temporaryValue = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = temporaryValue;
                }

                return array;
            }

        }
    }
</script>
