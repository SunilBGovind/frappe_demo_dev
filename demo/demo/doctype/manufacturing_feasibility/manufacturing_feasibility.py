# -*- coding: utf-8 -*-
# Copyright (c) 2019, Sunil Govind and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe.model.mapper import get_mapped_doc
import os
import sys	


class ManufacturingFeasibility(Document):
	def validate(self):
		if self.stage == 'Order Handling Stage':
			for mf in self.mf_1:
				if not mf.order_handling_stage:
					frappe.throw("In Row {0} Handling Remark is Mandatory ".format(mf.idx));
					sys.exit(0);
		if self.stage == 'Opportunity Stage':
			for mf in self.mf_1:
				if not mf.opportunity_remarks:
					frappe.throw("In Row {0} Opportunity Remark is Mandatory ".format(mf.idx));
					sys.exit(0);
	def before_sumbit(self):
		if self.stage == 'Order Handling Stage':
			for mf in self.mf_1:
				if not mf.order_handling_stage:
					frappe.throw("In Row {0} Handling Remark is Mandatory ".format(mf.idx));
					sys.exit(0);
		if self.stage == 'Opportunity Stage':
			for mf in self.mf_1:
				if not mf.opportunity_remarks:
					frappe.throw("In Row {0} Opportunity Remark is Mandatory ".format(mf.idx));
					sys.exit(0);
	def on_submit(self):
		risk_status = [];
		risk_status = frappe.get_all("Risk Analysis",fields=["name","docstatus"], filters={"opportunity_number": self.opportunity_number}, order_by="name");
		if risk_status:
			if risk_status[0]['docstatus'] == 0:
				frappe.throw("Risk Analysis "+ risk_status[0]['name'] +"should be submitted ");
				sys.exit(0);
			else:
				pass;
		else:
			frappe.throw("Create Risk Analysis to Sumbit the document");
			sys.exit(0);
		if self.stage == 'Order Handling Stage':
			for mf in self.mf_1:
				if not mf.order_handling_stage:
					frappe.throw("In Row {0} Handling Remark is Mandatory ".format(mf.idx));
					sys.exit(0);



@frappe.whitelist()
def get_element_details():
	ret_list = []
	elements = frappe.get_all("Manufacturing Feasibility Analysis Element", fields=["serial_number", "analysis_element"], filters='', order_by="serial_number")
	for element in elements:
		ret = {'element': element.analysis_element}
		ret_list.append(ret)
	return ret_list

@frappe.whitelist()
def get_mf_1(doctype):
	ret_list= []
	elements = frappe.get_doc("Question Bank",doctype)
	for i in elements.question_list:
		if i.question_no == 'MF_1': 
			ret = {'question': i.question}
			ret_list.append(ret)
	return ret_list

@frappe.whitelist()
def get_mf_2(doctype):
	ret_list= []
	elements = frappe.get_doc("Question Bank",doctype)
	for i in elements.question_list:
		if i.question_no == 'MF_2': 
			ret = {'question': i.question}
			ret_list.append(ret)
	return ret_list

@frappe.whitelist()
def get_mf_3(doctype):
	ret_list= []
	elements = frappe.get_doc("Question Bank",doctype)
	for i in elements.question_list:
		if i.question_no == 'MF_3': 
			ret = {'question': i.question}
			ret_list.append(ret)
	return ret_list

@frappe.whitelist()
def get_mf_4(doctype):
	ret_list= []
	elements = frappe.get_doc("Question Bank",doctype)
	for i in elements.question_list:
		if i.question_no == 'MF_4': 
			ret = {'question': i.question}
			ret_list.append(ret)
	return ret_list

@frappe.whitelist()
def get_mf_5(doctype):
	ret_list= []
	elements = frappe.get_doc("Question Bank",doctype)
	for i in elements.question_list:
		if i.question_no == 'MF_5': 
			ret = {'question': i.question}
			ret_list.append(ret)
	return ret_list
							
@frappe.whitelist()
def get_mf_6(doctype):
	ret_list= []
	elements = frappe.get_doc("Question Bank",doctype)
	for i in elements.question_list:
		if i.question_no == 'MF_6': 
			ret = {'question': i.question}
			ret_list.append(ret)
	return ret_list

@frappe.whitelist()
def get_mf_7(doctype):
	ret_list= []
	elements = frappe.get_doc("Question Bank",doctype)
	for i in elements.question_list:
		if i.question_no == 'MF_7': 
			ret = {'question': i.question}
			ret_list.append(ret)
	return ret_list

@frappe.whitelist()
def get_mf_8(doctype):
	ret_list= []
	elements = frappe.get_doc("Question Bank",doctype)
	for i in elements.question_list:
		if i.question_no == 'MF_8': 
			ret = {'question': i.question}
			ret_list.append(ret)
	return ret_list

@frappe.whitelist()
def get_mf_9(doctype):
	ret_list= []
	elements = frappe.get_doc("Question Bank",doctype)
	for i in elements.question_list:
		if i.question_no == 'MF_9': 
			ret = {'question': i.question}
			ret_list.append(ret)
	return ret_list

@frappe.whitelist()
def get_mf_10(doctype):
	ret_list= []
	elements = frappe.get_doc("Question Bank",doctype)
	for i in elements.question_list:
		if i.question_no == 'MF_10': 
			ret = {'question': i.question}
			ret_list.append(ret)
	return ret_list
 
@frappe.whitelist()
def get_opportunity_detail(opportunity_number):
	detail = frappe.db.sql("select creation from `tabOpportunity` where name = %s", opportunity_number, as_dict=1)
	opportunity_date = detail[0]['creation']
	return opportunity_date

@frappe.whitelist()
def make_risk_analysis(source_name, target_doc=None):
	doclist = get_mapped_doc("Manufacturing Feasibility", source_name, {
		"Manufacturing Feasibility": {
			"doctype": "Risk Analysis",
			"field_map": {
				"opportunity_number" : "opportunity_number"
			}
		},
		
	}, target_doc)

	return doclist


