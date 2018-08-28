var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://localhost:8090/', 'dir': '_m0/0', 'linked': 2, 'len': 11230 },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/Case11-Redirect-RedirectMethod-FilenameContext-HttpInputValidation-HttpURL-DefaultEmptyInput-AnyPathReq-Read.jsp', 'dir': '_m0/1', 'linked': 2, 'len': 1974 },
    { 'url': 'http://localhost:8090/wavsep/', 'dir': '_m0/2', 'linked': 5, 'len': 1504 },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/', 'dir': '_m0/3', 'linked': 5, 'len': 31679 },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/MissingResource.html', 'dir': '_m0/4', 'linked': 2, 'len': 308 } ]
  },
  { 'mime': 'text/plain', 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/content.ini', 'dir': '_m1/0', 'linked': 2, 'len': 4340 } ]
  }
];

var issue_samples = [
  { 'severity': 3, 'type': 40601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'implicitly cacheable \x27Set-Cookie\x27 response', 'sid': '0', 'dir': '_i0/0' } ]
  },
  { 'severity': 3, 'type': 40102, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/Case01-Redirect-RedirectMethod-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-AnyPathReq-Read.jsp?target=skipfish://invalid/%3B%3F', 'extra': 'injected URL in \x27Location\x27 header', 'sid': '0', 'dir': '_i1/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/Case02-Redirect-RedirectMethod-FilenameContext-Unrestricted-HttpURL-DefaultRelativeInput-AnyPathReq-Read.jsp?target=skipfish://invalid/%3B%3F', 'extra': 'injected URL in \x27Location\x27 header', 'sid': '0', 'dir': '_i1/1' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/Case03-Redirect-RedirectMethod-FilenameContext-Unrestricted-HttpURL-DefaultInvalidInput-AnyPathReq-Read.jsp?target=skipfish://invalid/%3B%3F', 'extra': 'injected URL in \x27Location\x27 header', 'sid': '0', 'dir': '_i1/2' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/Case04-Redirect-RedirectMethod-FilenameContext-Unrestricted-HttpURL-DefaultEmptyInput-AnyPathReq-Read.jsp?target=skipfish://invalid/%3B%3F', 'extra': 'injected URL in \x27Location\x27 header', 'sid': '0', 'dir': '_i1/3' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/Case09-Redirect-RedirectMethod-FilenameContext-HttpInputValidation-HttpURL-DefaultRelativeInput-AnyPathReq-Read.jsp?target=skipfish://invalid/%3B%3F', 'extra': 'injected URL in \x27Location\x27 header', 'sid': '0', 'dir': '_i1/4' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/Case10-Redirect-RedirectMethod-FilenameContext-HttpInputValidation-HttpURL-DefaultInvalidInput-AnyPathReq-Read.jsp?target=skipfish://invalid/%3B%3F', 'extra': 'injected URL in \x27Location\x27 header', 'sid': '0', 'dir': '_i1/5' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/Case11-Redirect-RedirectMethod-FilenameContext-HttpInputValidation-HttpURL-DefaultEmptyInput-AnyPathReq-Read.jsp?target=skipfish://invalid/%3B%3F', 'extra': 'injected URL in \x27Location\x27 header', 'sid': '0', 'dir': '_i1/6' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/Case13-Redirect-RedirectMethod-FilenameContext-HttpInputRemoval-HttpURL-DefaultRelativeInput-AnyPathReq-Read.jsp?target=skipfish://invalid/%3B%3F', 'extra': 'injected URL in \x27Location\x27 header', 'sid': '0', 'dir': '_i1/7' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/Case14-Redirect-RedirectMethod-FilenameContext-HttpInputRemoval-HttpURL-DefaultInvalidInput-AnyPathReq-Read.jsp?target=skipfish://invalid/%3B%3F', 'extra': 'injected URL in \x27Location\x27 header', 'sid': '0', 'dir': '_i1/8' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/Case15-Redirect-RedirectMethod-FilenameContext-HttpInputRemoval-HttpURL-DefaultEmptyInput-AnyPathReq-Read.jsp?target=skipfish://invalid/%3B%3F', 'extra': 'injected URL in \x27Location\x27 header', 'sid': '0', 'dir': '_i1/9' } ]
  },
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/Case01-Redirect-RedirectMethod-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-AnyPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i2/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/Case05-Redirect-RedirectMethod-FilenameContext-Unrestricted-HttpURL-DefaultPartialInput-PartialPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i2/1' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/Case12-Redirect-RedirectMethod-FilenameContext-HttpInputRemoval-HttpURL-DefaultPartialInput-PartialPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i2/2' } ]
  },
  { 'severity': 2, 'type': 30401, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/Case01-Redirect-RedirectMethod-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-AnyPathReq-Read.jsp?target=http://skipfish.invalid/%3B%3F', 'extra': 'injected URL in \x27Location\x27 header', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/Case02-Redirect-RedirectMethod-FilenameContext-Unrestricted-HttpURL-DefaultRelativeInput-AnyPathReq-Read.jsp?target=http://skipfish.invalid/%3B%3F', 'extra': 'injected URL in \x27Location\x27 header', 'sid': '0', 'dir': '_i3/1' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/Case03-Redirect-RedirectMethod-FilenameContext-Unrestricted-HttpURL-DefaultInvalidInput-AnyPathReq-Read.jsp?target=http://skipfish.invalid/%3B%3F', 'extra': 'injected URL in \x27Location\x27 header', 'sid': '0', 'dir': '_i3/2' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/Case04-Redirect-RedirectMethod-FilenameContext-Unrestricted-HttpURL-DefaultEmptyInput-AnyPathReq-Read.jsp?target=http://skipfish.invalid/%3B%3F', 'extra': 'injected URL in \x27Location\x27 header', 'sid': '0', 'dir': '_i3/3' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/Case09-Redirect-RedirectMethod-FilenameContext-HttpInputValidation-HttpURL-DefaultRelativeInput-AnyPathReq-Read.jsp?target=//skipfish.invalid/%3B%3F', 'extra': 'injected URL in \x27Location\x27 header', 'sid': '0', 'dir': '_i3/4' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/Case10-Redirect-RedirectMethod-FilenameContext-HttpInputValidation-HttpURL-DefaultInvalidInput-AnyPathReq-Read.jsp?target=//skipfish.invalid/%3B%3F', 'extra': 'injected URL in \x27Location\x27 header', 'sid': '0', 'dir': '_i3/5' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/Case11-Redirect-RedirectMethod-FilenameContext-HttpInputValidation-HttpURL-DefaultEmptyInput-AnyPathReq-Read.jsp?target=//skipfish.invalid/%3B%3F', 'extra': 'injected URL in \x27Location\x27 header', 'sid': '0', 'dir': '_i3/6' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/Case12-Redirect-RedirectMethod-FilenameContext-HttpInputRemoval-HttpURL-DefaultPartialInput-PartialPathReq-Read.jsp?target=http://skipfish.invalid/%3B%3F', 'extra': 'injected URL in \x27Location\x27 header', 'sid': '0', 'dir': '_i3/7' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/Case13-Redirect-RedirectMethod-FilenameContext-HttpInputRemoval-HttpURL-DefaultRelativeInput-AnyPathReq-Read.jsp?target=//skipfish.invalid/%3B%3F', 'extra': 'injected URL in \x27Location\x27 header', 'sid': '0', 'dir': '_i3/8' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/Case14-Redirect-RedirectMethod-FilenameContext-HttpInputRemoval-HttpURL-DefaultInvalidInput-AnyPathReq-Read.jsp?target=//skipfish.invalid/%3B%3F', 'extra': 'injected URL in \x27Location\x27 header', 'sid': '0', 'dir': '_i3/9' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/Case15-Redirect-RedirectMethod-FilenameContext-HttpInputRemoval-HttpURL-DefaultEmptyInput-AnyPathReq-Read.jsp?target=//skipfish.invalid/%3B%3F', 'extra': 'injected URL in \x27Location\x27 header', 'sid': '0', 'dir': '_i3/10' } ]
  },
  { 'severity': 1, 'type': 20102, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/48', 'extra': 'Child node limit exceeded', 'sid': '0', 'dir': '_i4/0' } ]
  },
  { 'severity': 0, 'type': 10901, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/', 'extra': '', 'sid': '0', 'dir': '_i5/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/Case01-Redirect-RedirectMethod-FilenameContext-Unrestricted-HttpURL-DefaultFullInput-AnyPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i5/1' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/Case05-Redirect-RedirectMethod-FilenameContext-Unrestricted-HttpURL-DefaultPartialInput-PartialPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i5/2' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/Case12-Redirect-RedirectMethod-FilenameContext-HttpInputRemoval-HttpURL-DefaultPartialInput-PartialPathReq-Read.jsp', 'extra': '', 'sid': '0', 'dir': '_i5/3' } ]
  },
  { 'severity': 0, 'type': 10803, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/content.ini', 'extra': '', 'sid': '0', 'dir': '_i6/0' } ]
  },
  { 'severity': 0, 'type': 10801, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/content.ini', 'extra': 'text/plain', 'sid': '0', 'dir': '_i7/0' } ]
  },
  { 'severity': 0, 'type': 10505, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/Case11-Redirect-RedirectMethod-FilenameContext-HttpInputValidation-HttpURL-DefaultEmptyInput-AnyPathReq-Read.jsp', 'extra': 'target', 'sid': '0', 'dir': '_i8/0' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://localhost:8090/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i9/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Unvalidated-Redirect/Redirect-Detection-Evaluation-GET-302Redirect/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i9/1' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://localhost:8090/', 'extra': 'Apache-Coyote/1.1', 'sid': '0', 'dir': '_i10/0' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'JSESSIONID', 'sid': '0', 'dir': '_i11/0' } ]
  }
];

