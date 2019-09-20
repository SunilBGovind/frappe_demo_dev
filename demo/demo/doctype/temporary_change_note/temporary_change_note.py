# -*- coding: utf-8 -*-
# Copyright (c) 2019, Sunil Govind and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from datetime import datetime
from frappe.utils import get_datetime

class TemporaryChangeNote(Document):
	def validate(self):
		if self.current_process_name == self.alternate_process:
			frappe.throw("You cannot select Current process as an Alternate Process")
		for i in self.tcn_traceability_detail:
			if i.qty < 1:
				frappe.throw(" Field : Traceability Detail in Row No {0} Correct Quantity should be given ".format(i.idx))
		for j in self.reason:
			if j.reason != None:
				if j.action_to_correct is None:
					frappe.throw(" Field : Reason in Row No {0} Action to Correct Missed to Enter".format(j.idx))
		for k in self.control_mechanism:
			if k.control_mechanism != None:
				if k.responsibility is None:
					frappe.throw(" Field : Additional Control in Row No {0} Resposibility should be entered".format(k.idx))
		for l in self.masking_detail:
			if l.qty < 1:
				frappe.throw(" Field : Masking Detail in Row {0} Correct Quantity should be given ".format(l.idx))
		for m in self.tcn_traceability_detail:
			if get_datetime(m.effective_from).date() < datetime.today().date():
				frappe.throw(" Field : Tracebility Detail, Effective From Date should be greater than todays date : {0} In Row{1}".format(datetime.today().date(),m.idx))
			if get_datetime(m.effective_to).date() < datetime.today().date():
				frappe.throw(" Field : Tracebility Detail, Effective To Date should be greater than todays date : {0} In Row{1}".format(datetime.today().date(),m.idx))	
			if get_datetime(m.effective_from).date() > get_datetime(m.effective_to).date():
				frappe.throw(" Field : Tracebility Detail, Effective From Date[{0}] should be lesser than to Effective To Date[{1}] : In Row{2}".format(get_datetime(m.effective_from).date(),get_datetime(m.effective_to).date(),m.idx))
		