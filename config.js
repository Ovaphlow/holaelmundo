const config = {
    port: 80,
    db: {
        name: 'zhongruan',
        user: 'root',
        password: '',
        host: '127.0.0.1',
        pool: {
            max: 50,
            min: 5,
            idle: 10000
        }
    }
}

module.exports = config
