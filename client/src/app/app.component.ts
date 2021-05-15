import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  passwordLength: number = 0;
  passwordAmount: number = 0;
  passwordAlphabet: string = "";
  passwords = [];

  Submit = async () => {

    const body = {
      "Length": this.passwordLength,
      "Amount": this.passwordAmount,
      "Alphabet": this.passwordAlphabet
    }
    const response = await fetch('http://localhost:3000/api/passwords', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {'Content-Type': 'application/json'},
    });
    this.saveIntoArray(await response.json())
  }

  saveIntoArray = (passwords: any) => {
    this.passwords = passwords.split("\n");
    this.passwords.pop();
    console.log(this.passwords.length);
    console.log(this.passwords);
  }
}
