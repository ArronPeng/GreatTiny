module.exports = {
  port: 3000,
  session: {
    secret: 'jjlineserver',
    key: 'jjlineserver',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/jjlineserver'
};
