module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a47d491bdc03fb83102b2a2aff2865a9'),
  },
});
