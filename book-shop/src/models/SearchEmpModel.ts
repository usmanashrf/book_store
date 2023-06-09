interface SearchEmp{
    status: string;
    data: Data;
  }
  
  interface Data {
    id: string;
    employee_name: string;
    employee_salary: string;
    employee_age: string;
    profile_image: string;
  }

  export default SearchEmp;