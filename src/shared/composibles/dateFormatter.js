const formatter = new Intl.DateTimeFormat('ru', {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
})
export const dateFormater = (unixDate) => {
  return formatter.format(new Date(unixDate * 1000))
}
