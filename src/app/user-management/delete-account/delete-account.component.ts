import { Component, OnInit } from '@angular/core';
import { AppService } from './../../app.service'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})

export class DeleteAccountComponent implements OnInit {
  public userID: String;
  constructor(public toastr: ToastrService, public appService: AppService, public router: Router) { }

  ngOnInit() { }

  public gotoLogin = () => {
    this.router.navigate(["/login"])
  }
  
  public deleteAccount = () => {
    if (!this.userID) {
      this.toastr.warning("Enter UserID");
    }
    else {
      this.appService.removeAccount(this.userID).subscribe((apiResponse: any) => {
        if (apiResponse.status == 200) {
          this.toastr.success(apiResponse.message);
          setTimeout(() => {
            this.gotoLogin();
          }, 2000)
        }
        else {
          this.toastr.error(apiResponse.message);
        }
      }, (err) => {
        this.toastr.error(" Connection Error Took Place");
      });
    }
  }
}

