import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  error: boolean = false;
  errorMessage: string;
  outputData:any;
  results: any;
  constructor(private dataService: DataService) { }

  getData() {
    this.dataService.getData()
      .subscribe((resp: any) => {
       console.log(resp);
        this.error = false;
        }, (errorService) => {
          this.error = true;
          errorService = 'Algo inesperado ocurrió. Presiona el botón Update';
          this.errorMessage = errorService;
      });
  }





  ngOnInit() {
    this.getData();
  }

}
