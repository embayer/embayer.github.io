import moment from 'moment'

export function getTimedeltaObject (momentStart, momentEnd) {
  const diff = momentEnd.diff(momentStart)
  const duration = moment.duration(diff)
  return {
    m: duration.minutes(),
    h: duration.hours(),
    d: duration.days(),
    M: duration.months(),
    y: duration.years()
  }
}
