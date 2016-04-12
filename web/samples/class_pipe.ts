@Pipe({name: 'money'})
export class MoneyPipe implements PipeTransform {
    transform(value:number, [sign]) : number {
        return `${value} ${sign}`;
    }
}