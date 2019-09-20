// Copyright (c) 2019, Sunil Govind and contributors
// For license information, please see license.txt
frappe.ui.form.on('Risk Analysis', {
    onload: function(frm, cdt, cdn) {
        var total_weightage = 0;
        //To disable AddRow button
        cur_frm.toggle_enable('ra_1', false);
        cur_frm.toggle_enable('ra_2', false);
        cur_frm.toggle_enable('ra_3', false);
        cur_frm.toggle_enable('ra_4', false);
        cur_frm.toggle_enable('ra_5', false);
        cur_frm.toggle_enable('ra_6', false);
        cur_frm.toggle_enable('ra_7', false);
        cur_frm.toggle_enable('ra_8', false);

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
                method: "demo.demo.doctype.risk_analysis.risk_analysis.get_ra_1",
                args: {
                    "doctype": frm.doc.doctype
                },
                async: false,
                callback: function(r) {
                    cur_frm.clear_table("ra_1");
                    cur_frm.refresh_fields();
                    for (var i = 0; i < r.message.length; i++) {
                        var child = cur_frm.add_child("ra_1");
                        total_weightage = parseInt(total_weightage) + parseInt(r.message[i].weightage);
                        frappe.model.set_value(child.doctype, child.name, "risk_element", r.message[i].risk_element);
                        frappe.model.set_value(child.doctype, child.name, "weightage", r.message[i].weightage);
                        frappe.model.set_value(child.doctype, child.name, "can_delete", 1);
                        var risk_description = fetch_risk_description(frm.doc.doctype, r.message[i].risk_element)
                        frappe.model.set_value(child.doctype, child.name, "risk_description", risk_description);
                        cur_frm.refresh_fields("risk_description");
                        cur_frm.refresh_fields("risk_element");

                    } //end of for loop...                    
                    cur_frm.refresh_fields("risk_element");
                    cur_frm.refresh_fields("weightage");
                    cur_frm.doc.total_weightage = total_weightage;
                    refresh_field("total_weightage");
                    refresh_field("ra_1");
                }
            }); //end of frappe call

            frappe.call({
                method: "demo.demo.doctype.risk_analysis.risk_analysis.get_ra_2",
                args: {
                    "doctype": frm.doc.doctype
                },
                async: false,
                callback: function(r) {
                    cur_frm.clear_table("ra_2");
                    cur_frm.refresh_fields();
                    for (var i = 0; i < r.message.length; i++) {
                        var child = cur_frm.add_child("ra_2");
                        total_weightage = parseInt(total_weightage) + parseInt(r.message[i].weightage);
                        frappe.model.set_value(child.doctype, child.name, "risk_element", r.message[i].risk_element);
                        frappe.model.set_value(child.doctype, child.name, "weightage", r.message[i].weightage);
                        frappe.model.set_value(child.doctype, child.name, "can_delete", 1);
                        var risk_description = fetch_risk_description(frm.doc.doctype, r.message[i].risk_element)
                        frappe.model.set_value(child.doctype, child.name, "risk_description", risk_description);
                        cur_frm.refresh_fields("risk_description");
                        cur_frm.refresh_fields("risk_element");
                    } //end of for loop...                    
                    cur_frm.refresh_fields("risk_element");
                    cur_frm.refresh_fields("weightage");
                    cur_frm.doc.total_weightage = total_weightage;
                    refresh_field("total_weightage");
                    refresh_field("ra_2");
                }
            }); //end of frappe call

            frappe.call({
                method: "demo.demo.doctype.risk_analysis.risk_analysis.get_ra_3",
                args: {
                    "doctype": frm.doc.doctype
                },
                async: false,
                callback: function(r) {
                    cur_frm.clear_table("ra_3");
                    cur_frm.refresh_fields();
                    for (var i = 0; i < r.message.length; i++) {
                        var child = cur_frm.add_child("ra_3");
                        total_weightage = parseInt(total_weightage) + parseInt(r.message[i].weightage);
                        frappe.model.set_value(child.doctype, child.name, "risk_element", r.message[i].risk_element);
                        frappe.model.set_value(child.doctype, child.name, "weightage", r.message[i].weightage);
                        frappe.model.set_value(child.doctype, child.name, "can_delete", 1);
                        var risk_description = fetch_risk_description(frm.doc.doctype, r.message[i].risk_element)
                        frappe.model.set_value(child.doctype, child.name, "risk_description", risk_description);
                        cur_frm.refresh_fields("risk_description");
                        cur_frm.refresh_fields("risk_element");
                    } //end of for loop...                    
                    cur_frm.refresh_fields("risk_element");
                    cur_frm.refresh_fields("weightage");
                    cur_frm.doc.total_weightage = total_weightage;
                    refresh_field("total_weightage");
                    refresh_field("ra_3");
                }
            }); //end of frappe call

            frappe.call({
                method: "demo.demo.doctype.risk_analysis.risk_analysis.get_ra_4",
                args: {
                    "doctype": frm.doc.doctype
                },
                async: false,
                callback: function(r) {
                    cur_frm.clear_table("ra_4");
                    cur_frm.refresh_fields();
                    for (var i = 0; i < r.message.length; i++) {
                        var child = cur_frm.add_child("ra_4");
                        total_weightage = parseInt(total_weightage) + parseInt(r.message[i].weightage);
                        frappe.model.set_value(child.doctype, child.name, "risk_element", r.message[i].risk_element);
                        frappe.model.set_value(child.doctype, child.name, "weightage", r.message[i].weightage);
                        frappe.model.set_value(child.doctype, child.name, "can_delete", 1);
                        var risk_description = fetch_risk_description(frm.doc.doctype, r.message[i].risk_element)
                        frappe.model.set_value(child.doctype, child.name, "risk_description", risk_description);
                        cur_frm.refresh_fields("risk_description");
                        cur_frm.refresh_fields("risk_element");
                    } //end of for loop...                    
                    cur_frm.refresh_fields("risk_element");
                    cur_frm.refresh_fields("weightage");
                    cur_frm.doc.total_weightage = total_weightage;
                    refresh_field("total_weightage");
                    refresh_field("ra_4");
                }
            }); //end of frappe call

            frappe.call({
                method: "demo.demo.doctype.risk_analysis.risk_analysis.get_ra_5",
                args: {
                    "doctype": frm.doc.doctype
                },
                async: false,
                callback: function(r) {
                    cur_frm.clear_table("ra_5");
                    cur_frm.refresh_fields();
                    for (var i = 0; i < r.message.length; i++) {
                        var child = cur_frm.add_child("ra_5");
                        total_weightage = parseInt(total_weightage) + parseInt(r.message[i].weightage);
                        frappe.model.set_value(child.doctype, child.name, "risk_element", r.message[i].risk_element);
                        frappe.model.set_value(child.doctype, child.name, "weightage", r.message[i].weightage);
                        frappe.model.set_value(child.doctype, child.name, "can_delete", 1);
                        var risk_description = fetch_risk_description(frm.doc.doctype, r.message[i].risk_element)
                        frappe.model.set_value(child.doctype, child.name, "risk_description", risk_description);
                        cur_frm.refresh_fields("risk_description");
                        cur_frm.refresh_fields("risk_element");
                    } //end of for loop...                    
                    cur_frm.refresh_fields("risk_element");
                    cur_frm.refresh_fields("weightage");
                    cur_frm.doc.total_weightage = total_weightage;
                    refresh_field("total_weightage");
                    refresh_field("ra_5");
                }
            }); //end of frappe call

            frappe.call({
                method: "demo.demo.doctype.risk_analysis.risk_analysis.get_ra_6",
                args: {
                    "doctype": frm.doc.doctype
                },
                async: false,
                callback: function(r) {
                    cur_frm.clear_table("ra_6");
                    cur_frm.refresh_fields();
                    for (var i = 0; i < r.message.length; i++) {
                        var child = cur_frm.add_child("ra_6");
                        total_weightage = parseInt(total_weightage) + parseInt(r.message[i].weightage);
                        frappe.model.set_value(child.doctype, child.name, "risk_element", r.message[i].risk_element);
                        frappe.model.set_value(child.doctype, child.name, "weightage", r.message[i].weightage);
                        frappe.model.set_value(child.doctype, child.name, "can_delete", 1);
                        var risk_description = fetch_risk_description(frm.doc.doctype, r.message[i].risk_element)
                        frappe.model.set_value(child.doctype, child.name, "risk_description", risk_description);
                        cur_frm.refresh_fields("risk_description");
                        cur_frm.refresh_fields("risk_element");
                    } //end of for loop...                    
                    cur_frm.refresh_fields("risk_element");
                    cur_frm.refresh_fields("weightage");
                    cur_frm.doc.total_weightage = total_weightage;
                    refresh_field("total_weightage");
                    refresh_field("ra_6");
                }
            }); //end of frappe call

            frappe.call({
                method: "demo.demo.doctype.risk_analysis.risk_analysis.get_ra_7",
                args: {
                    "doctype": frm.doc.doctype
                },
                async: false,
                callback: function(r) {
                    cur_frm.clear_table("ra_7");
                    cur_frm.refresh_fields();
                    for (var i = 0; i < r.message.length; i++) {
                        var child = cur_frm.add_child("ra_7");
                        total_weightage = parseInt(total_weightage) + parseInt(r.message[i].weightage);
                        frappe.model.set_value(child.doctype, child.name, "risk_element", r.message[i].risk_element);
                        frappe.model.set_value(child.doctype, child.name, "weightage", r.message[i].weightage);
                        frappe.model.set_value(child.doctype, child.name, "can_delete", 1);
                        var risk_description = fetch_risk_description(frm.doc.doctype, r.message[i].risk_element)
                        frappe.model.set_value(child.doctype, child.name, "risk_description", risk_description);
                        cur_frm.refresh_fields("risk_description");
                        cur_frm.refresh_fields("risk_element");
                    } //end of for loop... 
                    cur_frm.refresh_fields("risk_element");
                    cur_frm.refresh_fields("weightage");
                    cur_frm.doc.total_weightage = total_weightage;
                    refresh_field("total_weightage");
                    refresh_field("ra_7");
                }
            }); //end of frappe call
        } // end of if condition doc.__islocal
    }, //end of Onload 
    opportunity_number: function(frm, cdt, cdn) {
        frappe.call({
            method: "frappe.client.get_value",
            args: {
                doctype: "Opportunity",
                filters: {
                    name: cur_frm.doc.opportunity_number
                },
                fieldname: ["creation"]
            },
            callback: function(r) {
                var d = new Date(r.message.creation);
                var tmp_month = parseInt(d.getMonth() + 1);
                var final_date = d.getDate() + "-" + tmp_month + "-" + d.getFullYear();
                cur_frm.doc.opportunity_date = final_date;
                refresh_field("opportunity_date");
            }
        })
    },
    refresh: function(frm) {
        //Disable Add Row button
        cur_frm.toggle_enable('ra_1', false);
        cur_frm.toggle_enable('ra_2', false);
        cur_frm.toggle_enable('ra_3', false);
        cur_frm.toggle_enable('ra_4', false);
        cur_frm.toggle_enable('ra_5', false);
        cur_frm.toggle_enable('ra_6', false);
        cur_frm.toggle_enable('ra_7', false);
        cur_frm.toggle_enable('ra_8', false);
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
    }, // end of refresh function
    before_submit: function(frm) {
        var risk_analysis_id = frm.doc.name;
        var status = fetch_risk_mitigation_status(risk_analysis_id);
        if (status == undefined) {
            if (frm.doc.total_risk > 1.50) {
                frm.add_custom_button(__('Risk Mitigation Plan'), function() {
                    create_risk_mitigation_plan(cur_frm);
                }, );

                frappe.msgprint("This Document is having High Risk Value, Risk Mitigation Plan needs to be done.");
                frappe.validated = false;
                preventDefault()
            } else if (frm.doc.total_risk <= 1.50) {
                frappe.call({
                    method: "demo.demo.doctype.risk_mitigation_plan.risk_mitigation_plan.get_main_risk_elements",
                    args: {
                        "risk_analysis": frm.doc.name
                    },
                    async: false,
                    callback: function(r) {
                        if (r.message.length > 0) {
                            frm.add_custom_button(__('Risk Mitigation Plan'), function() {
                                create_risk_mitigation_plan(cur_frm);
                            }, );
                            frappe.msgprint("One of the question element is having a high risk value, Risk Mitigation Plan needs to be done.");
                            frappe.validated = false;
                            preventDefault()

                        }
                    }
                }); //end of frappe call
            } // end of else if
        }
    }
}); //end of Parent function


function create_risk_mitigation_plan(cur_frm) {
    frappe.model.open_mapped_doc({
        method: "demo.demo.doctype.risk_analysis.risk_analysis.make_risk_mitigation_plan",
        frm: cur_frm
    })
}

function fetch_risk_mitigation_status(risk_analysis_id) {
    var status = {};
    frappe.call({
        method: "frappe.client.get_value",
        args: {
            doctype: "Risk Mitigation Plan",
            filters: {
                risk_analysis: risk_analysis_id,
                docstatus: ["!=", 2]
            },
            fieldname: ["name"]
        },
        async: false,
        callback: function(r) {
            if (r.message) {
                status = {
                    "name": r.message.name
                };
            } else {
                status = undefined;
            }
        }
    });
    return status;

}

function create_risk_analysis(cur_frm) {
    var opportunity_id = cur_frm.doc.opportunity_number;
    var status = fetch_risk_analysis_status(opportunity_id);
    if (status == undefined) {
        frappe.model.open_mapped_doc({
            method: "demo.demo.doctype.manufacturing_feasibility.manufacturing_feasibility.make_risk_analysis",
            frm: cur_frm
        })
    } else if (status.status == 0) {
        frappe.throw(status.name + " Risk Analysis is made for this Manufacturing Feasibility and it is needs to Submit");
        preventDefault()
        return false;
    } else if (status.status == 1) {
        frappe.throw(status.name + " Risk Analysis is made for this Manufacturing Feasibility");
        preventDefault()
        return false;
    } else {
        return true;
    }

}

function fetch_risk_description(doctype, risk_element) {
    var data = {};
    frappe.call({
        method: "demo.demo.doctype.risk_analysis.risk_analysis.get_risk_details",
        args: {
            "doctype": doctype,
            "risk_element": risk_element
        },
        async: false,
        callback: function(r) {
            data = r.message;
        }
    }) //end of frappe call
    return data;
}

frappe.ui.form.on('Risk Analysis List', {

    before_ra_1_remove: function(frm, cdt, cdn) {
        var row = locals[cdt][cdn];
        var deleted_row = frappe.get_doc(cdt, cdn);

        if (deleted_row.can_delete == 1) {
            frappe.throw("Cannot delete questionary!!");
        }

    },

    before_ra_2_remove: function(frm, cdt, cdn) {
        var row = locals[cdt][cdn];
        var deleted_row = frappe.get_doc(cdt, cdn);

        if (deleted_row.can_delete == 1) {
            frappe.throw("Cannot delete questionary!!");
        }

    },

    before_ra_3_remove: function(frm, cdt, cdn) {
        var row = locals[cdt][cdn];
        var deleted_row = frappe.get_doc(cdt, cdn);

        if (deleted_row.can_delete == 1) {
            frappe.throw("Cannot delete questionary!!");
        }

    },

    before_ra_4_remove: function(frm, cdt, cdn) {
        var row = locals[cdt][cdn];
        var deleted_row = frappe.get_doc(cdt, cdn);

        if (deleted_row.can_delete == 1) {
            frappe.throw("Cannot delete questionary!!");
        }

    },

    before_ra_5_remove: function(frm, cdt, cdn) {
        var row = locals[cdt][cdn];
        var deleted_row = frappe.get_doc(cdt, cdn);

        if (deleted_row.can_delete == 1) {
            frappe.throw("Cannot delete questionary!!");
        }

    },

    before_ra_6_remove: function(frm, cdt, cdn) {
        var row = locals[cdt][cdn];
        var deleted_row = frappe.get_doc(cdt, cdn);

        if (deleted_row.can_delete == 1) {
            frappe.throw("Cannot delete questionary!!");
        }

    },

    before_ra_7_remove: function(frm, cdt, cdn) {
        var row = locals[cdt][cdn];
        var deleted_row = frappe.get_doc(cdt, cdn);

        if (deleted_row.can_delete == 1) {
            frappe.throw("Cannot delete questionary!!");
        }

    },

    anticipated_risk_value: function(frm, cdt, cdn) {
        var row = locals[cdt][cdn];
        var risk_element = row.risk_element;
        var risk_weightage = row.weightage;
        var risk_anticipated = row.anticipated_risk_value;
        var total_net_risk_score = 0;
        var total_risk = 0;

        var temp_list = [1, 2, 3];
        if (!temp_list.includes(risk_anticipated)) {
            frappe.throw("Risk Anticipated values range should be 1 to 3 !!");

        }

        row.net_risk_score = parseInt(row.weightage) * parseInt(risk_anticipated);
        // Calculating Total Risk 
        $.each(cur_frm.doc.ra_1, function(i, d) {
            total_net_risk_score = parseInt(total_net_risk_score) + parseInt(d.net_risk_score);
        }); //end of each...
        $.each(cur_frm.doc.ra_2, function(i, d) {
            total_net_risk_score = parseInt(total_net_risk_score) + parseInt(d.net_risk_score);
        }); //end of each...
        $.each(cur_frm.doc.ra_3, function(i, d) {
            total_net_risk_score = parseInt(total_net_risk_score) + parseInt(d.net_risk_score);
        }); //end of each...
        $.each(cur_frm.doc.ra_4, function(i, d) {
            total_net_risk_score = parseInt(total_net_risk_score) + parseInt(d.net_risk_score);
        }); //end of each...
        $.each(cur_frm.doc.ra_5, function(i, d) {
            total_net_risk_score = parseInt(total_net_risk_score) + parseInt(d.net_risk_score);
        }); //end of each...
        $.each(cur_frm.doc.ra_6, function(i, d) {
            total_net_risk_score = parseInt(total_net_risk_score) + parseInt(d.net_risk_score);
        }); //end of each...
        $.each(cur_frm.doc.ra_7, function(i, d) {
            total_net_risk_score = parseInt(total_net_risk_score) + parseInt(d.net_risk_score);
        }); //end of each...
        cur_frm.doc.total_net_risk_score = total_net_risk_score;
        total_risk = parseInt(total_net_risk_score) / parseInt(cur_frm.doc.total_weightage);
        cur_frm.doc.total_risk = total_risk;
        refresh_field("ra_1");
        refresh_field("ra_2");
        refresh_field("ra_3");
        refresh_field("ra_4");
        refresh_field("ra_5");
        refresh_field("ra_6");
        refresh_field("ra_7");
        refresh_field("total_net_risk_score");
        refresh_field("total_risk");
    } //end of anticipated_risk_value
});