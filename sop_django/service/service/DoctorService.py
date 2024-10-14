from service.models import Doctor
from service.utility.DataValidator import DataValidator
from .BaseService import BaseService
from django.db import connection

'''
It contains doctor business logics
'''


class DoctorService(BaseService):

    def search(self, params):
        pageNo = (params['pageNo'] - 1) * self.pageSize
        sql = "select * from sos_doctor where 1=1"
        # val = params.get("name", None)
        # if DataValidator.isNotNull(val):
        #     sql += " and name like '" + val + "' "
        sql += " limit %s,%s"
        cursor = connection.cursor()
        print("----------", sql, pageNo, self.pageSize)
        params['index'] = ((params['pageNo'] - 1) * self.pageSize) + 1
        cursor.execute(sql, [pageNo, self.pageSize])
        result = cursor.fetchall()
        columnName = ('id','name','expertise','dob','mobile','eid')
        res = {
            "data": [],
            "MaxId": 1,
        }
        count = 0
        res["index"] = params["index"]
        for x in result:
            params['MaxId'] = x[0]
            res['data'].append({columnName[i]: x[i] for i, _ in enumerate(x)})
        print("MMMMMMMMMM", params.get("MaxId"))
        return res

    def search1(self, params):
        pageNo = (params["pageNo"] - 1) * self.pageSize
        print("-------pageNo-->>", pageNo)
        sql = "select * from sos_doctor where 1!=1"
        val1 = params.get("name", None)
        val2 = params.get("eid", None)
        val3 = params.get("dob", None)
        val4 = params.get("mobile", None)

        print("-----val-->>", val1)

        if DataValidator.isNotNull(val1):
            sql += " or name =  '" + val1 + "' "

            print("-------sql-->>", sql)

        if DataValidator.isNotNull(val2):
            sql += " or eid = '" + str(val2) + "' "
        if DataValidator.isNotNull(val3):
            sql += " or dob = '" + val3 + "' "
        # else:
        #     if(DataValidator.isdob(val3)):
        #      sql += " and dob = '"+val3+"' "
        if DataValidator.isNotNull(val4):
            sql += " or mobile like  '%%" + str(val4) + "%%' "


        sql += " limit %s,%s"
        print("-------sql-->>", sql)
        cursor = connection.cursor()
        params["index"] = ((params['pageNo'] - 1) * self.pageSize) + 1
        cursor.execute(sql, [pageNo, self.pageSize])
        result = cursor.fetchall()
        columnName = ('id','name','expertise','dob','mobile','eid')
        res = {
            "data": [],
            "MaxId": 1,
        }
        count = 0
        res["index"] = params["index"]
        count = 0
        for x in result:
            # print("--------with column-->>",{columnName[i] :  x[i] for i, _ in enumerate(x)})
            params['MaxId'] = x[0]
            print("-------params['MaxId']-->>", params['MaxId'])
            res["data"].append({columnName[i]: x[i] for i, _ in enumerate(x)})
        return res

    def get_model(self):
        return Doctor

