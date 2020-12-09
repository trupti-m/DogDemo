import { Component, OnInit } from '@angular/core';
import { DogDataService } from '../dog-data.service';
import { Dog } from '../dog';

@Component({
  selector: 'app-dog-by-breed',
  templateUrl: './dog-by-breed.component.html',
  styleUrls: ['./dog-by-breed.component.css']
})
export class DogByBreedComponent implements OnInit {
  dogs: any;
  data: any;
  imageData: any;
  constructor(private dogData: DogDataService) { }



  ngOnInit(): void {

    this.dogData.getData().subscribe((response) => {
      this.data = response;
      this.dogs = Object.keys(this.data.message).map((key) => [String(key), this.data.message[key]]);
    });

  }

  getRandomDagByBreed(breedName): void {
    this.dogData.getDataByBreed(breedName).subscribe((response)=>{
      this.imageData = response.message;
      // console.log("getRandomDagByBreed (Component):  "+this.imageData);
    })
    
  }

}
