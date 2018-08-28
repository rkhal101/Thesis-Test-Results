var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://localhost:8090/', 'dir': '_m0/0', 'linked': 2, 'len': 11230 },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case07-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultEmptyInput-NoProtocolReq-Read.jsp', 'dir': '_m0/1', 'linked': 2, 'len': 1809 },
    { 'url': 'http://localhost:8090/wavsep/', 'dir': '_m0/2', 'linked': 5, 'len': 1504 },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/', 'dir': '_m0/3', 'linked': 5, 'len': 20506 },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case01-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-AnyPathReq-Read.jsp', 'dir': '_m0/4', 'linked': 5, 'len': 1020 } ]
  },
  { 'mime': 'text/plain', 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case01-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-AnyPathReq-Read.jsp', 'dir': '_m1/0', 'linked': 5, 'len': 1300 },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case01-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-AnyPathReq-Read.jsp', 'dir': '_m1/1', 'linked': 5, 'len': 174 },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case01-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-AnyPathReq-Read.jsp', 'dir': '_m1/2', 'linked': 0, 'len': 4340 } ]
  }
];

var issue_samples = [
  { 'severity': 4, 'type': 50107, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case01-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-AnyPathReq-Read.jsp', 'extra': 'remote file inclusion', 'sid': '0', 'dir': '_i0/0' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case02-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultRelativeInput-AnyPathReq-Read.jsp', 'extra': 'remote file inclusion', 'sid': '0', 'dir': '_i0/1' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case03-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultInvalidInput-AnyPathReq-Read.jsp', 'extra': 'remote file inclusion', 'sid': '0', 'dir': '_i0/2' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case04-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultEmptyInput-AnyPathReq-Read.jsp', 'extra': 'remote file inclusion', 'sid': '0', 'dir': '_i0/3' } ]
  },
  { 'severity': 4, 'type': 50106, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case01-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-AnyPathReq-Read.jsp', 'extra': 'File /etc/hosts was disclosed.', 'sid': '0', 'dir': '_i1/0' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case01-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-AnyPathReq-Read.jsp', 'extra': 'File /etc/passwd was disclosed.', 'sid': '0', 'dir': '_i1/1' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case03-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultInvalidInput-AnyPathReq-Read.jsp', 'extra': 'File /etc/hosts was disclosed.', 'sid': '0', 'dir': '_i1/2' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case03-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultInvalidInput-AnyPathReq-Read.jsp', 'extra': 'File /etc/passwd was disclosed.', 'sid': '0', 'dir': '_i1/3' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case04-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultEmptyInput-AnyPathReq-Read.jsp', 'extra': 'File /etc/hosts was disclosed.', 'sid': '0', 'dir': '_i1/4' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case04-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultEmptyInput-AnyPathReq-Read.jsp', 'extra': 'File /etc/passwd was disclosed.', 'sid': '0', 'dir': '_i1/5' } ]
  },
  { 'severity': 3, 'type': 40601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'implicitly cacheable \x27Set-Cookie\x27 response', 'sid': '0', 'dir': '_i2/0' } ]
  },
  { 'severity': 3, 'type': 40401, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case01-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-AnyPathReq-Read.jsp', 'extra': 'Possible password file', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case03-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultInvalidInput-AnyPathReq-Read.jsp', 'extra': 'Possible password file', 'sid': '0', 'dir': '_i3/1' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case04-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultEmptyInput-AnyPathReq-Read.jsp', 'extra': 'Possible password file', 'sid': '0', 'dir': '_i3/2' } ]
  },
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case01-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-AnyPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/0' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case02-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultRelativeInput-AnyPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/1' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case03-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultInvalidInput-AnyPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/2' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case05-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-NoProtocolReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/3' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case06-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultInvalidInput-NoProtocolReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/4' } ]
  },
  { 'severity': 1, 'type': 20101, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case05-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-NoProtocolReq-Read.jsp', 'extra': 'during parameter brute-force tests', 'sid': '0', 'dir': '_i5/0' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case07-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultEmptyInput-NoProtocolReq-Read.jsp', 'extra': 'during parameter brute-force tests', 'sid': '0', 'dir': '_i5/1' } ]
  },
  { 'severity': 0, 'type': 10901, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/', 'extra': '', 'sid': '0', 'dir': '_i6/0' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case01-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-AnyPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i6/1' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case02-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultRelativeInput-AnyPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i6/2' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case03-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultInvalidInput-AnyPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i6/3' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case05-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-NoProtocolReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i6/4' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case06-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultInvalidInput-NoProtocolReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i6/5' } ]
  },
  { 'severity': 0, 'type': 10801, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case01-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-AnyPathReq-Read.jsp', 'extra': 'text/plain', 'sid': '0', 'dir': '_i7/0' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case01-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-AnyPathReq-Read.jsp', 'extra': 'text/plain', 'sid': '0', 'dir': '_i7/1' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case03-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultInvalidInput-AnyPathReq-Read.jsp', 'extra': 'text/plain', 'sid': '0', 'dir': '_i7/2' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case04-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultEmptyInput-AnyPathReq-Read.jsp', 'extra': 'text/plain', 'sid': '0', 'dir': '_i7/3' } ]
  },
  { 'severity': 0, 'type': 10505, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case07-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultEmptyInput-NoProtocolReq-Read.jsp', 'extra': 'target', 'sid': '0', 'dir': '_i8/0' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error//', 'extra': '', 'sid': '0', 'dir': '_i9/0' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/text%2Fhtml/', 'extra': '', 'sid': '0', 'dir': '_i9/1' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/Case01-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-AnyPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i9/2' } ]
  },
  { 'severity': 0, 'type': 10401, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/text%2Fhtml/', 'extra': '', 'sid': '0', 'dir': '_i10/0' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://localhost:8090/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i11/0' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-POST-404Error/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i11/1' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://localhost:8090/', 'extra': 'Apache-Coyote/1.1', 'sid': '0', 'dir': '_i12/0' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'JSESSIONID', 'sid': '0', 'dir': '_i13/0' } ]
  }
];

