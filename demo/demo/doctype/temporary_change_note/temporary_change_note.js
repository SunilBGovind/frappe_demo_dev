// Copyright (c) 2019, Sunil Govind and contributors
// For license information, please see license.txt

frappe.ui.form.on('Temporary Change Note', {
	setup: function(frm) {
		frm.set_query("part_number",function(frm) {
			return{
				"filters": {
					"item_group": "Products"
				}
			}
		})
		frm.set_query("item_code","masking_detail",function(frm) {
			return{
				"filters": {
					"item_group": "Raw Material"
				}
			}
		})
	}
});	
cur_frm.cscript.status = function(doc, cdt, cdn) {
	cur_frm.set_df_property("temporary_change_note_transaction", "reqd", doc.status=="In Progress")
	cur_frm.set_df_property("temporary_change_note_transaction", "read_only", doc.status=="Completed")
	};