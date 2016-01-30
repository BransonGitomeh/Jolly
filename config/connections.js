// add connections here, this allows you to have multiple connections to a single source, and diffrent connections per diffrent models

module.exports = {
                simple: { 
                    adapter: 'memory' 
                },
                
                mysql: {
                    adapter    : 'mysql',
                    host      : 'localhost',
                    port      : 3306,
                    user      : 'newuser',
                    password  : 'password',
                    database  : 'mydb'
                }
}