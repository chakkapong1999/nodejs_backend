const pool = require('../database/index.js')

const getTran = (req, res) => {
  pool.query('select * from dbo.tran_user', (err,result) => {
    if (err) throw err.message
    res.status(200).json(result.rows)
  })
}

module.exports = {
  getTran
}
