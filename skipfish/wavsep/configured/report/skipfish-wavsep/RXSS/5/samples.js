var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://localhost:8090/', 'dir': '_m0/0', 'linked': 2, 'len': 11230 },
    { 'url': 'http://localhost:8090/wavsep/', 'dir': '_m0/1', 'linked': 5, 'len': 1504 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST-Experimental/', 'dir': '_m0/2', 'linked': 5, 'len': 8906 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST-Experimental/Case01-Tag2HtmlPageScope-StripScriptTag.jsp', 'dir': '_m0/3', 'linked': 5, 'len': 757 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST-Experimental/Case01-Tag2HtmlPageScope-StripScriptTag.jsp', 'dir': '_m0/4', 'linked': 5, 'len': 597 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST-Experimental/Case03-Tag2HtmlPageScope-ConstantAntiCSRFToken.jsp', 'dir': '_m0/5', 'linked': 5, 'len': 878 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST-Experimental/Case05-ScriptlessInjectionInFormTagActionAttribute.jsp', 'dir': '_m0/6', 'linked': 5, 'len': 651 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST-Experimental/Case06-ScriptlessInjectionInBaseTagHrefAttribute.jsp?userinput=skipfish', 'dir': '_m0/7', 'linked': 5, 'len': 484 },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST-Experimental/0?password=skipfish', 'dir': '_m0/8', 'linked': 5, 'len': 1140 } ]
  }
];

var issue_samples = [
  { 'severity': 3, 'type': 40601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'implicitly cacheable \x27Set-Cookie\x27 response', 'sid': '0', 'dir': '_i0/0' } ]
  },
  { 'severity': 3, 'type': 40104, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST-Experimental/Case07-ScriptlessInjectionInScriptTagSrcAttribute.jsp?userinput=//skipfish.invalid/%3B%3F', 'extra': 'script', 'sid': '0', 'dir': '_i1/0' } ]
  },
  { 'severity': 3, 'type': 40101, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST-Experimental/Case01-Tag2HtmlPageScope-StripScriptTag.jsp', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i2/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST-Experimental/Case08-InjectionInToCssSelector.jsp?userinput=.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi001380v883733\x3e', 'extra': 'injected syntax in JS/CSS code', 'sid': '0', 'dir': '_i2/1' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST-Experimental/Case09-InjectionInToCssSelectorAttributeName.jsp?userinput=skipfish--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi001419v883733\x3e', 'extra': 'injected syntax in JS/CSS code', 'sid': '0', 'dir': '_i2/2' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST-Experimental/Case10-InjectionInToCssProperty.jsp?userinput=.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi001395v883733\x3e', 'extra': 'injected syntax in JS/CSS code', 'sid': '0', 'dir': '_i2/3' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST-Experimental/Case11-InjectionInToCssPropertyValue.jsp?userinput=.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi001410v883733\x3e', 'extra': 'injected syntax in JS/CSS code', 'sid': '0', 'dir': '_i2/4' } ]
  },
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST-Experimental/Case01-Tag2HtmlPageScope-StripScriptTag.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST-Experimental/Case02-Tag2HtmlPageScope-SecretVectorGET.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/1' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST-Experimental/Case03-Tag2HtmlPageScope-ConstantAntiCSRFToken.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/2' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST-Experimental/Case04-Tag2HtmlPageScope-ChangingAntiCSRFToken.jsp', 'extra': '', 'sid': '0', 'dir': '_i3/3' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST-Experimental/Case05-ScriptlessInjectionInFormTagActionAttribute.jsp?userinput=skipfish', 'extra': '', 'sid': '0', 'dir': '_i3/4' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST-Experimental/Case06-ScriptlessInjectionInBaseTagHrefAttribute.jsp?userinput=skipfish', 'extra': '', 'sid': '0', 'dir': '_i3/5' } ]
  },
  { 'severity': 2, 'type': 30402, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST-Experimental/Case05-ScriptlessInjectionInFormTagActionAttribute.jsp?userinput=//skipfish.invalid/%3B%3F', 'extra': 'form', 'sid': '0', 'dir': '_i4/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST-Experimental/Case06-ScriptlessInjectionInBaseTagHrefAttribute.jsp?userinput=//skipfish.invalid/%3B%3F', 'extra': 'base', 'sid': '0', 'dir': '_i4/1' } ]
  },
  { 'severity': 0, 'type': 10901, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST-Experimental/Case01-Tag2HtmlPageScope-StripScriptTag.jsp', 'extra': '', 'sid': '0', 'dir': '_i5/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST-Experimental/Case02-Tag2HtmlPageScope-SecretVectorGET.jsp', 'extra': '', 'sid': '0', 'dir': '_i5/1' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST-Experimental/Case03-Tag2HtmlPageScope-ConstantAntiCSRFToken.jsp', 'extra': '', 'sid': '0', 'dir': '_i5/2' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST-Experimental/Case04-Tag2HtmlPageScope-ChangingAntiCSRFToken.jsp', 'extra': '', 'sid': '0', 'dir': '_i5/3' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST-Experimental/Case05-ScriptlessInjectionInFormTagActionAttribute.jsp', 'extra': '', 'sid': '0', 'dir': '_i5/4' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST-Experimental/Case06-ScriptlessInjectionInBaseTagHrefAttribute.jsp', 'extra': '', 'sid': '0', 'dir': '_i5/5' } ]
  },
  { 'severity': 0, 'type': 10602, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST-Experimental/skipfish?password=skipfish', 'extra': '', 'sid': '0', 'dir': '_i6/0' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST-Experimental//', 'extra': '', 'sid': '0', 'dir': '_i7/0' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://localhost:8090/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/0' },
    { 'url': 'http://localhost:8090/wavsep/active/Reflected-XSS/RXSS-Detection-Evaluation-POST-Experimental/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i8/1' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://localhost:8090/', 'extra': 'Apache-Coyote/1.1', 'sid': '0', 'dir': '_i9/0' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://localhost:8090/wavsep/', 'extra': 'JSESSIONID', 'sid': '0', 'dir': '_i10/0' } ]
  }
];

