import oauth2orizeOpenId from 'oauth2orize-openid';

// 'id_token token' grant type.

export default oauth2orizeOpenId.grant.idTokenToken(
  (client, user, done) => {
    var token;
    // Do your lookup/token generation.
    // ... token =

    done(null, token);
  },
  (client, user, done) => {
    var id_token;
    // Do your lookup/token generation.
    // ... id_token =
    done(null, id_token);
  }
);
