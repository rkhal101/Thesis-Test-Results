var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://localhost:8090/', 'dir': '_m0/0', 'linked': 2, 'len': 11230 },
    { 'url': 'http://localhost:8090/wavsep/', 'dir': '_m0/1', 'linked': 5, 'len': 1504 },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/', 'dir': '_m0/2', 'linked': 5, 'len': 21779 },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/files/', 'dir': '_m0/3', 'linked': 2, 'len': 1132 },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/Case01-Redirect-FalsePositive-Forward-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp', 'dir': '_m0/4', 'linked': 5, 'len': 1983 },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/Case01-Redirect-FalsePositive-Forward-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp?target=/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/validfile1.jsp', 'dir': '_m0/5', 'linked': 5, 'len': 316 },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/Case02-Redirect-FalsePositive-NoLogic-TextHtmlValidResponse-NoContext-Unrestricted-NoPath-DefaultFullInput-NoPathReq-Read.jsp?target=http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/content.ini', 'dir': '_m0/6', 'linked': 5, 'len': 1706 } ]
  },
  { 'mime': 'text/plain', 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/Case06-Redirect-FalsePositive-RFI-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultFullInput-NoPathReq-Read.jsp?target=file:///etc/passwd', 'dir': '_m1/0', 'linked': 5, 'len': 1300 },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/Case06-Redirect-FalsePositive-RFI-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultFullInput-NoPathReq-Read.jsp?target=file:///etc/hosts', 'dir': '_m1/1', 'linked': 5, 'len': 174 },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/Case06-Redirect-FalsePositive-RFI-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultFullInput-NoPathReq-Read.jsp?target=http://localhost:8080/wavsep/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/content.ini', 'dir': '_m1/2', 'linked': 0, 'len': 4340 } ]
  }
];

var issue_samples = [
  { 'severity': 4, 'type': 50106, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/Case06-Redirect-FalsePositive-RFI-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultFullInput-NoPathReq-Read.jsp?target=file:///etc/hosts', 'extra': 'File /etc/hosts was disclosed.', 'sid': '0', 'dir': '_i0/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/Case06-Redirect-FalsePositive-RFI-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultFullInput-NoPathReq-Read.jsp?target=file:///etc/passwd', 'extra': 'File /etc/passwd was disclosed.', 'sid': '0', 'dir': '_i0/1' } ]
  },
  { 'severity': 3, 'type': 40601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'implicitly cacheable \x27Set-Cookie\x27 response', 'sid': '0', 'dir': '_i1/0' } ]
  },
  { 'severity': 3, 'type': 40501, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/Case07-Redirect-FalsePositive-LFI-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp?target=./content.ini', 'extra': 'responses for ./val and .../val look different', 'sid': '0', 'dir': '_i2/0' } ]
  },
  { 'severity': 3, 'type': 40401, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/Case06-Redirect-FalsePositive-RFI-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultFullInput-NoPathReq-Read.jsp?target=file:///etc/passwd', 'extra': 'Possible password file', 'sid': '0', 'dir': '_i3/0' } ]
  },
  { 'severity': 3, 'type': 40101, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/Case01-Redirect-FalsePositive-Forward-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp?target=.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000085v820880\x3e', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i4/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/Case06-Redirect-FalsePositive-RFI-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultFullInput-NoPathReq-Read.jsp?target=.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000070v820880\x3e', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i4/1' } ]
  },
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/Case01-Redirect-FalsePositive-Forward-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i5/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/Case02-Redirect-FalsePositive-NoLogic-TextHtmlValidResponse-NoContext-Unrestricted-NoPath-DefaultFullInput-NoPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i5/1' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/Case06-Redirect-FalsePositive-RFI-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultFullInput-NoPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i5/2' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/Case07-Redirect-FalsePositive-LFI-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i5/3' } ]
  },
  { 'severity': 1, 'type': 20202, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/sfi9876/files/', 'extra': '', 'sid': '0', 'dir': '_i6/0' } ]
  },
  { 'severity': 1, 'type': 20102, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/invalid.ini', 'extra': 'Child node limit exceeded', 'sid': '0', 'dir': '_i7/0' } ]
  },
  { 'severity': 1, 'type': 20101, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/Case07-Redirect-FalsePositive-LFI-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp?target=/../WEB-INF/web.xml', 'extra': 'local file inclusion', 'sid': '0', 'dir': '_i8/0' } ]
  },
  { 'severity': 0, 'type': 10901, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/Case01-Redirect-FalsePositive-Forward-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i9/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/Case02-Redirect-FalsePositive-NoLogic-TextHtmlValidResponse-NoContext-Unrestricted-NoPath-DefaultFullInput-NoPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i9/1' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/Case06-Redirect-FalsePositive-RFI-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultFullInput-NoPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i9/2' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/Case07-Redirect-FalsePositive-LFI-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i9/3' } ]
  },
  { 'severity': 0, 'type': 10803, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/content.ini', 'extra': '', 'sid': '0', 'dir': '_i10/0' } ]
  },
  { 'severity': 0, 'type': 10801, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/Case06-Redirect-FalsePositive-RFI-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultFullInput-NoPathReq-Read.jsp?target=file:///etc/hosts', 'extra': 'text/plain', 'sid': '0', 'dir': '_i11/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/Case06-Redirect-FalsePositive-RFI-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultFullInput-NoPathReq-Read.jsp?target=http://localhost:8080/wavsep/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/content.ini', 'extra': 'text/plain', 'sid': '0', 'dir': '_i11/1' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/Case07-Redirect-FalsePositive-LFI-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp?target=content.ini', 'extra': 'text/plain', 'sid': '0', 'dir': '_i11/2' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/content.ini', 'extra': 'text/plain', 'sid': '0', 'dir': '_i11/3' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/Case06-Redirect-FalsePositive-RFI-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultFullInput-NoPathReq-Read.jsp?target=http://localhost:8080/wavsep/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/content.ini', 'extra': '', 'sid': '0', 'dir': '_i12/0' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://localhost:8090/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i13/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-FalsePositives-GET/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i13/1' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://localhost:8090/', 'extra': 'Apache-Coyote/1.1', 'sid': '0', 'dir': '_i14/0' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'JSESSIONID', 'sid': '0', 'dir': '_i15/0' } ]
  }
];

