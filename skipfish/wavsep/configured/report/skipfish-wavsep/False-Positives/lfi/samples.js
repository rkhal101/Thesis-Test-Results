var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://localhost:8090/', 'dir': '_m0/0', 'linked': 2, 'len': 11230 },
    { 'url': 'http://localhost:8090/wavsep/', 'dir': '_m0/1', 'linked': 5, 'len': 1504 },
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/', 'dir': '_m0/2', 'linked': 5, 'len': 20408 },
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/Case01-LFI-FalsePositive-Forward-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp', 'dir': '_m0/3', 'linked': 5, 'len': 1833 },
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/Case01-LFI-FalsePositive-Forward-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp?target=/active/LFI/LFI-FalsePositives-GET/validfile1.jsp', 'dir': '_m0/4', 'linked': 5, 'len': 316 },
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/Case03-LFI-FalsePositive-FileClass-TextHtmlValidResponse-FilenameContext-WhiteList-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp?target=validfile1.jsp', 'dir': '_m0/5', 'linked': 5, 'len': 417 },
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/Case07-LFI-FalsePositive-FileClass-TextHtmlValidResponse-FilenameContext-EnumerationResponseOnly-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp?target=/root/apache-tomcat-8.0.27/webapps/wavsep/active/LFI/LFI-FalsePositives-GET/content.ini', 'dir': '_m0/6', 'linked': 5, 'len': 1669 } ]
  },
  { 'mime': 'text/html', 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/include.jsp', 'dir': '_m1/0', 'linked': 2, 'len': 974 } ]
  },
  { 'mime': 'text/plain', 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/Case08-LFI-FalsePositive-FileClass-TextHtmlValidResponse-FilenameContext-InputNotUsed-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp?target=/root/apache-tomcat-8.0.27/webapps/wavsep/active/LFI/LFI-FalsePositives-GET/content.ini', 'dir': '_m2/0', 'linked': 5, 'len': 4340 } ]
  }
];

var issue_samples = [
  { 'severity': 3, 'type': 40601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'implicitly cacheable \x27Set-Cookie\x27 response', 'sid': '0', 'dir': '_i0/0' } ]
  },
  { 'severity': 3, 'type': 40501, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/Case04-LFI-FalsePositive-FileClass-TextHtmlValidResponse-FilenameContext-TraversalRemovalAndWhiteList-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp?target=./validfile1.jsp', 'extra': 'responses for ./val and .../val look different', 'sid': '0', 'dir': '_i1/0' },
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/Case04-LFI-FalsePositive-FileClass-TextHtmlValidResponse-FilenameContext-TraversalRemovalAndWhiteList-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp?target=.\x5cvalidfile1.jsp', 'extra': 'responses for .\x5cval and ...\x5cval look different', 'sid': '0', 'dir': '_i1/1' },
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/Case06-LFI-FalsePositive-ContextStream-TextHtmlValidResponse-FilenameContext-TraversalRemovalAndWhiteList-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp?target=.//active/LFI/LFI-FalsePositives-GET/validfile1.jsp', 'extra': 'responses for ./val and .../val look different', 'sid': '0', 'dir': '_i1/2' },
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/Case06-LFI-FalsePositive-ContextStream-TextHtmlValidResponse-FilenameContext-TraversalRemovalAndWhiteList-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp?target=.\x5c/active/LFI/LFI-FalsePositives-GET/validfile1.jsp', 'extra': 'responses for .\x5cval and ...\x5cval look different', 'sid': '0', 'dir': '_i1/3' } ]
  },
  { 'severity': 3, 'type': 40102, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/Case02-LFI-FalsePositive-OpenRedirect-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp?target=skipfish://invalid/%3B%3F', 'extra': 'injected URL in \x27Location\x27 header', 'sid': '0', 'dir': '_i2/0' } ]
  },
  { 'severity': 3, 'type': 40101, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/Case01-LFI-FalsePositive-Forward-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp?target=.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000120v578051\x3e', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/Case07-LFI-FalsePositive-FileClass-TextHtmlValidResponse-FilenameContext-EnumerationResponseOnly-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp?target=.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000080v578051\x3e', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i3/1' } ]
  },
  { 'severity': 2, 'type': 30909, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/Case03-LFI-FalsePositive-FileClass-TextHtmlValidResponse-FilenameContext-WhiteList-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp?target=validfile1.jsp', 'extra': 'JSP source', 'sid': '32005', 'dir': '_i4/0' },
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/Case03-LFI-FalsePositive-FileClass-TextHtmlValidResponse-FilenameContext-WhiteList-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp?target=validfile1.jsp', 'extra': 'ASP source', 'sid': '32006', 'dir': '_i4/1' },
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/Case04-LFI-FalsePositive-FileClass-TextHtmlValidResponse-FilenameContext-TraversalRemovalAndWhiteList-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp?target=validfile1.jsp', 'extra': 'JSP source', 'sid': '32005', 'dir': '_i4/2' },
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/Case04-LFI-FalsePositive-FileClass-TextHtmlValidResponse-FilenameContext-TraversalRemovalAndWhiteList-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp?target=validfile1.jsp', 'extra': 'ASP source', 'sid': '32006', 'dir': '_i4/3' },
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/Case05-LFI-FalsePositive-ContextStream-TextHtmlValidResponse-FilenameContext-WhiteList-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp?target=/active/LFI/LFI-FalsePositives-GET/validfile1.jsp', 'extra': 'JSP source', 'sid': '32005', 'dir': '_i4/4' },
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/Case05-LFI-FalsePositive-ContextStream-TextHtmlValidResponse-FilenameContext-WhiteList-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp?target=/active/LFI/LFI-FalsePositives-GET/validfile1.jsp', 'extra': 'ASP source', 'sid': '32006', 'dir': '_i4/5' },
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/Case06-LFI-FalsePositive-ContextStream-TextHtmlValidResponse-FilenameContext-TraversalRemovalAndWhiteList-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp?target=/active/LFI/LFI-FalsePositives-GET/validfile1.jsp', 'extra': 'JSP source', 'sid': '32005', 'dir': '_i4/6' },
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/Case06-LFI-FalsePositive-ContextStream-TextHtmlValidResponse-FilenameContext-TraversalRemovalAndWhiteList-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp?target=/active/LFI/LFI-FalsePositives-GET/validfile1.jsp', 'extra': 'ASP source', 'sid': '32006', 'dir': '_i4/7' } ]
  },
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/Case01-LFI-FalsePositive-Forward-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i5/0' },
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/Case02-LFI-FalsePositive-OpenRedirect-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i5/1' },
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/Case04-LFI-FalsePositive-FileClass-TextHtmlValidResponse-FilenameContext-TraversalRemovalAndWhiteList-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i5/2' },
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/Case08-LFI-FalsePositive-FileClass-TextHtmlValidResponse-FilenameContext-InputNotUsed-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i5/3' } ]
  },
  { 'severity': 2, 'type': 30401, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/Case02-LFI-FalsePositive-OpenRedirect-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp?target=http://skipfish.invalid/%3B%3F', 'extra': 'injected URL in \x27Location\x27 header', 'sid': '0', 'dir': '_i6/0' } ]
  },
  { 'severity': 1, 'type': 20102, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/95', 'extra': 'Child node limit exceeded', 'sid': '0', 'dir': '_i7/0' } ]
  },
  { 'severity': 1, 'type': 20101, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/Case08-LFI-FalsePositive-FileClass-TextHtmlValidResponse-FilenameContext-InputNotUsed-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp/9%201%20-', 'extra': 'SQL injection', 'sid': '0', 'dir': '_i8/0' },
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/Case08-LFI-FalsePositive-FileClass-TextHtmlValidResponse-FilenameContext-InputNotUsed-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp?target=9876sfi', 'extra': 'param behavior', 'sid': '0', 'dir': '_i8/1' } ]
  },
  { 'severity': 0, 'type': 10901, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/Case01-LFI-FalsePositive-Forward-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i9/0' },
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/Case02-LFI-FalsePositive-OpenRedirect-TextHtmlValidResponse-FilenameContext-Unrestricted-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i9/1' },
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/Case04-LFI-FalsePositive-FileClass-TextHtmlValidResponse-FilenameContext-TraversalRemovalAndWhiteList-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i9/2' },
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/Case08-LFI-FalsePositive-FileClass-TextHtmlValidResponse-FilenameContext-InputNotUsed-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i9/3' },
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/validfile1.jsp', 'extra': '', 'sid': '0', 'dir': '_i9/4' } ]
  },
  { 'severity': 0, 'type': 10801, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/Case08-LFI-FalsePositive-FileClass-TextHtmlValidResponse-FilenameContext-InputNotUsed-OSPath-DefaultRelativeInput-NoPathReq-Read.jsp?target=/root/apache-tomcat-8.0.27/webapps/wavsep/active/LFI/LFI-FalsePositives-GET/content.ini', 'extra': 'text/plain', 'sid': '0', 'dir': '_i10/0' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET//', 'extra': '', 'sid': '0', 'dir': '_i11/0' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://localhost:8090/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i12/0' },
    { 'url': 'http://localhost:8090/wavsep/active/LFI/LFI-FalsePositives-GET/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i12/1' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://localhost:8090/', 'extra': 'Apache-Coyote/1.1', 'sid': '0', 'dir': '_i13/0' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'JSESSIONID', 'sid': '0', 'dir': '_i14/0' } ]
  }
];

