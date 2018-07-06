import {Component, OnInit} from '@angular/core';

@Component({
  selector: "big-sort-componenet",
  templateUrl: "./app.component.html"
})
export class SortClass {

  invoices: [{name: string, num: number, id: string, para: string, date: string, crush: string}];
  _name: any[] = [{thing:'', oi:0}];
  _num: any[] = [{thing:0, oi:0}];
  _id: any[] = [{thing:'', oi:0}];
  _para: any[]= [{thing:'', oi:0}];
  _date: any[] = [{thing:'', oi:0}];
  _crush: any[] = [{thing:'', oi:0}];
  sorterStrings: string[] = ["crush", 'date', 'id', 'name', 'num', 'para'];
  p: number = 1;

  ngOnInit(){
    this.createInvoices();
    this.createSortingArrays();
  }

  createSortingArrays(){
    let count = 0;
    this.invoices.forEach((invoice) => {
      this._name.push({thing: invoice.name, oi: count});
      this._num.push({thing: invoice.num, oi: count});
      this._id.push({thing: invoice.id, oi: count});
      this._para.push({thing: invoice.para, oi: count});
      this._date.push({thing: invoice.date, oi: count});
      this._crush.push({thing: invoice.crush, oi: count});
    });
    if (this._crush.shift().thing !== '')
      this._crush.shift();
    if (this._date.shift().thing !== '')
      this._date.shift();
    if (this._id.shift().thing !== '')
      this._id.shift();
    if (this._name.shift().thing !== '')
      this._name.shift();
    if (this._num.shift().thing !== 0)
      this._num.shift();
    if (this._para.shift().thing !== '')
      this._para.shift();
    this.sortArrays();
  }

  sortArrays(){
    this._crush.sort(compare);
    this._date.sort(compare);
    this._id.sort(compare);
    this._para.sort(compare);
    this._name.sort(compare);
    this._num.sort(compare);

    function compare(a, b){
      if (a.thing < b.thing)
        return -1;
      if (a.thing > b.thing)
        return 1;
      return 0;
    }
  }

  applySort(sort){
    let unO = this.invoices;
    let that = this;

    if (sort === "crush")
      this.invoices = replace(that._crush);
    if (sort === "date")
      this.invoices = replace(that._date);
    if (sort === "id")
      this.invoices = replace(that._id);
    if (sort === "para")
      this.invoices = replace(that._para);
    if (sort === "name")
      this.invoices = replace(that._name);
    if (sort === "num")
      this.invoices = replace(that._num);

    /*For debugging purposes (see if im in an infinite loop)*/let count = 0;
    function replace(sA, i?, temp?, checkpoint?){
      i = i ? i : 0;
      temp = temp ? temp : unO[sA[i].oi];
      let compare = that.createCompareVar(sA, temp[i]);
      /*For debugging purposes (see if im in an infinite loop)*/
      if (count > sA.length) {
        console.log("ERROR!! Count(", count, ") > sA(", sA.length, ")");
        return;
      }
      if (compare === sA[i].thing)
        return checkList(sA, checkpoint);
      else{
        let temp1 = unO[i];
        unO[i] = temp;
        count++;
        replace(sA, sA[i].oi, temp1, checkpoint)
      }
    }

    function checkList(sA, i?){
      if (i < sA.length){
        let compare = that.createCompareVar(sA, unO[i]);
        if (sA[i].thing !== compare)
          checkList(sA, i + 1);
        else
          replace(sA, i, unO[i], i);
      }
      else
        return unO;
    }
  }

  createCompareVar(sA, list){
    if(sA === this._crush)
      return list.crush;
    if(sA === this._date)
      return list.date;
    if(sA === this._id)
      return list.id;
    if(sA === this._name)
      return list.name;
    if(sA === this._num)
      return list.num;
    if(sA === this._para)
      return list.para;
  }

  createInvoices(){
    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = '0123456789';
    for (let i = 0; i < 4000; i++){
      this.invoices[i].num = createObject();
      this.invoices[i].name = this.invoices[i].crush = createObject(true);
      this.invoices[i].id = createObject(false, true);
      this.invoices[i].para = createObject(false, false, true);
      this.invoices[i].date = createObject(false, false, false, true);
    }

    function createObject(name?, id?, para?, date?){
      let result;
      if (name){
        result = '';
        for (let i = 0; i < 10; i++){
          result += letters.charAt(Math.floor(Math.random() * 52));
          if (para){
            for (let i = 0; i < 300; i++)
              result += letters.charAt(Math.floor(Math.random() * 52));
          }
        }
      }
      else{
        result = 0;
        if (date){
          for (let i = 0; i < 8; i++){
            result += numbers.charAt(Math.floor(Math.random() * 10));
            if (result.charAt(0) === 1 && result.length === 2){
              result += numbers.charAt(Math.floor(Math.random() * 3)) + "-";
              i = i + 2
            }
            else if ((result.charAt(0) > 1 || result.charAt(0) < 1) && result.length === 1){
              result = (result.charAt(0) < 1) ?
                result + numbers.charAt(Math.floor(Math.random() * 10)) + "-" :
                "0" + result + "-";
              i = i + 2;
            }
            else if (result.length === 3){
              result += numbers.charAt(Math.floor(Math.random() * 4));
              if (result.charAt(3) === 3){
                result += '0-';
                i = i + 2;
              }
              else{
                result += numbers.charAt(Math.floor(Math.random() * 10)) + '-';
                i = i + 2;
              }
            }
          }
        }
        else if(id){
          for (let i = 0; i < 16; i++){
            let rand = Math.floor(Math.random() * 62);
            if (rand >= 10)
              result += letters.charAt(rand - 10);
            else{
              result += numbers.charAt(rand);
            }
          }
        }
        else{
          for (let i = 0; i < 8; i++)
            result += numbers.charAt(Math.floor(Math.random() * 10));
        }
      }
      return result;
    }
  }
}

