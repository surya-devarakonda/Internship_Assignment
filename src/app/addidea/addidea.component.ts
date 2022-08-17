import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResponsesService } from '../responses.service';


@Component({ 
  selector: 'app-addidea',
  templateUrl: './addidea.component.html',
  styleUrls: ['./addidea.component.css']
})
export class AddideaComponent implements OnInit {


  //declaring the options that need to be included in the radio button
  selectGender: string = "Male"
  gender: string[] = ['Male', 'Female', 'Transgender', 'Prefer not to say'];

  //declaring the options that need to be included in the drop down
  selectTypes: string = ""
  type: string[] = ['Complaint','Query','Feedback','Suggestion'];
  



  ngOnInit(): void {
  }
// using formgroup in the form for the validations purpose.
  
  form = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(5)]),
    body: new FormControl('',[Validators.required, Validators.minLength(50)]),
    gender: new FormControl('',[Validators.required]),
    type: new FormControl('',[Validators.required])

  })  

  constructor(private res: ResponsesService)
  {
    
  }

  get f(){
    return this.form.controls;
  }

  //using onSubmit() function to display the values in the console
  onSubmit()
  {
    console.log(this.form)
    console.log(this.selectGender)
    console.log(this.selectTypes)
    this.res.res.push(this.form.value)
    //the above line is written to access the values in next components.
    console.log(this.res.res)
    this.form.reset()
    console.log(this.afuConfig)
    
  }

  //uploading this into slack using API
  afuConfig = {
    uploadAPI: {
      url:"https://slack.com/api/files.upload"
    }
};



}
