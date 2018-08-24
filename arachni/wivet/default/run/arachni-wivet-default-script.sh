#!bin
./arachni http://192.168.0.18:8090/ --checks trainer --audit-links --audit-forms \
--scope-include-pattern 'http://192.168.0.18:8090/' \
--scope-exclude-pattern 'http://192.168.0.18:8090/offscanpages.*' \
--scope-exclude-pattern 'http://192.168.0.18:8090/logout.php' \
--scope-exclude-pattern 'http://192.168.0.18:8090/pages/100.php' \
--http-cookie-string="PHPSESSID=77d4ad6bbe505bba989152390e4e9e25" \
--report-save-path=wivet-arachni-report.afr
