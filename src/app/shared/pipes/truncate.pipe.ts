import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'truncate'
})

export class TruncatePipe implements PipeTransform {

//Pipe to trim the description field for the card view
//on the skill page.
transform(value: string, limit: number): string {
    if(value.length > limit)
    {
        const sub = value.substring(0, limit)
        return sub.substring(0, sub.lastIndexOf(' ')) + '...';
    }
    else{
        return value;   
    }
    
   }
}