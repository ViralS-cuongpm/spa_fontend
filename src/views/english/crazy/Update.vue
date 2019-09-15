<template>
    <b-row>
        <b-colxx xxs="12">
            <b-card class="mb-4" :title="$t('forms.course')">
                <b-form @submit.prevent="onBasicSubmit">
                    <b-form-group :label="$t('forms.name')" :description="$t('forms.email-muted')">
                        <b-form-input v-model="courseForm.name" :placeholder="$t('forms.name')" />
                    </b-form-group>
                    <b-form-group :label="$t('forms.description')">
                        <b-form-input v-model="courseForm.description" :placeholder="$t('forms.description')"/>
                    </b-form-group>
                    <b-form-group>
                        <input type="file" @change="onFileChange">
                    </b-form-group>
                    <b-form-group>
                        <b-form-checkbox v-model="courseForm.is_active" :value="courseForm.is_active">{{ $t('forms.is_active') }}</b-form-checkbox>
                    </b-form-group>
                    <b-button type="submit" variant="primary" class="mt-4">{{ $t('forms.submit') }}</b-button>
                </b-form>
            </b-card>
        </b-colxx>
    </b-row>
</template>

<script>
    import VueDropzone from 'vue2-dropzone'
    import axios from 'axios'

    export default {
        components: {
            VueDropzone,
        },
        data () {
            return {
                courseForm: {
                    name: '',
                    description: '',
                    image: null,
                    is_active: false
                },
                url: 'http://localhost:4005/admin/crazy-courses/'
            }
        },
        async mounted() {
            const course = await axios.get(this.url + 1);
            this.courseForm.name = course.data.data.name;
            this.courseForm.description = course.data.data.description;
            this.courseForm.is_active = course.data.data.is_active;
            console.log(course.data.data);
        },
        methods: {
            async onBasicSubmit () {
                this.course = await axios.put(this.url + 1, this.courseForm);
                console.log(this.course);
            },

            onFileChange(e) {
                const files = e.target.files || e.dataTransfer.files;
                this.courseForm.image = files[0]
            },
        },
    }
</script>

<style scoped>

</style>