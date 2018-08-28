var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://localhost:8090/', 'dir': '_m0/0', 'linked': 2, 'len': 11230 },
    { 'url': 'http://localhost:8090/wavsep/', 'dir': '_m0/1', 'linked': 5, 'len': 1504 },
    { 'url': 'http://localhost:8090/wavsep/active/DOM-XSS/DXSS-Detection-Evaluation-GET-Experimental/', 'dir': '_m0/2', 'linked': 5, 'len': 2745 },
    { 'url': 'http://localhost:8090/wavsep/active/DOM-XSS/DXSS-Detection-Evaluation-GET-Experimental/Case01-InjectionDirectlyInToDomXssSinkEval.jsp', 'dir': '_m0/3', 'linked': 2, 'len': 542 },
    { 'url': 'http://localhost:8090/wavsep/active/DOM-XSS/DXSS-Detection-Evaluation-GET-Experimental/Case01-InjectionDirectlyInToDomXssSinkEval.jsp?userinput=textvalue', 'dir': '_m0/4', 'linked': 2, 'len': 334 },
    { 'url': 'http://localhost:8090/wavsep/active/DOM-XSS/DXSS-Detection-Evaluation-GET-Experimental/Case36-InjectionDirectlyInToDomXssSinkEval.jsp?userinput=skipfish', 'dir': '_m0/5', 'linked': 5, 'len': 1216 } ]
  }
];

var issue_samples = [
  { 'severity': 3, 'type': 40601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'implicitly cacheable \x27Set-Cookie\x27 response', 'sid': '0', 'dir': '_i0/0' } ]
  },
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/DOM-XSS/DXSS-Detection-Evaluation-GET-Experimental/Case36-InjectionDirectlyInToDomXssSinkEval.jsp?userinput=skipfish', 'extra': '', 'sid': '0', 'dir': '_i1/0' } ]
  },
  { 'severity': 0, 'type': 10901, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/DOM-XSS/DXSS-Detection-Evaluation-GET-Experimental/Case01-InjectionDirectlyInToDomXssSinkEval.jsp', 'extra': '', 'sid': '0', 'dir': '_i2/0' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://localhost:8090/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'http://localhost:8090/wavsep/active/DOM-XSS/DXSS-Detection-Evaluation-GET-Experimental/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i3/1' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://localhost:8090/', 'extra': 'Apache-Coyote/1.1', 'sid': '0', 'dir': '_i4/0' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'JSESSIONID', 'sid': '0', 'dir': '_i5/0' } ]
  }
];

