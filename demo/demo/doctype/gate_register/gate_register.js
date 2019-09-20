// Copyright (c) 2019, Sunil Govind and contributors
// For license information, please see license.txt

frappe.ui.form.on('Gate Register', {
	setup: function(frm) {
		frm.set_query("consignement_from",function(frm) {
			return{
				"filters": {
					"name": ["in", ["Customer","Supplier","Employee"]]
				}
			}
		})
		frm.set_query("gate_name", function() {
			return{
				"filters": {
					"company": frm.doc.company
				}
			}
		})
		frm.set_query("company", function() {
			return{
				"filters": {
					"is_group": 0
				}
			}
		})
	},
	refresh: function(frm) {
		if (frm.doc.register_type == "Inward") {
		    	frm.doc.type = "Employee"
		}
		else {
				frm.doc.type = "Supplier"
		}
	},
	on_submit: function(frm) {
		if (frm.doc.handover_to == null) {
			frappe.throw("Handover To must be filled")
		}
	}

});
