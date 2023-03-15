module.exports = {
  index: (req, res) => {
    const mysql = require('mysql')
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'admin',
      password: 'admin',
      database: 'farisweb_umkmku'
    })

    connection.connect()

    connection.query('SELECT * FROM `customers`', (err, results) => {
      if (err) throw err
      res.render('customer/index', { customers: results })
    })

    connection.end()
  }
}
