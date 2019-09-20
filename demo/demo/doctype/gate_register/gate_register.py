# -*- coding: utf-8 -*-
# Copyright (c) 2019, Sunil Govind and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
#from frappe.model.naming import make_autoname
from frappe.model.document import Document
from datetime import datetime
from frappe.utils import get_datetime

class GateRegister(Document):
	def validate(self):
		if self.category == "With PO":
			for inv_det in self.gate_register_detail:
				if inv_det.po is None:
					frappe.throw("\t In Row {0} Gate Register Detail field, \n \t PO detail has to be filled for invoice number : {1}".format(inv_det.idx,inv_det.bill_no))
		elif self.category == "Without PO":
			for inv_det in self.gate_register_detail:
				if inv_det.po is not None:
					frappe.throw("\t In Row {0} Gate Register Detail field, PO detail is not required,\n \t since it is Without PO category item for invoice number : {1}".format(inv_det.idx,inv_det.bill_no))
					inv_det.po = None
		for inv_det in self.gate_register_detail:
			if get_datetime(inv_det.bill_date).date() > datetime.today().date():
				frappe.throw("\t In Row {0} Gate Register Detail field, \n \t Invoice date should not be greater than to today's date for invoice number : {1} ".format(inv_det.idx,inv_det.bill_no)) 
		self.total_boxes =0
		self.total_invoices =0
		self.total_amount =0.00
		for item in self.gate_register_detail:
			if item.amount > 0:
				self.total_amount += item.amount
			else:
				frappe.throw("\t In Row {0} Gate Register Detail field, \n \t Enter the correct invoice amount for invoice number : {1} ".format(item.idx,item.bill_no)) 	
			if item.boxes > 0:
				self.total_boxes += item.boxes
			else:
				frappe.throw("\t In Row {0} Gate Register Detail field, \n \t Mention the correct invoice Box No for invoice number : {1}".format(item.idx,item.bill_no)) 
			self.total_invoices += item.count
			
	