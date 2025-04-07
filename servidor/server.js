const x = require('express')
const y = require('path')

const a = x()
const p = 3000

const b = y.join(__dirname, '..', 'dist')

a.use(x.static(b))

a.get('*', (req, res) => {
  res.sendFile(y.join(b, 'index.html'))
})

a.listen(p, () => {
  console.log(`En línea: http://localhost:${p}`)
})
