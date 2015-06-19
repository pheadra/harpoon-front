package harpoon.dao

import scala.slick.jdbc.StaticQuery.interpolation
import scala.slick.jdbc.{StaticQuery => Q}

/**
 * Created by pheadra on 6/18/15.
 */
object RealtimeDao extends DatabasePool {
  def getRealtime(appid: String): List[Map[String, Any]] = databasePool withSession {
    implicit session =>
      /// TODO 만약없다면 exception??
      val query = sql"""
                  select id, responseTime, activeService, heapMemory, tps, activeUsers, webrequest, time
                  from RealtimeData where applicationKey = $appid

       """.as[(Int, Int, Int, Int, Int,Int,Int,Int)]

      val errorlist = query.list
      var errors: List[Map[String, Any]] = List()
      errorlist.foreach { p =>
        errors ++= List(Map("id" -> p._1, "responseTime" -> p._2, "activeService"->p._3, "heapMemory"->p._4, "tps"->p._5, "activeusers"->p._6, "webrequest"->p._7, "time" ->p._8))
      }
      return errors
  }
  def getLastRealtime(appid: String): List[Map[String, Any]] = databasePool withSession {
    implicit session =>
      /// TODO 만약없다면 exception??
      val query = sql"""
                  select id, responseTime, activeService, heapMemory, tps, activeUsers, webrequest, time
                  from RealtimeData where applicationKey = $appid
                  order by id DESC
                  limit 1
       """.as[(Int, Int, Int, Int, Int,Int,Int,Int)]

      val errorlist = query.list
      var errors: List[Map[String, Any]] = List()
      errorlist.foreach { p =>
        errors ++= List(Map("id" -> p._1, "responseTime" -> p._2, "activeService"->p._3, "heapMemory"->p._4, "tps"->p._5, "activeusers"->p._6, "webrequest"->p._7, "time" ->p._8))
      }
      return errors
  }
}
