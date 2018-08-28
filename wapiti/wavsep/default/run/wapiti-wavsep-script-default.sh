#!bin
wapiti --flush-session -u  http://127.0.0.1:8090/wavsep/ \
--start "http://127.0.0.1:8090/wavsep/index-active.jsp" \
--start "http://127.0.0.1:8090/wavsep/index-passive.jsp" \
--scope "domain" \
--output "/Users/ranakhalil/Desktop/wapiti-wavsep-result-official" -f txt

