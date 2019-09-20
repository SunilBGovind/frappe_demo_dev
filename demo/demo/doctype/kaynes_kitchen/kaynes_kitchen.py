# -*- coding: utf-8 -*-
# Copyright (c) 2019, Sunil Govind and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class KaynesKitchen(Document):
	def before_submit(self):
		if self.date_time is None:
			self.order_details = '''<table class="table table-bordered">	
									<tbody>
										<tr bgcolor="#B0E0E6">
											<td border: 1px solid black;padding: 15px><strong> Ordered By - {0}</strong></td>
										</tr>
										<tr>
											<td border: 1px solid black;padding: 15px><strong> Location - {1}</strong></td>
										</tr>
									</tbody>
									</table>
									<table class="table table-bordered">	
										<tbody>
											<tr>
											<td data-row="insert-column-right" ><strong>Item </strong></td>
											<td data-row="insert-column-right" ><strong>Qty</strong></td>
											</tr>'''.format(self.ordering_by,self.location)	

			for se in self.order:
				self.order_details += '''<tr>
											<td border: 1px solid black;padding: 15px>{0}</td>
											<td border: 1px solid black;padding: 15px>{1}</td>
										 </tr>'''.format(se.food_name,se.no_of_peoples)
			self.order_details += '</tbody></table>'
		else:
			self.order_details = '<table class="table table-bordered"><tbody><tr bgcolo	r="#B0E0E6"><td border: 1px solid black;padding: 15px><strong> Ordered By - {0}</strong></td></tr><tr><td border: 1px solid black;padding: 15px><strong> Location - {1}</strong></td></tr><tr><td><font color="red"> Required Time - {2}</font></td></tr></table><table class="table table-bordered"><tbody><tr><td data-row="insert-column-right" ><strong>Item </strong></td><td data-row="insert-column-right" ><strong>Qty</strong></td></tr>'.format(self.ordering_by,self.location,self.date_time)	
			for se in self.order:
				self.order_details += '<tr><td border: 1px solid black;padding: 15px>{0}</td><td border: 1px solid black;padding: 15px>{1}</td></tr>'.format(se.food_name,se.no_of_peoples)
			self.order_details += '</tbody></table>'
			
	
				
			