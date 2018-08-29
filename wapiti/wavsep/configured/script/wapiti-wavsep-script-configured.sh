#!bin
wapiti --flush-session -u  http://127.0.0.1:8090/wavsep/ \
--start "http://127.0.0.1:8090/wavsep/index-active.jsp" \
--start "http://127.0.0.1:8090/wavsep/index-passive.jsp" \
--scope "domain" \
--module "backup,blindsql,buster,crlf,delay,exec,file,htaccess,
    methods,nikto,permanentxss,shellshock,sql,ssrf,xss" \
--output "wapiti-wavsep-configured" -f txt

