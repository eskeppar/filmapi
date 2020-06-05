const config = {
  user: process.env.AZURE_USER,
  password: process.env.AZURE_PASSWORD,
  server: 'erikmovieserver.database.windows.net',
  database: 'MovieDB',
};

module.exports = config;
