module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '547f620e270030ffa46b220212021da1'),
  },
});
