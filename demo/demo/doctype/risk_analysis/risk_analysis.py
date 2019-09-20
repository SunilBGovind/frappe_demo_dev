# -*- coding: utf-8 -*-
# Copyright (c) 2019, Sunil Govind and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe.model.mapper import get_mapped_doc

class RiskAnalysis(Document):
	pass

@frappe.whitelist()
def get_ra_1(doctype):
	ret_list= []
	elements = frappe.get_doc("Question Bank",doctype)
	for i in elements.question_list:
		if i.question_no == 'RA_1': 
			ret = {'risk_element': i.question,'weightage': i.weightage}
			ret_list.append(ret)
	return ret_list

@frappe.whitelist()
def get_ra_2(doctype):
	ret_list= []
	elements = frappe.get_doc("Question Bank",doctype)
	for i in elements.question_list:
		if i.question_no == 'RA_2': 
			ret = {'risk_element': i.question,'weightage': i.weightage}
			ret_list.append(ret)
	return ret_list

@frappe.whitelist()
def get_ra_3(doctype):
	ret_list= []
	elements = frappe.get_doc("Question Bank",doctype)
	for i in elements.question_list:
		if i.question_no == 'RA_3': 
			ret = {'risk_element': i.question,'weightage': i.weightage}
			ret_list.append(ret)
	return ret_list

@frappe.whitelist()
def get_ra_4(doctype):
	ret_list= []
	elements = frappe.get_doc("Question Bank",doctype)
	for i in elements.question_list:
		if i.question_no == 'RA_4': 
			ret = {'risk_element': i.question,'weightage': i.weightage}
			ret_list.append(ret)
	return ret_list

@frappe.whitelist()
def get_ra_5(doctype):
	ret_list= []
	elements = frappe.get_doc("Question Bank",doctype)
	for i in elements.question_list:
		if i.question_no == 'RA_5': 
			ret = {'risk_element': i.question,'weightage': i.weightage}
			ret_list.append(ret)
	return ret_list
							
@frappe.whitelist()
def get_ra_6(doctype):
	ret_list= []
	elements = frappe.get_doc("Question Bank",doctype)
	for i in elements.question_list:
		if i.question_no == 'RA_6': 
			ret = {'risk_element': i.question,'weightage': i.weightage}
			ret_list.append(ret)
	return ret_list

@frappe.whitelist()
def get_ra_7(doctype):
	ret_list= []
	elements = frappe.get_doc("Question Bank",doctype)
	for i in elements.question_list:
		if i.question_no == 'RA_7': 
			ret = {'risk_element': i.question,'weightage': i.weightage}
			ret_list.append(ret)
	return ret_list
@frappe.whitelist()
def get_risk_details(doctype,risk_element):
	ret_list= []
	elements = frappe.get_doc("Question Bank",doctype)
	for i in elements.question_list:
		if i.question == risk_element:
			risk = '''<table class="table table-bordered">	
									<tbody>
										<tr>
											<td border: 1px solid black;padding: 15px><strong> (1)Low Risk - {0}</strong></td>
										</tr>
										<tr >
											<td border: 1px solid black;padding: 15px><strong> (2)Medium Risk - {1}</strong></td>
										</tr>
										<tr>
											<td border: 1px solid black;padding: 15px><strong> (3)High Risk - {2}</strong></td>
										</tr>
									</tbody>
					</table>'''.format(i.low_risk,i.medium_risk,i.high_risk)	
	return risk

@frappe.whitelist()
def make_risk_mitigation_plan(source_name, target_doc=None):
	doclist = get_mapped_doc("Risk Analysis", source_name, {
		"Risk Analysis": {
			"doctype": "Risk Mitigation Plan",
			"field_map": {
				"risk_analysis" : "name"
			}	
		},
		
	}, target_doc)

	return doclist

@frappe.whitelist()
def get_risk_mitigation_status(risk_analysis):
	ret_list = []
	elements = frappe.get_all("Risk Mitigation Plan", fields=["docstatus", "name"], filters={"risk_analysis":risk_analysis}, order_by="risk_analysis")
	return ret_list