var res = {'data':'HTTP/1.1 200 OK\x0aServer: Apache-Coyote/1.1\x0aSet-Cookie: info-cookie-no-http-only=test\x0aContent-Type: text/html;charset=ISO-8859-1\x0aContent-Length: 770\x0aDate: Tue, 07 Aug 2018 22:21:44 GMT\x0a\x0a\x3c!DOCTYPE HTML PUBLIC \x22-//W3C//DTD HTML 3.2//EN\x22\x3e\x0a\x3c!--\x0a\x09Inspired by a vulnerable test case originally written for the OWASP Zed Attack Proxy (ZAP) project\x0a\x09(http://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project) \x0a\x09Original Author: psiinon (psiinon@gmail.com).\x0a--\x3e\x0a\x0a\x3chead\x3e\x0a\x3ctitle\x3eInfo Cookie no HTTPOnly flag (Originally part of ZAP-WAVE)\x3c/title\x3e\x0a\x3c/head\x3e\x0a\x3cbody\x3e\x0a\x3cH2\x3eSetting a cookie without the HTTPOnly flag (Originally part of ZAP-WAVE)\x3c/H2\x3e\x0a\x3cH3\x3eDescription\x3c/H3\x3e\x0aThe \x27info-cookie-no-http-only\x27 cookie is set without the HTTPOnly flag being set.\x3cbr\x3e\x0aThis means that the cookie can be accessed by client side scripts, which is usually a bad idea.\x3cbr\x3e\x0aNote that some servers may add this flag anyway, depending on their configuration! \x0a\x3cH3\x3eExample\x3c/H3\x3e\x0a\x0a\x0a\x3c/body\x3e\x0a\x0a\xf1\x05'}