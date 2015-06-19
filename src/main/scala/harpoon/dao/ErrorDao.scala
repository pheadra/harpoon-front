package harpoon.dao

import scala.slick.driver.MySQLDriver.simple._
import scala.slick.lifted.ProvenShape
import scala.slick.lifted.Tag
import java.sql.SQLIntegrityConstraintViolationException
import scala.slick.jdbc.{ GetResult, StaticQuery => Q }
import Q.interpolation

/**
 * Created by pheadra on 6/18/15.
 */
object ErrorDao extends DatabasePool {
  def getErrorTotalCount(appid: String): List[Map[String, Any]] = databasePool withSession {
    implicit session =>
      /// TODO 만약없다면 exception??
      val query = sql"""
      select 	DATE_FORMAT(lastOccurredOn,'%Y-%m-%d') errordate, count(*) cnt from Errors where applicationKey = $appid GROUP BY DAY(lastOccurredOn)

       """.as[(String, Int)]

      val errorlist = query.list
      var errors: List[Map[String, Any]] = List();
      errorlist.foreach { p =>
        errors ++= List(Map("errordate" -> p._1, "cnt" -> p._2))
      }
      return errors
  }

  def getErrorDetailCount(appid: String): List[Map[String, Any]] = databasePool withSession {
    implicit session =>
    val query = sql"""
      select DATE_FORMAT(time,'%Y-%m-%d') errordate, count(*) cnt from Errors, ErrorPackets
      where Errors.id = ErrorPackets.id_Errors and Errors.applicationKey = $appid GROUP BY DAY(time)
       """.as[(String, Int)]

    val errorlist = query.list
    var errors: List[Map[String, Any]] = List();
    errorlist.foreach { p =>
      errors ++= List(Map("errordate" -> p._1, "cnt" -> p._2))
    }
    return errors
  }

  def getErrorList(appid: String): List[Map[String, Any]] = databasePool withSession {
    implicit session =>
      val query = sql"""
       select id, message, classname, lastOccurredOn, errorCount from Errors where applicationKey = $appid
       """.as[(Int, String, String, String, Int)]

      val errorlist = query.list
      var errors: List[Map[String, Any]] = List();
      errorlist.foreach { p =>
        errors ++= List(Map("id" -> p._1, "message" -> p._2, "classname" ->p._3, "lastOccurredOn" ->p._4, "errorcount"->p._5))
      }
      return errors
  }

  def getErrorDetailList(appid: String): List[Map[String, Any]] = databasePool withSession {
    implicit session =>
      val query = sql"""
      select ErrorPackets.id id, id_errors, message, className, machineName, osVersion, architecture, processorCount, cpu
      from Errors, ErrorPackets where Errors.id = ErrorPackets.id_Errors and Errors.applicationKey = $appid

       """.as[(Int, Int, String, String, String, String, String, Int, String)]

      val errorlist = query.list
      var errors: List[Map[String, Any]] = List();
      errorlist.foreach { p =>
        errors ++= List(Map("id" -> p._1, "id_errors" -> p._2, "message" ->p._3, "classname" ->p._4,
          "machineName" ->p._5, "osVersion"->p._6, "architecture"->p._7, "processorCount"->p._8, "cpu"->p._9))
      }
      return errors
  }
}
