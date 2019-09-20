# Copyright (c) 2013, Sunil Govind and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe

def execute(filters=None):
	columns = [
		{
			'fieldname': 'name',
			'fieldtype': 'Data',
			'label': 'Name'
		},
		{
			'fieldname': 'count',
			'fieldtype': 'Int',
			'label': 'Total Orders'
		},
		{
			'fieldname': 'total',
			'fieldtype': 'Float',
			'label': 'Total Amount'
		}
	]
	if filters.group_by == "location_wise":
		data = frappe.db.sql('''select kk.location as "Location::300",count(*) as "count::50",sum(fi.price*fi.no_of_peoples) as "Total::250"
								from `tabKaynes Kitchen` kk,
									 `tabFood Order Item` fi
								where kk.name = fi.parent
								and kk.docstatus = 1
								and date(kk.creation) between %s and %s
								group by kk.location
								order by kk.creation''', (filters.from_date, filters.to_date))
	else:
		data = frappe.db.sql('''select kk.ordering_by as "Employee::300",count(*) as "count::50",sum(fi.price*fi.no_of_peoples) as "Total::250"
								from `tabKaynes Kitchen` kk,
									 `tabFood Order Item` fi
								where kk.name = fi.parent
								and kk.docstatus = 1
								and date(kk.creation) between %s and %s
								group by kk.ordering_by
								order by kk.creation''', (filters.from_date, filters.to_date))
	return columns, data
