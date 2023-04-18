import { Component } from '@angular/core';
import { model } from '../Model/model';
import { ServicesService } from '../Services/services.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor (private services: ServicesService) {}

  newData! : model[]

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(){
    this.services.getProduct().subscribe((products:any) => {
      this.newData = products
      console.log(this.newData)
    })
  }

}
