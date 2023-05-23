import { Student } from './models/student';
import { UniversityService } from './services/university-service';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'University.UI';
  student:Student[]=[];


  public columnDefs: ColDef[] = [
    { field: 'id'},
    { field: 'firsName'},
    { field: 'lastname'},
    { field: 'father'},
    { field: 'courseName' }
  ];
 
  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  
  public rowData$!: Observable<any[]>;

 // For accessing the Grid's API
 @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  // constructor(private universityService:UniversityService) {
  // }
  constructor(private http: HttpClient) {}

 // Example load data from server
 

//  ngOnInit():void{
//   this.universityService.getStudent().subscribe((res: any) => {
//     console.log(res);
    
//     if (res.success === true) {
//       this.rowData$ = res;
//     }
    
//   });
// }
 
 onGridReady(params: GridReadyEvent) {

  this.rowData$ = this.http
     .get<any[]>('https://localhost:5001/University');
  // this.universityService.getStudent().subscribe((res: any) => {
  //   console.log(res);
    
  //   if (res.success === true) {
  //     this.rowData$ = res;
  //   }
  // });
}

 // Example of consuming Grid Event
 onCellClicked( e: CellClickedEvent): void {
   console.log('cellClicked', e);
 }

 // Example using Grid's API
 clearSelection(): void {
   this.agGrid.api.deselectAll();
 }
 
 
}
