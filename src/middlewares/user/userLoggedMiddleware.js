const db = require("../../../database/models");

 async function userLoggedMiddleware(req, res, next) {
    if(req.session.user){
      res.locals.isLogged = true;
      res.locals.userLogged = req.session.user;
    }else{
    
      res.locals.isLogged = false;

      let emailInCookie = req.cookies.userEmail;
    
      let userFromCookie = await db.users.findOne({
        where: {
          email: emailInCookie || null
        },
      });
    
      if (userFromCookie) {
        req.session.userLogged = userFromCookie;
      }

      if (req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
      }
  }
  next();
  
}

module.exports = userLoggedMiddleware;
