export const PACK_AMOUNT = 20
export const PACK_PRICE = 6.20
export const CIGARETTES_PER_DAY = 15

// Ready translated locale messages
export const messages = {
  en: {
    year: 'year | years',
    month: 'month | months',
    day: 'day | days',
    hour: 'hour | hours',
    minute: 'minute | minutes',
    msg: {
      timedelta: `{y} years, {M} months, {d} days, {h} hours, {m} minutes.`
    }
  },
  de: {
    year: 'Jahr | Jahre',
    month: 'Monat | Monate',
    day: 'Tag | Tage',
    hour: 'Stunde | Stunden',
    minute: 'Minute | Minuten',
    msg: {
      timedelta: `{y} years, {M} months, {d} days, {h} hours, {m} minutes.`
    },
    form: {
      submit: 'Berechnen',
      label: {
        cigarettesPerDay: 'Anzahl der Zigaretten pro Tag',
        packPrice: 'Kosten pro Schachtel',
        packAmount: 'Anzahl pro Schachtel',
        lastCigarette: 'Zeitpunkt der letzten Zigarette'
      },
      placeholder: {
        cigarettesPerDay: 'Durchschnittlich gerauchte Zigaretten pro Tag',
        packPrice: 'Kosten pro Schachtel Zigaretten',
        packAmount: 'Anzahl an Zigaretten pro Schachtel',
        lastCigarette: 'YYYY-MM-DD HH:mm'
      }
    }
  }
}
