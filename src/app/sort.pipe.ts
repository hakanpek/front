import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sortBy"
})
export class SortByPipe implements PipeTransform {
  public transform(array: any[], reverse: boolean = false, prop?: string) {
    array=JSON.parse(JSON.stringify(array));
    if (!Array.isArray(array)) {
      return array;
    }
    if (array.length) {
      let sortedArray: any[];
      if (typeof array[0] === "string") {
        sortedArray = array.sort();
      }
      if (typeof array[0] === "number") {
        sortedArray = array.sort((a, b) => a - b);
      }
      // if (typeof array[0] === "number") {
      //   sortedArray = array.sort((a, b) => b - a);
      // }
      if (typeof array[0] === "object" && prop) {
        sortedArray = array.sort((a, b) => a[prop].toString().localeCompare(b[prop].toString()));
      }
      if (reverse) {
        return sortedArray.reverse();
      } else {
        return sortedArray;
      }
    }
    return array;
  }
}
