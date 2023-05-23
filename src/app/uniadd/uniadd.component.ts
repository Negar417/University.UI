import { Component } from '@angular/core';
import { UniversityService } from '../services/university-service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uniadd',
  templateUrl: './uniadd.component.html',
  styleUrls: ['./uniadd.component.css']
})
export class UniaddComponent {
  saveresp: any;
  editdata:any;
  courseId:any;
  messageclass="";
  message="";
  ngOnInit(): void {
  }
  constructor(private services: UniversityService,private rout:ActivatedRoute) {
   this.courseId=this.rout.snapshot.paramMap.get('id');
   if(this.courseId!=null&&this.courseId!=0){
     this.UpdateCourse(this.courseId);
   }
  }
  courseForm = new FormGroup({
    id: new FormControl({ value: "", disabled: true }),
    courseName: new FormControl("", Validators.required),
    teacherName: new FormControl("", Validators.required)
  })
UpdateCourse(id:any){
this.services.GetCourseById(id).subscribe(res=>{
this.editdata=res;

if(this.editdata!=null){
  this.courseForm= new FormGroup({
    id: new FormControl(this.editdata.id),
    courseName: new FormControl(this.editdata.courseName),
    teacherName: new FormControl(this.editdata.teacherName)
});
}
});

}
  SaveCourse() {
    if (this.courseForm.valid) {
      console.log(this.courseForm.value)
      this.services.saveCourse(this.courseForm.value).subscribe(res => {
        this.saveresp = res;
        if(this.saveresp.res=="pass"){
          this.message= "Save Sucessfully";
          this.messageclass="sucess"
        }else{
          this.message= "save failed";
          this.messageclass="error"
        }
      })

    }
  }


  get courseName(){
    return this.courseForm.get('courseName');
  }
  get teacherName(){
    return this.courseForm.get('teacherName');
  }
 


}
