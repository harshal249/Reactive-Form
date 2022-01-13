import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent  {

  form= new FormGroup({
    projectname : new FormControl(),
    projectcode : new FormControl(),
    projectstartdate : new FormControl(),
    projectenddate : new FormControl()

  });

}
