import { Component } from '@angular/core';
import { ApiService } from '../Service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	user_id: any;
	pet_image: any;
	pet_name: any;
	pet_breed: any;
	pet_gender: any;
	pet: any = [];
	
  constructor(
		public _apiService: ApiService
	) {
		this.getPet();
	}
  
  addPet(){
	  let data = {
		user_id: this.user_id,
		pet_image: this.pet_image,
		pet_breed: this.pet_breed,
		pet_name:  this.pet_name,
		pet_gender:this.pet_gender,
	  }
	  this._apiService.addPet(data).subscribe((res:any) => {
		  console.log("SUCCESS ===",res);
		  this.user_id = '';
		  this.pet_image = '';
		  this.pet_name = '';
		  this.pet_breed = '';
		  this.pet_gender = '';
	  },(error: any) => {
		  console.log("ERROR ===",error);
	  })
	
  }
  
  getPet(){
	  this._apiService.getPet().subscribe((res:any) => {
		  console.log("SUCCESS",res);
		  this.pet = res;
	  },(error: any) => {
		  console.log("ERROR",error);
	  })
  }
  
  deletePet(pet_id){
	  this._apiService.deletePet(pet_id).subscribe((res:any) => {
		  console.log("SUCCESS",res);
		  this.getPet();
	  },(error: any) => {
		  console.log("ERROR",error);
	  })
  }

}
