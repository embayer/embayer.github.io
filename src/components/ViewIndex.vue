<template>
  <div id="index">

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
          <td>pack amount</td>
          <td>{{ packAmount }}</td>
        </tr>
        <tr>
          <td>pack price</td>
          <td>{{ packPrice }}</td>
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
      packAmount: PACK_AMOUNT,
      packPrice: PACK_PRICE,
      cigarettesPerDay: CIGARETTES_PER_DAY,
      lastCigarette: moment('11-01-2016', 'MM-DD-YYYY')
    }
  },
  computed: {
    now: function () {
      return moment()
    },
    timedelta: function () {
      return getTimedeltaObject(this.lastCigarette, this.now)
    },
    cigarettePrice: function () {
      return this.packPrice / this.packAmount
    },
    cigarettesPerMinute: function () {
      return this.cigarettesPerDay / (24 * 60)
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
