// Copyright (c) 2019, Sunil Govind and contributors
// For license information, please see license.txt

frappe.ui.form.on('Conference Hall Booking', {
	meeting_type: function(frm) {
		if (frm.doc.meeting_type == "Visitor") {
					frm.set_query("location",function(frm) {
					return{
						"filters": {
							"room_name": "New Conference Hall"
						}
					}
				})
		} else if (frm.doc.meeting_type == "Customer") {
					frm.set_query("location",function(frm) {
					return{
						"filters": {
							"customer_group": frm.customer_group
						}
					}
				})
			}
		if (frm.doc.customer_type == "Visitor" || frm.doc.customer_type == "Internal") {
				frm.set_value('customer_group', null)
				frm.set_df_property("customer_group", "hidden", 1)
			}	
		},
	refresh: function(frm) {	
		var x = frm.doc.gen_code;	
		if (frm.doc.status == "Ongoing" || frm.doc.status == "Draft" || frm.doc.status == "Pending") {
			frm.set_df_property("otp", "hidden", 1);
		}
		if (frm.doc.status == "Approved") {
			frm.set_df_property("otp", "reqd", 1);
			frm.set_df_property("otp", "hidden", 0);
		}
		if (frm.doc.status == "Approved") {
			cur_frm.add_custom_button( __("Start"), function() {	
				frappe.prompt([{
					'fieldname': 'otp', 
					'fieldtype': 'Int', 
					'label': 'OTP', 
					'reqd': 1
				}],
				function(values){
					frappe.call({
						method: "demo.demo.doctype.conference_hall_booking.conference_hall_booking.verify_passcode",
						args: {"passcode":values.otp,"meeting":frm.doc.name},
						callback: function(r) {
							frm.refresh();
						}
					})
				},
				'Please enter the OTP',
				'Verify'
				)
			});
		}
		cur_frm.cscript.custom_refresh = function() {
			if(!cur_frm.doc.__islocal && cur_frm.doc.owner == wn.boot.profile.name) {
				cur_frm.frm_head.appframe.clear_buttons('Start');
			}
		}		
	}
});
