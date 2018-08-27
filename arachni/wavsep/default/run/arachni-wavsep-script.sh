#!bin
./arachni http://192.168.0.18:8090/wavsep/ \
--scope-include-pattern 'http://192.168.0.18:8090/wavsep' \
--scope-extend-paths '/Users/ranakhalil/Desktop/programs/arachni-1.5.1-0.5.12/bin/paths.txt' \
--report-save-path=wavsep-arachni-report.afr
