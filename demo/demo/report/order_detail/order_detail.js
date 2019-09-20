// Copyright (c) 2016, Sunil Govind and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Order Detail"] = {
	"filters": [
	{
			"fieldname":"group_by",
			"label": __("Group_By"),
			"fieldtype": "Select",
			"options": [
				{ "value": "location_wise", "label": __("Location Wise") },
				{ "value": "employee_wise", "label": __("Employee Wise") }
			],
			"default": "location_wise"
		},
	{
			"fieldname": "from_date",
			"label": __("From Date"),
			"fieldtype": "Date",
			'reqd': 1,
			"default": frappe.datetime.add_days(frappe.datetime.nowdate(), -30)
		},
		{
			"fieldname": "to_date",
			"label": __("To Date"),
			"fieldtype": "Date",
			'reqd': 1,
			"default": frappe.datetime.nowdate()
		}
	],
	get_chart_data: function (columns, result) {
		return {
			data: {
				labels: result.map(d => d[0]),
				datasets: [{
					name: 'Order Detail',
					values: result.map(d => d[1])
				}]
			},
			type: 'pie',
		}
	}
};
