interface EmployeeModel {
    status: string;
    data: Datum[];
    message: string;
  }
  
  interface Datum {
    id: number;
    employee_name: string;
    employee_salary: number;
    employee_age: number;
    profile_image: string;
  }

  export default EmployeeModel;