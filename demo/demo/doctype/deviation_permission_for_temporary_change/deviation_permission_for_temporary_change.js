// Copyright (c) 2019, Sunil Govind and contributors
// For license information, please see license.txt

frappe.ui.form.on('Deviation Permission for Temporary Change', {
	setup: function(frm) {
		frm.set_query("part_number",function(frm) {
			return{
				"filters": {
					"item_group": "Products"
				}
			}
		}
	)}	
});
