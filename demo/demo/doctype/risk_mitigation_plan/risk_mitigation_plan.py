# -*- coding: utf-8 -*-
# Copyright (c) 2019, Sunil Govind and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from datetime import datetime
from frappe.utils import getdate, add_days, get_time,get_datetime
from datetime import timedelta

class RiskMitigationPlan(Document):
	def validate(self):
		for se in self.risk_mitigation_plan_list:
			if get_datetime(se.target_date).date() < datetime.today().date():
				 	frappe.throw("Target Date can not be past Date");

@frappe.whitelist()
def get_total_risk_value(risk_analysis):
	ret_list= []
	ret_list = frappe.get_doc("Risk Analysis",risk_analysis)
	return ret_list

@frappe.whitelist()
def get_all_risk_elements(risk_analysis):
	ret_list= []
	elements = frappe.get_doc("Risk Analysis",risk_analysis)
	for i in elements.ra_1:
			ret = {'risk_element': i.risk_element}
			ret_list.append(ret)
	for i in elements.ra_2:
			ret = {'risk_element': i.risk_element}
			ret_list.append(ret)
	for i in elements.ra_3:
			ret = {'risk_element': i.risk_element}
			ret_list.append(ret)
	for i in elements.ra_4:
			ret = {'risk_element': i.risk_element}
			ret_list.append(ret)
	for i in elements.ra_5:
			ret = {'risk_element': i.risk_element}
			ret_list.append(ret)
	for i in elements.ra_6:
			ret = {'risk_element': i.risk_element}
			ret_list.append(ret)			
	for i in elements.ra_7:
			ret = {'risk_element': i.risk_element}
			ret_list.append(ret)
	return ret_list

@frappe.whitelist()
def get_main_risk_elements(risk_analysis):
	ret_list= []
	elements = frappe.get_doc("Risk Analysis",risk_analysis)
	for i in elements.ra_1:
		if i.net_risk_score == 9: 
			ret = {'risk_element': i.risk_element}
			ret_list.append(ret)
	for i in elements.ra_2:
		if i.net_risk_score == 9:
			ret = {'risk_element': i.risk_element}
			ret_list.append(ret)
	for i in elements.ra_3:
		if i.net_risk_score == 9:
			ret = {'risk_element': i.risk_element}
			ret_list.append(ret)
	for i in elements.ra_4:
		if i.net_risk_score == 9:
			ret = {'risk_element': i.risk_element}
			ret_list.append(ret)
	for i in elements.ra_5:
		if i.net_risk_score == 9:
			ret = {'risk_element': i.risk_element}
			ret_list.append(ret)
	for i in elements.ra_6:
		if i.net_risk_score == 9:
			ret = {'risk_element': i.risk_element}
			ret_list.append(ret)			
	for i in elements.ra_7:
		if i.net_risk_score == 9:
			ret = {'risk_element': i.risk_element}
			ret_list.append(ret)
	return ret_list
