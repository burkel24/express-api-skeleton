// const LocalStrategy = require('passport-local').Strategy;
// const FacebookStrategy = require('passport-facebook').Strategy;

// const User = require('../models/user');

export default function configurePassport(passport) {

  // passport.serializeUser(function(user, done) {
  //   done(null, user.id);
  // });

  // passport.deserializeUser(function(id, done) {
  //   User.findById(id, function(err, user) {
  //     done(err, user);
  //   });
  // });

  // passport.use(new FacebookStrategy({
  //   clientID: process.env.FACEBOOK_CLIENT_ID,
  //   clientSecret: process.env.FACEBOOK_SECRET,
  //   callbackURL: process.env.FACEBOOK_CALLBACK
  // },
  // function(token, refreshToken, profile, done) {
  //   process.nextTick(function() {
  //     User.findOne({ 'facebook.id' : profile.id }, function(err, user) {
  //       if (err) return done(err);

        
  //       if (user) {
  //         return done(null, user);
  //       } else {
  //         const newUser  = new User();

  //         newUser.facebook.id    = profile.id;
  //         newUser.facebook.token = token;

  //         if (profile.displayName) {
  //           newUser.facebook.name = profile.displayName;
  //         } else if (profile.name && profile.name.givenName && profile.name.familyName) {
  //           newUser.facebook.name  = `${profile.name.givenName}  ${profile.name.familyName}`; 
  //         } else {
  //           newUser.facebook.name = `Facebook user ${profile.id}`;
  //         }

  //         newUser.save(function(err) {
  //           if (err) throw err;
  //           return done(null, newUser);
  //         });
  //       }
  //     });
  //   });
  // }));
}