package harpoon.action

import harpoon.dao.{RealtimeDao}
import xitrum.annotation.GET

/**
 * Created by pheadra on 6/19/15.
 */
@GET("/realtime")
class getRealtime extends Api2 {
  def execute() {
    val appid = param[String]("appid")

    respondJson(RealtimeDao.getRealtime(appid))
  }
}

@GET("/realtime/last")
class getRealtimeLast extends Api2 {
  def execute() {
    val appid = param[String]("appid")

    respondJson(RealtimeDao.getLastRealtime(appid))
  }
}