var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://localhost:8090/', 'dir': '_m0/0', 'linked': 2, 'len': 11230 },
    { 'url': 'http://localhost:8090/wavsep/', 'dir': '_m0/1', 'linked': 5, 'len': 1504 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Error-Experimental/', 'dir': '_m0/2', 'linked': 5, 'len': 1547 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Error-Experimental/Case01-InjectionInInsertValues-String-BinaryDeliberateRuntimeError-With200Errors.jsp', 'dir': '_m0/3', 'linked': 5, 'len': 873 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Error-Experimental/Case01-InjectionInInsertValues-String-BinaryDeliberateRuntimeError-With200Errors.jsp?msg=readme&target=a@a.com', 'dir': '_m0/4', 'linked': 5, 'len': 596 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Error-Experimental/Case01-InjectionInInsertValues-String-BinaryDeliberateRuntimeError-With200Errors.jsp?msg=SInjection-Detection-Evaluation-GET-200Error-Experimental&target=a@a.com', 'dir': '_m0/5', 'linked': 0, 'len': 693 } ]
  }
];

var issue_samples = [
  { 'severity': 4, 'type': 50103, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Error-Experimental/Case01-InjectionInInsertValues-String-BinaryDeliberateRuntimeError-With200Errors.jsp?msg=readme\x27\x22&target=a@a.com', 'extra': 'response to \x27\x27\x27\x27\x22\x22\x22\x22 different than to \x27\x22\x27\x22\x27\x22\x27\x22', 'sid': '0', 'dir': '_i0/0' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Error-Experimental/Case01-InjectionInInsertValues-String-BinaryDeliberateRuntimeError-With200Errors.jsp?msg=readme&target=a@a.com\x27\x22', 'extra': 'response to \x27\x27\x27\x27\x22\x22\x22\x22 different than to \x27\x22\x27\x22\x27\x22\x27\x22', 'sid': '0', 'dir': '_i0/1' } ]
  },
  { 'severity': 3, 'type': 40601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'implicitly cacheable \x27Set-Cookie\x27 response', 'sid': '0', 'dir': '_i1/0' } ]
  },
  { 'severity': 3, 'type': 40402, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Error-Experimental/Case01-InjectionInInsertValues-String-BinaryDeliberateRuntimeError-With200Errors.jsp?msg=\x27skip\x27\x27\x27\x22fish\x22\x22\x22&target=a@a.com', 'extra': 'SQL syntax error', 'sid': '21011', 'dir': '_i2/0' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Error-Experimental/Case01-InjectionInInsertValues-String-BinaryDeliberateRuntimeError-With200Errors.jsp?msg=readme&target=\x27skip\x27\x27\x27\x22fish\x22\x22\x22', 'extra': 'SQL syntax error', 'sid': '21011', 'dir': '_i2/1' } ]
  },
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Error-Experimental/Case01-InjectionInInsertValues-String-BinaryDeliberateRuntimeError-With200Errors.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/0' } ]
  },
  { 'severity': 0, 'type': 10901, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Error-Experimental/', 'extra': '', 'sid': '0', 'dir': '_i4/0' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Error-Experimental/Case01-InjectionInInsertValues-String-BinaryDeliberateRuntimeError-With200Errors.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/1' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Error-Experimental/Case01-InjectionInInsertValues-String-BinaryDeliberateRuntimeError-With200Errors.jsp?msg=SInjection-Detection-Evaluation-GET-200Error-Experimental&target=a@a.com', 'extra': '', 'sid': '0', 'dir': '_i5/0' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://localhost:8090/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i6/0' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Error-Experimental/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i6/1' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://localhost:8090/', 'extra': 'Apache-Coyote/1.1', 'sid': '0', 'dir': '_i7/0' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'JSESSIONID', 'sid': '0', 'dir': '_i8/0' } ]
  }
];

