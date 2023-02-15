import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenApiService {

  blob!: Blob;

  constructor(private http : HttpClient) { }

  getCompany(){
      //跨來源資源共用(CORS)
      this.http.get<any>('/v1/opendata/t187ap03_L', { responseType: 'blob' as 'json' }).subscribe(x => {

        this.blob = new Blob([x], { type: 'application/json' }); // application後面接下載的副檔名
        
        let downloadURL = window.URL.createObjectURL(this.blob);
        let link = document.createElement('a');
        link.href = downloadURL;
        link.download = "台灣證券交易所_上市公司基本資料.json"; //瀏覽器下載時的檔案名稱
        link.click();
      });
  }

  getMarketStatus(){
    //跨來源資源共用(CORS)
    this.http.get<any>('/openapi/v1/tpex_mainborad_highlight', { responseType: 'blob' as 'json' }).subscribe(x => {

      this.blob = new Blob([x], { type: 'application/json' }); // application後面接下載的副檔名
      
      let downloadURL = window.URL.createObjectURL(this.blob);
      let link = document.createElement('a');
      link.href = downloadURL;
      link.download = "證券櫃檯買賣中心_上櫃股票市場現況.json"; //瀏覽器下載時的檔案名稱
      link.click();
    });
  }

  getMarriageStatus(){
    //跨來源資源共用(CORS)
    return this.http.get('/api/service/get/a182559b-5f14-439d-ad4e-512c0a7291bb', {observe: 'response', responseType: 'json'});
  }
}
