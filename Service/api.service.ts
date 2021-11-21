import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	headers: HttpHeaders;
  constructor(
	public http: HttpClient
	) {
		this.headers = new HttpHeaders();
		this.headers.append("Accept", 'application/json');
		this.headers.append('Content-Type', 'application/json');
		this.headers.append('Access-Control-Allow-Origin', '*');
	}
  addPet(data){
	  return this.http.post('http://localhost/Dogify/API/Register_pet.php',data,{responseType: 'text'});
  }
  getPet(){
	  return this.http.get('http://localhost/Dogify/API/Display_pet.php');
  }  
  deletePet(pet_id){
	  return this.http.delete('http://localhost/Dogify/API/Delete.php?pet_id='+pet_id);
  }
  getSinglePet(pet_id){
	  return this.http.get('http://localhost/Dogify/API/GetSingleData_pet.php?pet_id='+pet_id);
  }
  updatePet(pet_id, data){
	  return this.http.put('http://localhost/Dogify/API/update_pet.php?pet_id='+pet_id,data);
  }
  
  
}













