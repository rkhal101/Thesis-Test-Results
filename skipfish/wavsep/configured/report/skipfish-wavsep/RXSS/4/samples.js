var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://localhost:8090/', 'dir': '_m0/0', 'linked': 2, 'len': 11230 },
    { 'url': 'http://localhost:8090/wavsep/', 'dir': '_m0/1', 'linked': 5, 'len': 1504 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental/', 'dir': '_m0/2', 'linked': 5, 'len': 9145 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental/Case01-Tag2HtmlPageScope-StripScriptTag.jsp', 'dir': '_m0/3', 'linked': 5, 'len': 757 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental/Case01-Tag2HtmlPageScope-StripScriptTag.jsp?userinput=textvalue', 'dir': '_m0/4', 'linked': 5, 'len': 598 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental/Case03-Tag2HtmlPageScope-ConstantAntiCSRFToken.jsp', 'dir': '_m0/5', 'linked': 5, 'len': 876 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental/Case04-Tag2HtmlPageScope-ChangingAntiCSRFToken.jsp?userinput=skipfish&newAnticsrfToken=0.13313791759631732', 'dir': '_m0/6', 'linked': 5, 'len': 607 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental/Case05-ScriptlessInjectionInFormTagActionAttribute.jsp', 'dir': '_m0/7', 'linked': 5, 'len': 651 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental/Case06-ScriptlessInjectionInBaseTagHrefAttribute.jsp?userinput=textvalue', 'dir': '_m0/8', 'linked': 5, 'len': 485 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental/0?password=skipfish', 'dir': '_m0/9', 'linked': 5, 'len': 1138 } ]
  }
];

var issue_samples = [
  { 'severity': 3, 'type': 40601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'implicitly cacheable \x27Set-Cookie\x27 response', 'sid': '0', 'dir': '_i0/0' } ]
  },
  { 'severity': 3, 'type': 40104, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental/Case07-ScriptlessInjectionInScriptTagSrcAttribute.jsp?userinput=//skipfish.invalid/%3B%3F', 'extra': 'script', 'sid': '0', 'dir': '_i1/0' } ]
  },
  { 'severity': 3, 'type': 40101, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental/Case01-Tag2HtmlPageScope-StripScriptTag.jsp?userinput=textvalue--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi001464v155476\x3e', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i2/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental/Case08-InjectionInToCssSelector.jsp?userinput=.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi001375v155476\x3e', 'extra': 'injected syntax in JS/CSS code', 'sid': '0', 'dir': '_i2/1' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental/Case09-InjectionInToCssSelectorAttributeName.jsp?userinput=textvalue--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000044v155476\x3e', 'extra': 'injected syntax in JS/CSS code', 'sid': '0', 'dir': '_i2/2' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental/Case10-InjectionInToCssProperty.jsp?userinput=.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi001415v155476\x3e', 'extra': 'injected syntax in JS/CSS code', 'sid': '0', 'dir': '_i2/3' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental/Case11-InjectionInToCssPropertyValue.jsp?userinput=.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000030v155476\x3e', 'extra': 'injected syntax in JS/CSS code', 'sid': '0', 'dir': '_i2/4' } ]
  },
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental/Case01-Tag2HtmlPageScope-StripScriptTag.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental/Case02-Tag2HtmlPageScope-SecretVectorPOST.jsp?userinput=skipfish', 'extra': '', 'sid': '0', 'dir': '_i3/1' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental/Case03-Tag2HtmlPageScope-ConstantAntiCSRFToken.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/2' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental/Case04-Tag2HtmlPageScope-ChangingAntiCSRFToken.jsp?userinput=skipfish&newAnticsrfToken=0.13313791759631732', 'extra': '', 'sid': '0', 'dir': '_i3/3' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental/Case05-ScriptlessInjectionInFormTagActionAttribute.jsp?userinput=skipfish', 'extra': '', 'sid': '0', 'dir': '_i3/4' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental/Case06-ScriptlessInjectionInBaseTagHrefAttribute.jsp?userinput=skipfish', 'extra': '', 'sid': '0', 'dir': '_i3/5' } ]
  },
  { 'severity': 2, 'type': 30402, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental/Case05-ScriptlessInjectionInFormTagActionAttribute.jsp?userinput=//skipfish.invalid/%3B%3F', 'extra': 'form', 'sid': '0', 'dir': '_i4/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental/Case06-ScriptlessInjectionInBaseTagHrefAttribute.jsp?userinput=//skipfish.invalid/%3B%3F', 'extra': 'base', 'sid': '0', 'dir': '_i4/1' } ]
  },
  { 'severity': 1, 'type': 20101, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental/text%2Fhtml.jsp/\x27`uname`\x27', 'extra': 'Shell injection (diff)', 'sid': '0', 'dir': '_i5/0' } ]
  },
  { 'severity': 0, 'type': 10901, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental/Case01-Tag2HtmlPageScope-StripScriptTag.jsp', 'extra': '', 'sid': '0', 'dir': '_i6/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental/Case02-Tag2HtmlPageScope-SecretVectorPOST.jsp', 'extra': '', 'sid': '0', 'dir': '_i6/1' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental/Case03-Tag2HtmlPageScope-ConstantAntiCSRFToken.jsp', 'extra': '', 'sid': '0', 'dir': '_i6/2' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental/Case04-Tag2HtmlPageScope-ChangingAntiCSRFToken.jsp', 'extra': '', 'sid': '0', 'dir': '_i6/3' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental/Case05-ScriptlessInjectionInFormTagActionAttribute.jsp', 'extra': '', 'sid': '0', 'dir': '_i6/4' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental/Case06-ScriptlessInjectionInBaseTagHrefAttribute.jsp', 'extra': '', 'sid': '0', 'dir': '_i6/5' } ]
  },
  { 'severity': 0, 'type': 10602, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental/textvalue?password=skipfish', 'extra': '', 'sid': '0', 'dir': '_i7/0' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental//', 'extra': '', 'sid': '0', 'dir': '_i8/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental/text%2Fhtml/', 'extra': '', 'sid': '0', 'dir': '_i8/1' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental/text%2Fhtml.jsp/', 'extra': '', 'sid': '0', 'dir': '_i8/2' } ]
  },
  { 'severity': 0, 'type': 10401, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental/text%2Fhtml/', 'extra': '', 'sid': '0', 'dir': '_i9/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental/text%2Fhtml.jsp/', 'extra': '', 'sid': '0', 'dir': '_i9/1' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://localhost:8090/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i10/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-GET-Experimental/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i10/1' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://localhost:8090/', 'extra': 'Apache-Coyote/1.1', 'sid': '0', 'dir': '_i11/0' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'JSESSIONID', 'sid': '0', 'dir': '_i12/0' } ]
  }
];

