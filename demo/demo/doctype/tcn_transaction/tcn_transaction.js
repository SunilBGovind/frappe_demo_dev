// Copyright (c) 2019, Sunil Govind and contributors
// For license information, please see license.txt

frappe.ui.form.on('TCN Transaction', {
	setup: function(frm) {
		if (frm.doc.customer_type == "New") {
				frm.set_query("meeting_hall",function(frm) {
					return{
						"filters": {
							"name": "New Conference Hall"
						}
					}
				})
		
			}
			
		}		
});
