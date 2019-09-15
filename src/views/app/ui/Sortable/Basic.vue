<template>
    <b-row>
        <b-colxx xxs="12">
            <h5 class="mb-4 card-title">{{ $t('sortable.basic') }}</h5>
            <b-card class="mb-4">
                <draggable type="ul" class="list-unstyled">
                    <li><p>1. Angel Cake</p></li>
                    <li><p>2. Bibingka</p></li>
                    <li><p>3. Cremeschnitte</p></li>
                    <li><p>4. Faworki</p></li>
                </draggable>
            </b-card>
        </b-colxx>
    </b-row>
</template>

<script>
    export default {
        name: "Basic"
    }
</script>

<style scoped>

</style>