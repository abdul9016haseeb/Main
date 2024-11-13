const Response = require('../helpers/response')
class Base {
  constructor() {}
  static serverError(res,error){
    return Response.ServerErrorResponse(res)
  }
}
module.exports = Base;