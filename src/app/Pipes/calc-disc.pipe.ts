import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcDiscount',
  standalone: true
})
export class CalcDiscPipe implements PipeTransform {

  transform(value: number,discount:number=20): number {
    let div = discount / 100
    let operationMul = div * value
    let result = value - operationMul
    return result;
  }

}
