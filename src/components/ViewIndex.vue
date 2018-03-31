<template>
  <div id="index">
    <div>
      <span>Date</span>
      <span>{{now}}</span>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'ViewIndex',
  data () {
    return {
      now: moment().format('DD.MM.YYYY HH:MM')
    }
  }
}
</script>

<style>
</style>
