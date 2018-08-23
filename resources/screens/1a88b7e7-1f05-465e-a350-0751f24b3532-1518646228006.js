jQuery("#simulation")
  .on("click", ".s-1a88b7e7-1f05-465e-a350-0751f24b3532 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Hotspot_4")) {
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
    } else if(jFirer.is("#s-Text_cell_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "is_column_selected" ],
                    "value": {
                      "action": "jimMod",
                      "parameter": [ {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "is_column_selected"
                        },"1" ]
                      },"2" ]
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
    } else if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "is_title_selected" ],
                    "value": {
                      "action": "jimMod",
                      "parameter": [ {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "is_title_selected"
                        },"1" ]
                      },"2" ]
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
    } else if(jFirer.is("#s-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/908bc018-bee5-45de-8a4f-845a2b307d57"
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
    } else if(jFirer.is("#s-Button_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d9ca8466-7e3b-487b-ae33-bfaada00a071",
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
    } else if(jFirer.is("#s-Text_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-view_table_data_panel" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "data_preview_enabled" ],
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
    } else if(jFirer.is("#s-Image_178")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-view_table_data_panel" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "data_preview_enabled" ],
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
    } else if(jFirer.is("#s-Hotspot_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "data_preview_enabled" ],
                    "value": "0"
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
  .on("drag", ".s-1a88b7e7-1f05-465e-a350-0751f24b3532 .drag", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-draggable_table_panel" ],
                    "top": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "left": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "containment": true
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
  .on("dragend", ".s-1a88b7e7-1f05-465e-a350-0751f24b3532 .drag", function(event, data) {
    jimEvent(event).jimRestoreDrag(jQuery(this));
  })
  .on("dragend", ".s-1a88b7e7-1f05-465e-a350-0751f24b3532 .drag", function(event, data) {
    jimEvent(event).jimDestroyDrag(jQuery(this));
  })
  .on("mouseenter dragenter", ".s-1a88b7e7-1f05-465e-a350-0751f24b3532 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Hotspot_4") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Text_2": {
                      "attributes": {
                        "font-size": "14.0pt",
                        "font-family": "'OpenSans-Regular',Arial"
                      }
                    }
                  },{
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Text_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Text_2 span": {
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
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Image_21 > svg": {
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
                    "target": [ "#s-Rectangle_30" ]
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
    } else if(jFirer.is("#s-Text_cell_9") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Text_cell_9": {
                      "attributes": {
                        "background-color": "#CCCCCC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Text_cell_9": {
                      "attributes-ie": {
                        "-pie-background": "#CCCCCC",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-Text_cell_10") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Text_cell_10": {
                      "attributes": {
                        "background-color": "#CCCCCC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Text_cell_10": {
                      "attributes-ie": {
                        "-pie-background": "#CCCCCC",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-Text_cell_11") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Text_cell_11": {
                      "attributes": {
                        "background-color": "#CCCCCC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Text_cell_11": {
                      "attributes-ie": {
                        "-pie-background": "#CCCCCC",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-Text_cell_12") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "is_column_selected"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Text_cell_12": {
                      "attributes": {
                        "background-color": "#CCCCCC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Text_cell_12": {
                      "attributes-ie": {
                        "-pie-background": "#CCCCCC",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-Text_cell_13") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Text_cell_13": {
                      "attributes": {
                        "background-color": "#CCCCCC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Text_cell_13": {
                      "attributes-ie": {
                        "-pie-background": "#CCCCCC",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-Rectangle_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "is_title_selected"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Rectangle_3": {
                      "attributes": {
                        "background-color": "#CCCCCC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Rectangle_3": {
                      "attributes-ie": {
                        "-pie-background": "#CCCCCC",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-Hotspot_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Panel_12": {
                      "attributes": {
                        "opacity": "0.99"
                      }
                    }
                  },{
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Panel_12 .verticalalign": {
                      "attributes": {
                        "vertical-align": "top"
                      }
                    }
                  },{
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Panel_12": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=99)",
                        "filter": "alpha(opacity=99)"
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
    } else if(jFirer.is("#s-Panel_11") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Image_178 > svg": {
                      "attributes": {
                        "overlay": "#434343"
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
    }
  })
  .on("mouseleave dragleave", ".s-1a88b7e7-1f05-465e-a350-0751f24b3532 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Hotspot_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_cell_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_cell_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_cell_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_cell_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_cell_13")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Panel_11")) {
      jEvent.undoCases(jFirer);
    }
  })
  .on("variablechange.jim", ".s-1a88b7e7-1f05-465e-a350-0751f24b3532 .variablechange", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_22")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "drive_col_anonymized") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "drive_col_anonymized"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_22" ]
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
    } else if(jFirer.is("#s-Text_cell_12")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "is_column_selected") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "is_column_selected"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Text_cell_12": {
                      "attributes": {
                        "background-color": "#434343",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#F3F3F3",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#F3F3F3",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#F3F3F3",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#F3F3F3",
                        "border-radius": "0px 0px 0px 0px",
                        "line-height": "14px",
                        "font-size": "10.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Text_cell_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Text_cell_12 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Arial',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Text_cell_12": {
                      "attributes-ie": {
                        "-pie-background": "#434343",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "is_title_selected" ],
                    "value": "0"
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "is_column_selected"),
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Text_cell_12": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DDDDDD",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DDDDDD",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px",
                        "line-height": "14px",
                        "font-size": "10.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Text_cell_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Text_cell_12 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Arial',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Text_cell_12": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "is_title_selected") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "is_title_selected"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Rectangle_3": {
                      "attributes": {
                        "background-color": "#434343",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#F3F3F3",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#F3F3F3",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#F3F3F3",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#F3F3F3",
                        "border-radius": "1px 1px 1px 1px",
                        "font-size": "10.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Rectangle_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Rectangle_3 span": {
                      "attributes": {
                        "color": "#F3F3F3",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Arial',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  },{
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Rectangle_3": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#F3F3F3",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#F3F3F3",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#F3F3F3",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#F3F3F3",
                        "border-radius": "1px 1px 1px 1px",
                        "-pie-background": "#434343",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "is_column_selected" ],
                    "value": "0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "is_title_selected"),
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Rectangle_3": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#434343",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#434343",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#434343",
                        "border-radius": "1px 1px 0px 0px",
                        "font-size": "10.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Rectangle_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Rectangle_3 span": {
                      "attributes": {
                        "color": "#333333",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Arial',Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  },{
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Rectangle_3": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#434343",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#434343",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#434343",
                        "border-radius": "1px 1px 0px 0px",
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-Rectangle_18")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "drive_col_anonymized") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "drive_col_anonymized"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_18" ]
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
              "condition": (data.variableTarget === "is_column_selected") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "is_column_selected"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Rectangle_18": {
                      "attributes": {
                        "background-color": "#F3F3F3",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Rectangle_18": {
                      "attributes-ie": {
                        "-pie-background": "#F3F3F3",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "is_column_selected"),
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Rectangle_18": {
                      "attributes": {
                        "background-color": "#434343",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Rectangle_18": {
                      "attributes-ie": {
                        "-pie-background": "#434343",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-Rectangle_26")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "cars_table_anonymized") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "cars_table_anonymized"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_26" ]
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
    } else if(jFirer.is("#s-Rectangle_27")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "cars_table_anonymized") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "cars_table_anonymized"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_27" ]
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
    } else if(jFirer.is("#s-Rectangle_28")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "cars_table_anonymized") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "cars_table_anonymized"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_28" ]
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
    } else if(jFirer.is("#s-Rectangle_29")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "cars_table_anonymized") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "cars_table_anonymized"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_29" ]
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
    } else if(jFirer.is("#s-table_op_panel")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "is_title_selected") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "is_title_selected"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-table_op_panel" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "is_title_selected") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "is_column_selected"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-empty_panel" ]
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
              "condition": (data.variableTarget === "cars_table_anonymized") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "cars_table_anonymized"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Rectangle_23": {
                      "attributes": {
                        "background-color": "#F3F3F3",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Rectangle_23": {
                      "attributes-ie": {
                        "-pie-background": "#F3F3F3",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-Text_22")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "cars_table_anonymized") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "cars_table_anonymized"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Text_22": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "'OpenSans-Regular',Arial"
                      }
                    }
                  },{
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Text_22 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-1a88b7e7-1f05-465e-a350-0751f24b3532 #s-Text_22 span": {
                      "attributes": {
                        "color": "#EFEFEF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Regular',Arial",
                        "font-size": "12.0pt"
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
    } else if(jFirer.is("#s-Radio_button_8")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "cars_table_anonymized") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "cars_table_anonymized"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Radio_button_8" ],
                    "value": "true"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimEnable",
                  "parameter": {
                    "target": [ "#s-Radio_button_8" ]
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
    } else if(jFirer.is("#s-col_anon_notification_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "cars_table_anonymized") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "cars_table_anonymized"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-col_anon_notification_1" ]
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
    } else if(jFirer.is("#s-col_op_panel")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "is_title_selected") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "is_title_selected"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-table_op_panel" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "is_title_selected") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "is_column_selected"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-empty_panel" ]
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
              "condition": (data.variableTarget === "is_column_selected") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "is_column_selected"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-col_op_panel" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "is_column_selected") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "is_title_selected"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-empty_panel" ]
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
    } else if(jFirer.is("#s-anon_op2_background_sel")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "drive_col_anonymized") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "drive_col_anonymized"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-anon_op2_background_sel" ]
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
    } else if(jFirer.is("#s-col_anon_notification")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "drive_col_anonymized") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "drive_col_anonymized"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-col_anon_notification" ]
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
              "condition": (data.variableTarget === "data_preview_enabled") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "data_preview_enabled"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "data_preview_enabled"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-table_op_panel" ]
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