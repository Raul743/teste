export const EnvConstants = {
  EmailAddress: process.env.EMAIL_ADDRESS || '',
  JWTSignInSecret: process.env.JWT_SIGNING_PRIVATE_KEY || '',
};

export default EnvConstants;
