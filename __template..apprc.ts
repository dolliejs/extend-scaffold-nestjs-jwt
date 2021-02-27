export default {
  name: '<%= name %>',
  jwt: {
    secret: '<%= jwtSecret %>',
    signOptions: {
      expiresIn: '<%= jwtExpires %>',
    },
  },
};
