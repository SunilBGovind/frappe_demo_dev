# -*- coding: utf-8 -*-
# Copyright (c) 2019, Sunil Govind and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Dummy(Document):
	pass

@frappe.whitelist()
def fetch_question_details():
	#Start of Table format data for Description field in Issue doc..
	'''
	<colgroup>
    	<col span="2" style="background-color:red">
    	<col style="background-color:yellow">
  	</colgroup>
	'''
	question_list = []
	question_list = frappe.get_all("Manufacturing Feasibility Element Question", order_by="name")
	print ("Question List ###################", question_list)
	for tmp in question_list:
		tmp_records = frappe.get_doc("Manufacturing Feasibility Element Question", tmp)
		print (" Main Question List ################### tmp_records.question_title - ", tmp_records.question_title)
		for sub_tmp in tmp_records.sub_question:
			print ("Sub Question List ################### sub_tmp.question - ", sub_tmp.question)

	description = "<table border=1>" 
	description += "<colgroup>"
	description += "<col span='2'>"
	description += "</colgroup>"


	description +=  "<tr cursor: not-allowed;>"
	#table = "<table border=1 ><tr><th>user</th><th>Project</th><th>Branch</th></tr>"
	description +=  "<td>Element</td><td>Yes/No</td><td>SomeText</td><td>Check</td>"
	description +=  "</tr>"

	for tmp in question_list:
		tmp_records = frappe.get_doc("Manufacturing Feasibility Element Question", tmp)
		description +=  '''<tr backgroundcolor=green>"
						 <td input type="'text'"> {0} </td> 
						<td class="'select'">"
						"<select>" + "<option value="'Yes'">Yes</option>" + "<option value="'No'">No</option>" + "</select>"+"</td>" 
						"<td input type="'text'">"+ "Testing" +"</td>" 
		  				"<td input type="'check'"></td>" 
		 				"</tr>'''.format(tmp_records.question_title)
	 	# for sub_tmp in tmp_records.sub_question:
			# print ("Sub Question List ################### sub_tmp.question - ", sub_tmp.question)
			# description +=  '''<tr backgroundcolor=green>"
			# 			 <td input type="'text'"> {0} </td> 
			# 			<td class="'select'">"
			# 			"<select>" + "<option value="'Yes'">Yes</option>" + "<option value="'No'">No</option>" + "</select>"+"</td>" 
			# 			"<td input type="'text'">"+ "Testing" +"</td>" 
		 #  				"<td input type="'check'"></td>" 
		 # 				"</tr>'''.format(sub_tmp.question)	

	# for se in self.order:
	# 			self.order_details += '''<tr>
	# 										<td border: 1px solid black;padding: 15px>{0}</td>
	# 										<td border: 1px solid black;padding: 15px>{1}</td>
	# 									 </tr>'''.format(se.food_name,se.no_of_peoples)

	description += "<tr backgroundcolor=green>"
	description = description + "<td input type="'text'">"+ "1.2) Monthly Volumes (capacity - Inhouse and suppliers)" +"</td>" 
	description = description + "<td class="'select'">" 
	description = description + "<select>" + "<option value="'Yes'">Yes</option>" + "<option value="'No'">No</option>" + "</select>"+ "</td>" 
	description = description + "<td input type="'text'">"+ "Testing2" +"</td>" 
	description = description + "<td input type="'check'"></td>" 
	description = description + "</tr>"

	description = description + "<tr backgroundcolor=green>"
	description = description + "<td input type="'text'">"+ "1.3) Monthly Volumes (capacity - Inhouse and suppliers)" +"</td>" 
	description = description + "<td class="'select'">"  
	description = description + "<select>" + "<option value="'Yes'">Yes</option>" + "<option value="'No'">No</option>" + "</select>"+ "</td>"
	description = description + "<td input type="'text'">"+ "Testing3" +"</td>" 
	description = description + "<td input type="'check'"></td>" 
	description = description + "</tr>"
	description = description + "</table>"
	return description