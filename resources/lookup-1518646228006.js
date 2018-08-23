(function(window, undefined) {
  var dictionary = {
    "908bc018-bee5-45de-8a4f-845a2b307d57": "Anonymize",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Import",
    "d9ca8466-7e3b-487b-ae33-bfaada00a071": "Metrics",
    "3f01b028-1fc4-4900-aa2d-745006f7b56d": "Export",
    "1a88b7e7-1f05-465e-a350-0751f24b3532": "Anonymized",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "default_template",
    "e73b655d-d3ec-4dcc-a55c-6e0293422bde": "960 grid - 16 columns",
    "ef07b413-721c-418e-81b1-33a7ed533245": "960 grid - 12 columns",
    "f894517a-70e0-41df-9cec-b257ca85088c": "test_template",
    "a5fc2ec3-eea7-4702-950b-351b09bf10c9": "testing",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);