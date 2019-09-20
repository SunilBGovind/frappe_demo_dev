# -*- coding: utf-8 -*-
# Copyright (c) 2019, Sunil Govind and Contributors
# See license.txt
from __future__ import unicode_literals
import frappe
import datetime
import frappe.defaults
from datetime import timedelta
import unittest

def create_gate_register(self):
		frappe.set_user("test1@example.com")
		doc = frappe.get_doc({
			"doctype": "Gate Register",
			"register_type": "Inward",
			"company": "Kaynes Technology - 01",
			"gate_name": "KT - 01 Gate - 01",
			"posting_date": "2019-07-17",
			"posting_time": "16:40:21",
			"category": "With PO",
			"mode_of_transport": "By Courier",
			"gate_register_detail": [
				{
					"po": "PO-MOU-001",
					"bill_no": "INV-MOU-001",
					"bill_date": "2019-07-10",
					"amount": "1300",
					"boxes": "2",
					"items": "10"
				}
				
			]	
		}).insert()

		return doc

class TestGateRegister(unittest.TestCase):
	# import pdb; pdb.set_trace()
	def setUp(self):
		create_gate_register();
	def tearDown(self):
		frappe.set_user("test1@example.com")
	def test_allowed_public(self):
		frappe.set_user("test1@example.com")
		doc = frappe.get_doc("Gate Register", frappe.db.get_value("Gate Register",{"company":"Kaynes Technology - 01"}))

if __name__ == '__main__':
	unittest.main()
