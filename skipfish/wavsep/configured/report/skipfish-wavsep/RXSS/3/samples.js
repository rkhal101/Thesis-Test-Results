var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://localhost:8090/', 'dir': '_m0/0', 'linked': 2, 'len': 11230 },
    { 'url': 'http://localhost:8090/wavsep/', 'dir': '_m0/1', 'linked': 5, 'len': 1504 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-COOKIE-Experimental/', 'dir': '_m0/2', 'linked': 5, 'len': 1230 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-COOKIE-Experimental/Case01-Tag2HtmlPageScope.jsp', 'dir': '_m0/3', 'linked': 5, 'len': 761 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-COOKIE-Experimental/Case01-Tag2HtmlPageScope.jsp?userinput=textvalue', 'dir': '_m0/4', 'linked': 5, 'len': 603 } ]
  }
];

var issue_samples = [
  { 'severity': 3, 'type': 40601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'implicitly cacheable \x27Set-Cookie\x27 response', 'sid': '0', 'dir': '_i0/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-COOKIE-Experimental/', 'extra': 'implicitly cacheable \x27Set-Cookie\x27 response', 'sid': '0', 'dir': '_i0/1' } ]
  },
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-COOKIE-Experimental/Case01-Tag2HtmlPageScope.jsp', 'extra': '', 'sid': '0', 'dir': '_i1/0' } ]
  },
  { 'severity': 0, 'type': 10901, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-COOKIE-Experimental/Case01-Tag2HtmlPageScope.jsp', 'extra': '', 'sid': '0', 'dir': '_i2/0' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://localhost:8090/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-COOKIE-Experimental/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i3/1' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://localhost:8090/', 'extra': 'Apache-Coyote/1.1', 'sid': '0', 'dir': '_i4/0' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'JSESSIONID', 'sid': '0', 'dir': '_i5/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-COOKIE-Experimental/', 'extra': 'userinput', 'sid': '0', 'dir': '_i5/1' } ]
  }
];

