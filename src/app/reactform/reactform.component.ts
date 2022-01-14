import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent  {

  form= new FormGroup({
    projectname : new FormControl('',Validators.required),
    projectcode : new FormControl('',Validators.required),
    projectstartdate : new FormControl('',Validators.required),
    projectenddate : new FormControl('',Validators.required)
  });

  get projectname() { return this.form.get('projectname'); }
  get projectcode() { return this.form.get('projectcode'); }
  get projectstartdate() {return this.form.get('projectstartdate');}
  get projectenddate() {return this.form.get('projectenddate');}

  onSubmit(){
    if(this.form.valid){
      console.log("Form Succesfully Submitted");
      this.form.reset()
    }
    console.log("Please Fill the details")
  }
}
