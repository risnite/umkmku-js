module.exports = {
  index: (req, res) => {
    const mysql = require('mysql')
    const connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
    })

    connection.connect()

    connection.query('SELECT * FROM `customers`', (err, results) => {
      if (err) throw err
      res.render('customer/index', { customers: results })
    })

    connection.end()
  }
}
