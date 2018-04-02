<template>
  <div id="index">

    <div id="form-container">

      <form class="ui form">
        <div class="field">
          <label>{{ $t('form.label.cigarettesPerDay') }}</label>
          <input v-model="formCigarettesPerDay" type="number" name="cigarettes-per-day" :placeholder="$t('form.placeholder.cigarettesPerDay')">
        </div>
        <div class="field">
          <label>{{ $t('form.label.packPrice') }}</label>
          <input v-model="formPackPrice" type="number" name="pack-price" :placeholder="$t('form.placeholder.packPrice')">
        </div>
        <div class="field">
          <label>{{ $t('form.label.packAmount') }}</label>
          <input v-model="formPackAmount" type="number" name="pack-amount" :placeholder="$t('form.placeholder.packAmount')">
        </div>
        <div class="field">
          <label>{{ $t('form.label.lastCigarette') }}</label>
          <input v-model="formLastCigarette" type="text" name="last-cigarette" :placeholder="$t('form.placeholder.lastCigarette')">
        </div>
        <button class="ui button" type="submit">{{ $t('form.submit') }}</button>
      </form>

    </div>

    <table class="ui celled table">
        <thead>
        <tr>
          <th>Key</th>
          <th>Property</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <div class="ui ribbon label">Now</div>
          </td>
          <td>{{ now }}</td>
        </tr>
        <tr>
          <td>last cigarette</td>
          <td>{{ lastCigarette | formatDate }}</td>
        </tr>
        <tr>
          <td>Delta Object</td>
          <td>
            {{ $t('msg.timedelta', timedelta) }}
          </td>
        </tr>
        <tr>
          <td>$</td>
          <td>{{ cost }}</td>
        </tr>
        <tr>
          <td>price/minute</td>
          <td>{{ pricePerMinute }}</td>
        </tr>
        </tbody>
      </table>

  </div>
</template>

<script>
import moment from 'moment'
import {
  PACK_AMOUNT,
  PACK_PRICE,
  CIGARETTES_PER_DAY
} from '../constants'
import {
  getTimedeltaObject
} from './functions'

export default {
  name: 'ViewIndex',
  data () {
    return {
      formPackAmount: PACK_AMOUNT,
      formPackPrice: PACK_PRICE,
      formCigarettesPerDay: CIGARETTES_PER_DAY,
      formLastCigarette: moment().format('YYYY-MM-DD HH:mm')
    }
  },
  computed: {
    now: function () {
      return moment()
    },
    lastCigarette: function () {
      // TODO rm debugging code
      return moment('2013-01-22 13:37', 'YYYY-MM-DD HH:mm')
      // return moment(this.formLastCigarette, 'YYYY-MM-DD HH:mm')
    },
    timedelta: function () {
      return getTimedeltaObject(this.lastCigarette, this.now)
    },
    cigarettePrice: function () {
      return this.formPackPrice / this.formPackAmount
    },
    cigarettesPerMinute: function () {
      return this.formCigarettesPerDay / (24 * 60)
    },
    pricePerMinute: function () {
      return this.cigarettesPerMinute * this.cigarettePrice
    },
    cost: function () {
      const diff = this.now.diff(this.lastCigarette, 'minutes')
      return diff * this.pricePerMinute
    }
  },
  methods: {
  },
  filters: {
    formatDate: function (value) {
      return value.format('DD.MM.YYYY mm:HH')
    }
  }
}
</script>

<style>
</style>
