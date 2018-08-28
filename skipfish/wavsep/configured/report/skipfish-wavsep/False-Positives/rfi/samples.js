var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://localhost:8090/', 'dir': '_m0/0', 'linked': 2, 'len': 11230 },
    { 'url': 'http://localhost:8090/wavsep/', 'dir': '_m0/1', 'linked': 5, 'len': 1504 },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-FalsePositives-GET/', 'dir': '_m0/2', 'linked': 5, 'len': 15580 },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-FalsePositives-GET/Case01-RFI-FalsePositive-Forward-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp', 'dir': '_m0/3', 'linked': 5, 'len': 1834 },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-FalsePositives-GET/Case01-RFI-FalsePositive-Forward-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp?target=/active/RFI/RFI-FalsePositives-GET/validfile1.jsp', 'dir': '_m0/4', 'linked': 5, 'len': 316 },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-FalsePositives-GET/Case03-RFI-FalsePositive-UrlClass-TextHtmlValidResponse-FilenameContext-WhiteList-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp?target=http://localhost:8090/wavsep/active/RFI/RFI-FalsePositives-GET/validfile1.jsp', 'dir': '_m0/5', 'linked': 5, 'len': 1674 } ]
  },
  { 'mime': 'text/html', 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-FalsePositives-GET/include.jsp', 'dir': '_m1/0', 'linked': 2, 'len': 974 } ]
  }
];

var issue_samples = [
  { 'severity': 3, 'type': 40601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'implicitly cacheable \x27Set-Cookie\x27 response', 'sid': '0', 'dir': '_i0/0' } ]
  },
  { 'severity': 3, 'type': 40102, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-FalsePositives-GET/Case02-RFI-FalsePositive-OpenRedirect-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp?target=skipfish://invalid/%3B%3F', 'extra': 'injected URL in \x27Location\x27 header', 'sid': '0', 'dir': '_i1/0' } ]
  },
  { 'severity': 3, 'type': 40101, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-FalsePositives-GET/Case01-RFI-FalsePositive-Forward-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp?target=.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000075v996245\x3e', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i2/0' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-FalsePositives-GET/Case05-RFI-FalsePositive-UrlClass-TextHtmlValidResponse-FilenameContext-EnumerationResponseOnly-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp?target=.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000100v996245\x3e', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i2/1' } ]
  },
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-FalsePositives-GET/Case01-RFI-FalsePositive-Forward-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-FalsePositives-GET/Case02-RFI-FalsePositive-OpenRedirect-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/1' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-FalsePositives-GET/Case03-RFI-FalsePositive-UrlClass-TextHtmlValidResponse-FilenameContext-WhiteList-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/2' } ]
  },
  { 'severity': 2, 'type': 30401, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-FalsePositives-GET/Case02-RFI-FalsePositive-OpenRedirect-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp?target=http://skipfish.invalid/%3B%3F', 'extra': 'injected URL in \x27Location\x27 header', 'sid': '0', 'dir': '_i4/0' } ]
  },
  { 'severity': 1, 'type': 20102, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-FalsePositives-GET/of.jsp', 'extra': 'Child node limit exceeded', 'sid': '0', 'dir': '_i5/0' } ]
  },
  { 'severity': 0, 'type': 10901, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-FalsePositives-GET/Case01-RFI-FalsePositive-Forward-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i6/0' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-FalsePositives-GET/Case02-RFI-FalsePositive-OpenRedirect-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i6/1' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-FalsePositives-GET/Case03-RFI-FalsePositive-UrlClass-TextHtmlValidResponse-FilenameContext-WhiteList-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i6/2' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-FalsePositives-GET/validfile1.jsp', 'extra': '', 'sid': '0', 'dir': '_i6/3' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://localhost:8090/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i7/0' },
    { 'url': 'http://localhost:8090/wavsep/active/RFI/RFI-FalsePositives-GET/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i7/1' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://localhost:8090/', 'extra': 'Apache-Coyote/1.1', 'sid': '0', 'dir': '_i8/0' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'JSESSIONID', 'sid': '0', 'dir': '_i9/0' } ]
  }
];

