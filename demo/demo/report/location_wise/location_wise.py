# Copyright (c) 2013, Sunil Govind and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe

def execute(filters=None):
	columns = [
		{
			'fieldname': 'count',
			'fieldtype': 'Int',
			'label': 'Total Orderes'
		},
		{
			'fieldname': 'name',
			'fieldtype': 'Data',
			'label': 'Name'
		},
		{
			'fieldname': 'total',
			'fieldtype': 'Float',
			'label': 'Total Amount'
		}
	]
	if filters.group_by == "location_wise":
		data = frappe.db.sql('''select count(*) as "count::50",kk.location as "Location::300",sum(fi.price*fi.no_of_peoples) as "Total::250"
								from `tabKaynes Kitchen` kk,
									 `tabFood Order Item` fi
								where kk.name = fi.parent
								and kk.docstatus = 1
								and date(kk.creation) between %s and %s
								group by kk.location
								order by kk.creation''', (filters.from_date, filters.to_date))
		return columns, data
	else:
		data = frappe.db.sql('''select count(*) as "count::50",kk.ordering_by as "Employee::300",sum(fi.price*fi.no_of_peoples) as "Total::250"
								from `tabKaynes Kitchen` kk,
									 `tabFood Order Item` fi
								where kk.name = fi.parent
								and kk.docstatus = 1
								and date(kk.creation) between %s and %s
								group by kk.ordering_by
								order by kk.creation''', (filters.from_date, filters.to_date))
		return columns, data
