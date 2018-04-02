<template>
  <div id="index">

    <div id="form-container" class="container">
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

    <div id="table-container" class="container">
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

    <div id="cigarettes-table-container" class="container">
      <cigarettes-table :cigarettes="cigarettes" :days="days" :cigarettes-per-day="formCigarettesPerDay"></cigarettes-table>
    </div>

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
} from '../functions'
import CigarettesTable from './CigaretteTable'

export default {
  name: 'ViewIndex',
  components: {CigarettesTable},
  data () {
    return {
      // TODO rm defaults
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
    cigarettes: function () {
      return this.cigarettesPerMinute * this.minutes
    },
    cigarettesPerMinute: function () {
      return this.formCigarettesPerDay / (24 * 60)
    },
    pricePerMinute: function () {
      return this.cigarettesPerMinute * this.cigarettePrice
    },
    days: function () {
      return this.now.diff(this.lastCigarette, 'days')
    },
    minutes: function () {
      return this.now.diff(this.lastCigarette, 'minutes')
    },
    cost: function () {
      return this.minutes * this.pricePerMinute
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
