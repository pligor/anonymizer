jQuery("#simulation")
  .on("click", ".s-3f01b028-1fc4-4900-aa2d-745006f7b56d .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "exporting" ],
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_204")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_37" ],
                    "value": "C:\\docs\\custom_destination.txt"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "which_export_selected" ],
                    "value": "-1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_37" ],
                    "value": "C:\\docs\\custom_destination.txt"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "which_export_selected" ],
                    "value": "-1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_23")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_5",
                  "property": "jimGetValue"
                },"db.mycompany.com:3636" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_5" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_5",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-after_setting_db" ],
                    "transition": "fade"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "which_export_selected" ],
                    "value": "-1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_5",
                  "property": "jimGetValue"
                },"db.mycompany.com:3636" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_5",
                  "property": "jimGetValue"
                },"db.mycompany.com:3636" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_173" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_5" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_5",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-after_setting_db" ],
                    "transition": "fade"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "which_export_selected" ],
                    "value": "-1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_11")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "which_export_selected"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "which_export_selected" ],
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "which_export_selected" ],
                    "value": "-1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_10")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "which_export_selected"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "which_export_selected" ],
                    "value": "0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "which_export_selected" ],
                    "value": "-1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724",
                    "transition": "slideandfade"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/908bc018-bee5-45de-8a4f-845a2b307d57",
                    "transition": "slideandfade"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/3f01b028-1fc4-4900-aa2d-745006f7b56d",
                    "transition": "slideandfade"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d9ca8466-7e3b-487b-ae33-bfaada00a071"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("change", ".s-3f01b028-1fc4-4900-aa2d-745006f7b56d .change", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "action": "jimCount",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_5",
                    "property": "jimGetValue"
                  } ]
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-db_hostname_label" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3f01b028-1fc4-4900-aa2d-745006f7b56d #s-Rectangle_23": {
                      "attributes": {
                        "box-shadow": "0px 10px 20px 2px #404040",
                        "text-shadow": "none",
                        "font-size": "24.0pt",
                        "font-family": "'OpenSans-Regular',Arial"
                      }
                    }
                  },{
                    "#s-3f01b028-1fc4-4900-aa2d-745006f7b56d #s-Rectangle_23 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-3f01b028-1fc4-4900-aa2d-745006f7b56d #s-Rectangle_23 span": {
                      "attributes": {
                        "color": "#EFEFEF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Regular',Arial",
                        "font-size": "24.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-db_hostname_label" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3f01b028-1fc4-4900-aa2d-745006f7b56d #s-Rectangle_23": {
                      "attributes": {
                        "box-shadow": "none",
                        "text-shadow": "none",
                        "font-size": "24.0pt",
                        "font-family": "'OpenSans-Regular',Arial"
                      }
                    }
                  },{
                    "#s-3f01b028-1fc4-4900-aa2d-745006f7b56d #s-Rectangle_23 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-3f01b028-1fc4-4900-aa2d-745006f7b56d #s-Rectangle_23 span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Regular',Arial",
                        "font-size": "24.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_5",
                  "property": "jimGetValue"
                },"db.mycompany.com:3636" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_172" ],
                    "effect": {
                      "type": "shake",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_172" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "action": "jimCount",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_6",
                    "property": "jimGetValue"
                  } ]
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-username_label" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "action": "jimCount",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_6",
                    "property": "jimGetValue"
                  } ]
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-username_label" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "action": "jimCount",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_7",
                    "property": "jimGetValue"
                  } ]
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-password_label" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "action": "jimCount",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_7",
                    "property": "jimGetValue"
                  } ]
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-password_label" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-3f01b028-1fc4-4900-aa2d-745006f7b56d .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3f01b028-1fc4-4900-aa2d-745006f7b56d #s-Input_5": {
                      "attributes": {
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "5px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#434343",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3f01b028-1fc4-4900-aa2d-745006f7b56d #s-Input_6": {
                      "attributes": {
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "5px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#434343",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3f01b028-1fc4-4900-aa2d-745006f7b56d #s-Input_7": {
                      "attributes": {
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "5px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#434343",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-3f01b028-1fc4-4900-aa2d-745006f7b56d .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3f01b028-1fc4-4900-aa2d-745006f7b56d #s-Input_5": {
                      "attributes": {
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#666666",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3f01b028-1fc4-4900-aa2d-745006f7b56d #s-Input_6": {
                      "attributes": {
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#666666",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3f01b028-1fc4-4900-aa2d-745006f7b56d #s-Input_7": {
                      "attributes": {
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#666666",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-3f01b028-1fc4-4900-aa2d-745006f7b56d .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Image_204") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3f01b028-1fc4-4900-aa2d-745006f7b56d #s-drag_n_drop_csv_file_background": {
                      "attributes": {
                        "background-color": "#999999",
                        "background-image": "none",
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-3f01b028-1fc4-4900-aa2d-745006f7b56d #s-drag_n_drop_csv_file_background": {
                      "attributes-ie": {
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "#999999",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3f01b028-1fc4-4900-aa2d-745006f7b56d #s-Image_204 > svg": {
                      "attributes": {
                        "overlay": "#EFEFEF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3f01b028-1fc4-4900-aa2d-745006f7b56d #s-Text_19": {
                      "attributes": {
                        "font-size": "18.0pt",
                        "font-family": "'OpenSans-Regular',Arial"
                      }
                    }
                  },{
                    "#s-3f01b028-1fc4-4900-aa2d-745006f7b56d #s-Text_19 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-3f01b028-1fc4-4900-aa2d-745006f7b56d #s-Text_19 span": {
                      "attributes": {
                        "color": "#EFEFEF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Regular',Arial",
                        "font-size": "18.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_20" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Button_11" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_19" ],
                    "value": "Drop CSV File in here"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3f01b028-1fc4-4900-aa2d-745006f7b56d #s-Text_8": {
                      "attributes": {
                        "font-size": "14.0pt",
                        "font-family": "'OpenSans-Regular',Arial"
                      }
                    }
                  },{
                    "#s-3f01b028-1fc4-4900-aa2d-745006f7b56d #s-Text_8 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-3f01b028-1fc4-4900-aa2d-745006f7b56d #s-Text_8 span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "underline",
                        "font-family": "'OpenSans-Regular',Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_15") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3f01b028-1fc4-4900-aa2d-745006f7b56d #s-Text_2": {
                      "attributes": {
                        "font-size": "14.0pt",
                        "font-family": "'OpenSans-Regular',Arial"
                      }
                    }
                  },{
                    "#s-3f01b028-1fc4-4900-aa2d-745006f7b56d #s-Text_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-3f01b028-1fc4-4900-aa2d-745006f7b56d #s-Text_2 span": {
                      "attributes": {
                        "color": "#EFEFEF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Regular',Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3f01b028-1fc4-4900-aa2d-745006f7b56d #s-Image_21 > svg": {
                      "attributes": {
                        "overlay": "#EFEFEF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_40" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-3f01b028-1fc4-4900-aa2d-745006f7b56d .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Image_204")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_15")) {
      jEvent.undoCases(jFirer);
    }
  })
  .on("variablechange.jim", ".s-3f01b028-1fc4-4900-aa2d-745006f7b56d .variablechange", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-export_ready")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "which_export_selected") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "which_export_selected"
                },"-1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-export_ready" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "exporting") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "exporting"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-exporting" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-export_csv")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "which_export_selected") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "which_export_selected"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-export_csv" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_65")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "exporting"),
              "actions": [
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Image_65" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "1600"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 10000
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-export_mysql")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "which_export_selected") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "which_export_selected"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-export_mysql" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_41")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "which_export_selected") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "which_export_selected"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3f01b028-1fc4-4900-aa2d-745006f7b56d #s-Rectangle_41": {
                      "attributes": {
                        "border-top-width": "3px",
                        "border-top-style": "solid",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "3px",
                        "border-right-style": "solid",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "3px",
                        "border-left-style": "solid",
                        "border-left-color": "#CCCCCC",
                        "border-radius": "0px 0px 0px 0px",
                        "box-shadow": "0px 0px 10px 0px #000000",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-3f01b028-1fc4-4900-aa2d-745006f7b56d #s-Rectangle_41": {
                      "attributes-ie": {
                        "border-top-width": "3px",
                        "border-top-style": "solid",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "3px",
                        "border-right-style": "solid",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "3px",
                        "border-left-style": "solid",
                        "border-left-color": "#CCCCCC",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "which_export_selected"),
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3f01b028-1fc4-4900-aa2d-745006f7b56d #s-Rectangle_41": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CCCCCC",
                        "border-radius": "0px 0px 0px 0px",
                        "box-shadow": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-3f01b028-1fc4-4900-aa2d-745006f7b56d #s-Rectangle_41": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CCCCCC",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_32")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "which_export_selected") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "which_export_selected"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3f01b028-1fc4-4900-aa2d-745006f7b56d #s-Rectangle_32": {
                      "attributes": {
                        "border-top-width": "3px",
                        "border-top-style": "solid",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "3px",
                        "border-right-style": "solid",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "3px",
                        "border-left-style": "solid",
                        "border-left-color": "#CCCCCC",
                        "border-radius": "0px 0px 0px 0px",
                        "box-shadow": "0px 0px 10px 0px #000000",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-3f01b028-1fc4-4900-aa2d-745006f7b56d #s-Rectangle_32": {
                      "attributes-ie": {
                        "border-top-width": "3px",
                        "border-top-style": "solid",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "3px",
                        "border-right-style": "solid",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "3px",
                        "border-left-style": "solid",
                        "border-left-color": "#CCCCCC",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "which_export_selected"),
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3f01b028-1fc4-4900-aa2d-745006f7b56d #s-Rectangle_32": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CCCCCC",
                        "border-radius": "0px 0px 0px 0px",
                        "box-shadow": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-3f01b028-1fc4-4900-aa2d-745006f7b56d #s-Rectangle_32": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CCCCCC",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-progbar_csv_inner")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "exporting") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "exporting"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-progbar_csv" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-progbar_csv_inner" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "467"
                    },
                    "height": {
                      "type": "noresize"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 7000
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-progbar_sql_inner")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "exporting") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "exporting"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-progbar_sql" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-progbar_sql_inner" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "467"
                    },
                    "height": {
                      "type": "noresize"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "easeOutSine",
                      "duration": 10000
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "exporting") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "exporting"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 7000
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_5" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "exporting") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "exporting"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 10100
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });