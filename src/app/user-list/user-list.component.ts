import { Component, OnInit } from '@angular/core';
import { UserListService } from '../user-list.service';
import { User } from '../models/user.model';
import { MatDialog } from '@angular/material';
import { UserInfoDialogComponent } from '../user-info-dialog/user-info-dialog.component';
import { UserInfo } from '../models/user-info.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: User[];

  constructor(
    private userListService: UserListService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.showUsers();
  }

  showUsers() {
    this.userListService.getUsers()
      .subscribe((data: User[]) => this.users$ = data);
  }

  showInfo(user: User) {
    this.userListService.getUserInfo(user.login)
      .subscribe((data: UserInfo) => {
        this.userListService.getUserRepos(user.login)
          .subscribe((repoData: any[]) => {
            data.repos = repoData.slice(0, 10).map( (repo) => repo.name);
            console.log(data.repos);
            const dialogRef = this.dialog.open(UserInfoDialogComponent, {
              data: data
            });

            dialogRef.afterClosed().subscribe(result => {
              console.log('The dialog was closed');
            });
        })
      });
  }

}
