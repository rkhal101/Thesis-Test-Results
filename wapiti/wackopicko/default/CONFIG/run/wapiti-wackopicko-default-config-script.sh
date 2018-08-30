#!bin
wapiti --flush-session -u  http://192.168.0.26/WackoPicko/ \
--scope "folder" \
-x http://192.168.0.26/WackoPicko/logout.php -c cookies.json \
--output "wapiti-wackopicko-default-config-result.txt" -f txt

