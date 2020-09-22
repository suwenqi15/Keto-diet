import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { RecordService } from '../services/record.service';
import { EmailValidator } from '@angular/forms';
import { DatabaseService } from '../services/database.service';




@Component({
  selector: 'app-record',
  templateUrl: 'record.page.html',
  styleUrls: ['record.page.scss']
})
export class RecordPage {
  

  page = 0;
  totalPages = 10;
  resultsCount = 10;
  data: any[] = []
  Data: any[] = []
  sortKey = null;
  sortDirection = 0;

  // Chart Data
  chartData: ChartDataSets[] = [
    { data: [], label: 'Daily CHO' },
    { data: [], label: 'Daily Fat' },
    { data: [], label: 'CHO Benchmark' },
    { data: [], label: 'Fat Benchmark' }
  ];
  chartLabels: Label[];

 // Options
 chartOptions = {
  responsive: true,
  title: {
    display: true,
    text: 'Historic Stock price'
  },
  pan: {
    enabled: true,
    mode: 'xy'
  },
  zoom: {
    enabled: true,
    mode: 'xy'
  }
};
chartColors: Color[] = [
  {
    borderColor: '#000000',
    backgroundColor: '#ff00ff'
  }
];
chartType = 'line';
showLegend = false;
// For search
stock = 'AAPL';


  //default segment
  selectTabs='table view'
  constructor(
    private dailyrecorddb: RecordService,
    private http: HttpClient
  
    ) 

    {
    this.loadtableData()
    this.getchartData();
  }


  getchartData() {
    this.http.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${this.stock}?from=2018-03-12&to=2019-03-12`).subscribe(res => {
    const history = res['historical'];

    this.chartLabels = [];
    this.chartData[0].data = [];

    for (let entry of history) {
      this.chartLabels.push(entry.date);
      this.chartData[0].data.push(entry['close']);
    }

  });
}

  loadtableData(){
    this.dailyrecorddb.fetchRecords().subscribe(item => {
      this.Data = item
   
    });

  }

  //   loadtableData() {
  //   this.http
  //     .get(`https://randomuser.me/api/?page=${this.page}&results=${this.resultsCount}`)
  //     .subscribe(res => {
  //       this.data = res['results'];
        
  //     });
     
  // }

  
  nextPage() {
    this.page++;
    this.loadtableData();
  }
 
  prevPage() {
    this.page--;
    this.loadtableData();
  }
 
  goFirst() {
    this.page = 0;
    this.loadtableData();
  }
 
  goLast() {
    this.page = this.totalPages - 1;
    this.loadtableData();
  }

  sortBy(key) {
    this.sortKey = key;
    this.sortDirection++;
    this.sort();
  }

  sort() {
    if (this.sortDirection == 1) {
      this.data = this.data.sort((a, b) => {
        const valA = a[this.sortKey];
        const valB = b[this.sortKey];
        return valA.localeCompare(valB);
      });
    } else if (this.sortDirection == 2) {
      this.data = this.data.sort((a, b) => {
        const valA = a[this.sortKey];
        const valB = b[this.sortKey];
        return valB.localeCompare(valA);
      });
    } else {
      // Reset to default
      this.sortKey = null;
      this.sortDirection = 0;
    }
  }22


}






  