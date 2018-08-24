jQuery(function ($) {
    var download_button = $('#configuration-download');

    // Create a blob object.
    var bb = new Blob(
        ["---\naudit:\n  parameter_values: true\n  exclude_vector_patterns: []\n  include_vector_patterns: []\n  link_templates: []\n  links: true\n  forms: true\nbrowser_cluster:\n  local_storage: {}\n  wait_for_elements: {}\n  pool_size: 6\n  job_timeout: 10\n  worker_time_to_live: 100\n  ignore_images: false\n  screen_width: 1600\n  screen_height: 1200\ndatastore:\n  report_path: wivet-arachni-report.afr\nhttp:\n  user_agent: Arachni/v1.5.1\n  request_timeout: 10000\n  request_redirect_limit: 5\n  request_concurrency: 20\n  request_queue_size: 100\n  request_headers: {}\n  response_max_size: 500000\n  cookies: {}\n  authentication_type: auto\n  cookie_string: PHPSESSID=77d4ad6bbe505bba989152390e4e9e25\ninput:\n  values: {}\n  default_values:\n    name: arachni_name\n    user: arachni_user\n    usr: arachni_user\n    pass: 5543!%arachni_secret\n    txt: arachni_text\n    num: '132'\n    amount: '100'\n    mail: arachni@email.gr\n    account: '12'\n    id: '1'\n  without_defaults: false\n  force: false\nscope:\n  redundant_path_patterns: {}\n  dom_depth_limit: 5\n  exclude_file_extensions: []\n  exclude_path_patterns:\n  - http://192.168.0.18:8090/offscanpages.*\n  - http://192.168.0.18:8090/logout.php\n  - http://192.168.0.18:8090/pages/100.php\n  exclude_content_patterns: []\n  include_path_patterns:\n  - http://192.168.0.18:8090/\n  restrict_paths: []\n  extend_paths: []\n  url_rewrites: {}\nsession: {}\nchecks:\n- trainer\nplatforms: []\nplugins: {}\nno_fingerprinting: false\nauthorized_by: \nurl: http://192.168.0.18:8090/\n"],
        { type : 'application/yaml' }
    );

    download_button.attr( 'href', window.URL.createObjectURL( bb ) );
    download_button.attr( 'download', '192.168.0.18-profile.afp' );
});
