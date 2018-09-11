import { Expense } from './../Expense';
import { Component, OnInit } from '@angular/core';
import { Category } from './Category';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent extends DatePipe implements OnInit {

   ngOnInit() {
    
  }
  title : String;
  date :  Date;
  amount : Number;
<<<<<<< Updated upstream
  category = {} as Category;
=======
  
>>>>>>> Stashed changes
  categoryName : String;
  description : String;
  expense = {} as Expense;
  
   private apiUrl  : string = "http://localhost:8080/user/expenses";
  
  constructor(public http : HttpClient,public router:Router){ 
    super("http");
  }
  
  onAddExpense(){
    this.expense.title = this.title;
    this.expense.date = this.date ;
    this.expense.amount = this.amount;
<<<<<<< Updated upstream
    this.expense.category = this.category;
    this.expense.category.categoryName = this.categoryName; 
=======
    this.expense.categoryName = this.categoryName; 
>>>>>>> Stashed changes
    this.expense.description = this.description;
    console.log(this.expense);
        return this.http.post(this.apiUrl,this.expense)
       .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['dashboard']);
        },
        err => {
          console.log(err); 
        });
      
  }
}
