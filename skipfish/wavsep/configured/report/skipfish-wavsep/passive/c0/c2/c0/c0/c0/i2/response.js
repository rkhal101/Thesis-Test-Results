var res = {'data':'HTTP/1.1 500 Internal Server Error\x0aServer: Apache-Coyote/1.1\x0aContent-Type: text/html;charset=utf-8\x0aContent-Language: en\x0aContent-Length: 2921\x0aDate: Tue, 07 Aug 2018 22:21:52 GMT\x0aConnection: close\x0a\x0a\x3c!DOCTYPE html\x3e\x3chtml\x3e\x3chead\x3e\x3ctitle\x3eApache Tomcat/8.0.27 - Error report\x3c/title\x3e\x3cstyle type=\x22text/css\x22\x3eH1 {font-family:Tahoma,Arial,sans-serif;color:white;background-color:#525D76;font-size:22px;} H2 {font-family:Tahoma,Arial,sans-serif;color:white;background-color:#525D76;font-size:16px;} H3 {font-family:Tahoma,Arial,sans-serif;color:white;background-color:#525D76;font-size:14px;} BODY {font-family:Tahoma,Arial,sans-serif;color:black;background-color:white;} B {font-family:Tahoma,Arial,sans-serif;color:white;background-color:#525D76;} P {font-family:Tahoma,Arial,sans-serif;background:white;color:black;font-size:12px;}A {color : black;}A.name {color : black;}.line {height: 1px; background-color: #525D76; border: none;}\x3c/style\x3e \x3c/head\x3e\x3cbody\x3e\x3ch1\x3eHTTP Status 500 - java.lang.ClassNotFoundException: org.apache.jsp.passive.info.info_002dserver_002dstack_002dtrace_jsp\x3c/h1\x3e\x3cdiv class=\x22line\x22\x3e\x3c/div\x3e\x3cp\x3e\x3cb\x3etype\x3c/b\x3e Exception report\x3c/p\x3e\x3cp\x3e\x3cb\x3emessage\x3c/b\x3e \x3cu\x3ejava.lang.ClassNotFoundException: org.apache.jsp.passive.info.info_002dserver_002dstack_002dtrace_jsp\x3c/u\x3e\x3c/p\x3e\x3cp\x3e\x3cb\x3edescription\x3c/b\x3e \x3cu\x3eThe server encountered an internal error that prevented it from fulfilling this request.\x3c/u\x3e\x3c/p\x3e\x3cp\x3e\x3cb\x3eexception\x3c/b\x3e\x3c/p\x3e\x3cpre\x3eorg.apache.jasper.JasperException: java.lang.ClassNotFoundException: org.apache.jsp.passive.info.info_002dserver_002dstack_002dtrace_jsp\x0a\x09org.apache.jasper.servlet.JspServletWrapper.getServlet(JspServletWrapper.java:176)\x0a\x09org.apache.jasper.servlet.JspServletWrapper.service(JspServletWrapper.java:375)\x0a\x09org.apache.jasper.servlet.JspServlet.serviceJspFile(JspServlet.java:396)\x0a\x09org.apache.jasper.servlet.JspServlet.service(JspServlet.java:340)\x0a\x09javax.servlet.http.HttpServlet.service(HttpServlet.java:729)\x0a\x09org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52)\x0a\x3c/pre\x3e\x3cp\x3e\x3cb\x3eroot cause\x3c/b\x3e\x3c/p\x3e\x3cpre\x3ejava.lang.ClassNotFoundException: org.apache.jsp.passive.info.info_002dserver_002dstack_002dtrace_jsp\x0a\x09java.net.URLClassLoader$1.run(URLClassLoader.java:366)\x0a\x09java.net.URLClassLoader$1.run(URLClassLoader.java:355)\x0a\x09java.security.AccessController.doPrivileged(Native Method)\x0a\x09java.net.URLClassLoader.findClass(URLClassLoader.java:354)\x0a\x09org.apache.jasper.servlet.JasperLoader.loadClass(JasperLoader.java:131)\x0a\x09org.apache.jasper.servlet.JasperLoader.loadClass(JasperLoader.java:62)\x0a\x09org.apache.jasper.servlet.JspServletWrapper.getServlet(JspServletWrapper.java:171)\x0a\x09org.apache.jasper.servlet.JspServletWrapper.service(JspServletWrapper.java:375)\x0a\x09org.apache.jasper.servlet.JspServlet.serviceJspFile(JspServlet.java:396)\x0a\x09org.apache.jasper.servlet.JspServlet.service(JspServlet.java:340)\x0a\x09javax.servlet.http.HttpServlet.service(HttpServlet.java:729)\x0a\x09org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52)\x0a\x3c/pre\x3e\x3cp\x3e\x3cb\x3enote\x3c/b\x3e \x3cu\x3eThe full stack trace of the root cause is available in the Apache Tomcat/8.0.27 logs.\x3c/u\x3e\x3c/p\x3e\x3chr class=\x22line\x22\x3e\x3ch3\x3eApache Tomcat/8.0.27\x3c/h3\x3e\x3c/body\x3e\x3c/html\x3e'}