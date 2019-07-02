import { Component, OnInit } from '@angular/core';
import { LuxuryShade } from '../../../core/models/luxury-shades.interface';
import { LuxuryShadesService } from '../../../core/services/luxury-shades.service';
import { SharedService } from '../../../shared/services/shared.service';
import { ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-luxury-shade',
  templateUrl: './list-luxury-shade.component.html',
  styleUrls: ['./list-luxury-shade.component.scss']
})
export class ListLuxuryShadeComponent implements OnInit {

  luxuryShades: LuxuryShade[];
  loading: boolean = true;
  baseUrl: string;

  constructor(
    private luxuryshadeService: LuxuryShadesService,
    private sharedService: SharedService,
    private confirmationService: ConfirmationService,
    private router: Router
    ) { }

    ngOnInit() {
      this.luxuryshadeService.getAll().subscribe(
        (next) => {this.luxuryShades = next},
        () => {},
        () => this.loading = false
      );
      this.baseUrl = this.sharedService.baseUrl;
    }
    deleteLuxuryShade(luxuryShade: LuxuryShade) {
      this.confirmationService.confirm({ message: 'Are you sure?' ,
      accept: () => {
        this.loading = true;
        this.luxuryshadeService.delete(luxuryShade).subscribe(
          () => this.ngOnInit(),
          () => {},
          () => this.loading = false
        );
      }});
    }
    editLuxuryShade(luxuryShade: LuxuryShade){
      this.router.navigate(['luxury-shades', 'edit', luxuryShade.id]);
    }

}
