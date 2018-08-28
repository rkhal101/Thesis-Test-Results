var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://localhost:8090/', 'dir': '_m0/0', 'linked': 2, 'len': 11230 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case16-InjectionInView-NumericWithoutQuotes-PermissionBypass-WithDifferent200Responses.jsp', 'dir': '_m0/1', 'linked': 2, 'len': 751 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case02-InjectionInSearch-String-UnionExploit-WithDifferent200Responses.jsp', 'dir': '_m0/2', 'linked': 2, 'len': 603 },
    { 'url': 'http://localhost:8090/wavsep/', 'dir': '_m0/3', 'linked': 5, 'len': 1504 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/', 'dir': '_m0/4', 'linked': 5, 'len': 20634 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case01-InjectionInLogin-String-LoginBypass-WithDifferent200Responses.jsp', 'dir': '_m0/5', 'linked': 5, 'len': 665 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case01-InjectionInLogin-String-LoginBypass-WithDifferent200Responses.jsp?username=textvalue&password=textvalue2', 'dir': '_m0/6', 'linked': 5, 'len': 353 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case02-InjectionInSearch-String-UnionExploit-WithDifferent200Responses.jsp?msg=textvalue', 'dir': '_m0/7', 'linked': 5, 'len': 472 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case02-InjectionInSearch-String-UnionExploit-WithDifferent200Responses.jsp?msg=1', 'dir': '_m0/8', 'linked': 0, 'len': 546 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case02-InjectionInSearch-String-UnionExploit-WithDifferent200Responses.jsp?msg=Hello', 'dir': '_m0/9', 'linked': 0, 'len': 653 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case05-InjectionInSearchOrderBy-String-BinaryDeliberateRuntimeError-WithDifferent200Responses.jsp?orderby=msgid', 'dir': '_m0/10', 'linked': 5, 'len': 752 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case06-InjectionInView-Numeric-PermissionBypass-WithDifferent200Responses.jsp?transactionId=132', 'dir': '_m0/11', 'linked': 5, 'len': 632 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case06-InjectionInView-Numeric-PermissionBypass-WithDifferent200Responses.jsp?transactionId=%2032', 'dir': '_m0/12', 'linked': 0, 'len': 538 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case08-InjectionInCalc-Numeric-BooleanExploit-WithDifferent200Responses.jsp', 'dir': '_m0/13', 'linked': 5, 'len': 670 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case15-InjectionInSearch-DateWithoutQuotes-UnionExploit-WithDifferent200Responses.jsp?transactionDate=transactionDate', 'dir': '_m0/14', 'linked': 0, 'len': 1284 },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case18-InjectionInCalc-NumericWithoutQuotes-BooleanExploit-WithDifferent200Responses.jsp?minBalanace=10000', 'dir': '_m0/15', 'linked': 5, 'len': 408 } ]
  }
];

var issue_samples = [
  { 'severity': 4, 'type': 50103, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case02-InjectionInSearch-String-UnionExploit-WithDifferent200Responses.jsp?msg=textvalue\x27\x22', 'extra': 'response to \x27\x27\x27\x27\x22\x22\x22\x22 different than to \x27\x22\x27\x22\x27\x22\x27\x22', 'sid': '0', 'dir': '_i0/0' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case05-InjectionInSearchOrderBy-String-BinaryDeliberateRuntimeError-WithDifferent200Responses.jsp?orderby=9%201%20-', 'extra': 'response suggests arithmetic evaluation on server side (type 2)', 'sid': '0', 'dir': '_i0/1' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case06-InjectionInView-Numeric-PermissionBypass-WithDifferent200Responses.jsp?transactionId=132-0', 'extra': 'response suggests arithmetic evaluation on server side (type 1)', 'sid': '0', 'dir': '_i0/2' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case06-InjectionInView-Numeric-PermissionBypass-WithDifferent200Responses.jsp?transactionId=132%200%200%20-%20-', 'extra': 'response suggests arithmetic evaluation on server side (type 2)', 'sid': '0', 'dir': '_i0/3' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case07-InjectionInSearch-Numeric-UnionExploit-WithDifferent200Responses.jsp?msgId=1-0', 'extra': 'response suggests arithmetic evaluation on server side (type 1)', 'sid': '0', 'dir': '_i0/4' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case07-InjectionInSearch-Numeric-UnionExploit-WithDifferent200Responses.jsp?msgId=1%200%200%20-%20-', 'extra': 'response suggests arithmetic evaluation on server side (type 2)', 'sid': '0', 'dir': '_i0/5' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case10-InjectionInSearchOrderBy-Numeric-BinaryDeliberateRuntimeError-WithDifferent200Responses.jsp?orderby=1%200%200%20-%20-', 'extra': 'response suggests arithmetic evaluation on server side (type 2)', 'sid': '0', 'dir': '_i0/6' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case11-InjectionInView-Date-PermissionBypass-WithDifferent200Responses.jsp?transactionDate=2010-01-01-0', 'extra': 'response suggests arithmetic evaluation on server side (type 1)', 'sid': '0', 'dir': '_i0/7' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case11-InjectionInView-Date-PermissionBypass-WithDifferent200Responses.jsp?transactionDate=2010-01-01\x27\x22', 'extra': 'response to \x27\x27\x27\x27\x22\x22\x22\x22 different than to \x27\x22\x27\x22\x27\x22\x27\x22', 'sid': '0', 'dir': '_i0/8' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case12-InjectionInSearch-Date-UnionExploit-WithDifferent200Responses.jsp?transactionDate=2010-01-01-0', 'extra': 'response suggests arithmetic evaluation on server side (type 1)', 'sid': '0', 'dir': '_i0/9' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case12-InjectionInSearch-Date-UnionExploit-WithDifferent200Responses.jsp?transactionDate=2010-01-01\x27\x22', 'extra': 'response to \x27\x27\x27\x27\x22\x22\x22\x22 different than to \x27\x22\x27\x22\x27\x22\x27\x22', 'sid': '0', 'dir': '_i0/10' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case15-InjectionInSearch-DateWithoutQuotes-UnionExploit-WithDifferent200Responses.jsp?transactionDate=2010-02-02%200%200%20-%20-', 'extra': 'response suggests arithmetic evaluation on server side (type 2)', 'sid': '0', 'dir': '_i0/11' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case16-InjectionInView-NumericWithoutQuotes-PermissionBypass-WithDifferent200Responses.jsp?transactionId=132-0', 'extra': 'response suggests arithmetic evaluation on server side (type 1)', 'sid': '0', 'dir': '_i0/12' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case16-InjectionInView-NumericWithoutQuotes-PermissionBypass-WithDifferent200Responses.jsp?transactionId=132%200%200%20-%20-', 'extra': 'response suggests arithmetic evaluation on server side (type 2)', 'sid': '0', 'dir': '_i0/13' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case17-InjectionInSearch-NumericWithoutQuotes-UnionExploit-WithDifferent200Responses.jsp?msgId=1-0', 'extra': 'response suggests arithmetic evaluation on server side (type 1)', 'sid': '0', 'dir': '_i0/14' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case17-InjectionInSearch-NumericWithoutQuotes-UnionExploit-WithDifferent200Responses.jsp?msgId=1%200%200%20-%20-', 'extra': 'response suggests arithmetic evaluation on server side (type 2)', 'sid': '0', 'dir': '_i0/15' } ]
  },
  { 'severity': 3, 'type': 40601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'implicitly cacheable \x27Set-Cookie\x27 response', 'sid': '0', 'dir': '_i1/0' } ]
  },
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case02-InjectionInSearch-String-UnionExploit-WithDifferent200Responses.jsp', 'extra': '', 'sid': '0', 'dir': '_i2/0' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case03-InjectionInCalc-String-BooleanExploit-WithDifferent200Responses.jsp', 'extra': '', 'sid': '0', 'dir': '_i2/1' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case04-InjectionInUpdate-String-CommandInjection-WithDifferent200Responses.jsp', 'extra': '', 'sid': '0', 'dir': '_i2/2' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case05-InjectionInSearchOrderBy-String-BinaryDeliberateRuntimeError-WithDifferent200Responses.jsp', 'extra': '', 'sid': '0', 'dir': '_i2/3' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case06-InjectionInView-Numeric-PermissionBypass-WithDifferent200Responses.jsp', 'extra': '', 'sid': '0', 'dir': '_i2/4' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case07-InjectionInSearch-Numeric-UnionExploit-WithDifferent200Responses.jsp', 'extra': '', 'sid': '0', 'dir': '_i2/5' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case08-InjectionInCalc-Numeric-BooleanExploit-WithDifferent200Responses.jsp', 'extra': '', 'sid': '0', 'dir': '_i2/6' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case09-InjectionInUpdate-Numeric-CommandInjection-WithDifferent200Responses.jsp', 'extra': '', 'sid': '0', 'dir': '_i2/7' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case11-InjectionInView-Date-PermissionBypass-WithDifferent200Responses.jsp', 'extra': '', 'sid': '0', 'dir': '_i2/8' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case13-InjectionInCalc-Date-BooleanExploit-WithDifferent200Responses.jsp', 'extra': '', 'sid': '0', 'dir': '_i2/9' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case15-InjectionInSearch-DateWithoutQuotes-UnionExploit-WithDifferent200Responses.jsp', 'extra': '', 'sid': '0', 'dir': '_i2/10' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case16-InjectionInView-NumericWithoutQuotes-PermissionBypass-WithDifferent200Responses.jsp', 'extra': '', 'sid': '0', 'dir': '_i2/11' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case17-InjectionInSearch-NumericWithoutQuotes-UnionExploit-WithDifferent200Responses.jsp', 'extra': '', 'sid': '0', 'dir': '_i2/12' } ]
  },
  { 'severity': 0, 'type': 10901, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/', 'extra': '', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case01-InjectionInLogin-String-LoginBypass-WithDifferent200Responses.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/1' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case02-InjectionInSearch-String-UnionExploit-WithDifferent200Responses.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/2' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case03-InjectionInCalc-String-BooleanExploit-WithDifferent200Responses.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/3' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case04-InjectionInUpdate-String-CommandInjection-WithDifferent200Responses.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/4' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case05-InjectionInSearchOrderBy-String-BinaryDeliberateRuntimeError-WithDifferent200Responses.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/5' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case06-InjectionInView-Numeric-PermissionBypass-WithDifferent200Responses.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/6' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case07-InjectionInSearch-Numeric-UnionExploit-WithDifferent200Responses.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/7' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case08-InjectionInCalc-Numeric-BooleanExploit-WithDifferent200Responses.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/8' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case09-InjectionInUpdate-Numeric-CommandInjection-WithDifferent200Responses.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/9' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case11-InjectionInView-Date-PermissionBypass-WithDifferent200Responses.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/10' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case13-InjectionInCalc-Date-BooleanExploit-WithDifferent200Responses.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/11' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case15-InjectionInSearch-DateWithoutQuotes-UnionExploit-WithDifferent200Responses.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/12' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case16-InjectionInView-NumericWithoutQuotes-PermissionBypass-WithDifferent200Responses.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/13' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case17-InjectionInSearch-NumericWithoutQuotes-UnionExploit-WithDifferent200Responses.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/14' } ]
  },
  { 'severity': 0, 'type': 10602, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case01-InjectionInLogin-String-LoginBypass-WithDifferent200Responses.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/0' } ]
  },
  { 'severity': 0, 'type': 10505, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case16-InjectionInView-NumericWithoutQuotes-PermissionBypass-WithDifferent200Responses.jsp', 'extra': 'transactionId', 'sid': '0', 'dir': '_i5/0' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case02-InjectionInSearch-String-UnionExploit-WithDifferent200Responses.jsp', 'extra': 'msg', 'sid': '0', 'dir': '_i5/1' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case02-InjectionInSearch-String-UnionExploit-WithDifferent200Responses.jsp?msg=1', 'extra': '', 'sid': '0', 'dir': '_i6/0' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case02-InjectionInSearch-String-UnionExploit-WithDifferent200Responses.jsp?msg=Hello', 'extra': '', 'sid': '0', 'dir': '_i6/1' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case06-InjectionInView-Numeric-PermissionBypass-WithDifferent200Responses.jsp?transactionId=%2032', 'extra': '', 'sid': '0', 'dir': '_i6/2' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case07-InjectionInSearch-Numeric-UnionExploit-WithDifferent200Responses.jsp?msgId=0', 'extra': '', 'sid': '0', 'dir': '_i6/3' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case07-InjectionInSearch-Numeric-UnionExploit-WithDifferent200Responses.jsp?msgId=msgid', 'extra': '', 'sid': '0', 'dir': '_i6/4' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/Case15-InjectionInSearch-DateWithoutQuotes-UnionExploit-WithDifferent200Responses.jsp?transactionDate=transactionDate', 'extra': '', 'sid': '0', 'dir': '_i6/5' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://localhost:8090/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i7/0' },
    { 'url': 'http://localhost:8090/wavsep/active/SQL-Injection/SInjection-Detection-Evaluation-GET-200Valid/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i7/1' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://localhost:8090/', 'extra': 'Apache-Coyote/1.1', 'sid': '0', 'dir': '_i8/0' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'JSESSIONID', 'sid': '0', 'dir': '_i9/0' } ]
  }
];

