#!bin
wapiti --flush-session -u  http://192.168.0.26/WackoPicko/ \
--scope "folder" \
--module "backup,blindsql,buster,crlf,delay,exec,file,htaccess,methods,nikto,permanentxss,shellshock,sql,ssrf,xss" \
-x http://192.168.0.26/WackoPicko/logout.php -c cookies.json \
--output "wapiti-wackopicko-configured-config-result.txt" -f txt