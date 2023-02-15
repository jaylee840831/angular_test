import { OpenApiService } from './@services/open-api.service';
import { ExampleService } from './@services/example.service';
import { User } from './@modules/user.module';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Todo, TodoStatusType } from './@modules/todo.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'how are you';
  show_name = 'jasper';
  phd='輸入';
  phdSearchBar = '輸入關鍵字';
  myModal: any;
  loadingModal : any;
  nowTodoStatusType = TodoStatusType.All;
  TodoStatusType = TodoStatusType;
  nowSelectUser!: User;
  num = 0;

  toggleBtn = false;
  check1= false;
  check2= false;
  btnStyle = 'btn btn-primary';

  currentDate = new Date();
  blob!: Blob;
  responseData2!: Todo;
  govData!: any;

  //雙向繫結變數
  todoInputModel = '';

  responseData =
    {
      header:{
        header:"",
        process_staus:"",
        total_count:0
      },
      details:[
        {
          detail_serial:"",
          detail_status:"",
          detail_err_desc:""
        },
        {
          detail_serial:"",
          detail_status:"",
          detail_err_desc:""
        },
        {
          detail_serial:"",
          detail_status:"",
          detail_err_desc:""
        }
      ],
      tailer:{
        tailer:"",
        success_count:0,
        fail_count:0
      }
    };

  constructor(private http : HttpClient, private exampleService : ExampleService, private openApiService : OpenApiService){}

  ngOnInit(): void {
   
    //模擬使用api從後端取得資料
    this.http.get<Todo>('assets/responseData2.json').subscribe(data=>{
      this.responseData2 = data;
    });

    this.myModal = new bootstrap.Modal(document.getElementById('exampleModal'),{
      keyboard:false
    })

    this.loadingModal = new bootstrap.Modal(document.getElementById('loadingModal'),{
      keyboard:false
    })
    
    $('#bu').on('click',()=>{
      $('.aa').css('color','blue')
      this.myModal.show();
    })
  }

  /*responseData2:Todo =
    {
      header:{
        header:"H",
        process_staus:"20",
        total_count:10
      },
      details:[
        {
          detail_serial:"00000001",
          detail_status:"10",
          detail_err_desc:"",
          editing:false
        },
        {
          detail_serial:"00000002",
          detail_status:"10",
          detail_err_desc:"",
          editing:false
        },
        {
          detail_serial:"00000003",
          detail_status:"50",
          detail_err_desc:"客戶帳號代碼錯誤",
          editing:false
        }
      ],
      tailer:{
        tailer:"T",
        success_count:6,
        fail_count:4
      }
    };*/

  users =[
    {
      lv:1,
      name:"jasper",
      imgSrc:"1.jpg"
    },
    {
      lv:2,
      name:"jasper2",
      imgSrc:"2.jpg"
    },
    {
      lv:3,
      name:"luka"
      ,imgSrc:"3.jpg"
    }
  ];

  testJson = {
    foo:"bar",
    baz:"qux",
    nested:{
      xyz:3,
      numbers:[1,2,3,4,5]
    }
  };

  toggleAllBtn(){
    this.toggleBtn = !this.toggleBtn;
    this.check1= this.toggleBtn;
    this.check2= this.toggleBtn;
    
    if(this.toggleBtn){
      this.btnStyle = 'btn btn-danger';
    }
    else{
      this.btnStyle = 'btn btn-primary';
    }
  }

  showAll(){
    alert('hi');
  }

  showError(){
    
  }

  delete(serial : string){

    this.loadingModal.show();

    for(let i=0;i<this.responseData2.details.length;i++){
      if(this.responseData2.details[i].detail_serial === serial){
        this.responseData2.details.splice(i, 1);
      }
    }

    setTimeout(() =>{
      this.loadingModal.hide();
    },1000);
  }

  addNum(){
    this.exampleService.addNum();
    this.num = this.exampleService.num;
  }

  getNum(){
    return this.exampleService.num;
  }

  add(){
    const index = this.responseData2.details.length;
    var serial = '';
    var subSerial = 0;

    this.loadingModal.show();
    
    if(index > 0){
      serial = this.responseData2.details[index - 1].detail_serial;
      subSerial = Number(serial.substring(7));
    }
    subSerial++;

    this.responseData2.details.push({
      detail_serial:"0000000".concat(subSerial.toString()),
      detail_status:"0",
      detail_err_desc:this.todoInputModel,
      editing:false
    });

    this.todoInputModel = '';

    setTimeout(() =>{
      this.loadingModal.hide();
    },1000);
  }

  edit(serial : string){

    for(let i=0;i<this.responseData2.details.length;i++){
      if(this.responseData2.details[i].detail_serial === serial){
        const editing = this.responseData2.details[i].editing;
        if(editing == true){
          this.responseData2.details[i].editing = false;
        }
        else{
          this.responseData2.details[i].editing = true;
        }
      }
    }
  }

  updateCode(serial : string,code : string){
    for(let i=0;i<this.responseData2.details.length;i++){
      if(this.responseData2.details[i].detail_serial === serial){
        this.responseData2.details[i].detail_status = code;
        this.responseData2.details[i].editing = false;
      }
    }
  }

  updateMessage(serial : string, message : string){
    for(let i=0;i<this.responseData2.details.length;i++){
      if(this.responseData2.details[i].detail_serial === serial){
        this.responseData2.details[i].detail_err_desc = message;
        this.responseData2.details[i].editing = false;
      }
    }
  }

  setTodoStatusType(type : TodoStatusType){
    this.nowTodoStatusType = type;
  }

  selectUser(user : User){
    this.nowSelectUser = user;
  }

  corsBtn(){
    this.openApiService.getCompany();
  }

  corsBtn2(){
    this.openApiService.getMarketStatus();
  }

  corsBtn3(){
    this.openApiService.getMarriageStatus().subscribe((res) => {
      this.govData = res;
      });
  }

  public httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
      'Access-Control-Max-Age': '86400'
    })
  };

  get nowTodoList(){
    let list = [];

    switch (this.nowTodoStatusType) {
      case TodoStatusType.Success:
        list = this.successList;
        break;
      case TodoStatusType.Error:
        list = this.errorList;
        break;
      default:
        list = this.responseData2.details;
        break;
    }

    return list;
  }

  get successList(){
    return this.responseData2.details.filter(data => data.detail_status === '10');
  }

  get errorList(){
    return this.responseData2.details.filter(data => data.detail_status !== '10');
  }
}
