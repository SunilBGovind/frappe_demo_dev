// Copyright (c) 2019, Sunil Govind and contributors
// For license information, please see license.txt
frappe.provide("demo.demo");

frappe.ui.form.on('Manufacturing Feasibility', {
    onload: function(frm, cdt, cdn) {
        //Disable Add Row button
        cur_frm.toggle_enable('mf_1', false);
        cur_frm.toggle_enable('mf_2', false);
        cur_frm.toggle_enable('mf_3', false);
        cur_frm.toggle_enable('mf_4', false);
        cur_frm.toggle_enable('mf_5', false);
        cur_frm.toggle_enable('mf_6', false);
        cur_frm.toggle_enable('mf_7', false);
        cur_frm.toggle_enable('mf_8', false);
        cur_frm.toggle_enable('mf_9', false);
        cur_frm.toggle_enable('mf_10', false);
        refresh_field("status");
        refresh_field("stage");
        refresh_field("order_handling_stage_date");
        //--- below code is required to make manditory fields


      /*  if (cur_frm.doc.stage == "Opportunity Stage" && cur_frm.doc.status !== "Stage 1 Completed") {
            var df1 = frappe.meta.get_docfield("Manufacturing Feasibility List", "opportunity_stage", cur_frm.doc.name);
            var df2 = frappe.meta.get_docfield("Manufacturing Feasibility List", "opportunity_remarks", cur_frm.doc.name);
            var df3 = frappe.meta.get_docfield("Manufacturing Feasibility List", "order_handling_stage", cur_frm.doc.name);
            var df4 = frappe.meta.get_docfield("Manufacturing Feasibility List", "order_handling_remark", cur_frm.doc.name);
            df1.read_only = 0;
            df2.read_only = 0;
            df1.required = 1;
            df2.required = 1;
            df3.read_only = 1;
            df4.read_only = 1;
            df1.in_list_view = 1;
            df1.in_grid_view = 1;
            refresh_field("opportunity_stage");
            refresh_field("opportunity_remarks");
            refresh_field("order_handling_stage");
            refresh_field("order_handling_remark");
            refresh_field("mf_1");
            refresh_field("mf_2");
            refresh_field("mf_3");
            refresh_field("mf_4");
            refresh_field("mf_5");
            refresh_field("mf_6");
            refresh_field("mf_7");
            refresh_field("mf_8");
            refresh_field("mf_9");
            refresh_field("mf_10");
        } else if (cur_frm.doc.stage == "Order Handling Stage" && cur_frm.doc.status !== "Stage 2 Completed") {
            var df1 = frappe.meta.get_docfield("Manufacturing Feasibility List", "opportunity_stage", cur_frm.doc.name);
            var df2 = frappe.meta.get_docfield("Manufacturing Feasibility List", "opportunity_remarks", cur_frm.doc.name);
            var df3 = frappe.meta.get_docfield("Manufacturing Feasibility List", "order_handling_stage", cur_frm.doc.name);
            var df4 = frappe.meta.get_docfield("Manufacturing Feasibility List", "order_handling_remark", cur_frm.doc.name);
            df1.read_only = 1;
            df2.read_only = 1;
            df3.read_only = 0;
            df4.read_only = 0;
            df3.required = 1;
            df4.required = 1;
            df1.in_list_view = 1;
            df2.in_list_view = 1;
            df3.in_list_view = 1;
            df4.in_list_view = 1;
            df1.in_grid_view = 1;
            df2.in_grid_view = 1;
            df3.in_grid_view = 1;
            df4.in_grid_view = 1;
            refresh_field("opportunity_stage");
            refresh_field("opportunity_remarks");
            refresh_field("order_handling_stage");
            refresh_field("order_handling_remark");
            refresh_field("mf_1");
            refresh_field("mf_2");
            refresh_field("mf_3");
            refresh_field("mf_4");
            refresh_field("mf_5");
            refresh_field("mf_6");
            refresh_field("mf_7");
            refresh_field("mf_8");
            refresh_field("mf_9");
            refresh_field("mf_10");
        }*/
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
                method: "demo.demo.doctype.manufacturing_feasibility.manufacturing_feasibility.get_mf_1",
                args: {
                    "doctype": frm.doc.doctype
                },
                async: false,
                callback: function(r) {
                    cur_frm.clear_table("mf_1");
                    cur_frm.refresh_fields();
                    for (var i = 0; i < r.message.length; i++) {
                        var child = cur_frm.add_child("mf_1");
                        frappe.model.set_value(child.doctype, child.name, "element", r.message[i].question);
                        frappe.model.set_value(child.doctype, child.name, "can_delete", 1);
                        cur_frm.refresh_fields("element");
                    } //end of for loop...                    
                    cur_frm.refresh_fields("element");
                    refresh_field("mf_1");
                }
            });
            frappe.call({
                method: "demo.demo.doctype.manufacturing_feasibility.manufacturing_feasibility.get_mf_2",
                args: {
                    "doctype": frm.doc.doctype
                },
                async: false,
                callback: function(r) {
                    cur_frm.clear_table("mf_2");
                    cur_frm.refresh_fields();
                    for (var i = 0; i < r.message.length; i++) {
                        var child = cur_frm.add_child("mf_2");
                        frappe.model.set_value(child.doctype, child.name, "element", r.message[i].question);
                        frappe.model.set_value(child.doctype, child.name, "can_delete", 1);
                        cur_frm.refresh_fields("element");
                    } //end of for loop...                    
                    cur_frm.refresh_fields("element");
                    refresh_field("mf_2");
                }
            });
            frappe.call({
                method: "demo.demo.doctype.manufacturing_feasibility.manufacturing_feasibility.get_mf_3",
                args: {
                    "doctype": frm.doc.doctype
                },
                async: false,
                callback: function(r) {
                    cur_frm.clear_table("mf_3");
                    cur_frm.refresh_fields();
                    for (var i = 0; i < r.message.length; i++) {
                        var child = cur_frm.add_child("mf_3");
                        frappe.model.set_value(child.doctype, child.name, "element", r.message[i].question);
                        frappe.model.set_value(child.doctype, child.name, "can_delete", 1);
                        cur_frm.refresh_fields("element");
                    } //end of for loop...                    
                    cur_frm.refresh_fields("element");
                    refresh_field("mf_3");
                }
            });

            frappe.call({
                method: "demo.demo.doctype.manufacturing_feasibility.manufacturing_feasibility.get_mf_4",
                args: {
                    "doctype": frm.doc.doctype
                },
                async: false,
                callback: function(r) {
                    cur_frm.clear_table("mf_4");
                    cur_frm.refresh_fields();
                    for (var i = 0; i < r.message.length; i++) {
                        var child = cur_frm.add_child("mf_4");
                        frappe.model.set_value(child.doctype, child.name, "element", r.message[i].question);
                        frappe.model.set_value(child.doctype, child.name, "can_delete", 1);
                        cur_frm.refresh_fields("element");
                    } //end of for loop...                    
                    cur_frm.refresh_fields("element");
                    refresh_field("mf_4");
                }
            });

            frappe.call({
                method: "demo.demo.doctype.manufacturing_feasibility.manufacturing_feasibility.get_mf_5",
                args: {
                    "doctype": frm.doc.doctype
                },
                async: false,
                callback: function(r) {
                    cur_frm.clear_table("mf_5");
                    cur_frm.refresh_fields();
                    for (var i = 0; i < r.message.length; i++) {
                        var child = cur_frm.add_child("mf_5");
                        frappe.model.set_value(child.doctype, child.name, "element", r.message[i].question);
                        frappe.model.set_value(child.doctype, child.name, "can_delete", 1);
                        cur_frm.refresh_fields("element");
                    } //end of for loop...                    
                    cur_frm.refresh_fields("element");
                    refresh_field("mf_5");
                }
            });

            frappe.call({
                method: "demo.demo.doctype.manufacturing_feasibility.manufacturing_feasibility.get_mf_6",
                args: {
                    "doctype": frm.doc.doctype
                },
                async: false,
                callback: function(r) {
                    cur_frm.clear_table("mf_6");
                    cur_frm.refresh_fields();
                    for (var i = 0; i < r.message.length; i++) {
                        var child = cur_frm.add_child("mf_6");
                        frappe.model.set_value(child.doctype, child.name, "element", r.message[i].question);
                        frappe.model.set_value(child.doctype, child.name, "can_delete", 1);
                        cur_frm.refresh_fields("element");
                    } //end of for loop...                    
                    cur_frm.refresh_fields("element");
                    refresh_field("mf_6");
                }
            });

            frappe.call({
                method: "demo.demo.doctype.manufacturing_feasibility.manufacturing_feasibility.get_mf_7",
                args: {
                    "doctype": frm.doc.doctype
                },
                async: false,
                callback: function(r) {
                    cur_frm.clear_table("mf_7");
                    cur_frm.refresh_fields();
                    for (var i = 0; i < r.message.length; i++) {
                        var child = cur_frm.add_child("mf_7");
                        frappe.model.set_value(child.doctype, child.name, "element", r.message[i].question);
                        frappe.model.set_value(child.doctype, child.name, "can_delete", 1);
                        cur_frm.refresh_fields("element");
                    } //end of for loop...                    
                    cur_frm.refresh_fields("element");
                    refresh_field("mf_7");
                }
            });

            frappe.call({
                method: "demo.demo.doctype.manufacturing_feasibility.manufacturing_feasibility.get_mf_8",
                args: {
                    "doctype": frm.doc.doctype
                },
                async: false,
                callback: function(r) {
                    cur_frm.clear_table("mf_8");
                    cur_frm.refresh_fields();
                    for (var i = 0; i < r.message.length; i++) {
                        var child = cur_frm.add_child("mf_8");
                        frappe.model.set_value(child.doctype, child.name, "element", r.message[i].question);
                        frappe.model.set_value(child.doctype, child.name, "can_delete", 1);
                        cur_frm.refresh_fields("element");
                    } //end of for loop...                    
                    cur_frm.refresh_fields("element");
                    refresh_field("mf_8");
                }
            });
            frappe.call({
                method: "demo.demo.doctype.manufacturing_feasibility.manufacturing_feasibility.get_mf_9",
                args: {
                    "doctype": frm.doc.doctype
                },
                async: false,
                callback: function(r) {
                    cur_frm.clear_table("mf_9");
                    cur_frm.refresh_fields();
                    for (var i = 0; i < r.message.length; i++) {
                        var child = cur_frm.add_child("mf_9");
                        frappe.model.set_value(child.doctype, child.name, "element", r.message[i].question);
                        frappe.model.set_value(child.doctype, child.name, "can_delete", 1);
                        cur_frm.refresh_fields("element");
                    } //end of for loop...                    
                    cur_frm.refresh_fields("element");
                    refresh_field("mf_9");
                }
            });
            frappe.call({
                method: "demo.demo.doctype.manufacturing_feasibility.manufacturing_feasibility.get_mf_10",
                args: {
                    "doctype": frm.doc.doctype
                },
                async: false,
                callback: function(r) {
                    cur_frm.clear_table("mf_10");
                    cur_frm.refresh_fields();
                    for (var i = 0; i < r.message.length; i++) {
                        var child = cur_frm.add_child("mf_10");
                        frappe.model.set_value(child.doctype, child.name, "element", r.message[i].question);
                        frappe.model.set_value(child.doctype, child.name, "can_delete", 1);
                        cur_frm.refresh_fields("element");
                    } //end of for loop...                    
                    cur_frm.refresh_fields("element");
                    refresh_field("mf_10");
                }
            });

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

                    var opportunity = cur_frm.doc.opportunity_number;
                    if (opportunity.includes("OPP")) {
                        var d = new Date();
                        var tmp_month = parseInt(d.getMonth() + 1);
                        var final_date = d.getDate() + "-" + tmp_month + "-" + d.getFullYear();

                        cur_frm.doc.stage = "Opportunity Stage";
                        cur_frm.doc.enquiry_stage_date = final_date;

                        refresh_field("stage");
                        refresh_field("enquiry_stage_date");

                        //end of read only enable or disable properties 
                    }
                }
            });
        } // end of if condition doc.__islocal
    }, //end of function..
    refresh: function(frm) {
        //Hide All add_row button

        cur_frm.toggle_enable('mf_1', false);
        cur_frm.toggle_enable('mf_2', false);
        cur_frm.toggle_enable('mf_3', false);
        cur_frm.toggle_enable('mf_4', false);
        cur_frm.toggle_enable('mf_5', false);
        cur_frm.toggle_enable('mf_6', false);
        cur_frm.toggle_enable('mf_7', false);
        cur_frm.toggle_enable('mf_8', false);
        cur_frm.toggle_enable('mf_9', false);
        cur_frm.toggle_enable('mf_10', false);
        refresh_field("status");
        refresh_field("stage");
        refresh_field("order_handling_stage_date");
        //  enable or disable read only properties
        /*if (cur_frm.doc.stage == "Opportunity Stage" && cur_frm.doc.status !== "Stage 1 Completed") {
            var df1 = frappe.meta.get_docfield("Manufacturing Feasibility List", "opportunity_stage", cur_frm.doc.name);
            var df2 = frappe.meta.get_docfield("Manufacturing Feasibility List", "opportunity_remarks", cur_frm.doc.name);
            var df3 = frappe.meta.get_docfield("Manufacturing Feasibility List", "order_handling_stage", cur_frm.doc.name);
            var df4 = frappe.meta.get_docfield("Manufacturing Feasibility List", "order_handling_remark", cur_frm.doc.name);
            df1.read_only = 0;
            df2.read_only = 0;
            df1.required = 1;
            df2.required = 1;
            df3.read_only = 1;
            df4.read_only = 1;
            df1.in_list_view = 1;
            df1.in_grid_view = 1;
            refresh_field("opportunity_stage");
            refresh_field("opportunity_remarks");
            refresh_field("order_handling_stage");
            refresh_field("order_handling_remark");
            refresh_field("mf_1");
            refresh_field("mf_2");
            refresh_field("mf_3");
            refresh_field("mf_4");
        } else if (cur_frm.doc.stage == "Order Handling Stage" && cur_frm.doc.status !== "Stage 2 Completed") {
            var df1 = frappe.meta.get_docfield("Manufacturing Feasibility List", "opportunity_stage", cur_frm.doc.name);
            var df2 = frappe.meta.get_docfield("Manufacturing Feasibility List", "opportunity_remarks", cur_frm.doc.name);
            var df3 = frappe.meta.get_docfield("Manufacturing Feasibility List", "order_handling_stage", cur_frm.doc.name);
            var df4 = frappe.meta.get_docfield("Manufacturing Feasibility List", "order_handling_remark", cur_frm.doc.name);
            df1.read_only = 1;
            df2.read_only = 1;
            df3.read_only = 0;
            df4.read_only = 0;
            df3.required = 1;
            df4.required = 1;
            df1.in_list_view = 1;
            df2.in_list_view = 1;
            df3.in_list_view = 1;
            df4.in_list_view = 1;
            df1.in_grid_view = 1;
            df2.in_grid_view = 1;
            df3.in_grid_view = 1;
            df4.in_grid_view = 1;
            refresh_field("opportunity_stage");
            refresh_field("opportunity_remarks");
            refresh_field("order_handling_stage");
            refresh_field("order_handling_remark");
            refresh_field("mf_1");
            refresh_field("mf_2");
            refresh_field("mf_3");
            refresh_field("mf_4");
        };*/
        cur_frm.fields_dict.mf_1.grid.toggle_reqd("opportunity_stage", cur_frm.doc.stage == "Opportunity Stage");
        cur_frm.fields_dict.mf_1.grid.toggle_reqd("opportunity_remarks", cur_frm.doc.stage == "Opportunity Stage");

        cur_frm.fields_dict.mf_2.grid.toggle_reqd("opportunity_stage", cur_frm.doc.stage == "Opportunity Stage");
        cur_frm.fields_dict.mf_2.grid.toggle_reqd("opportunity_remarks", cur_frm.doc.stage == "Opportunity Stage");

        cur_frm.fields_dict.mf_3.grid.toggle_reqd("opportunity_stage", cur_frm.doc.stage == "Opportunity Stage");
        cur_frm.fields_dict.mf_3.grid.toggle_reqd("opportunity_remarks", cur_frm.doc.stage == "Opportunity Stage");

        cur_frm.fields_dict.mf_4.grid.toggle_reqd("opportunity_stage", cur_frm.doc.stage == "Opportunity Stage");
        cur_frm.fields_dict.mf_4.grid.toggle_reqd("opportunity_remarks", cur_frm.doc.stage == "Opportunity Stage");

        cur_frm.fields_dict.mf_5.grid.toggle_reqd("opportunity_stage", cur_frm.doc.stage == "Opportunity Stage");
        cur_frm.fields_dict.mf_5.grid.toggle_reqd("opportunity_remarks", cur_frm.doc.stage == "Opportunity Stage");

        cur_frm.fields_dict.mf_6.grid.toggle_reqd("opportunity_stage", cur_frm.doc.stage == "Opportunity Stage");
        cur_frm.fields_dict.mf_6.grid.toggle_reqd("opportunity_remarks", cur_frm.doc.stage == "Opportunity Stage");

        cur_frm.fields_dict.mf_7.grid.toggle_reqd("opportunity_stage", cur_frm.doc.stage == "Opportunity Stage");
        cur_frm.fields_dict.mf_7.grid.toggle_reqd("opportunity_remarks", cur_frm.doc.stage == "Opportunity Stage");

        cur_frm.fields_dict.mf_8.grid.toggle_reqd("opportunity_stage", cur_frm.doc.stage == "Opportunity Stage");
        cur_frm.fields_dict.mf_8.grid.toggle_reqd("opportunity_remarks", cur_frm.doc.stage == "Opportunity Stage");

        cur_frm.fields_dict.mf_9.grid.toggle_reqd("opportunity_stage", cur_frm.doc.stage == "Opportunity Stage");
        cur_frm.fields_dict.mf_9.grid.toggle_reqd("opportunity_remarks", cur_frm.doc.stage == "Opportunity Stage");

        cur_frm.fields_dict.mf_10.grid.toggle_reqd("opportunity_stage", cur_frm.doc.stage == "Opportunity Stage");
        cur_frm.fields_dict.mf_10.grid.toggle_reqd("opportunity_remarks", cur_frm.doc.stage == "Opportunity Stage");

        cur_frm.fields_dict.mf_1.grid.toggle_reqd("order_handling_stage", cur_frm.doc.stage == "Order Handling Stage");
        cur_frm.fields_dict.mf_1.grid.toggle_reqd("order_handling_remark", cur_frm.doc.stage == "Order Handling Stage");

        cur_frm.fields_dict.mf_2.grid.toggle_reqd("order_handling_stage", cur_frm.doc.stage == "Order Handling Stage");
        cur_frm.fields_dict.mf_2.grid.toggle_reqd("order_handling_remark", cur_frm.doc.stage == "Order Handling Stage");

        cur_frm.fields_dict.mf_3.grid.toggle_reqd("order_handling_stage", cur_frm.doc.stage == "Order Handling Stage");
        cur_frm.fields_dict.mf_3.grid.toggle_reqd("order_handling_remark", cur_frm.doc.stage == "Order Handling Stage");

        cur_frm.fields_dict.mf_4.grid.toggle_reqd("order_handling_stage", cur_frm.doc.stage == "Order Handling Stage");
        cur_frm.fields_dict.mf_4.grid.toggle_reqd("order_handling_remark", cur_frm.doc.stage == "Order Handling Stage");

        cur_frm.fields_dict.mf_5.grid.toggle_reqd("order_handling_stage", cur_frm.doc.stage == "Order Handling Stage");
        cur_frm.fields_dict.mf_5.grid.toggle_reqd("order_handling_remark", cur_frm.doc.stage == "Order Handling Stage");

        cur_frm.fields_dict.mf_6.grid.toggle_reqd("order_handling_stage", cur_frm.doc.stage == "Order Handling Stage");
        cur_frm.fields_dict.mf_6.grid.toggle_reqd("order_handling_remark", cur_frm.doc.stage == "Order Handling Stage");

        cur_frm.fields_dict.mf_7.grid.toggle_reqd("order_handling_stage", cur_frm.doc.stage == "Order Handling Stage");
        cur_frm.fields_dict.mf_7.grid.toggle_reqd("order_handling_remark", cur_frm.doc.stage == "Order Handling Stage");

        cur_frm.fields_dict.mf_8.grid.toggle_reqd("order_handling_stage", cur_frm.doc.stage == "Order Handling Stage");
        cur_frm.fields_dict.mf_8.grid.toggle_reqd("order_handling_remark", cur_frm.doc.stage == "Order Handling Stage");

        cur_frm.fields_dict.mf_9.grid.toggle_reqd("order_handling_stage", cur_frm.doc.stage == "Order Handling Stage");
        cur_frm.fields_dict.mf_9.grid.toggle_reqd("order_handling_remark", cur_frm.doc.stage == "Order Handling Stage");

        cur_frm.fields_dict.mf_10.grid.toggle_reqd("order_handling_stage", cur_frm.doc.stage == "Order Handling Stage");
        cur_frm.fields_dict.mf_10.grid.toggle_reqd("order_handling_remark", cur_frm.doc.stage == "Order Handling Stage");
        refresh_field("opportunity_stage");
        refresh_field("opportunity_remarks");
        refresh_field("order_handling_stage");
        refresh_field("order_handling_remark");
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
        if (cur_frm.doc.docstatus === 0) {
            frm.add_custom_button(__('Make Risk Analysis'), function() {
                create_risk_analysis(cur_frm);
            }, );
        }
    },
    on_submit: function() {
        if (true) {
            frappe.validated = false;
            frappe.throw("Cannot Submit on Submit");
        }
    },
    on_update: function() {
        if (true) {
            frappe.validated = false;
            frappe.throw("Cannot Submit on update");
        }
    },
    before_submit: function() {
        if (true) {
            frappe.validated = false;
            frappe.throw("Cannot Submit before submit");
        }
    },
    before_save: function() {
        console.log("Before save trigger---------------------")
        cur_frm.fields_dict.mf_1.grid.toggle_reqd("opportunity_stage", cur_frm.doc.stage == "Opportunity Stage");
        cur_frm.fields_dict.mf_1.grid.toggle_reqd("opportunity_remarks", cur_frm.doc.stage == "Opportunity Stage");

        cur_frm.fields_dict.mf_2.grid.toggle_reqd("opportunity_stage", cur_frm.doc.stage == "Opportunity Stage");
        cur_frm.fields_dict.mf_2.grid.toggle_reqd("opportunity_remarks", cur_frm.doc.stage == "Opportunity Stage");

        cur_frm.fields_dict.mf_3.grid.toggle_reqd("opportunity_stage", cur_frm.doc.stage == "Opportunity Stage");
        cur_frm.fields_dict.mf_3.grid.toggle_reqd("opportunity_remarks", cur_frm.doc.stage == "Opportunity Stage");

        cur_frm.fields_dict.mf_4.grid.toggle_reqd("opportunity_stage", cur_frm.doc.stage == "Opportunity Stage");
        cur_frm.fields_dict.mf_4.grid.toggle_reqd("opportunity_remarks", cur_frm.doc.stage == "Opportunity Stage");

        cur_frm.fields_dict.mf_5.grid.toggle_reqd("opportunity_stage", cur_frm.doc.stage == "Opportunity Stage");
        cur_frm.fields_dict.mf_5.grid.toggle_reqd("opportunity_remarks", cur_frm.doc.stage == "Opportunity Stage");

        cur_frm.fields_dict.mf_6.grid.toggle_reqd("opportunity_stage", cur_frm.doc.stage == "Opportunity Stage");
        cur_frm.fields_dict.mf_6.grid.toggle_reqd("opportunity_remarks", cur_frm.doc.stage == "Opportunity Stage");

        cur_frm.fields_dict.mf_7.grid.toggle_reqd("opportunity_stage", cur_frm.doc.stage == "Opportunity Stage");
        cur_frm.fields_dict.mf_7.grid.toggle_reqd("opportunity_remarks", cur_frm.doc.stage == "Opportunity Stage");

        cur_frm.fields_dict.mf_8.grid.toggle_reqd("opportunity_stage", cur_frm.doc.stage == "Opportunity Stage");
        cur_frm.fields_dict.mf_8.grid.toggle_reqd("opportunity_remarks", cur_frm.doc.stage == "Opportunity Stage");

        cur_frm.fields_dict.mf_9.grid.toggle_reqd("opportunity_stage", cur_frm.doc.stage == "Opportunity Stage");
        cur_frm.fields_dict.mf_9.grid.toggle_reqd("opportunity_remarks", cur_frm.doc.stage == "Opportunity Stage");

        cur_frm.fields_dict.mf_10.grid.toggle_reqd("opportunity_stage", cur_frm.doc.stage == "Opportunity Stage");
        cur_frm.fields_dict.mf_10.grid.toggle_reqd("opportunity_remarks", cur_frm.doc.stage == "Opportunity Stage");

        cur_frm.fields_dict.mf_1.grid.toggle_reqd("order_handling_stage", cur_frm.doc.stage == "Order Handling Stage");
        cur_frm.fields_dict.mf_1.grid.toggle_reqd("order_handling_remark", cur_frm.doc.stage == "Order Handling Stage");

        cur_frm.fields_dict.mf_2.grid.toggle_reqd("order_handling_stage", cur_frm.doc.stage == "Order Handling Stage");
        cur_frm.fields_dict.mf_2.grid.toggle_reqd("order_handling_remark", cur_frm.doc.stage == "Order Handling Stage");

        cur_frm.fields_dict.mf_3.grid.toggle_reqd("order_handling_stage", cur_frm.doc.stage == "Order Handling Stage");
        cur_frm.fields_dict.mf_3.grid.toggle_reqd("order_handling_remark", cur_frm.doc.stage == "Order Handling Stage");

        cur_frm.fields_dict.mf_4.grid.toggle_reqd("order_handling_stage", cur_frm.doc.stage == "Order Handling Stage");
        cur_frm.fields_dict.mf_4.grid.toggle_reqd("order_handling_remark", cur_frm.doc.stage == "Order Handling Stage");

        cur_frm.fields_dict.mf_5.grid.toggle_reqd("order_handling_stage", cur_frm.doc.stage == "Order Handling Stage");
        cur_frm.fields_dict.mf_5.grid.toggle_reqd("order_handling_remark", cur_frm.doc.stage == "Order Handling Stage");

        cur_frm.fields_dict.mf_6.grid.toggle_reqd("order_handling_stage", cur_frm.doc.stage == "Order Handling Stage");
        cur_frm.fields_dict.mf_6.grid.toggle_reqd("order_handling_remark", cur_frm.doc.stage == "Order Handling Stage");

        cur_frm.fields_dict.mf_7.grid.toggle_reqd("order_handling_stage", cur_frm.doc.stage == "Order Handling Stage");
        cur_frm.fields_dict.mf_7.grid.toggle_reqd("order_handling_remark", cur_frm.doc.stage == "Order Handling Stage");

        cur_frm.fields_dict.mf_8.grid.toggle_reqd("order_handling_stage", cur_frm.doc.stage == "Order Handling Stage");
        cur_frm.fields_dict.mf_8.grid.toggle_reqd("order_handling_remark", cur_frm.doc.stage == "Order Handling Stage");

        cur_frm.fields_dict.mf_9.grid.toggle_reqd("order_handling_stage", cur_frm.doc.stage == "Order Handling Stage");
        cur_frm.fields_dict.mf_9.grid.toggle_reqd("order_handling_remark", cur_frm.doc.stage == "Order Handling Stage");

        cur_frm.fields_dict.mf_10.grid.toggle_reqd("order_handling_stage", cur_frm.doc.stage == "Order Handling Stage");
        cur_frm.fields_dict.mf_10.grid.toggle_reqd("order_handling_remark", cur_frm.doc.stage == "Order Handling Stage");

        refresh_field("opportunity_stage");
        refresh_field("opportunity_remarks");
        refresh_field("order_handling_stage");
        refresh_field("order_handling_remark");
    },

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
    }
});

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
};

function fetch_risk_analysis_status(opportunity_id) {
    var status = {};
    frappe.call({
        method: "frappe.client.get_value",
        args: {
            doctype: "Risk Analysis",
            filters: {
                opportunity_number: ["=", opportunity_id],
                docstatus: ["!=", 2]

            },
            fieldname: ["name", "docstatus"]
        },
        async: false,
        callback: function(r) {
            if (r.message) {
                status = {
                    "status": r.message.docstatus,
                    "name": r.message.name
                };
            } else {
                status = undefined;
            }

        }
    });
    return status;
};

frappe.ui.form.on('Manufacturing Feasibility List', {
    before_mf_1_remove: function(frm, cdt, cdn) {
        var row = locals[cdt][cdn];
        var deleted_row = frappe.get_doc(cdt, cdn);

        if (deleted_row.can_delete == 1) {
            frappe.throw("Cannot delete questionary!!");
        }
    },
    before_mf_2_remove: function(frm, cdt, cdn) {
        var row = locals[cdt][cdn];
        var deleted_row = frappe.get_doc(cdt, cdn);

        if (deleted_row.can_delete == 1) {
            frappe.throw("Cannot delete questionary!!");
        }
    },
    before_mf_3_remove: function(frm, cdt, cdn) {
        var row = locals[cdt][cdn];
        var deleted_row = frappe.get_doc(cdt, cdn);

        if (deleted_row.can_delete == 1) {
            frappe.throw("Cannot delete questionary!!");
        }
    },
    before_mf_4_remove: function(frm, cdt, cdn) {
        var row = locals[cdt][cdn];
        var deleted_row = frappe.get_doc(cdt, cdn);

        if (deleted_row.can_delete == 1) {
            frappe.throw("Cannot delete questionary!!");
        }
    },
    before_mf_5_remove: function(frm, cdt, cdn) {
        var row = locals[cdt][cdn];
        var deleted_row = frappe.get_doc(cdt, cdn);

        if (deleted_row.can_delete == 1) {
            frappe.throw("Cannot delete questionary!!");
        }
    },
    before_mf_6_remove: function(frm, cdt, cdn) {
        var row = locals[cdt][cdn];
        var deleted_row = frappe.get_doc(cdt, cdn);

        if (deleted_row.can_delete == 1) {
            frappe.throw("Cannot delete questionary!!");
        }
    },
    before_mf_7_remove: function(frm, cdt, cdn) {
        var row = locals[cdt][cdn];
        var deleted_row = frappe.get_doc(cdt, cdn);

        if (deleted_row.can_delete == 1) {
            frappe.throw("Cannot delete questionary!!");
        }
    },
    before_mf_8_remove: function(frm, cdt, cdn) {
        var row = locals[cdt][cdn];
        var deleted_row = frappe.get_doc(cdt, cdn);

        if (deleted_row.can_delete == 1) {
            frappe.throw("Cannot delete questionary!!");
        }
    },
    before_mf_9_remove: function(frm, cdt, cdn) {
        var row = locals[cdt][cdn];
        var deleted_row = frappe.get_doc(cdt, cdn);

        if (deleted_row.can_delete == 1) {
            frappe.throw("Cannot delete questionary!!");
        }
    },
    before_mf_10_remove: function(frm, cdt, cdn) {
        var row = locals[cdt][cdn];
        var deleted_row = frappe.get_doc(cdt, cdn);

        if (deleted_row.can_delete == 1) {
            frappe.throw("Cannot delete questionary!!");
        }
    }
});