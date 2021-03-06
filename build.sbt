organization := "tv.cntt"
name         := "harpoon-front"
version      := "1.0-SNAPSHOT"

scalaVersion := "2.11.6"
//scalaVersion := "2.10.5"

scalacOptions ++= Seq("-deprecation", "-feature", "-unchecked")

// Xitrum requires Java 7
javacOptions ++= Seq("-source", "1.7", "-target", "1.7")

//------------------------------------------------------------------------------

libraryDependencies += "tv.cntt" %% "xitrum" % "3.24.0"

// Xitrum uses SLF4J, an implementation of SLF4J is needed
libraryDependencies += "ch.qos.logback" % "logback-classic" % "1.1.3"

// For writing condition in logback.xml
libraryDependencies += "org.codehaus.janino" % "janino" % "2.7.8"

libraryDependencies += "org.webjars" % "bootstrap" % "3.3.4"

// Scalate template engine config for Xitrum -----------------------------------

libraryDependencies += "tv.cntt" %% "xitrum-scalate" % "2.5"


libraryDependencies ++= List(
  "org.slf4j" % "slf4j-nop" % "1.6.4",
  "mysql" % "mysql-connector-java" % "5.1.6",
  "com.mchange" % "c3p0" % "0.9.2.1",
  "com.typesafe.slick" %% "slick" % "2.1.0",
  "joda-time" % "joda-time" % "2.5",
  "org.joda" % "joda-convert" % "1.7",
  "org.apache.httpcomponents" % "httpclient" % "4.3.5",
  "com.hazelcast" % "hazelcast" % "3.3.1",
  "com.hazelcast" % "hazelcast-client" % "3.3.1",
  "tv.cntt" %% "xitrum-hazelcast3" % "1.12",
  "io.spray" %%  "spray-json" % "1.3.1",
  "com.github.tototoshi" %% "slick-joda-mapper" % "1.2.0")


// Precompile Scalate templates
seq(scalateSettings:_*)

ScalateKeys.scalateTemplateConfig in Compile := Seq(TemplateConfig(
  baseDirectory.value / "src" / "main" / "scalate",
  Seq(),
  Seq(Binding("helper", "xitrum.Action", true))
))

// xgettext i18n translation key string extractor is a compiler plugin ---------

autoCompilerPlugins := true
addCompilerPlugin("tv.cntt" %% "xgettext" % "1.3")
scalacOptions += "-P:xgettext:xitrum.I18n"

// Put config directory in classpath for easier development --------------------

// For "sbt console"
unmanagedClasspath in Compile <+= (baseDirectory) map { bd => Attributed.blank(bd / "config") }

// For "sbt run"
unmanagedClasspath in Runtime <+= (baseDirectory) map { bd => Attributed.blank(bd / "config") }

// Copy these to target/xitrum when sbt xitrum-package is run
XitrumPackage.copy("config", "public", "script")

