import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CompanyService} from "../company.service";
import {Company, Vacancy} from "../models";

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit{
  companyID: number = -1
  newVacancy = {} as Vacancy
  company = {} as Company
  vacancies: Vacancy[] = []
  constructor(private route: ActivatedRoute, private companyService: CompanyService) {
  }

  ngOnInit() {
    this.companyID = Number(this.route.snapshot.paramMap.get('id'));
    console.log("hello")
    this.getVacancies(this.companyID)
    this.getCompany(this.companyID)
  }

  getCompany(id: number){
    this.companyService.getCompany(id).subscribe( (company) => {
      this.company = company
    })
  }

  getVacancies(id: number){
    console.log(id)
    this.companyService.getVacancies(id).subscribe(( (vacancies) => {
      this.vacancies = vacancies;
      console.log(vacancies)
    }))
  }

  addVacancy(){
    // @ts-ignore
    this.newVacancy.company = this.companyID
    this.companyService.createVacancies(this.newVacancy).subscribe( (vacancy)=> {
      this.vacancies.push(vacancy)
      this.newVacancy = {} as Vacancy
    })
  }
}
