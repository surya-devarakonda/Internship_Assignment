import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResponsesService } from '../responses.service';


@Component({ 
  selector: 'app-addidea',
  templateUrl: './addidea.component.html',
  styleUrls: ['./addidea.component.css']
})
export class AddideaComponent implements OnInit {

  selectGender: string = "Male"
  gender: string[] = ['Male', 'Female', 'Transgender', 'Prefer not to say'];

  selectTypes: string = ""
  type: string[] = ['Complaint','Query','Feedback','Suggestion'];
  



  ngOnInit(): void {
  }
  form = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(5)]),
    body: new FormControl('',[Validators.required, Validators.minLength(50)])
  })  

  constructor(private res: ResponsesService)
  {
    
  }

  get f(){
    return this.form.controls;
  }
  onSubmit()
  {
    console.log(this.form.value)
    this.res.res.push(this.form.value)
    console.log(this.res.res)
    this.form.reset()
  }



}
