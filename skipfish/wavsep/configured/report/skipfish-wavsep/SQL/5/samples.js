var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://localhost:8090/', 'dir': '_m0/0', 'linked': 2, 'len': 11230 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case16-InjectionInView-NumericWithoutQuotes-PermissionBypass-WithErrors.jsp', 'dir': '_m0/1', 'linked': 2, 'len': 730 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case04-InjectionInUpdate-String-CommandInjection-WithErrors.jsp', 'dir': '_m0/2', 'linked': 2, 'len': 590 },
    { 'url': 'http://localhost:8090/wavsep/', 'dir': '_m0/3', 'linked': 5, 'len': 1504 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/', 'dir': '_m0/4', 'linked': 5, 'len': 19625 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case01-InjectionInLogin-String-LoginBypass-WithErrors.jsp', 'dir': '_m0/5', 'linked': 5, 'len': 644 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case01-InjectionInLogin-String-LoginBypass-WithErrors.jsp', 'dir': '_m0/6', 'linked': 5, 'len': 347 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case02-InjectionInSearch-String-UnionExploit-WithErrors.jsp', 'dir': '_m0/7', 'linked': 5, 'len': 466 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case02-InjectionInSearch-String-UnionExploit-WithErrors.jsp', 'dir': '_m0/8', 'linked': 0, 'len': 647 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case02-InjectionInSearch-String-UnionExploit-WithErrors.jsp', 'dir': '_m0/9', 'linked': 0, 'len': 582 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case04-InjectionInUpdate-String-CommandInjection-WithErrors.jsp', 'dir': '_m0/10', 'linked': 0, 'len': 1270 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case05-InjectionInSearchOrderBy-String-BinaryDeliberateRuntimeError-WithErrors.jsp', 'dir': '_m0/11', 'linked': 5, 'len': 746 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case05-InjectionInSearchOrderBy-String-BinaryDeliberateRuntimeError-WithErrors.jsp', 'dir': '_m0/12', 'linked': 0, 'len': 1494 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case06-InjectionInView-Numeric-PermissionBypass-WithErrors.jsp', 'dir': '_m0/13', 'linked': 5, 'len': 532 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case06-InjectionInView-Numeric-PermissionBypass-WithErrors.jsp', 'dir': '_m0/14', 'linked': 0, 'len': 613 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case09-InjectionInUpdate-Numeric-CommandInjection-WithErrors.jsp', 'dir': '_m0/15', 'linked': 0, 'len': 1278 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case15-InjectionInSearch-DateWithoutQuotes-UnionExploit-WithErrors.jsp', 'dir': '_m0/16', 'linked': 0, 'len': 1178 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case18-InjectionInCalc-NumericWithoutQuotes-BooleanExploit-WithErrors.jsp', 'dir': '_m0/17', 'linked': 5, 'len': 402 } ]
  }
];

var issue_samples = [
  { 'severity': 4, 'type': 50103, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case01-InjectionInLogin-String-LoginBypass-WithErrors.jsp', 'extra': 'response to \x27\x27\x27\x27\x22\x22\x22\x22 different than to \x27\x22\x27\x22\x27\x22\x27\x22', 'sid': '0', 'dir': '_i0/0' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case01-InjectionInLogin-String-LoginBypass-WithErrors.jsp', 'extra': 'response to \x27\x27\x27\x27\x22\x22\x22\x22 different than to \x27\x22\x27\x22\x27\x22\x27\x22', 'sid': '0', 'dir': '_i0/1' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case02-InjectionInSearch-String-UnionExploit-WithErrors.jsp', 'extra': 'response to \x27\x27\x27\x27\x22\x22\x22\x22 different than to \x27\x22\x27\x22\x27\x22\x27\x22', 'sid': '0', 'dir': '_i0/2' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case03-InjectionInCalc-String-BooleanExploit-WithErrors.jsp', 'extra': 'response to \x27\x27\x27\x27\x22\x22\x22\x22 different than to \x27\x22\x27\x22\x27\x22\x27\x22', 'sid': '0', 'dir': '_i0/3' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case04-InjectionInUpdate-String-CommandInjection-WithErrors.jsp', 'extra': 'response to \x27\x27\x27\x27\x22\x22\x22\x22 different than to \x27\x22\x27\x22\x27\x22\x27\x22', 'sid': '0', 'dir': '_i0/4' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case05-InjectionInSearchOrderBy-String-BinaryDeliberateRuntimeError-WithErrors.jsp', 'extra': 'response suggests arithmetic evaluation on server side (type 2)', 'sid': '0', 'dir': '_i0/5' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case06-InjectionInView-Numeric-PermissionBypass-WithErrors.jsp', 'extra': 'response suggests arithmetic evaluation on server side (type 2)', 'sid': '0', 'dir': '_i0/6' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case07-InjectionInSearch-Numeric-UnionExploit-WithErrors.jsp', 'extra': 'response suggests arithmetic evaluation on server side (type 1)', 'sid': '0', 'dir': '_i0/7' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case07-InjectionInSearch-Numeric-UnionExploit-WithErrors.jsp', 'extra': 'response suggests arithmetic evaluation on server side (type 2)', 'sid': '0', 'dir': '_i0/8' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case08-InjectionInCalc-Numeric-BooleanExploit-WithErrors.jsp', 'extra': 'response suggests arithmetic evaluation on server side (type 2)', 'sid': '0', 'dir': '_i0/9' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case09-InjectionInUpdate-Numeric-CommandInjection-WithErrors.jsp', 'extra': 'response suggests arithmetic evaluation on server side (type 2)', 'sid': '0', 'dir': '_i0/10' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case10-InjectionInSearchOrderBy-Numeric-BinaryDeliberateRuntimeError-WithErrors.jsp', 'extra': 'response suggests arithmetic evaluation on server side (type 2)', 'sid': '0', 'dir': '_i0/11' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case11-InjectionInView-Date-PermissionBypass-WithErrors.jsp', 'extra': 'response suggests arithmetic evaluation on server side (type 1)', 'sid': '0', 'dir': '_i0/12' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case11-InjectionInView-Date-PermissionBypass-WithErrors.jsp', 'extra': 'response to \x27\x27\x27\x27\x22\x22\x22\x22 different than to \x27\x22\x27\x22\x27\x22\x27\x22', 'sid': '0', 'dir': '_i0/13' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case12-InjectionInSearch-Date-UnionExploit-WithErrors.jsp', 'extra': 'response suggests arithmetic evaluation on server side (type 1)', 'sid': '0', 'dir': '_i0/14' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case12-InjectionInSearch-Date-UnionExploit-WithErrors.jsp', 'extra': 'response to \x27\x27\x27\x27\x22\x22\x22\x22 different than to \x27\x22\x27\x22\x27\x22\x27\x22', 'sid': '0', 'dir': '_i0/15' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case13-InjectionInCalc-Date-BooleanExploit-WithErrors.jsp', 'extra': 'response to \x27\x27\x27\x27\x22\x22\x22\x22 different than to \x27\x22\x27\x22\x27\x22\x27\x22', 'sid': '0', 'dir': '_i0/16' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case14-InjectionInUpdate-Date-CommandInjection-WithErrors.jsp', 'extra': 'response to \x27\x27\x27\x27\x22\x22\x22\x22 different than to \x27\x22\x27\x22\x27\x22\x27\x22', 'sid': '0', 'dir': '_i0/17' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case15-InjectionInSearch-DateWithoutQuotes-UnionExploit-WithErrors.jsp', 'extra': 'response suggests arithmetic evaluation on server side (type 2)', 'sid': '0', 'dir': '_i0/18' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case16-InjectionInView-NumericWithoutQuotes-PermissionBypass-WithErrors.jsp', 'extra': 'response suggests arithmetic evaluation on server side (type 2)', 'sid': '0', 'dir': '_i0/19' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case17-InjectionInSearch-NumericWithoutQuotes-UnionExploit-WithErrors.jsp', 'extra': 'response suggests arithmetic evaluation on server side (type 1)', 'sid': '0', 'dir': '_i0/20' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case17-InjectionInSearch-NumericWithoutQuotes-UnionExploit-WithErrors.jsp', 'extra': 'response suggests arithmetic evaluation on server side (type 2)', 'sid': '0', 'dir': '_i0/21' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case18-InjectionInCalc-NumericWithoutQuotes-BooleanExploit-WithErrors.jsp', 'extra': 'response suggests arithmetic evaluation on server side (type 2)', 'sid': '0', 'dir': '_i0/22' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case19-InjectionInUpdate-NumericWithoutQuotes-CommandInjection-WithErrors.jsp', 'extra': 'response suggests arithmetic evaluation on server side (type 2)', 'sid': '0', 'dir': '_i0/23' } ]
  },
  { 'severity': 3, 'type': 40601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'implicitly cacheable \x27Set-Cookie\x27 response', 'sid': '0', 'dir': '_i1/0' } ]
  },
  { 'severity': 3, 'type': 40402, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case01-InjectionInLogin-String-LoginBypass-WithErrors.jsp', 'extra': 'SQL syntax error', 'sid': '21011', 'dir': '_i2/0' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case01-InjectionInLogin-String-LoginBypass-WithErrors.jsp', 'extra': 'SQL syntax error', 'sid': '21011', 'dir': '_i2/1' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case02-InjectionInSearch-String-UnionExploit-WithErrors.jsp', 'extra': 'SQL syntax error', 'sid': '21011', 'dir': '_i2/2' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case03-InjectionInCalc-String-BooleanExploit-WithErrors.jsp', 'extra': 'SQL syntax error', 'sid': '21011', 'dir': '_i2/3' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case04-InjectionInUpdate-String-CommandInjection-WithErrors.jsp', 'extra': 'SQL syntax error', 'sid': '21011', 'dir': '_i2/4' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case05-InjectionInSearchOrderBy-String-BinaryDeliberateRuntimeError-WithErrors.jsp', 'extra': 'SQL syntax error', 'sid': '21011', 'dir': '_i2/5' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case05-InjectionInSearchOrderBy-String-BinaryDeliberateRuntimeError-WithErrors.jsp', 'extra': 'SQL syntax error', 'sid': '21011', 'dir': '_i2/6' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case06-InjectionInView-Numeric-PermissionBypass-WithErrors.jsp', 'extra': 'SQL syntax error', 'sid': '21011', 'dir': '_i2/7' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case07-InjectionInSearch-Numeric-UnionExploit-WithErrors.jsp', 'extra': 'SQL syntax error', 'sid': '21011', 'dir': '_i2/8' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case08-InjectionInCalc-Numeric-BooleanExploit-WithErrors.jsp', 'extra': 'SQL syntax error', 'sid': '21011', 'dir': '_i2/9' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case09-InjectionInUpdate-Numeric-CommandInjection-WithErrors.jsp', 'extra': 'SQL syntax error', 'sid': '21011', 'dir': '_i2/10' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case10-InjectionInSearchOrderBy-Numeric-BinaryDeliberateRuntimeError-WithErrors.jsp', 'extra': 'SQL syntax error', 'sid': '21011', 'dir': '_i2/11' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case11-InjectionInView-Date-PermissionBypass-WithErrors.jsp', 'extra': 'SQL syntax error', 'sid': '21011', 'dir': '_i2/12' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case12-InjectionInSearch-Date-UnionExploit-WithErrors.jsp', 'extra': 'SQL syntax error', 'sid': '21011', 'dir': '_i2/13' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case13-InjectionInCalc-Date-BooleanExploit-WithErrors.jsp', 'extra': 'SQL syntax error', 'sid': '21011', 'dir': '_i2/14' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case14-InjectionInUpdate-Date-CommandInjection-WithErrors.jsp', 'extra': 'SQL syntax error', 'sid': '21011', 'dir': '_i2/15' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case15-InjectionInSearch-DateWithoutQuotes-UnionExploit-WithErrors.jsp', 'extra': 'SQL syntax error', 'sid': '21011', 'dir': '_i2/16' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case16-InjectionInView-NumericWithoutQuotes-PermissionBypass-WithErrors.jsp', 'extra': 'SQL syntax error', 'sid': '21011', 'dir': '_i2/17' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case17-InjectionInSearch-NumericWithoutQuotes-UnionExploit-WithErrors.jsp', 'extra': 'SQL syntax error', 'sid': '21011', 'dir': '_i2/18' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case18-InjectionInCalc-NumericWithoutQuotes-BooleanExploit-WithErrors.jsp', 'extra': 'SQL syntax error', 'sid': '21011', 'dir': '_i2/19' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case19-InjectionInUpdate-NumericWithoutQuotes-CommandInjection-WithErrors.jsp', 'extra': 'SQL syntax error', 'sid': '21011', 'dir': '_i2/20' } ]
  },
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case02-InjectionInSearch-String-UnionExploit-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case03-InjectionInCalc-String-BooleanExploit-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/1' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case04-InjectionInUpdate-String-CommandInjection-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/2' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case05-InjectionInSearchOrderBy-String-BinaryDeliberateRuntimeError-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/3' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case06-InjectionInView-Numeric-PermissionBypass-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/4' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case07-InjectionInSearch-Numeric-UnionExploit-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/5' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case08-InjectionInCalc-Numeric-BooleanExploit-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/6' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case09-InjectionInUpdate-Numeric-CommandInjection-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/7' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case10-InjectionInSearchOrderBy-Numeric-BinaryDeliberateRuntimeError-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/8' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case11-InjectionInView-Date-PermissionBypass-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/9' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case13-InjectionInCalc-Date-BooleanExploit-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/10' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case15-InjectionInSearch-DateWithoutQuotes-UnionExploit-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/11' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case16-InjectionInView-NumericWithoutQuotes-PermissionBypass-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/12' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case17-InjectionInSearch-NumericWithoutQuotes-UnionExploit-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/13' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case19-InjectionInUpdate-NumericWithoutQuotes-CommandInjection-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/14' } ]
  },
  { 'severity': 0, 'type': 10901, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/', 'extra': '', 'sid': '0', 'dir': '_i4/0' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/text%2Fhtml%3Bcharset%3DISO-8859-1/', 'extra': '', 'sid': '0', 'dir': '_i4/1' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case01-InjectionInLogin-String-LoginBypass-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/2' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case02-InjectionInSearch-String-UnionExploit-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/3' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case03-InjectionInCalc-String-BooleanExploit-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/4' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case04-InjectionInUpdate-String-CommandInjection-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/5' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case05-InjectionInSearchOrderBy-String-BinaryDeliberateRuntimeError-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/6' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case06-InjectionInView-Numeric-PermissionBypass-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/7' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case07-InjectionInSearch-Numeric-UnionExploit-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/8' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case08-InjectionInCalc-Numeric-BooleanExploit-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/9' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case09-InjectionInUpdate-Numeric-CommandInjection-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/10' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case10-InjectionInSearchOrderBy-Numeric-BinaryDeliberateRuntimeError-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/11' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case11-InjectionInView-Date-PermissionBypass-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/12' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case13-InjectionInCalc-Date-BooleanExploit-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/13' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case15-InjectionInSearch-DateWithoutQuotes-UnionExploit-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/14' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case16-InjectionInView-NumericWithoutQuotes-PermissionBypass-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/15' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case17-InjectionInSearch-NumericWithoutQuotes-UnionExploit-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/16' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case19-InjectionInUpdate-NumericWithoutQuotes-CommandInjection-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/17' } ]
  },
  { 'severity': 0, 'type': 10602, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case01-InjectionInLogin-String-LoginBypass-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i5/0' } ]
  },
  { 'severity': 0, 'type': 10505, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case16-InjectionInView-NumericWithoutQuotes-PermissionBypass-WithErrors.jsp', 'extra': 'transactionId', 'sid': '0', 'dir': '_i6/0' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case04-InjectionInUpdate-String-CommandInjection-WithErrors.jsp', 'extra': 'msg', 'sid': '0', 'dir': '_i6/1' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/text%2Fhtml%3Bcharset%3DISO-8859-1/', 'extra': '', 'sid': '0', 'dir': '_i7/0' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case02-InjectionInSearch-String-UnionExploit-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i7/1' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case02-InjectionInSearch-String-UnionExploit-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i7/2' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case04-InjectionInUpdate-String-CommandInjection-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i7/3' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case05-InjectionInSearchOrderBy-String-BinaryDeliberateRuntimeError-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i7/4' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case06-InjectionInView-Numeric-PermissionBypass-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i7/5' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case07-InjectionInSearch-Numeric-UnionExploit-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i7/6' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case07-InjectionInSearch-Numeric-UnionExploit-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i7/7' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case09-InjectionInUpdate-Numeric-CommandInjection-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i7/8' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case15-InjectionInSearch-DateWithoutQuotes-UnionExploit-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i7/9' } ]
  },
  { 'severity': 0, 'type': 10403, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case01-InjectionInLogin-String-LoginBypass-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i8/0' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case01-InjectionInLogin-String-LoginBypass-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i8/1' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case02-InjectionInSearch-String-UnionExploit-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i8/2' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case03-InjectionInCalc-String-BooleanExploit-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i8/3' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case04-InjectionInUpdate-String-CommandInjection-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i8/4' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case04-InjectionInUpdate-String-CommandInjection-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i8/5' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case05-InjectionInSearchOrderBy-String-BinaryDeliberateRuntimeError-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i8/6' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case05-InjectionInSearchOrderBy-String-BinaryDeliberateRuntimeError-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i8/7' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case06-InjectionInView-Numeric-PermissionBypass-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i8/8' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case07-InjectionInSearch-Numeric-UnionExploit-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i8/9' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case08-InjectionInCalc-Numeric-BooleanExploit-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i8/10' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case09-InjectionInUpdate-Numeric-CommandInjection-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i8/11' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case09-InjectionInUpdate-Numeric-CommandInjection-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i8/12' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case10-InjectionInSearchOrderBy-Numeric-BinaryDeliberateRuntimeError-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i8/13' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case11-InjectionInView-Date-PermissionBypass-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i8/14' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case12-InjectionInSearch-Date-UnionExploit-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i8/15' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case13-InjectionInCalc-Date-BooleanExploit-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i8/16' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case14-InjectionInUpdate-Date-CommandInjection-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i8/17' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case15-InjectionInSearch-DateWithoutQuotes-UnionExploit-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i8/18' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case16-InjectionInView-NumericWithoutQuotes-PermissionBypass-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i8/19' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case17-InjectionInSearch-NumericWithoutQuotes-UnionExploit-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i8/20' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case18-InjectionInCalc-NumericWithoutQuotes-BooleanExploit-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i8/21' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/Case19-InjectionInUpdate-NumericWithoutQuotes-CommandInjection-WithErrors.jsp', 'extra': '', 'sid': '0', 'dir': '_i8/22' } ]
  },
  { 'severity': 0, 'type': 10401, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/text%2Fhtml%3Bcharset%3DISO-8859-1/', 'extra': '', 'sid': '0', 'dir': '_i9/0' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://localhost:8090/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i10/0' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-POST-500Error/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i10/1' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://localhost:8090/', 'extra': 'Apache-Coyote/1.1', 'sid': '0', 'dir': '_i11/0' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'JSESSIONID', 'sid': '0', 'dir': '_i12/0' } ]
  }
];

