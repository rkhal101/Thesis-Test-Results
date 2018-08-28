var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://localhost:8090/', 'dir': '_m0/0', 'linked': 2, 'len': 11230 },
    { 'url': 'http://localhost:8090/wavsep/', 'dir': '_m0/1', 'linked': 5, 'len': 1504 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/', 'dir': '_m0/2', 'linked': 5, 'len': 9707 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case01-FalsePositiveInjectionInLogin-PsAndIv-500ErrorOnIvFailure.jsp', 'dir': '_m0/3', 'linked': 5, 'len': 705 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case01-FalsePositiveInjectionInLogin-PsAndIv-500ErrorOnIvFailure.jsp?username=textvalue&password=textvalue2', 'dir': '_m0/4', 'linked': 5, 'len': 397 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case01-FalsePositiveInjectionInLogin-PsAndIv-500ErrorOnIvFailure.jsp?username=textvalue&password=SInjection-FalsePositives-GET', 'dir': '_m0/5', 'linked': 0, 'len': 1146 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case06-FalsePositiveInjectionInLogin-HoneyPotNoSQL-Fake500SyntaxErrorOnIvFailure.jsp?username=textvalue&password=SInjection-FalsePositives-GET', 'dir': '_m0/6', 'linked': 0, 'len': 1314 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case07-FalsePositiveInjectionInLogin-PsAndIv-500ErrorOnUnrelatedSyntaxError.jsp?username=textvalue&password=textvalue2', 'dir': '_m0/7', 'linked': 5, 'len': 1538 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case08-FalsePositiveInjectionInLogin-PsAndIv-200ErrorOnUnrelatedSyntaxError.jsp?username=textvalue&password=textvalue2', 'dir': '_m0/8', 'linked': 5, 'len': 659 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case09-FalsePositiveInjectionInUpdate-PsAndIv-Different200ValidOnIvFailure.jsp', 'dir': '_m0/9', 'linked': 5, 'len': 741 } ]
  }
];

var issue_samples = [
  { 'severity': 3, 'type': 40601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'implicitly cacheable \x27Set-Cookie\x27 response', 'sid': '0', 'dir': '_i0/0' } ]
  },
  { 'severity': 3, 'type': 40402, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case02-FalsePositiveInjectionInLogin-PsAndIv-500SyntaxErrorOnIvFailure.jsp?username=textvalue&password=.../textvalue2', 'extra': 'Java SQL exception', 'sid': '21003', 'dir': '_i1/0' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case02-FalsePositiveInjectionInLogin-PsAndIv-500SyntaxErrorOnIvFailure.jsp?username=textvalue&password=SInjection-FalsePositives-GET', 'extra': 'Java SQL exception', 'sid': '21003', 'dir': '_i1/1' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case02-FalsePositiveInjectionInLogin-PsAndIv-500SyntaxErrorOnIvFailure.jsp?username=.../textvalue&password=textvalue2', 'extra': 'Java SQL exception', 'sid': '21003', 'dir': '_i1/2' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case04-FalsePositiveInjectionInLogin-PsAndIv-200SyntaxErrorOnIvFailure.jsp?username=textvalue&password=.../textvalue2', 'extra': 'Java SQL exception', 'sid': '21003', 'dir': '_i1/3' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case04-FalsePositiveInjectionInLogin-PsAndIv-200SyntaxErrorOnIvFailure.jsp?username=.../textvalue&password=textvalue2', 'extra': 'Java SQL exception', 'sid': '21003', 'dir': '_i1/4' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case06-FalsePositiveInjectionInLogin-HoneyPotNoSQL-Fake500SyntaxErrorOnIvFailure.jsp?username=textvalue&password=.../textvalue2', 'extra': 'Java SQL exception', 'sid': '21003', 'dir': '_i1/5' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case06-FalsePositiveInjectionInLogin-HoneyPotNoSQL-Fake500SyntaxErrorOnIvFailure.jsp?username=textvalue&password=SInjection-FalsePositives-GET', 'extra': 'Java SQL exception', 'sid': '21003', 'dir': '_i1/6' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case06-FalsePositiveInjectionInLogin-HoneyPotNoSQL-Fake500SyntaxErrorOnIvFailure.jsp?username=.../textvalue&password=textvalue2', 'extra': 'Java SQL exception', 'sid': '21003', 'dir': '_i1/7' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case07-FalsePositiveInjectionInLogin-PsAndIv-500ErrorOnUnrelatedSyntaxError.jsp?username=textvalue&password=textvalue2', 'extra': 'SQL syntax error', 'sid': '21011', 'dir': '_i1/8' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case07-FalsePositiveInjectionInLogin-PsAndIv-500ErrorOnUnrelatedSyntaxError.jsp?username=textvalue&password=textvalue2', 'extra': 'SQL syntax error', 'sid': '21011', 'dir': '_i1/9' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case08-FalsePositiveInjectionInLogin-PsAndIv-200ErrorOnUnrelatedSyntaxError.jsp?username=textvalue&password=textvalue2', 'extra': 'SQL syntax error', 'sid': '21011', 'dir': '_i1/10' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case08-FalsePositiveInjectionInLogin-PsAndIv-200ErrorOnUnrelatedSyntaxError.jsp?username=textvalue&password=textvalue2', 'extra': 'SQL syntax error', 'sid': '21011', 'dir': '_i1/11' } ]
  },
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case09-FalsePositiveInjectionInUpdate-PsAndIv-Different200ValidOnIvFailure.jsp', 'extra': '', 'sid': '0', 'dir': '_i2/0' } ]
  },
  { 'severity': 0, 'type': 10901, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/text%2Fhtml%3Bcharset%3DISO-8859-1/', 'extra': '', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case01-FalsePositiveInjectionInLogin-PsAndIv-500ErrorOnIvFailure.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/1' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case02-FalsePositiveInjectionInLogin-PsAndIv-500SyntaxErrorOnIvFailure.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/2' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case03-FalsePositiveInjectionInLogin-PsAndIv-200ErrorOnIvFailure.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/3' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case04-FalsePositiveInjectionInLogin-PsAndIv-200SyntaxErrorOnIvFailure.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/4' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case07-FalsePositiveInjectionInLogin-PsAndIv-500ErrorOnUnrelatedSyntaxError.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/5' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case09-FalsePositiveInjectionInUpdate-PsAndIv-Different200ValidOnIvFailure.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/6' } ]
  },
  { 'severity': 0, 'type': 10602, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case01-FalsePositiveInjectionInLogin-PsAndIv-500ErrorOnIvFailure.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/0' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case02-FalsePositiveInjectionInLogin-PsAndIv-500SyntaxErrorOnIvFailure.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/1' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case03-FalsePositiveInjectionInLogin-PsAndIv-200ErrorOnIvFailure.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/2' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case04-FalsePositiveInjectionInLogin-PsAndIv-200SyntaxErrorOnIvFailure.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/3' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case07-FalsePositiveInjectionInLogin-PsAndIv-500ErrorOnUnrelatedSyntaxError.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/4' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/text%2Fhtml%3Bcharset%3DISO-8859-1/', 'extra': '', 'sid': '0', 'dir': '_i5/0' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case01-FalsePositiveInjectionInLogin-PsAndIv-500ErrorOnIvFailure.jsp?username=textvalue&password=SInjection-FalsePositives-GET', 'extra': '', 'sid': '0', 'dir': '_i5/1' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case02-FalsePositiveInjectionInLogin-PsAndIv-500SyntaxErrorOnIvFailure.jsp?username=textvalue&password=SInjection-FalsePositives-GET', 'extra': '', 'sid': '0', 'dir': '_i5/2' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case06-FalsePositiveInjectionInLogin-HoneyPotNoSQL-Fake500SyntaxErrorOnIvFailure.jsp?username=textvalue&password=SInjection-FalsePositives-GET', 'extra': '', 'sid': '0', 'dir': '_i5/3' } ]
  },
  { 'severity': 0, 'type': 10403, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case01-FalsePositiveInjectionInLogin-PsAndIv-500ErrorOnIvFailure.jsp?username=textvalue&[0][\x27password\x27]=textvalue2', 'extra': '', 'sid': '0', 'dir': '_i6/0' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case01-FalsePositiveInjectionInLogin-PsAndIv-500ErrorOnIvFailure.jsp?username=textvalue&password=SInjection-FalsePositives-GET', 'extra': '', 'sid': '0', 'dir': '_i6/1' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case01-FalsePositiveInjectionInLogin-PsAndIv-500ErrorOnIvFailure.jsp?[0][\x27username\x27]=textvalue&password=textvalue2', 'extra': '', 'sid': '0', 'dir': '_i6/2' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case02-FalsePositiveInjectionInLogin-PsAndIv-500SyntaxErrorOnIvFailure.jsp?username=textvalue&[0][\x27password\x27]=textvalue2', 'extra': '', 'sid': '0', 'dir': '_i6/3' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case02-FalsePositiveInjectionInLogin-PsAndIv-500SyntaxErrorOnIvFailure.jsp?username=textvalue&password=SInjection-FalsePositives-GET', 'extra': '', 'sid': '0', 'dir': '_i6/4' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case02-FalsePositiveInjectionInLogin-PsAndIv-500SyntaxErrorOnIvFailure.jsp?[0][\x27username\x27]=textvalue&password=textvalue2', 'extra': '', 'sid': '0', 'dir': '_i6/5' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case06-FalsePositiveInjectionInLogin-HoneyPotNoSQL-Fake500SyntaxErrorOnIvFailure.jsp?username=textvalue&[0][\x27password\x27]=textvalue2', 'extra': '', 'sid': '0', 'dir': '_i6/6' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case06-FalsePositiveInjectionInLogin-HoneyPotNoSQL-Fake500SyntaxErrorOnIvFailure.jsp?username=textvalue&password=SInjection-FalsePositives-GET', 'extra': '', 'sid': '0', 'dir': '_i6/7' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case06-FalsePositiveInjectionInLogin-HoneyPotNoSQL-Fake500SyntaxErrorOnIvFailure.jsp?[0][\x27username\x27]=textvalue&password=textvalue2', 'extra': '', 'sid': '0', 'dir': '_i6/8' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case07-FalsePositiveInjectionInLogin-PsAndIv-500ErrorOnUnrelatedSyntaxError.jsp?username=textvalue&password=textvalue2', 'extra': '', 'sid': '0', 'dir': '_i6/9' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case07-FalsePositiveInjectionInLogin-PsAndIv-500ErrorOnUnrelatedSyntaxError.jsp?username=textvalue&password=textvalue2', 'extra': '', 'sid': '0', 'dir': '_i6/10' } ]
  },
  { 'severity': 0, 'type': 10401, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/text%2Fhtml%3Bcharset%3DISO-8859-1/', 'extra': '', 'sid': '0', 'dir': '_i7/0' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case07-FalsePositiveInjectionInLogin-PsAndIv-500ErrorOnUnrelatedSyntaxError.jsp?username=textvalue&password=textvalue2', 'extra': '', 'sid': '0', 'dir': '_i7/1' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/Case07-FalsePositiveInjectionInLogin-PsAndIv-500ErrorOnUnrelatedSyntaxError.jsp?username=textvalue&password=textvalue2', 'extra': '', 'sid': '0', 'dir': '_i7/2' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://localhost:8090/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/0' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-FalsePositives-GET/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/1' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://localhost:8090/', 'extra': 'Apache-Coyote/1.1', 'sid': '0', 'dir': '_i9/0' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'JSESSIONID', 'sid': '0', 'dir': '_i10/0' } ]
  }
];

