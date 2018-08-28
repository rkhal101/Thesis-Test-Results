var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://localhost:8090/', 'dir': '_m0/0', 'linked': 2, 'len': 11230 },
    { 'url': 'http://localhost:8090/wavsep/', 'dir': '_m0/1', 'linked': 5, 'len': 1504 },
    { 'url': 'http://localhost:8090/wavsep/passive/', 'dir': '_m0/2', 'linked': 5, 'len': 625 },
    { 'url': 'http://localhost:8090/wavsep/passive/info/', 'dir': '_m0/3', 'linked': 2, 'len': 765 },
    { 'url': 'http://localhost:8090/wavsep/passive/info/info-app-stack-trace.jsp', 'dir': '_m0/4', 'linked': 2, 'len': 2944 },
    { 'url': 'http://localhost:8090/wavsep/passive/info/info-cookie-no-httponly.jsp', 'dir': '_m0/5', 'linked': 2, 'len': 770 },
    { 'url': 'http://localhost:8090/wavsep/passive/info/info-server-stack-trace.jsp', 'dir': '_m0/6', 'linked': 2, 'len': 2514 },
    { 'url': 'http://localhost:8090/wavsep/passive/session/session-password-autocomplete.jsp', 'dir': '_m0/7', 'linked': 5, 'len': 860 },
    { 'url': 'http://localhost:8090/wavsep/passive/session/weak-authentication-basic.jsp', 'dir': '_m0/8', 'linked': 2, 'len': 642 },
    { 'url': 'http://localhost:8090/wavsep/passive/info/info-server-stack-trace.jsp', 'dir': '_m0/9', 'linked': 2, 'len': 2921 } ]
  }
];

var issue_samples = [
  { 'severity': 3, 'type': 40601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'implicitly cacheable \x27Set-Cookie\x27 response', 'sid': '0', 'dir': '_i0/0' },
    { 'url': 'http://localhost:8090/wavsep/passive/info/info-cookie-no-httponly.jsp', 'extra': 'implicitly cacheable \x27Set-Cookie\x27 response', 'sid': '0', 'dir': '_i0/1' } ]
  },
  { 'severity': 3, 'type': 40402, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/passive/info/info-app-stack-trace.jsp', 'extra': 'Java runtime stacktrace', 'sid': '22007', 'dir': '_i1/0' },
    { 'url': 'http://localhost:8090/wavsep/passive/info/info-server-stack-trace.jsp', 'extra': 'Java server stacktrace', 'sid': '22006', 'dir': '_i1/1' },
    { 'url': 'http://localhost:8090/wavsep/passive/info/info-server-stack-trace.jsp', 'extra': 'Java server exception', 'sid': '22020', 'dir': '_i1/2' },
    { 'url': 'http://localhost:8090/wavsep/passive/info/info-server-stack-trace.jsp', 'extra': 'Java server exception', 'sid': '22020', 'dir': '_i1/3' } ]
  },
  { 'severity': 1, 'type': 20205, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/passive/info/info-server-stack-trace.jsp', 'extra': '', 'sid': '0', 'dir': '_i2/0' } ]
  },
  { 'severity': 0, 'type': 10601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/passive/session/session-password-autocomplete.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/0' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/passive/info//', 'extra': '', 'sid': '0', 'dir': '_i4/0' },
    { 'url': 'http://localhost:8090/wavsep/passive/info/text%2Fhtml/', 'extra': '', 'sid': '0', 'dir': '_i4/1' } ]
  },
  { 'severity': 0, 'type': 10403, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/passive/info/info-server-stack-trace.jsp', 'extra': '', 'sid': '0', 'dir': '_i5/0' },
    { 'url': 'http://localhost:8090/wavsep/passive/info/info-server-stack-trace.jsp', 'extra': '', 'sid': '0', 'dir': '_i5/1' } ]
  },
  { 'severity': 0, 'type': 10401, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/passive/info/text%2Fhtml/', 'extra': '', 'sid': '0', 'dir': '_i6/0' },
    { 'url': 'http://localhost:8090/wavsep/passive/info/info-server-stack-trace.jsp', 'extra': '', 'sid': '0', 'dir': '_i6/1' },
    { 'url': 'http://localhost:8090/wavsep/passive/info/info-server-stack-trace.jsp', 'extra': '', 'sid': '0', 'dir': '_i6/2' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://localhost:8090/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i7/0' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://localhost:8090/', 'extra': 'Apache-Coyote/1.1', 'sid': '0', 'dir': '_i8/0' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'JSESSIONID', 'sid': '0', 'dir': '_i9/0' },
    { 'url': 'http://localhost:8090/wavsep/passive/info/info-cookie-no-httponly.jsp', 'extra': 'info-cookie-no-http-only', 'sid': '0', 'dir': '_i9/1' } ]
  }
];

