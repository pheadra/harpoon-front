package harpoon.action

import harpoon.dao.ErrorDao
import org.joda.time.DateTime
import org.joda.time.format.DateTimeFormat
import xitrum.annotation.{GET, Error404, Error500}
import xitrum.Action

@Error404
class NotFoundError extends Action {
  def execute() {
    respondView()
  }
}

@Error500
class ServerError extends Action {
  def execute() {
    respondView()
  }
}

@GET("/error/total")
class ErrorTotalCount extends Api2 {
  def execute() {
    val appid = param[String]("appid")

    respondJson(ErrorDao.getErrorTotalCount(appid))
  }

}

@GET("/error")
class ErrorList extends Api2 {
  def execute() {
    val appid = param[String]("appid")

    respondJson(ErrorDao.getErrorList(appid))
  }
}


@GET("/errordetail/total")
class ErrorDetailTotalCount extends Api2 {
  def execute() {
    val appid = param[String]("appid")

    respondJson(ErrorDao.getErrorDetailCount(appid))
  }

}

@GET("/errordetail")
class ErrorDetailList extends Api2 {
  def execute() {
    val appid = param[String]("appid")

    respondJson(ErrorDao.getErrorDetailList(appid))
  }
}