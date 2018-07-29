<template>
  <div id="data-form">
    <div id="form-container" class="container">
      <form
        @submit.prevent="onSubmit"
        class="ui form">
        <!--<div class="field">-->
          <!--<label>{{ $t('form.label.cigarettesPerDay') }}</label>-->
          <!--<input v-model="formCigarettesPerDay" type="number" name="cigarettes-per-day" :placeholder="$t('form.placeholder.cigarettesPerDay')">-->
        <!--</div>-->
        <!--<div class="field">-->
          <!--<label>{{ $t('form.label.packPrice') }}</label>-->
          <!--<input v-model="formPackPrice" type="number" name="pack-price" :placeholder="$t('form.placeholder.packPrice')">-->
        <!--</div>-->
        <!--<div class="field">-->
          <!--<label>{{ $t('form.label.packAmount') }}</label>-->
          <!--<input v-model="formPackAmount" type="number" name="pack-amount" :placeholder="$t('form.placeholder.packAmount')">-->
        <!--</div>-->
        <div class="field">
          <label>Letzte Zigarette</label>
          <input
            v-model="lastCigarette"
            type="text"
            name="last-cigarette"
            placeholder="Letzte Zigarette">
        </div>
        <button class="ui button" type="submit">{{ $t('form.submit') }}</button>
      </form>
      {{`local: ${lastCigarette}`}}<br />
      {{`route: ${$route.query.lastCigarette}`}}<br />
      {{`local: ${$store.state.lastCigarette}`}}<br />
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import {names} from '../store'

export default {
  name: 'DataForm',
  data: function () {
    return {
      lastCigarette: moment().format('YYYY-MM-DD'),
      packPrice: null
    }
  },
  methods: {
    onSubmit (e) {
      console.log('onSubmit()')
      console.log(e)
    },
    /*
    synchronize $store.{prop} this.{prop} $route.query.{prop}
     */
    syncStoreRouteThis () {
      const q = {}
      const props = [
        {
          mutation: names.LAST_CIGARETTE_SET,
          key: 'lastCigarette'
        },
        {
          mutation: names.PACK_PRICE_SET,
          key: 'packPrice'
        }
      ]
      props.forEach(x => {
        // $route.query is the source of truth if set: -> update data property
        if (this.$route.query.hasOwnProperty(x.key)) this[x.key] = this.$route.query[x.key]
        this.$store.commit(x.mutation, this[x.key])
        q[x.key] = this[x.key]
      })
      this.$router.push({ name: this.$route.name, query: q })
    }
  },
  created: function () {
    console.log('created()')
    this.syncStoreRouteThis()
  }
}
</script>

<style scoped>

</style>
