
export class EmployeeModel {
    name:string = "";
    profilePic:string = "";
    gender:string = "";
    salary:number = 0;
    department:Array<any> = [];
    startDate:Date ;
    note:string = "";

    constructor(name:string, startDate:Date, profilePic:string,gender:string,department:Array<any>,note:string, salary:number){
        this.name = name;
        this.startDate = startDate;
        this.department = department;
        this.profilePic = profilePic;
        this.note = note;
        this.salary =salary;
        this.gender = gender;
    }
}