var res = {'data':'HTTP/1.1 200 OK\x0aServer: Apache-Coyote/1.1\x0aContent-Type: text/html;charset=ISO-8859-1\x0aTransfer-Encoding: chunked\x0aDate: Tue, 07 Aug 2018 18:44:15 GMT\x0a\x0a\x0d\x0a\x0d\x0a\x3c!DOCTYPE html PUBLIC \x22-//W3C//DTD HTML 4.01 Transitional//EN\x22 \x22http://www.w3.org/TR/html4/loose.dtd\x22\x3e\x0d\x0a\x3chtml\x3e\x0d\x0a\x3chead\x3e\x0d\x0a\x3cmeta http-equiv=\x22Content-Type\x22 content=\x22text/html; charset=ISO-8859-1\x22\x3e\x0d\x0a\x3ctitle\x3eCase 12 - RXSS via Javascript injection into the scope of an HTML/Javascript Event (Any Delimiter)\x3c/title\x3e\x0d\x0a\x3c/head\x3e\x0d\x0a\x3cbody\x3e\x0d\x0a\x0d\x0aHello Button: \x3cinput type=\x22button\x22 value=\x22ClickMe\x22 onClick=\x22var orderNumber=.htaccess.aspx--&gt;&quot;&gt;&#39;&gt;&#39;&quot;&lt;sfi000270v011919&gt;; alert(\x27Order Number \x27+ orderNumber +\x27 Was Approved\x27);\x22\x3e\x0a\x0d\x0a\x0d\x0a\x3c/body\x3e\x0d\x0a\x3c/html\x3eur!'}