import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: "375429109056-n3q996gki545cuci4mv92rqg6hqd8lnl.apps.googleusercontent.com",
      clientSecret: "Rcx8LUeyKKEx23ULgScj1kZe",
      authorizationUrl:
        'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
    }),
    Providers.Facebook({
      clientId: "2936861616589160",
      clientSecret: "df4992a16779f15139e6af82295d6ac0",
    }),
    Providers.Twitter({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  debug:true
});
