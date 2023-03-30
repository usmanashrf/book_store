interface EmpCreateRes {
    status: string;
    data: Data;
  }
  
  interface Data {
    name: string;
    salary: string;
    age: string;
    id: number;
  }

  export default EmpCreateRes;