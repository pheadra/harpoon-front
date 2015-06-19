package harpoon.action

import org.joda.time.DateTime
import org.joda.time.format.DateTimeFormat

import harpoon.dao.DashboardDao

import xitrum.annotation.GET


@GET("/dashboard/request")
class dashbaordGraph extends Api2 {
  def execute() {
    val appid = param[String]("appid")
    val dashboarddata = DashboardDao.getDashboardData(appid)
    respondJson(dashboarddata)
  }
}

@GET("/dashboard/info")
class getDashboardInfo extends Api2 {
  def execute() {
    val appid = param[String]("appid")

    val usercount = 1
    println(usercount)
    val dashboarddata = DashboardDao.getDashboardInfo(appid, usercount, Today())

    respondJson(dashboarddata)
  }

  def Today(pattern: String = "yyyy-MM-dd") = DateTimeFormat.forPattern(pattern).print(DateTime.now())

}

