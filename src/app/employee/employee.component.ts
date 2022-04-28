import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { MasterService } from '../service/master.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements AfterViewInit {

  constructor(private service: MasterService) {
    this.GetEmployee();

    this.service.Refreshrequired.subscribe(result=>{
      this.GetEmployee();
    });

  }

  @ViewChild(PopupComponent) addview !:PopupComponent

  Emplist: any;

  GetEmployee() {
    this.service.GetEmployee().subscribe(result => {
      this.Emplist = result;
    });
  }

  functionedit(code:any){

    this.addview.LoadEditData(code);

  }


  functiondelete(code:any){
    if(confirm("Do you want to remove?")){
      this.service.RemoveEmployee(code).subscribe(result => {
        this.GetEmployee();
      });
    }

  }

  ngAfterViewInit(): void {

  }

}
