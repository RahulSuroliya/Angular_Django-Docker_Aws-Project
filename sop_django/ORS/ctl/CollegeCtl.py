from django.http import HttpResponse
from .BaseCtl import BaseCtl
from django.shortcuts import render
from ORS.utility.DataValidator import DataValidator
from service.models import College
from service.forms import CollegeForm
from service.service.CollegeService import CollegeService

class CollegeCtl(BaseCtl):

    # Populate Form from http request
    def request_to_form(self, requestForm):
        self.form['id'] = requestForm['id']
        self.form['collegeName'] = requestForm['collegeName']
        self.form['collegeAddress'] = requestForm['collegeAddress']
        self.form['collegeState'] = requestForm['collegeState']
        self.form['collegeCity'] = requestForm['collegeCity']
        self.form['collegePhoneNumber'] = requestForm['collegePhoneNumber']

    # Populate Form from model
    def model_to_form(self, obj):
        if (obj == None):
            return
        self.form['id'] = obj.id
        self.form['collegeName'] = obj.collegeName
        self.form['collegeAddress'] = obj.collegeAddress
        self.form['collegeState'] = obj.collegeState
        self.form['collegeCity'] = obj.collegeCity
        self.form['collegePhoneNumber'] = obj.collegePhoneNumber

    # Convert Form into Model
    def form_to_model(self, obj):
        pk = int(self.form['id'])
        if pk > 0:
            obj.id = pk
        obj.collegeName = self.form['collegeName']
        obj.collegeAddress = self.form['collegeAddress']
        obj.collegeState = self.form['collegeState']
        obj.collegeCity = self.form['collegeCity']
        obj.collegePhoneNumber = self.form['collegePhoneNumber']
        return obj

    # Validate Form
    def input_validation(self):
        super().input_validation()
        inputError = self.form['inputError']
        if DataValidator.isNull(self.form['collegeName']):
            inputError['collegeName'] = "College Name can not be null"
            self.form['error'] = True

        else:
            if DataValidator.isalphacehck(self.form['collegeName']):
                inputError['collegeName'] = "College Name considers only letters"
                self.form['error'] = True

        if DataValidator.isNull(self.form['collegeAddress']):
            inputError['collegeAddress'] = "College Address can not be null"
            self.form['error'] = True

        if (DataValidator.isNull(self.form['collegeState'])):
            inputError['collegeState'] = "College State can not be null"
            self.form['error'] = True

        if (DataValidator.isNull(self.form['collegeCity'])):
            inputError['collegeCity'] = "College City can not be null"
            self.form['error'] = True

        if (DataValidator.isNull(self.form['collegePhoneNumber'])):
            inputError['collegePhoneNumber'] = "College PhoneNumber can not be null"
            self.form['error'] = True
        else:
            if (DataValidator.ismobilecheck(self.form['collegePhoneNumber'])):
                inputError['collegePhoneNumber'] = "Only numbers's allowed which starts with 6,7,8,9"
                self.form['error'] = True

        return self.form['error']

    # Display College page
    def display(self, request, params={}):
        if (params['id'] > 0):
            r = self.get_service().get(params['id'])
            self.model_to_form(r)
        res = render(request, self.get_template(), {"form": self.form})
        return res

    # Submit College Page
    def submit(self, request, params={}):
        if (params['id'] > 0):
            pk = params['id']
            dup = self.get_service().get_model().objects.exclude(id=pk).filter(collegeName=self.form['collegeName'])
            if dup.count() > 0:
                self.form['error'] = True
                self.form['messege'] = "College Name already exists"
                res = render(request, self.get_template(), {"form": self.form})
            else:
                r = self.form_to_model(College())
                self.get_service().save(r)
                self.form['id'] = r.id
                self.form['error'] = False
                self.form['messege'] = "DATA HAS BEEN UPDATED SUCCESSFULLY"
                res = render(request, self.get_template(), {'form': self.form})
            return res
        else:
            duplicate = self.get_service().get_model().objects.filter(collegeName=self.form['collegeName'])
            if duplicate.count() > 0:
                self.form['error'] = True
                self.form['messege'] = "College Name already exists"
                res = render(request, self.get_template(), {'form': self.form})
            else:
                r = self.form_to_model(College())
                self.get_service().save(r)
                self.form['id'] = r.id
                self.form['messege'] = False
                self.form['messege'] = "DATA HAS BEEN SAVED SUCCESSFULLY"
                res = render(request, self.get_template(), {'form': self.form})
            return res

    # Template html of College Page
    def get_template(self):
        return "College.html"

    def get_service(self):
        return CollegeService()


