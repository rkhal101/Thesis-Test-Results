var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://localhost:8090/', 'dir': '_m0/0', 'linked': 2, 'len': 11230 },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-JavaScript-Detection-Evaluation-GET-200Valid/Case15-Redirect-RedirectMethod-FilenameContext-HttpInputRemoval-HttpURL-DefaultEmptyInput-AnyPathReq-Read.jsp', 'dir': '_m0/1', 'linked': 2, 'len': 2005 },
    { 'url': 'http://localhost:8090/wavsep/', 'dir': '_m0/2', 'linked': 5, 'len': 1504 },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-JavaScript-Detection-Evaluation-GET-200Valid/', 'dir': '_m0/3', 'linked': 5, 'len': 32029 },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-JavaScript-Detection-Evaluation-GET-200Valid/Case01-Redirect-RedirectMethod-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-AnyPathReq-Read.jsp?target=http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-JavaScript-Detection-Evaluation-GET-200Valid/content.ini', 'dir': '_m0/4', 'linked': 5, 'len': 1936 },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-JavaScript-Detection-Evaluation-GET-200Valid/MissingResource.html', 'dir': '_m0/5', 'linked': 2, 'len': 308 } ]
  },
  { 'mime': 'text/plain', 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-JavaScript-Detection-Evaluation-GET-200Valid/content.ini', 'dir': '_m1/0', 'linked': 1, 'len': 4340 } ]
  }
];

var issue_samples = [
  { 'severity': 3, 'type': 40601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'implicitly cacheable \x27Set-Cookie\x27 response', 'sid': '0', 'dir': '_i0/0' } ]
  },
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-JavaScript-Detection-Evaluation-GET-200Valid/Case01-Redirect-RedirectMethod-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-AnyPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i1/0' } ]
  },
  { 'severity': 0, 'type': 10901, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-JavaScript-Detection-Evaluation-GET-200Valid/', 'extra': '', 'sid': '0', 'dir': '_i2/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-JavaScript-Detection-Evaluation-GET-200Valid/Apache-Coyote%2F1.1/', 'extra': '', 'sid': '0', 'dir': '_i2/1' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-JavaScript-Detection-Evaluation-GET-200Valid/Case01-Redirect-RedirectMethod-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-AnyPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i2/2' } ]
  },
  { 'severity': 0, 'type': 10803, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-JavaScript-Detection-Evaluation-GET-200Valid/content.ini', 'extra': '', 'sid': '0', 'dir': '_i3/0' } ]
  },
  { 'severity': 0, 'type': 10801, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-JavaScript-Detection-Evaluation-GET-200Valid/content.ini', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/0' } ]
  },
  { 'severity': 0, 'type': 10505, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-JavaScript-Detection-Evaluation-GET-200Valid/Case15-Redirect-RedirectMethod-FilenameContext-HttpInputRemoval-HttpURL-DefaultEmptyInput-AnyPathReq-Read.jsp', 'extra': 'target', 'sid': '0', 'dir': '_i5/0' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-JavaScript-Detection-Evaluation-GET-200Valid//', 'extra': '', 'sid': '0', 'dir': '_i6/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-JavaScript-Detection-Evaluation-GET-200Valid/Apache-Coyote%2F1.1/', 'extra': '', 'sid': '0', 'dir': '_i6/1' } ]
  },
  { 'severity': 0, 'type': 10401, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-JavaScript-Detection-Evaluation-GET-200Valid/Apache-Coyote%2F1.1/', 'extra': '', 'sid': '0', 'dir': '_i7/0' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://localhost:8090/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-JavaScript-Detection-Evaluation-GET-200Valid/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/1' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://localhost:8090/', 'extra': 'Apache-Coyote/1.1', 'sid': '0', 'dir': '_i9/0' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'JSESSIONID', 'sid': '0', 'dir': '_i10/0' } ]
  }
];

