#!bin
./arachni --http-authentication-username "bryce" --http-authentication-password "bryce" http://192.168.0.26/WackoPicko/ \
--scope-include-pattern 'http://192.168.0.26/WackoPicko/' \
--scope-include-pattern 'http://192.168.0.26/WackoPicko/' \
--scope-redundant-path-pattern='calendar.php:1' \
--scope-exclude-pattern 'http://192.168.0.26/WackoPicko/users/logout.php' \
--report-save-path=wackopicko-default-config-arachni-report.afr
