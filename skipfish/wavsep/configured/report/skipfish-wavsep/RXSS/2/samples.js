var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://localhost:8090/', 'dir': '_m0/0', 'linked': 2, 'len': 11230 },
    { 'url': 'http://localhost:8090/wavsep/', 'dir': '_m0/1', 'linked': 5, 'len': 1504 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/', 'dir': '_m0/2', 'linked': 5, 'len': 22107 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case01-Tag2HtmlPageScope.jsp', 'dir': '_m0/3', 'linked': 5, 'len': 542 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case01-Tag2HtmlPageScope.jsp', 'dir': '_m0/4', 'linked': 5, 'len': 344 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case05-Tag2Frameset.jsp', 'dir': '_m0/5', 'linked': 5, 'len': 451 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case09-SrcProperty2TagStructure.jsp', 'dir': '_m0/6', 'linked': 5, 'len': 408 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case17-Js2PropertyJsScopeDoubleQuoteDelimiter.jsp', 'dir': '_m0/7', 'linked': 5, 'len': 644 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case17-Js2PropertyJsScopeDoubleQuoteDelimiter.jsp', 'dir': '_m0/8', 'linked': 5, 'len': 573 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case22-Js2ScriptTagDoubleQuoteDelimiter.jsp', 'dir': '_m0/9', 'linked': 5, 'len': 476 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case29-Vbs2ScriptTagOLCommentScope.jsp', 'dir': '_m0/10', 'linked': 5, 'len': 449 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case32-Tag2HtmlPageScopeValidViewstateRequired.jsp', 'dir': '_m0/11', 'linked': 5, 'len': 703 } ]
  },
  { 'mime': 'text/html', 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/dummy.html', 'dir': '_m1/0', 'linked': 2, 'len': 83 } ]
  }
];

var issue_samples = [
  { 'severity': 3, 'type': 40601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'implicitly cacheable \x27Set-Cookie\x27 response', 'sid': '0', 'dir': '_i0/0' } ]
  },
  { 'severity': 3, 'type': 40105, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case09-SrcProperty2TagStructure.jsp', 'extra': 'script', 'sid': '0', 'dir': '_i1/0' } ]
  },
  { 'severity': 3, 'type': 40102, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case05-Tag2Frameset.jsp', 'extra': 'frame', 'sid': '0', 'dir': '_i2/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case06-Event2TagScope.jsp', 'extra': 'img', 'sid': '0', 'dir': '_i2/1' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case07-Event2DoubleQuotePropertyScope.jsp', 'extra': 'img', 'sid': '0', 'dir': '_i2/2' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case08-Event2SingleQuotePropertyScope.jsp', 'extra': 'img', 'sid': '0', 'dir': '_i2/3' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case10-Js2DoubleQuoteJsEventScope.jsp', 'extra': 'injected string in JS/CSS code (quote escaping issue)', 'sid': '0', 'dir': '_i2/4' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case11-Js2SingleQuoteJsEventScope.jsp', 'extra': 'injected string in JS/CSS code (quote escaping issue)', 'sid': '0', 'dir': '_i2/5' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case13-Vbs2DoubleQuoteVbsEventScope.jsp', 'extra': 'injected string in JS/CSS code (quote escaping issue)', 'sid': '0', 'dir': '_i2/6' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case14-Vbs2SingleQuoteVbsEventScope.jsp', 'extra': 'injected string in JS/CSS code (quote escaping issue)', 'sid': '0', 'dir': '_i2/7' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case16-Js2ScriptSupportingProperty.jsp', 'extra': 'frame', 'sid': '0', 'dir': '_i2/8' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case17-Js2PropertyJsScopeDoubleQuoteDelimiter.jsp', 'extra': 'injected string in JS/CSS code (quote escaping issue)', 'sid': '0', 'dir': '_i2/9' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case18-Js2PropertyJsScopeSingleQuoteDelimiter.jsp', 'extra': 'injected string in JS/CSS code (quote escaping issue)', 'sid': '0', 'dir': '_i2/10' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case20-Vbs2PropertyVbsScopeDoubleQuoteDelimiter.jsp', 'extra': 'injected string in JS/CSS code (quote escaping issue)', 'sid': '0', 'dir': '_i2/11' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case22-Js2ScriptTagDoubleQuoteDelimiter.jsp', 'extra': 'injected string in JS/CSS code (quote escaping issue)', 'sid': '0', 'dir': '_i2/12' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case23-Js2ScriptTagSingleQuoteDelimiter.jsp', 'extra': 'injected string in JS/CSS code (quote escaping issue)', 'sid': '0', 'dir': '_i2/13' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case25-Vbs2ScriptTagDoubleQuoteDelimiter.jsp', 'extra': 'injected string in JS/CSS code (quote escaping issue)', 'sid': '0', 'dir': '_i2/14' } ]
  },
  { 'severity': 3, 'type': 40101, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case01-Tag2HtmlPageScope.jsp', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case02-Tag2TagScope.jsp', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i3/1' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case03-Tag2TagStructure.jsp', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i3/2' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case04-Tag2HtmlComment.jsp', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i3/3' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case05-Tag2Frameset.jsp', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i3/4' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case06-Event2TagScope.jsp', 'extra': 'injected \x27sfi..\x27 parameter value in a tag', 'sid': '0', 'dir': '_i3/5' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case07-Event2DoubleQuotePropertyScope.jsp', 'extra': 'injected \x27sfi..\x27 parameter value in a tag', 'sid': '0', 'dir': '_i3/6' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case08-Event2SingleQuotePropertyScope.jsp', 'extra': 'injected \x27sfi..\x27 parameter value in a tag', 'sid': '0', 'dir': '_i3/7' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case12-Js2JsEventScope.jsp', 'extra': 'injected syntax in JS/CSS code', 'sid': '0', 'dir': '_i3/8' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case15-Vbs2VbsEventScope.jsp', 'extra': 'injected syntax in JS/CSS code', 'sid': '0', 'dir': '_i3/9' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case19-Js2PropertyJsScope.jsp', 'extra': 'injected syntax in JS/CSS code', 'sid': '0', 'dir': '_i3/10' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case21-Vbs2PropertyVbsScope.jsp', 'extra': 'injected syntax in JS/CSS code', 'sid': '0', 'dir': '_i3/11' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case24-Js2ScriptTag.jsp', 'extra': 'injected syntax in JS/CSS code', 'sid': '0', 'dir': '_i3/12' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case26-Vbs2ScriptTag.jsp', 'extra': 'injected syntax in JS/CSS code', 'sid': '0', 'dir': '_i3/13' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case29-Vbs2ScriptTagOLCommentScope.jsp', 'extra': 'injected syntax in JS/CSS code', 'sid': '0', 'dir': '_i3/14' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case30-Tag2HtmlPageScopeMultipleVulnerabilities.jsp', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i3/15' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case30-Tag2HtmlPageScopeMultipleVulnerabilities.jsp', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i3/16' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case31-Tag2HtmlPageScopeDuringException.jsp', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i3/17' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case32-Tag2HtmlPageScopeValidViewstateRequired.jsp', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i3/18' } ]
  },
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case01-Tag2HtmlPageScope.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case05-Tag2Frameset.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/1' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case12-Js2JsEventScope.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/2' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case16-Js2ScriptSupportingProperty.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/3' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case17-Js2PropertyJsScopeDoubleQuoteDelimiter.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/4' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case27-Js2ScriptTagOLCommentScope.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/5' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case30-Tag2HtmlPageScopeMultipleVulnerabilities.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/6' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case32-Tag2HtmlPageScopeValidViewstateRequired.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/7' } ]
  },
  { 'severity': 2, 'type': 30402, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case05-Tag2Frameset.jsp', 'extra': 'frame', 'sid': '0', 'dir': '_i5/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case06-Event2TagScope.jsp', 'extra': 'img', 'sid': '0', 'dir': '_i5/1' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case07-Event2DoubleQuotePropertyScope.jsp', 'extra': 'img', 'sid': '0', 'dir': '_i5/2' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case08-Event2SingleQuotePropertyScope.jsp', 'extra': 'img', 'sid': '0', 'dir': '_i5/3' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case16-Js2ScriptSupportingProperty.jsp', 'extra': 'frame', 'sid': '0', 'dir': '_i5/4' } ]
  },
  { 'severity': 0, 'type': 10901, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Apache-Coyote%2F1.1/', 'extra': '', 'sid': '0', 'dir': '_i6/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case01-Tag2HtmlPageScope.jsp', 'extra': '', 'sid': '0', 'dir': '_i6/1' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case05-Tag2Frameset.jsp', 'extra': '', 'sid': '0', 'dir': '_i6/2' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case12-Js2JsEventScope.jsp', 'extra': '', 'sid': '0', 'dir': '_i6/3' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case16-Js2ScriptSupportingProperty.jsp', 'extra': '', 'sid': '0', 'dir': '_i6/4' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case17-Js2PropertyJsScopeDoubleQuoteDelimiter.jsp', 'extra': '', 'sid': '0', 'dir': '_i6/5' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case27-Js2ScriptTagOLCommentScope.jsp', 'extra': '', 'sid': '0', 'dir': '_i6/6' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case30-Tag2HtmlPageScopeMultipleVulnerabilities.jsp', 'extra': '', 'sid': '0', 'dir': '_i6/7' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case32-Tag2HtmlPageScopeValidViewstateRequired.jsp', 'extra': '', 'sid': '0', 'dir': '_i6/8' } ]
  },
  { 'severity': 0, 'type': 10803, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/dummy.html', 'extra': '', 'sid': '0', 'dir': '_i7/0' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST//', 'extra': '', 'sid': '0', 'dir': '_i8/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Apache-Coyote%2F1.1/', 'extra': '', 'sid': '0', 'dir': '_i8/1' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/skip%2Ffish%3B/', 'extra': '', 'sid': '0', 'dir': '_i8/2' } ]
  },
  { 'severity': 0, 'type': 10403, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Case32-Tag2HtmlPageScopeValidViewstateRequired.jsp', 'extra': '', 'sid': '0', 'dir': '_i9/0' } ]
  },
  { 'severity': 0, 'type': 10401, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/Apache-Coyote%2F1.1/', 'extra': '', 'sid': '0', 'dir': '_i10/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/skip%2Ffish%3B/', 'extra': '', 'sid': '0', 'dir': '_i10/1' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://localhost:8090/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i11/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i11/1' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://localhost:8090/', 'extra': 'Apache-Coyote/1.1', 'sid': '0', 'dir': '_i12/0' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'JSESSIONID', 'sid': '0', 'dir': '_i13/0' } ]
  }
];

