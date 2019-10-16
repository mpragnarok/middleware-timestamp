function getDurationInMilliseconds(start) {
  const NS_PER_SEC = 1e9
  const NS_TO_MS = 1e6
  const diff = process.hrtime(start)

  return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS
}


module.exports = (req, res, next) => {
  const now = new Date()
  const date = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`
  const time = `${now.getHours()}:${now.getMinutes()}:${ now.getSeconds()}`
  const start = process.hrtime()
  const durationInMilliseconds = getDurationInMilliseconds(start)
  console.log(`${date} ${time} | ${req.method} from ${req.url} | total time: ${durationInMilliseconds.toLocaleString()}ms`)
  next()
}