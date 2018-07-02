const config = {
  app: {
    port: parseInt(process.env.APP_PORT) || 3000
  },
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME
  }
}

module.exports = config
