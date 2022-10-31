
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { EmployeeModel } from '../EmployeeModel';


interface salary {
  value: number;
  viewValue: number;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

// _depart!: departmentList[];
deptName: any;
// args: any;
emps:any = "";
allEmp : Array<any>=[];  
tempArr : Array<any> = [];
salarys: salary[] = [
  
  { value: 20000, viewValue: 20000 },
  { value: 30000, viewValue: 30000 },
  { value: 40000, viewValue: 40000 },
  { value: 50000, viewValue: 50000 },
  { value: 60000, viewValue: 60000 },

];
//snapshot-> loading old history
//paramMap -> Mapping with getId
Id:any = this.route.snapshot.paramMap.get("Id");
constructor(private employeeService: EmployeeService, private router: Router, private route:ActivatedRoute) { }

employee: EmployeeModel = new EmployeeModel("", new Date, "", "", [], "", 0);

depart2: any = ["HR", "Sales", "Engineer", "Finance", "Other"];

ngOnInit(): void {
  this.getEmployeeById();
}


  checkBoxChange(dptname:any){

    if(!this.tempArr.includes(dptname)){
      this.tempArr.push(dptname);
    }
    else{
      const index = this.tempArr.indexOf(dptname);
      if (index > -1) { // only splice array when item is found
        this.tempArr.splice(index, 1); // 2nd parameter means remove one item only
      }
    }
  }

 
  salaryValue: number = 0;
  firstName: string = "";
  nameError: string = "";
  imgUrl_1 = "../../assets/profile-images/Ellipse -1.png";
  imgUrl_2 = "../../assets/profile-images/Ellipse -2.png";
  imgUrl_3 = "../../assets/profile-images/Ellipse -3.png";
  imgUrl_4 = "../../assets/profile-images/Ellipse -4.png";

  onInput($event: any) {
    console.log("Event changed ", $event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
    if (nameRegex.test(this.employee.name)) {
      this.nameError = "";
      return;
    }
    this.nameError = "Name is incorrect";
  }

  addEmployee() {
    console.log(this.employee);
    this.employee.department = this.tempArr;
    //subscribe is used to add data in the db from the constructor
    this.employeeService.insertEmployee(this.employee).subscribe((data: any) => {
      this.router.navigate(["dashboard"]);
    });
  }

  updateEmployeeData() {
    // this.employee.department = [];
    // this.employee.department.splice(0, this.employee.department.length);
    this.employee.department = this.tempArr;
    //subscribe is used to add data in the db from the constructor
    this.employeeService.updateEmployeeById(this.employee, this.Id).subscribe((response: any) => {
      this.router.navigate(["dashboard"]);
    });
  
  }

  getEmployeeById(){    

    // this.employee.department = [];
    this.employeeService.getEmployeeById(this.Id).subscribe((response:any) => {
      console.log("This is  what it is ",response);
    // console.log(response);
      this.employee = response.data;
      // this.tempArr = this.employee.department;
      // this.employee.department = response.data.department;
      
    });
    
  }
}

class departmentList{
  id: number | undefined;
  name: string | undefined;
  isSelected:boolean | undefined;
}
