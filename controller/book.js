const Base = require('./base');
class BookController {
  static myfunction(req,res){
    try{
      throw new Error("error");
      res.send("hello");
    }catch(error){
       return Base.serverError(res,error);
    }
  }
}

module.exports = BookController;