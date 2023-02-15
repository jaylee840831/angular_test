export interface Todo{
    header:{
        header:string,
        process_staus:string,
        total_count:number
      },
      details:Array<{
        detail_serial:string,
        detail_status:string,
        detail_err_desc:string,
        editing:boolean
      }>,
      tailer:{
        tailer:string,
        success_count:number,
        fail_count:number
      }
}

export enum TodoStatusType{
  All,
  Success,
  Error
}

// export class TodoClass{
//   header!: {
//     header: string;
//     process_staus: string;
//     total_count: number;
//   };

//   details!:Array<{
//     detail_serial:string,
//     detail_status:string,
//     detail_err_desc:string
//   }>;

//   tailer!:{
//     tailer:string,
//     success_count:number,
//     fail_count:number
//   }

//   constructor(
//     _header:{
//     header: string;
//     process_staus: string;
//     total_count: number;
//     },
//     _details:Array<{
//       detail_serial:string,
//       detail_status:string,
//       detail_err_desc:string
//     }>,
//     _tailer:{
//       tailer:string,
//       success_count:number,
//       fail_count:number
//     }
//   ){
//     this.header = _header;
//     this.details = _details;
//     this.tailer = _tailer;
//   }
// }
