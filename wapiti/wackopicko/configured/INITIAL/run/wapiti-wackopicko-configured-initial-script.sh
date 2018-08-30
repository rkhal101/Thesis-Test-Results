#!bin
wapiti --flush-session -u  http://192.168.0.26/WackoPicko/ \
--scope "folder" \
--module "backup,blindsql,buster,crlf,delay,exec,file,htaccess,methods,nikto,permanentxss,shellshock,sql,ssrf,xss" \
--output "wapiti-wackopicko-configured-initial-result.txt" -f txt