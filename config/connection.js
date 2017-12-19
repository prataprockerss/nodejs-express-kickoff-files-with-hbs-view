const
  C = require('./constants'),
  mysql =  require('mysql')
  



const connection = mysql.createConnection(C.DB_CONFIG)

connection.connect((connError)=>{
  if (connError) {
    console.log(connError)
  }
  else{
    console.log('Connection Established');
  }
})

module.exports = connection;