# -*- coding: utf-8 -*-
# Copyright (c) 2019, Sunil Govind and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class DeviationPermissionforTemporaryChange(Document):
	def validate(self):
		self.validate_checked_options()
		for i in self.tcn_traceability_detail:
			if i.qty < 0:
				frappe.throw("In Row {0} Correct Quantity should be given ".format(i.idx))
		for j in self.reason:
			if j.reason != None:
				if j.action_to_correct is None:
					frappe.throw("In Row {0} Action to Correct Missed to Enter".format(j.idx))
		for k in self.control_mechanism:
			if k.control_mechanism != None:
				if k.responsibility is None:
					frappe.throw("In Row {0} Action to Correct Missed to Enter".format(k.idx))
		for l in self.masking_detail:
			if l.qty < 0:
				frappe.throw("In Row {0} Correct Quantity should be given ".format(l.idx))
		# if self.status == "In Progress":
		# 	for m in self.tcn_transaction:
		# 		if m.tcn_qty is None:
		# 			frappe.throw("In Row {0} Correct Quantity should be given in TCN Transaction field".format(m.idx))
	def validate_checked_options(self):
		checked_fields = [d for d in self.meta.fields if d.fieldtype == 'Check' and self.get(d.fieldname) == 1]
		if len(checked_fields) == 0:
			frappe.throw(
				frappe._('You have to select any one option from the list of check boxes.'),
				title='Error'
			)

