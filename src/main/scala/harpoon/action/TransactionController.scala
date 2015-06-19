package harpoon.action

import harpoon.dao.TransactionDao
import xitrum.annotation.GET

/**
 * Created by pheadra on 6/18/15.
 */

  @GET("/transaction")
  class getTransactionList extends Api2 {
    def execute() {
      val appid = param[String]("appid")

      respondJson(TransactionDao.getTransactionList(appid))
    }

  }


  @GET("/transaction/trace")
  class transactiontrace extends Api2 {
    def execute() {
      val appid = param[String]("appid")
      val objhash = param[String]("objhash")

      respondJson(TransactionDao.getTransactionTrace(appid, objhash))
    }

  }
@GET("/transaction/count")
class transactionCount extends Api2 {
  def execute() {
    val appid = param[String]("appid")


    respondJson(TransactionDao.getTransactionCount(appid))
  }

}
