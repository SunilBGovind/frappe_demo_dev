// Copyright (c) 2019, Sunil Govind and contributors
// For license information, please see license.txt
frappe.ui.form.on('Risk Mitigation Plan', {
    onload: function(frm, cdt, cdn) {
        cur_frm.toggle_enable('risk_mitigation_plan_list', false);
        if (frm.doc.__islocal) {
            frm.set_query("marketing", function() {
                return {
                    "filters": {
                        "department": "Marketing - KT"
                    }
                }
            });
            frm.set_query("purchase", function() {
                return {
                    "filters": {
                        "department": "Purchase - KT"
                    }
                }
            });
            frm.set_query("engineering", function() {
                return {
                    "filters": {
                        "department": "Research & Development - KT"
                    }
                }
            });
            frm.set_query("technical_head", function() {
                return {
                    "filters": {
                        "department": "Operations - KT"
                    }
                }
            });
            frm.set_query("commercial", function() {
                return {
                    "filters": {
                        "department": "Customer Service - KT"
                    }
                }
            });
            frm.set_query("quality", function() {
                return {
                    "filters": {
                        "department": "Quality Management - KT"
                    }
                }
            });
            frm.set_query("production", function() {
                return {
                    "filters": {
                        "department": "Production - KT"
                    }
                }
            });

            frappe.call({
                method: "demo.demo.doctype.risk_mitigation_plan.risk_mitigation_plan.get_total_risk_value",
                args: {
                    "risk_analysis": frm.doc.risk_analysis
                },
                async: false,
                callback: function(r) {
                    var risk_analysis_value = 0;
                    risk_analysis_value = r.message.total_risk;
                    if (risk_analysis_value > 1.50) {
                        frappe.call({
                            method: "demo.demo.doctype.risk_mitigation_plan.risk_mitigation_plan.get_all_risk_elements",
                            args: {
                                "risk_analysis": frm.doc.risk_analysis
                            },
                            async: false,
                            callback: function(r) {
                                cur_frm.clear_table("risk_mitigation_plan_list");
                                cur_frm.refresh_fields();
                                for (var i = 0; i < r.message.length; i++) {
                                    var child = cur_frm.add_child("risk_mitigation_plan_list");
                                    frappe.model.set_value(child.doctype, child.name, "risk_element", r.message[i].risk_element);
                                    frappe.model.set_value(child.doctype, child.name, "can_delete", 1);
                                    cur_frm.refresh_fields("risk_element");
                                } //end of for loop...                    
                                cur_frm.refresh_fields("risk_element");
                                refresh_field("risk_mitigation_plan_list");
                            }
                        }); //end of frappe call
                    } else if (risk_analysis_value <= 1.5) {
                        frappe.call({
                            method: "demo.demo.doctype.risk_mitigation_plan.risk_mitigation_plan.get_main_risk_elements",
                            args: {
                                "risk_analysis": frm.doc.risk_analysis
                            },
                            async: false,
                            callback: function(r) {
                                cur_frm.clear_table("risk_mitigation_plan_list");
                                cur_frm.refresh_fields();
                                for (var i = 0; i < r.message.length; i++) {
                                    var child = cur_frm.add_child("risk_mitigation_plan_list");
                                    frappe.model.set_value(child.doctype, child.name, "risk_element", r.message[i].risk_element);
                                    frappe.model.set_value(child.doctype, child.name, "can_delete", 1);
                                    cur_frm.refresh_fields("risk_element");
                                } //end of for loop...                    
                                cur_frm.refresh_fields("risk_element");
                                refresh_field("risk_mitigation_plan_list");
                            }
                        }); //end of frappe call
                    }

                }
            })
            /* 
             */
        }
    }
});