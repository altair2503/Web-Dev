export interface Company{
  id: number;
  name: string;
  description: string;
  city: string,
  address: string
}


export interface Company{
  id: number;
  name: string;
  description: string;
  salary: string;
  company: Company;
}
