# -*- coding: utf-8 -*-
# Copyright (c) 2019, Sunil Govind and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
# import frappe
from frappe.model.document import Document

class ConferenceRoom(Document):
	def before_save(self):
		self.room_capacity = "Seating Capacity-"+str(self.seating_capacity);
	def on_update(self):
		self.room_capacity = "Seating Capacity-"+str(self.seating_capacity);