import { Component, OnInit } from '@angular/core';

export interface Question {
  id:number;
  label:string;
  value:string | string[] | number;
  type:string;
  options?:string[],
  loadAfter?:boolean;
  required:boolean;
}


@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomePageComponent implements OnInit {

  // HttpClient istekleri sadece Page Componentler içerisinden yapılmalıdır.

  dataSource: Question[] = [
    {
      id: 134324,
      label: 'Evli misiniz ?',
      value: 'Evet',
      type: 'radio',
      options: ['Evet', 'Hayır'],
      required:true
    },
    {
      id: 134326,
      label: 'Hobileriniz Nelerdir',
      value: ['Spor', 'Yüzme'], // veri tabanında ilk açılışta set edilen değerler, edit işleminde buranın bu şekilde dolu olması lazım
      type: 'checkbox',
      options: ['Spor', 'Yüzme', 'Fitness', 'Kayak'],
      required:true
    },
    {
      id: 3767898,
      label: 'Bulunduğunuz şehirler nerelerdir ?',
      value: ['izmir', 'istanbul'],
      type: 'select',
      options: ['ankara', 'izmir', 'istanbul', 'kocaeli'],
      loadAfter: true,
      required:true
    },
    {
      id: 37678967,
      label: 'Deneyimleriniz ?',
      value: ['vuejs', 'angular'],
      type: 'select',
      options: ['c#', 'angular', 'vuejs', 'reactjs'],
      loadAfter: true,
      required:true
    },
    {
      id: 378909,
      label: 'Türkiyenin en büyük gölü nerededir ?',
      value: 'Van',
      type: 'input',
      required:true
    },
    {
      id: 6577657,
      label: 'Yaşın Kaçdasınız ?',
      value: 21,
      type: 'numeric',
      required:true
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
