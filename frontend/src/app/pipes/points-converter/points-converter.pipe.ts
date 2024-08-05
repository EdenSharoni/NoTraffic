import { Pipe, PipeTransform } from '@angular/core';
import { Point } from 'src/app/models/zone.interface';

@Pipe({
  name: 'pointsConverter',
})
export class PointsConverterPipe implements PipeTransform {
  transform(value: Point[], multiply: number): string {
    return value
      .flat()
      .map((p) => p * multiply)
      .join(', ');
  }
}
