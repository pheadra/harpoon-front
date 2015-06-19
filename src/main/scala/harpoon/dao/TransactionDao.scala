package harpoon.dao

import scala.slick.jdbc.StaticQuery.interpolation
import scala.slick.jdbc.{StaticQuery => Q}

/**
 * Created by pheadra on 6/18/15.
 */
object TransactionDao extends DatabasePool {
  def getTransactionList(appid: String): List[Map[String, Any]] = databasePool withSession {
    implicit session =>
      /// TODO 만약없다면 exception??
      val query = sql"""
      select XlogPackets.id, XlogPackets.objType,TextPackets.text,XlogPackets.time, XlogPackets.objHash
      from TextPackets, XlogPackets
      where TextPackets.serviceHash = XlogPackets.serviceHash
      and XlogPackets.applicationKey = $appid
      order by XlogPackets.id
     desc limit 10
       """.as[(Int, String, String, String, String)]

      val errorlist = query.list
      var errors: List[Map[String, Any]] = List()
      errorlist.foreach { p =>
        errors ++= List(Map("id" -> p._1, "objType" -> p._2, "text"->p._3, "time"->p._4, "objHash"->p._5))
      }
      return errors
  }

  def getTransactionTrace(appid: String, objHash: String): List[Map[String, Any]] = databasePool withSession {
    implicit session =>
    val query = sql"""
      select XlogProfilePackets.time, Profiles.start_cpu, Profiles.message
      from XlogProfilePackets, Profiles
      where XlogProfilePackets.id = Profiles.id_XlogProfilePackets
      and XlogProfilePackets.applicationKey = $appid
       and XlogProfilePackets.objHash = $objHash
       """.as[(String, Int, String)]

    val errorlist = query.list
    var errors: List[Map[String, Any]] = List();
    errorlist.foreach { p =>
      errors ++= List(Map("time" -> p._1, "cpu" -> p._2, "message" -> p._3))
    }
    return errors
  }

  def getTransactionCount(appid: String): List[Map[String, Any]] = databasePool withSession {
    implicit session =>
      val query = sql"""
      select XlogPackets.time time , count(XlogPackets.time) cnt
      from TextPackets, XlogPackets
      where TextPackets.serviceHash = XlogPackets.serviceHash
      and XlogPackets.applicationKey = $appid
      group by second(XlogPackets.time)

       """.as[(String, Int)]

      val errorlist = query.list
      var errors: List[Map[String, Any]] = List();
      errorlist.foreach { p =>
        errors ++= List(Map("time" -> p._1, "count" -> p._2))
      }
      return errors
  }

}
