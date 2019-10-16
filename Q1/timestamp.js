module.exports = (req, res, next) => {
  const now = new Date()
  const timestamp = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
  console.log(`${timestamp} | ${req.method} from ${req.url}`)
  next()
}