var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://localhost:8090/', 'dir': '_m0/0', 'linked': 2, 'len': 11230 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Identical/Case04-InjectionInUpdate-Numeric-TimeDelayExploit-200Identical.jsp', 'dir': '_m0/1', 'linked': 2, 'len': 700 },
    { 'url': 'http://localhost:8090/wavsep/', 'dir': '_m0/2', 'linked': 5, 'len': 1504 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Identical/', 'dir': '_m0/3', 'linked': 5, 'len': 11090 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Identical/Case01-InjectionInView-Numeric-Blind-200ValidResponseWithDefaultOnException.jsp', 'dir': '_m0/4', 'linked': 5, 'len': 1105 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Identical/Case01-InjectionInView-Numeric-Blind-200ValidResponseWithDefaultOnException.jsp?transactionId=132', 'dir': '_m0/5', 'linked': 5, 'len': 642 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Identical/Case01-InjectionInView-Numeric-Blind-200ValidResponseWithDefaultOnException.jsp?transactionId=%2032', 'dir': '_m0/6', 'linked': 0, 'len': 548 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Identical/Case01-InjectionInView-Numeric-Blind-200ValidResponseWithDefaultOnException.jsp?transactionId=transactionId', 'dir': '_m0/7', 'linked': 0, 'len': 1290 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Identical/Case02-InjectionInView-String-Blind-200ValidResponseWithDefaultOnException.jsp', 'dir': '_m0/8', 'linked': 5, 'len': 952 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Identical/Case03-InjectionInView-Date-Blind-200ValidResponseWithDefaultOnException.jsp', 'dir': '_m0/9', 'linked': 5, 'len': 1037 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Identical/Case04-InjectionInUpdate-Numeric-TimeDelayExploit-200Identical.jsp?transactionId=895', 'dir': '_m0/10', 'linked': 5, 'len': 340 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Identical/Case05-InjectionInUpdate-String-TimeDelayExploit-200Identical.jsp', 'dir': '_m0/11', 'linked': 5, 'len': 660 } ]
  }
];

var issue_samples = [
  { 'severity': 4, 'type': 50103, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Identical/Case01-InjectionInView-Numeric-Blind-200ValidResponseWithDefaultOnException.jsp?transactionId=132-0', 'extra': 'response suggests arithmetic evaluation on server side (type 1)', 'sid': '0', 'dir': '_i0/0' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Identical/Case02-InjectionInView-String-Blind-200ValidResponseWithDefaultOnException.jsp?username=user1\x27\x22', 'extra': 'response to \x27\x27\x27\x27\x22\x22\x22\x22 different than to \x27\x22\x27\x22\x27\x22\x27\x22', 'sid': '0', 'dir': '_i0/1' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Identical/Case03-InjectionInView-Date-Blind-200ValidResponseWithDefaultOnException.jsp?transactionDate=2010-01-01-0', 'extra': 'response suggests arithmetic evaluation on server side (type 1)', 'sid': '0', 'dir': '_i0/2' } ]
  },
  { 'severity': 3, 'type': 40601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'implicitly cacheable \x27Set-Cookie\x27 response', 'sid': '0', 'dir': '_i1/0' } ]
  },
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Identical/Case01-InjectionInView-Numeric-Blind-200ValidResponseWithDefaultOnException.jsp', 'extra': '', 'sid': '0', 'dir': '_i2/0' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Identical/Case02-InjectionInView-String-Blind-200ValidResponseWithDefaultOnException.jsp', 'extra': '', 'sid': '0', 'dir': '_i2/1' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Identical/Case03-InjectionInView-Date-Blind-200ValidResponseWithDefaultOnException.jsp', 'extra': '', 'sid': '0', 'dir': '_i2/2' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Identical/Case04-InjectionInUpdate-Numeric-TimeDelayExploit-200Identical.jsp', 'extra': '', 'sid': '0', 'dir': '_i2/3' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Identical/Case05-InjectionInUpdate-String-TimeDelayExploit-200Identical.jsp', 'extra': '', 'sid': '0', 'dir': '_i2/4' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Identical/Case06-InjectionInUpdate-Date-TimeDelayExploit-200Identical.jsp', 'extra': '', 'sid': '0', 'dir': '_i2/5' } ]
  },
  { 'severity': 0, 'type': 10901, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Identical/', 'extra': '', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Identical/Case01-InjectionInView-Numeric-Blind-200ValidResponseWithDefaultOnException.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/1' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Identical/Case02-InjectionInView-String-Blind-200ValidResponseWithDefaultOnException.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/2' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Identical/Case03-InjectionInView-Date-Blind-200ValidResponseWithDefaultOnException.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/3' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Identical/Case04-InjectionInUpdate-Numeric-TimeDelayExploit-200Identical.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/4' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Identical/Case05-InjectionInUpdate-String-TimeDelayExploit-200Identical.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/5' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Identical/Case06-InjectionInUpdate-Date-TimeDelayExploit-200Identical.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/6' } ]
  },
  { 'severity': 0, 'type': 10505, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Identical/Case04-InjectionInUpdate-Numeric-TimeDelayExploit-200Identical.jsp', 'extra': 'transactionId', 'sid': '0', 'dir': '_i4/0' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Identical/Case01-InjectionInView-Numeric-Blind-200ValidResponseWithDefaultOnException.jsp?transactionId=%2032', 'extra': '', 'sid': '0', 'dir': '_i5/0' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Identical/Case01-InjectionInView-Numeric-Blind-200ValidResponseWithDefaultOnException.jsp?transactionId=transactionId', 'extra': '', 'sid': '0', 'dir': '_i5/1' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://localhost:8090/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i6/0' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Identical/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i6/1' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://localhost:8090/', 'extra': 'Apache-Coyote/1.1', 'sid': '0', 'dir': '_i7/0' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'JSESSIONID', 'sid': '0', 'dir': '_i8/0' } ]
  }
];

