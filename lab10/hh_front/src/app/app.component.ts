import {Component, OnInit} from '@angular/core';
import { Company } from "./models";
import {CompanyService} from "./company.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'hh_front';

  newCompany = {} as Company
  companies: Company[] = []

  ngOnInit() {
    this.getCompanies()
  }

  constructor(private companyService: CompanyService) {
  }

  getCompanies(){
    this.companyService.getCompanies().subscribe( (companies) => {
      this.companies = companies
    })
  }


  addCompany(){
    this.companyService.createCompany(this.newCompany).subscribe( (company) => {
      this.companies.push(company)
      this.newCompany = {} as Company
    })
  }




}
