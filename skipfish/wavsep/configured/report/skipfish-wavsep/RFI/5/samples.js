var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://localhost:8090/', 'dir': '_m0/0', 'linked': 2, 'len': 11230 },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/Case04-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultEmptyInput-AnyPathReq-Read.jsp', 'dir': '_m0/1', 'linked': 2, 'len': 1792 },
    { 'url': 'http://localhost:8090/wavsep/', 'dir': '_m0/2', 'linked': 5, 'len': 1504 },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/', 'dir': '_m0/3', 'linked': 5, 'len': 20892 },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/Case01-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-AnyPathReq-Read.jsp?target=http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/content.ini', 'dir': '_m0/4', 'linked': 5, 'len': 1653 } ]
  },
  { 'mime': 'text/plain', 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/Case01-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-AnyPathReq-Read.jsp?target=file:///etc/passwd', 'dir': '_m1/0', 'linked': 5, 'len': 1300 },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/Case01-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-AnyPathReq-Read.jsp?target=file:///etc/hosts', 'dir': '_m1/1', 'linked': 5, 'len': 174 },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/Case01-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-AnyPathReq-Read.jsp?target=http://localhost:8080/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/content.ini', 'dir': '_m1/2', 'linked': 0, 'len': 4340 } ]
  }
];

var issue_samples = [
  { 'severity': 4, 'type': 50107, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/Case01-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-AnyPathReq-Read.jsp?target=http://www.google.com/humans.txt%23foo%3D', 'extra': 'remote file inclusion', 'sid': '0', 'dir': '_i0/0' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/Case02-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultRelativeInput-AnyPathReq-Read.jsp?target=http://www.google.com/humans.txt%23foo%3D', 'extra': 'remote file inclusion', 'sid': '0', 'dir': '_i0/1' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/Case04-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultEmptyInput-AnyPathReq-Read.jsp?target=http://www.google.com/humans.txt%23foo%3D', 'extra': 'remote file inclusion', 'sid': '0', 'dir': '_i0/2' } ]
  },
  { 'severity': 4, 'type': 50106, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/Case01-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-AnyPathReq-Read.jsp?target=file:///etc/hosts', 'extra': 'File /etc/hosts was disclosed.', 'sid': '0', 'dir': '_i1/0' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/Case01-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-AnyPathReq-Read.jsp?target=file:///etc/passwd', 'extra': 'File /etc/passwd was disclosed.', 'sid': '0', 'dir': '_i1/1' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/Case04-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultEmptyInput-AnyPathReq-Read.jsp?target=file:///etc/hosts', 'extra': 'File /etc/hosts was disclosed.', 'sid': '0', 'dir': '_i1/2' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/Case04-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultEmptyInput-AnyPathReq-Read.jsp?target=file:///etc/passwd', 'extra': 'File /etc/passwd was disclosed.', 'sid': '0', 'dir': '_i1/3' } ]
  },
  { 'severity': 3, 'type': 40601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'implicitly cacheable \x27Set-Cookie\x27 response', 'sid': '0', 'dir': '_i2/0' } ]
  },
  { 'severity': 3, 'type': 40401, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/Case01-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-AnyPathReq-Read.jsp?target=file:///etc/passwd', 'extra': 'Possible password file', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/Case04-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultEmptyInput-AnyPathReq-Read.jsp?target=file:///etc/passwd', 'extra': 'Possible password file', 'sid': '0', 'dir': '_i3/1' } ]
  },
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/Case01-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-AnyPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/0' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/Case02-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultRelativeInput-AnyPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/1' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/Case04-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultEmptyInput-AnyPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/2' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/Case05-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-NoProtocolReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/3' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/Case07-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultEmptyInput-NoProtocolReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/4' } ]
  },
  { 'severity': 1, 'type': 20101, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/Case03-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultInvalidInput-AnyPathReq-Read.jsp?target=file:%252F%252F%252Fetc%252Fhosts', 'extra': 'local file inclusion', 'sid': '0', 'dir': '_i5/0' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/Case05-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-NoProtocolReq-Read.jsp?target=20110329', 'extra': 'during parameter brute-force tests', 'sid': '0', 'dir': '_i5/1' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/Case06-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultInvalidInput-NoProtocolReq-Read.jsp?target=20110329', 'extra': 'during parameter brute-force tests', 'sid': '0', 'dir': '_i5/2' } ]
  },
  { 'severity': 0, 'type': 10901, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/', 'extra': '', 'sid': '0', 'dir': '_i6/0' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/dddd%2F1.1%20200%20OK/', 'extra': '', 'sid': '0', 'dir': '_i6/1' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/Case01-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-AnyPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i6/2' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/Case02-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultRelativeInput-AnyPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i6/3' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/Case04-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultEmptyInput-AnyPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i6/4' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/Case05-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-NoProtocolReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i6/5' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/Case07-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultEmptyInput-NoProtocolReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i6/6' } ]
  },
  { 'severity': 0, 'type': 10803, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/content.ini', 'extra': '', 'sid': '0', 'dir': '_i7/0' } ]
  },
  { 'severity': 0, 'type': 10801, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/Case01-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-AnyPathReq-Read.jsp?target=file:///etc/hosts', 'extra': 'text/plain', 'sid': '0', 'dir': '_i8/0' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/Case01-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-AnyPathReq-Read.jsp?target=http://localhost:8080/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/content.ini', 'extra': 'text/plain', 'sid': '0', 'dir': '_i8/1' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/Case04-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultEmptyInput-AnyPathReq-Read.jsp?target=file:///etc/hosts', 'extra': 'text/plain', 'sid': '0', 'dir': '_i8/2' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/content.ini', 'extra': 'text/plain', 'sid': '0', 'dir': '_i8/3' } ]
  },
  { 'severity': 0, 'type': 10505, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/Case04-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultEmptyInput-AnyPathReq-Read.jsp', 'extra': 'target', 'sid': '0', 'dir': '_i9/0' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/dddd%2F1.1%20200%20OK/', 'extra': '', 'sid': '0', 'dir': '_i10/0' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/Case01-RFI-UrlClass-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-AnyPathReq-Read.jsp?target=http://localhost:8080/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/content.ini', 'extra': '', 'sid': '0', 'dir': '_i10/1' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/content.ini', 'extra': '', 'sid': '0', 'dir': '_i10/2' } ]
  },
  { 'severity': 0, 'type': 10401, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/dddd%2F1.1%20200%20OK/', 'extra': '', 'sid': '0', 'dir': '_i11/0' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://localhost:8090/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i12/0' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-Detection-Evaluation-GET-200Valid/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i12/1' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://localhost:8090/', 'extra': 'Apache-Coyote/1.1', 'sid': '0', 'dir': '_i13/0' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'JSESSIONID', 'sid': '0', 'dir': '_i14/0' } ]
  }
];

