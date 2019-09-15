<template>
    <div class="custom-actions">
        <b-button class="mb-2" size="xs" variant="outline-primary " @click="itemAction('view-item', rowData, rowIndex)">
            View
        </b-button>
        <b-button class="mb-2" size="xs" variant="outline-primary " @click="itemAction('edit-item', rowData, rowIndex)">
            Edit
        </b-button>
        <b-button class="mb-2" size="xs" variant="outline-primary " @click="itemAction('delete-item', rowData, rowIndex)">
            Delete
        </b-button>
    </div>
</template>

<script>
    export default {
        props: {
            rowData: {
                type: Object,
                required: true
            },
            rowIndex: {
                type: Number
            }
        },
        methods: {
            itemAction (action, data, index) {
                console.log('custom-actions: ' + action, data.id, index)
            }
        }
    }
</script>

<style>
    .custom-actions button.ui.button {
        padding: 8px 8px;
    }
    .custom-actions button.ui.button > i.icon {
        margin: auto !important;
    }
</style>