var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://localhost:8090/', 'dir': '_m0/0', 'linked': 2, 'len': 11230 },
    { 'url': 'http://localhost:8090/wavsep/', 'dir': '_m0/1', 'linked': 5, 'len': 1504 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/', 'dir': '_m0/2', 'linked': 5, 'len': 22501 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case01-Tag2HtmlPageScope.jsp', 'dir': '_m0/3', 'linked': 5, 'len': 542 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case01-Tag2HtmlPageScope.jsp?userinput=textvalue', 'dir': '_m0/4', 'linked': 5, 'len': 345 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case05-Tag2Frameset.jsp?userinput=textvalue', 'dir': '_m0/5', 'linked': 5, 'len': 452 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case09-SrcProperty2TagStructure.jsp?userinput=textvalue', 'dir': '_m0/6', 'linked': 5, 'len': 409 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case17-Js2PropertyJsScopeDoubleQuoteDelimiter.jsp', 'dir': '_m0/7', 'linked': 5, 'len': 644 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case17-Js2PropertyJsScopeDoubleQuoteDelimiter.jsp?userinput=david', 'dir': '_m0/8', 'linked': 5, 'len': 570 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case26-Vbs2ScriptTag.jsp?userinput=1234', 'dir': '_m0/9', 'linked': 5, 'len': 480 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case30-Tag2HtmlPageScopeMultipleVulnerabilities.jsp?userinput=1234&userinput2=1234', 'dir': '_m0/10', 'linked': 5, 'len': 407 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case32-Tag2HtmlPageScopeValidViewstateRequired.jsp', 'dir': '_m0/11', 'linked': 5, 'len': 703 } ]
  },
  { 'mime': 'text/html', 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/dummy.html', 'dir': '_m1/0', 'linked': 2, 'len': 83 } ]
  }
];

var issue_samples = [
  { 'severity': 3, 'type': 40601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'implicitly cacheable \x27Set-Cookie\x27 response', 'sid': '0', 'dir': '_i0/0' } ]
  },
  { 'severity': 3, 'type': 40105, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case09-SrcProperty2TagStructure.jsp?userinput=skipfish://invalid/%3B%3F', 'extra': 'script', 'sid': '0', 'dir': '_i1/0' } ]
  },
  { 'severity': 3, 'type': 40102, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case05-Tag2Frameset.jsp?userinput=skipfish://invalid/%3B%3F', 'extra': 'frame', 'sid': '0', 'dir': '_i2/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case06-Event2TagScope.jsp?userinput=skipfish://invalid/%3B%3F', 'extra': 'img', 'sid': '0', 'dir': '_i2/1' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case07-Event2DoubleQuotePropertyScope.jsp?userinput=skipfish://invalid/%3B%3F', 'extra': 'img', 'sid': '0', 'dir': '_i2/2' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case08-Event2SingleQuotePropertyScope.jsp?userinput=skipfish://invalid/%3B%3F', 'extra': 'img', 'sid': '0', 'dir': '_i2/3' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case10-Js2DoubleQuoteJsEventScope.jsp?userinput=\x27skip\x27\x27\x27\x22fish\x22\x22\x22', 'extra': 'injected string in JS/CSS code (quote escaping issue)', 'sid': '0', 'dir': '_i2/4' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case11-Js2SingleQuoteJsEventScope.jsp?userinput=\x27skip\x27\x27\x27\x22fish\x22\x22\x22', 'extra': 'injected string in JS/CSS code (quote escaping issue)', 'sid': '0', 'dir': '_i2/5' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case13-Vbs2DoubleQuoteVbsEventScope.jsp?userinput=\x27skip\x27\x27\x27\x22fish\x22\x22\x22', 'extra': 'injected string in JS/CSS code (quote escaping issue)', 'sid': '0', 'dir': '_i2/6' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case14-Vbs2SingleQuoteVbsEventScope.jsp?userinput=\x27skip\x27\x27\x27\x22fish\x22\x22\x22', 'extra': 'injected string in JS/CSS code (quote escaping issue)', 'sid': '0', 'dir': '_i2/7' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case16-Js2ScriptSupportingProperty.jsp?userinput=skipfish://invalid/%3B%3F', 'extra': 'frame', 'sid': '0', 'dir': '_i2/8' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case17-Js2PropertyJsScopeDoubleQuoteDelimiter.jsp?userinput=\x27skip\x27\x27\x27\x22fish\x22\x22\x22', 'extra': 'injected string in JS/CSS code (quote escaping issue)', 'sid': '0', 'dir': '_i2/9' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case18-Js2PropertyJsScopeSingleQuoteDelimiter.jsp?userinput=\x27skip\x27\x27\x27\x22fish\x22\x22\x22', 'extra': 'injected string in JS/CSS code (quote escaping issue)', 'sid': '0', 'dir': '_i2/10' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case20-Vbs2PropertyVbsScopeDoubleQuoteDelimiter.jsp?userinput=\x27skip\x27\x27\x27\x22fish\x22\x22\x22', 'extra': 'injected string in JS/CSS code (quote escaping issue)', 'sid': '0', 'dir': '_i2/11' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case22-Js2ScriptTagDoubleQuoteDelimiter.jsp?userinput=\x27skip\x27\x27\x27\x22fish\x22\x22\x22', 'extra': 'injected string in JS/CSS code (quote escaping issue)', 'sid': '0', 'dir': '_i2/12' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case23-Js2ScriptTagSingleQuoteDelimiter.jsp?userinput=\x27skip\x27\x27\x27\x22fish\x22\x22\x22', 'extra': 'injected string in JS/CSS code (quote escaping issue)', 'sid': '0', 'dir': '_i2/13' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case25-Vbs2ScriptTagDoubleQuoteDelimiter.jsp?userinput=\x27skip\x27\x27\x27\x22fish\x22\x22\x22', 'extra': 'injected string in JS/CSS code (quote escaping issue)', 'sid': '0', 'dir': '_i2/14' } ]
  },
  { 'severity': 3, 'type': 40101, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case01-Tag2HtmlPageScope.jsp?userinput=textvalue--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000444v343128\x3e', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case02-Tag2TagScope.jsp?userinput=.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000415v343128\x3e', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i3/1' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case03-Tag2TagStructure.jsp?userinput=.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000440v343128\x3e', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i3/2' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case04-Tag2HtmlComment.jsp?userinput=.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000430v343128\x3e', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i3/3' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case05-Tag2Frameset.jsp?userinput=textvalue--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000434v343128\x3e', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i3/4' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case06-Event2TagScope.jsp?userinput=.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000340v343128\x3e', 'extra': 'injected \x27sfi..\x27 parameter value in a tag', 'sid': '0', 'dir': '_i3/5' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case07-Event2DoubleQuotePropertyScope.jsp?userinput=.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000335v343128\x3e', 'extra': 'injected \x27sfi..\x27 parameter value in a tag', 'sid': '0', 'dir': '_i3/6' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case08-Event2SingleQuotePropertyScope.jsp?userinput=.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000385v343128\x3e', 'extra': 'injected \x27sfi..\x27 parameter value in a tag', 'sid': '0', 'dir': '_i3/7' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case12-Js2JsEventScope.jsp?userinput=1234--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000389v343128\x3e', 'extra': 'injected syntax in JS/CSS code', 'sid': '0', 'dir': '_i3/8' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case15-Vbs2VbsEventScope.jsp?userinput=.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000280v343128\x3e', 'extra': 'injected syntax in JS/CSS code', 'sid': '0', 'dir': '_i3/9' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case19-Js2PropertyJsScope.jsp?userinput=1234--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000234v343128\x3e', 'extra': 'injected syntax in JS/CSS code', 'sid': '0', 'dir': '_i3/10' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case21-Vbs2PropertyVbsScope.jsp?userinput=.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000255v343128\x3e', 'extra': 'injected syntax in JS/CSS code', 'sid': '0', 'dir': '_i3/11' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case24-Js2ScriptTag.jsp?userinput=1234--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000044v343128\x3e', 'extra': 'injected syntax in JS/CSS code', 'sid': '0', 'dir': '_i3/12' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case26-Vbs2ScriptTag.jsp?userinput=.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000115v343128\x3e', 'extra': 'injected syntax in JS/CSS code', 'sid': '0', 'dir': '_i3/13' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case29-Vbs2ScriptTagOLCommentScope.jsp?userinput=.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000120v343128\x3e', 'extra': 'injected syntax in JS/CSS code', 'sid': '0', 'dir': '_i3/14' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case30-Tag2HtmlPageScopeMultipleVulnerabilities.jsp?userinput=.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000060v343128\x3e&userinput2=1234', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i3/15' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case30-Tag2HtmlPageScopeMultipleVulnerabilities.jsp?userinput=1234&userinput2=.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000035v343128\x3e', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i3/16' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case31-Tag2HtmlPageScopeDuringException.jsp?userinput=.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000075v343128\x3e', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i3/17' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case32-Tag2HtmlPageScopeValidViewstateRequired.jsp?userinput=.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000095v343128\x3e&__VIEWSTATE=/wEPDwUENTM4MWRkhsjF%2B62gWnhYUcEyuRwTHxGDVzA%3D', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i3/18' } ]
  },
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case01-Tag2HtmlPageScope.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case05-Tag2Frameset.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/1' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case16-Js2ScriptSupportingProperty.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/2' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case17-Js2PropertyJsScopeDoubleQuoteDelimiter.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/3' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case27-Js2ScriptTagOLCommentScope.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/4' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case30-Tag2HtmlPageScopeMultipleVulnerabilities.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/5' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case32-Tag2HtmlPageScopeValidViewstateRequired.jsp', 'extra': '', 'sid': '0', 'dir': '_i4/6' } ]
  },
  { 'severity': 2, 'type': 30402, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case05-Tag2Frameset.jsp?userinput=http://skipfish.invalid/%3B%3F', 'extra': 'frame', 'sid': '0', 'dir': '_i5/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case06-Event2TagScope.jsp?userinput=http://skipfish.invalid/%3B%3F', 'extra': 'img', 'sid': '0', 'dir': '_i5/1' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case07-Event2DoubleQuotePropertyScope.jsp?userinput=http://skipfish.invalid/%3B%3F', 'extra': 'img', 'sid': '0', 'dir': '_i5/2' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case08-Event2SingleQuotePropertyScope.jsp?userinput=http://skipfish.invalid/%3B%3F', 'extra': 'img', 'sid': '0', 'dir': '_i5/3' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case16-Js2ScriptSupportingProperty.jsp?userinput=//skipfish.invalid/%3B%3F', 'extra': 'frame', 'sid': '0', 'dir': '_i5/4' } ]
  },
  { 'severity': 1, 'type': 20102, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/1161.jsp', 'extra': 'Child node limit exceeded', 'sid': '0', 'dir': '_i6/0' } ]
  },
  { 'severity': 0, 'type': 10901, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Apache-Coyote%2F1.1/', 'extra': '', 'sid': '0', 'dir': '_i7/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case01-Tag2HtmlPageScope.jsp', 'extra': '', 'sid': '0', 'dir': '_i7/1' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case05-Tag2Frameset.jsp', 'extra': '', 'sid': '0', 'dir': '_i7/2' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case16-Js2ScriptSupportingProperty.jsp', 'extra': '', 'sid': '0', 'dir': '_i7/3' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case17-Js2PropertyJsScopeDoubleQuoteDelimiter.jsp', 'extra': '', 'sid': '0', 'dir': '_i7/4' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case27-Js2ScriptTagOLCommentScope.jsp', 'extra': '', 'sid': '0', 'dir': '_i7/5' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case30-Tag2HtmlPageScopeMultipleVulnerabilities.jsp', 'extra': '', 'sid': '0', 'dir': '_i7/6' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case32-Tag2HtmlPageScopeValidViewstateRequired.jsp', 'extra': '', 'sid': '0', 'dir': '_i7/7' } ]
  },
  { 'severity': 0, 'type': 10803, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/dummy.html', 'extra': '', 'sid': '0', 'dir': '_i8/0' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET//', 'extra': '', 'sid': '0', 'dir': '_i9/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Apache-Coyote%2F1.1/', 'extra': '', 'sid': '0', 'dir': '_i9/1' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/dddd%2F%02/', 'extra': '', 'sid': '0', 'dir': '_i9/2' } ]
  },
  { 'severity': 0, 'type': 10403, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Case32-Tag2HtmlPageScopeValidViewstateRequired.jsp?userinput=textvalue&__VIEWSTATE=9876sfi', 'extra': '', 'sid': '0', 'dir': '_i10/0' } ]
  },
  { 'severity': 0, 'type': 10401, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/Apache-Coyote%2F1.1/', 'extra': '', 'sid': '0', 'dir': '_i11/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/dddd%2F%02/', 'extra': '', 'sid': '0', 'dir': '_i11/1' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://localhost:8090/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i12/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i12/1' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://localhost:8090/', 'extra': 'Apache-Coyote/1.1', 'sid': '0', 'dir': '_i13/0' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'JSESSIONID', 'sid': '0', 'dir': '_i14/0' } ]
  }
];

