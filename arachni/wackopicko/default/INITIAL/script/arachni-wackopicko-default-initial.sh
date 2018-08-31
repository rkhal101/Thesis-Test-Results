#!bin
./arachni http://192.168.0.26/WackoPicko/ \
--scope-include-pattern 'http://192.168.0.26/WackoPicko/' \
--scope-redundant-path-pattern='calendar.php:1' \
--report-save-path=wackopicko-default--initial-arachni-report.afr
