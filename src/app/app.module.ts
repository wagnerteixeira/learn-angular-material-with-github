import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { UserListService } from './user-list.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserInfoDialogComponent } from './user-info-dialog/user-info-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserInfoDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule
  ],
  entryComponents: [UserInfoDialogComponent],
  providers: [
    UserListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
