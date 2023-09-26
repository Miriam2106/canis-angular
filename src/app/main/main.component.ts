import { Component, OnInit } from '@angular/core'
import { Career } from './models/career.model'
import { CareerService } from './services/career.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
  careers: Career[] = []

  constructor(private readonly _careerService: CareerService) {}

  ngOnInit(): void {
    this.careers = this._careerService.getAll()
  }
}
