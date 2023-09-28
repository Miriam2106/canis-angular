import { Component, OnInit } from '@angular/core'
import { GetAllCareersInteractorService } from '../../../use-cases/get-all-careers.interactor.service'
import { Career } from '../../../entities/career'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
  careers: Career[] = []

  constructor(private readonly _getAllCareers: GetAllCareersInteractorService) {}

  ngOnInit(): void {
    this.careers = this._getAllCareers.execute()
  }
}
