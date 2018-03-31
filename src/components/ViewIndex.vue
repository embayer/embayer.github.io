<template>
  <div id="index">

      <table>
        <thead>
        <tr>
          <th>Key</th>
          <th>Property</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Now</td>
          <td>{{now}}</td>
        </tr>
        <tr>
          <td>pack amount</td>
          <td>{{packAmount}}</td>
        </tr>
        <tr>
          <td>pack price</td>
          <td>{{packPrice}}</td>
        </tr>
        <tr>
          <td>Delta Object</td>
          <td>{{timedelta}}</td>
        </tr>
        </tbody>
      </table>

  </div>
</template>

<script>
import moment from 'moment'
import {
  PACK_AMOUNT,
  PACK_PRICE
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
      lastCigarette: moment('01-01-2016', 'MM-DD-YYYY')
    }
  },
  computed: {
    timedelta: function () {
      return getTimedeltaObject(this.lastCigarette, this.now)
    },
    now: function () {
      return moment()
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
