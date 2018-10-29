import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minute'
})
export class MinutePipe implements PipeTransform {

  transform(value: number): string {
    // const day: number = Math.floor(value / 1440);
    const day:number =  Math.floor(value / 1440 );
    let hours = Math.floor( (value - day * 1440) / 60 );
    let minutes = Math.floor( (value - hours * 1440) % 60 );
    return day + ' day ' + hours + ' sa '+  minutes + ' dk ' ;

  //saati bulduk
   //gün dakika  olacak  toplam dakikadan  çıkart

   // kod bloğu  365 day 3h 8dk yazdı   525720 de   /////
  //  const day:number =  Math.floor(value / 1440 );
  //  let hours = Math.floor( (value - day * 1440) / 60 );
  //  let minutes = Math.floor( (value - hours * 1440) % 60 );
  //  return day + ' day ' + hours + ' sa '+  minutes + ' dk ' ;
      //kod bloğu  /////

    // kod bloğu  365 day 2 h yazdı   525720 de   /////
  //  transform(value: number): string {
  //   // const day: number = Math.floor(value / 1440);
  //   const day:number =  Math.floor(value / 1440 );
  //   let hours = Math.floor( (value - day * 1440) / 60 );
  //   return day + ' d ' + hours + ' h '+   + ' dk ' ;
   //kod bloğu  /////

   // kod bloğu  365 day 120 h yazdı   525720 de   /////
  //  const day:number =  Math.floor(value / 1440 );
  //  let hours = Math.floor( value - day * 1440);
  //  return day + ' d ' + hours + ' h '+   + ' dk '   ;
   //kod bloğu  /////

  //  const day:number =  Math.floor(value / 1440 );
  //  const hours :number =  Math.floor(value / 60);
  //  return day + ' d ' + hours + ' h '+  (value - hours * 60) + ' dk '   ;

 }

}

// const hours :number =  Math.floor(value / 60);
// return  hours + ' h '+  (value - hours * 60) + ' dk '   ;

  // 365 gün  7 saat 20 dk  = 526440 eşit
 // 8774  saat  = 526440 eşit

// const hours:number=  Math.floor((value-day) % 60);

// transform(value: number): string {
//   const minutes: number = Math.floor(value / 60);
//   return minutes + ' h ' + (value - minutes * 60) + ' m' ;
// }

// const day: number = Math.floor(value / 1440);

// value =126 olsun
//   minutes   = 126\60 =2  bölüm
//   126-  2*60 =126-120 = 6 m olur
// @Pipe({
//   name: 'minute'
// })
// export class MinutePipe implements PipeTransform {
//   transform(value: number): string {
//     if( value > 0 && value/60 < 1) {
//       return value + ' Minutes';

//     } else {
//       return value/60 + ' Hour(s)';
//     }
//  }

// }

// transform(value: number): string {
//   let  temp = value * 60;
//   const hours = Math.floor((temp/3600));
//   const minutes: number = Math.floor((temp/ 60)/60);
//   const seconds=Math.floor(temp % 3600 % 60);
//   return hours + ' s ' + minutes + ' m ' + seconds;
// }
