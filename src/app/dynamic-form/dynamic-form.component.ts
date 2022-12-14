import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Question } from '../home/home.component';

// UI Componentlerden httpclient ile veri çekme tavsiye edilen bir yöntem değil. Çünkü bu componentler kütüphane haline getirilip başka projelerde de kullanılmak istenebilir. // içerisine dışarıdan veri göndermek gerekir. @Input() dışarıdan componente veri göndeririz.

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {




  // dışarıdan bu componente geçilen parametreler değerler input olarak tanımlanır.

  @Input() dataSource:Question[] = [];

  constructor(private fb:FormBuilder) { }

  dynamicForm:FormGroup = this.fb.group({});

  ngOnInit(): void {

    this.initForm();

    console.log('dynamicForm', this.dynamicForm);

  }


  initForm(){
    for (const controlItem of this.dataSource) {

          

          let formControl = this.fb.control(controlItem.value);

          if(controlItem.required){
            formControl.addValidators(Validators.required);
          }

          this.dynamicForm.addControl(controlItem.id.toString(),formControl);
      
    }
  }

  onRadioButtonChange(optionValue:string,controlName:number){

    console.log('onRadioButtonChange',optionValue,controlName)

    this.dynamicForm.get(controlName.toString())?.setValue(optionValue);
  }

  onCheckBoxChange(event:any,controlName:number){
    console.log('onCheckBoxChange.event-target-value', event);

    let selectedOptions = this.dynamicForm.get(controlName.toString())?.value as any[];

    console.log('event.target.value', event.target.value);
    console.log('event.target.checked', event.target.checked);

  
    console.log('selectedOptions-1', selectedOptions);
   

    if(event.target.checked && (selectedOptions.includes(event.target.value) == false)){
      selectedOptions.push(event.target.value);

      console.log('selectedOptions-affter-add', selectedOptions);

    } else {
      selectedOptions = selectedOptions.filter(x=> x != event.target.value);

      console.log('selectedOptions-after-remove', selectedOptions);
    }

    this.dynamicForm.get(controlName.toString())?.setValue(selectedOptions);

  }

  onSubmit(){
    console.log('form-value', this.dynamicForm.value);
  }


}
