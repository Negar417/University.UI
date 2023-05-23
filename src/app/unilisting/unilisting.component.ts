import { Component } from '@angular/core';
import { UniversityService } from '../services/university-service';

@Component({
  selector: 'app-unilisting',
  templateUrl: './unilisting.component.html',
  styleUrls: ['./unilisting.component.css']
})
export class UnilistingComponent {
  coursedata: any;
  constructor(private service: UniversityService) {
    this.LoadCourse();

  }
  ngOnInit(): void {

  }
  LoadCourse() {
    this.service.getCourse().subscribe(res => {
      this.coursedata = res;
      console.log(this.coursedata);
    })

  }

  delete(id:any){
if(confirm("do you want remove?")){
  this.service.removeCourse(id).subscribe(res=>{
    this.LoadCourse();
  });
}
  }
}
