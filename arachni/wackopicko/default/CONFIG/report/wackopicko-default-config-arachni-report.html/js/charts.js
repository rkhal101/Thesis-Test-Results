function index_to_shortname( index ){
    return ["os_cmd_injection_timing","rfi","xss","xss_script_context","csrf","sql_injection","xst","unencrypted_password_forms","common_directories","common_admin_interfaces","password_autocomplete","x_frame_options","interesting_responses","form_upload","html_objects","http_only_cookies"][index];
}

function index_to_severity( index ){
    return {"os_cmd_injection_timing":"high","rfi":"high","xss":"high","xss_script_context":"high","csrf":"high","sql_injection":"high","xst":"medium","unencrypted_password_forms":"medium","common_directories":"medium","common_admin_interfaces":"low","password_autocomplete":"low","x_frame_options":"low","interesting_responses":"informational","form_upload":"informational","html_objects":"informational","http_only_cookies":"informational"}[index_to_shortname(index)];
}

function renderCharts() {
    if( window.renderedCharts )
    window.renderedCharts = true;

    c3.generate({
        bindto: '#chart-issues',
        data: {
            columns: [
                ["Trusted",1,1,7,5,2,1,1,5,7,1,4,1,25,1,1,1],
                ["Untrusted",0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0],
                ["Severity",4,4,4,4,4,4,3,3,3,2,2,2,1,1,1,1]
            ],
            axes: {
                Severity: 'y2'
            },
            type: 'bar',
            groups: [
                ['Trusted', 'Untrusted']
            ],
            types: {
                Severity: 'line'
            },
            onclick: function (d) {
                var location;

                if( d.name.toLowerCase() == 'severity' ) {
                    location = 'summary/issues/trusted/severity/' + index_to_severity(d.x);
                } else {
                    location = 'summary/issues/' + d.name.toLowerCase() + '/severity/' +
                        index_to_severity(d.x) + '/' + index_to_shortname(d.x);
                }

                goToLocation( location );
            }
        },
        regions: [{"class":"severity-high","start":0,"end":5},{"class":"severity-medium","start":6,"end":8},{"class":"severity-low","start":9,"end":11},{"class":"severity-informational","start":12}],
        axis: {
            x: {
                type: 'category',
                categories: ["Operating system command injection (timing attack)","Remote File Inclusion","Cross-Site Scripting (XSS)","Cross-Site Scripting (XSS) in script context","Cross-Site Request Forgery","SQL Injection","HTTP TRACE","Unencrypted password form","Common directory","Common administration interface","Password field with auto-complete","Missing 'X-Frame-Options' header","Interesting response","Form-based File Upload","HTML object","HttpOnly cookie"],
                tick: {
                    rotate: 15
                }
            },
            y: {
                label: {
                    text: 'Amount of logged issues',
                    position: 'outer-center'
                }
            },
            y2: {
                label: {
                    text: 'Severity',
                    position: 'outer-center'
                },
                show: true,
                type: 'category',
                categories: [1, 2, 3, 4],
                tick: {
                    format: function (d) {
                        return ["Informational","Low","Medium","High"][d - 1]
                    }
                }
            }
        },
        padding: {
            bottom: 40
        },
        color: {
            pattern: [ '#1f77b4', '#d62728', '#ff7f0e' ]
        }
    });

    c3.generate({
        bindto: '#chart-trust',
        data: {
            type: 'pie',
            columns: [["Trusted",64],["Untrusted",3]]
        },
        pie: {
            onclick: function (d) { goToLocation( 'summary/issues/' + d.id.toLowerCase() ) }
        },
        color: {
            pattern: [ '#1f77b4', '#d62728' ]
        }
    });

    c3.generate({
        bindto: '#chart-elements',
        data: {
            type: 'pie',
            columns: [["form",23],["link",1],["cookie",4],["body",1],["server",38]]
        }
    });

    c3.generate({
        bindto: '#chart-severities',
        data: {
            type: 'pie',
            columns: [["high",17],["medium",16],["low",6],["informational",28]]
        },
        color: {
            pattern: [ '#d62728', '#ff7f0e', '#ffbb78', '#1f77b4' ]
        },
        pie: {
            onclick: function (d) {
                goToLocation( 'summary/issues/trusted/severity/' + d.id );
            }
        }
    });

}
