<template>
    <div>
      <b-row>
        <b-colxx xxs="12">
          <b-card class="mb-4" >
            <b-jumbotron header="WHAT WOULD YOU LEARN" lead="Increase your expertise in business, technology and personal development" header-level="5">
              <hr class="my-4">
              <p>{{$t('jumbotron.lead-detail')}}</p>
              <p class="lead mb-0">
                <b-button variant="primary" size="lg">{{$t('jumbotron.learn-more')}}</b-button>
              </p>
            </b-jumbotron>
          </b-card>
        </b-colxx>
      </b-row>
    </div>
</template>

<script>
    export default {
      mounted() {
      }
    }
</script>

<style scoped>

</style>
