# -*- coding: utf-8 -*-
# Copyright (c) 2019, Sunil Govind and contributors
# From __future__ import unicode_literals

from __future__ import unicode_literals
import frappe, erpnext
from frappe import _, msgprint, scrub
from frappe.core.doctype.user_permission.user_permission import get_permitted_documents
from frappe.model.utils import get_fetch_values
from frappe.utils import (add_days, getdate, formatdate, date_diff,
	add_years, get_timestamp, nowdate, flt, cstr, add_months, get_last_day)
from frappe.contacts.doctype.address.address import (get_address_display,
	get_default_address, get_company_address)
from frappe.contacts.doctype.contact.contact import get_contact_details, get_default_contact
from erpnext.exceptions import PartyFrozen, PartyDisabled, InvalidAccountCurrency
from erpnext.accounts.utils import get_fiscal_year
from erpnext import get_company_currency
import re

from frappe.model.document import Document
from datetime import datetime
from frappe.utils import getdate, add_days, get_time,get_datetime
from datetime import timedelta
from frappe.core.doctype.sms_settings.sms_settings import send_sms
import random

class ConferenceHallBooking(Document):
	def validate(self):
		if self.meeting_type == "Existing Customer":
			if self.existing_customer is None:
				frappe.throw("Existing Customer Name is Mandatory");
		if self.meeting_type == "Supplier":
			if self.supplier_name is None:
				frappe.throw("Supplier Name is Mandatory");
		if self.meeting_type == "Internal":
			if self.meeting_organizer is None:
				frappe.throw("Meeting Organizer is Mandatory");
		if get_datetime(self.date).date() < datetime.today().date():
		 	frappe.throw("Meeting Date can not be past Date");
		if get_datetime(self.start_time).date() != get_datetime(self.date).date():
			frappe.throw("From Time Should be within selected date {0}".format(self.date))
		if get_datetime(self.end_time).date() != get_datetime(self.date).date():
			frappe.throw("End Time Should be within selected date {0}".format(self.date))	
		if get_time(self.end_time) <= get_time(self.start_time):
		 	frappe.throw("End time can not be lesser than to start time");
		if get_time(self.start_time) < datetime.now().time() and get_datetime(self.date).date() == datetime.today().date():
			frappe.throw("Meeting Start time cannot be past time")
		if get_time(self.end_time) < datetime.now().time() and get_datetime(self.date).date() == datetime.today().date():
			frappe.throw("Meeting End time cannot be past time")
		if self.status == "Pending":
			doc = frappe.get_all('Conference Hall Booking', filters={'date': self.date,'location': self.location,'docstatus': 1}, fields=['name','agenda', 'date','start_time','end_time','location','status','docstatus'])
			for i in doc:
				if get_time(i.start_time) <= get_time(self.start_time) <= get_time(i.end_time):
					frappe.throw("{0} is Booked for {1}-{2}  for this selected date {3} & time From {4} To {5}".format(i.location,i.name,i.agenda,i.date,i.start_time,i.end_time));
				if get_time(i.start_time) <= get_time(self.end_time) <= get_time(i.end_time):
					frappe.throw("{0} is Booked for {1}-{2}  for this selected date {3} & time From {4} To {5}".format(i.location,i.name,i.agenda,i.date,i.start_time,i.end_time));
	def on_submit(self):
		gen_code = False
		if not gen_code:
			gen_code = int(random.random()*10000)		
		self.message = 'Your Conference Hall is Booked for Meeting' + str(self.agenda) + ' and Use OTP : ' + str(gen_code) +' to start the meeting '
		doc = frappe.new_doc("Conference Booking Log")
		doc.update({"meeting" : self.name, "passcode" : gen_code})
		doc.insert()
		#send_sms(self.mobile.split(","), self.message)
@frappe.whitelist()
def verify_passcode(passcode, meeting):
	meeting_log = frappe.get_doc('Conference Booking Log', meeting)
	if meeting_log.passcode == passcode:
		meeting = frappe.get_doc('Conference Hall Booking', meeting)
		meeting.status = 'Ongoing'
		meeting.save()
	else:
		frappe.throw("Invalid OTP")
	

