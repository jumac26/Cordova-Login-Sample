/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready

function submitData() {
    let StudentNumberData = document.getElementById("studentNumber").value;
    let BirthdayData = document.getElementById("birthday").value;
    let FamilyNameData = document.getElementById("familyName").value;

    if(StudentNumberData == "" || BirthdayData == "" || FamilyNameData == "") {
        alert("all fields must be filled out");
        return false;
    }
    else {
        var userData = {
            "studentNumber": StudentNumberData,
            "birthday": BirthdayData,
            "familyName": FamilyNameData
        };

        var xmlhttp = new XMLHttpRequest();
        
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var dataObject = JSON.parse(this.responseText);
                if(StudentNumberData == dataObject.studentNumber && BirthdayData == dataObject.birthday && FamilyNameData == dataObject.familyName)
                {
                    alert(dataObject.fullName + " is logged in!");
                }
                else{
                    alert("Invalid Account!");
                }
            }
        };
        xmlhttp.open("GET", "index.json", true);
        xmlhttp.send();
    }
}
