/* CigaretteTable.vue
Visualizes the not smoked Cigarettes.
*/
<template>
  <div class="cigarette-table">
    <table class="ui celled table">
      <thead>
      <tr>
        <th>{{ $tc('day', 1) }}</th>
        <th>{{ $tc('cigarette', 2) }}</th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="day in days">
        <td>{{ day }}</td>
        <td>
          <span v-for="c in cigarettesPerDay">{{ emojiCigarette }}</span>
          <!-- TODO last day -->
        </td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import {EMOJI_CIGARETTE} from '../constants'

export default {
  name: 'cigarettes-table',
  props: {
    cigarettes: {
      type: Number,
      default: 0
    },
    days: {
      type: Number,
      default: 0
    },
    cigarettesPerDay: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      emojiCigarette: EMOJI_CIGARETTE
    }
  }
}
</script>

<style scoped>
</style>
