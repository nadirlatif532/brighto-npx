import { Component, OnInit } from '@angular/core';
import { LuxuryFinishing } from '../../../core/models/luxury-finishing.interface';
import { SharedService } from '../../../shared/services/shared.service';
import { ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';
import { LuxuryFinishingService } from '../../../core/services/luxury-finishing.service';
import { Finish } from '../../../core/models/finish.interface';

@Component({
  selector: 'app-list-finishing',
  templateUrl: './list-finishing.component.html',
  styleUrls: ['./list-finishing.component.scss']
})
export class ListFinishingComponent implements OnInit {

  luxuryFinishings: LuxuryFinishing[];
  loading: boolean = true;
  baseUrl: string;
  selectedFinishing: Finish;
  displayDialog: boolean  =false;
  images:any[] = []

  constructor(
    private finishingService: LuxuryFinishingService,
    private sharedService: SharedService,
    private confirmationService: ConfirmationService,
    private router: Router) { }

  ngOnInit() {
    this.finishingService.getAll().subscribe(
      (next) => {this.luxuryFinishings = next},
      () => {},
      () => this.loading = false
    );
    this.baseUrl = this.sharedService.baseUrl;
  }
  deleteLuxuryFinishing(luxuryFinishing: LuxuryFinishing) {
    this.confirmationService.confirm({ message: 'Are you sure?' ,
    accept: () => {
      this.loading = true;
      this.finishingService.delete(luxuryFinishing).subscribe(
        () => this.ngOnInit(),
        () => {},
        () => this.loading = false
      );
    }});
  }
  editLuxuryFinishing(luxuryFinishing: LuxuryFinishing){
    this.router.navigate(['luxury-finishing', 'edit', luxuryFinishing.id]);
  }
  showImages(event: Event, finishing: Finish) {
    this.selectedFinishing = finishing;
    this.displayDialog = true;
    event.preventDefault();
  }

  onDialogHide() {
    this.selectedFinishing = null;
  }
  }


