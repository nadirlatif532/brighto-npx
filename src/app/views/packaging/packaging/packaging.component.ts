import { Component, OnInit } from '@angular/core';
import { Packagings } from '../../../core/models/packaging.interface';
import { PackagingService } from '../../../core/services/packaging.service';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-packaging',
  templateUrl: './packaging.component.html',
  styleUrls: ['./packaging.component.scss']
})
export class PackagingComponent implements OnInit {

  displayDialog: boolean;
  packaging:Packagings;
  packagings:Packagings[];
  newPackaging: boolean = false;
  selectedPackaging: Packagings;
  loading: boolean = true;
  baseUrl: string;

  constructor(
    private packagingService:PackagingService,
    private sharedService: SharedService) { }

    ngOnInit() {
      this.packagingService.getAll().subscribe(
        next => {
          this.packagings = next,
          this.baseUrl = this.sharedService.baseUrl;
        },
        () => {},
        () => this.loading = false
      );
    }

    onRowSelect(event) {
      this.newPackaging= false;
      this.packaging = this.clonePackaging(event.data);
      this.displayDialog = true;
    }

    showDialogToAdd() {
      this.newPackaging = true;
      this.packaging = {} as Packagings;
      this.displayDialog = true;
    }

    save() {
      let formData = new FormData();
      formData.append('image', this.packaging.image);
      formData.append('name', this.packaging.name);

      this.loading = true;
      if (this.newPackaging) {
        this.packagingService.save(formData).subscribe(
          () => this.ngOnInit()
        );
      } else {
        this.packagingService.update(formData, this.packaging.id).subscribe(
          () => this.ngOnInit()
        );
      }
      this.packaging = null;
      this.displayDialog = false;
    }

    myUploader(event) {
      this.packaging.image = event.files[0];
    }

    delete() {
      this.loading = true;
      this.packagingService.delete(this.selectedPackaging).subscribe(
        () => {
          this.displayDialog = false;
          this.ngOnInit();
        }
      )
    }

    clonePackaging(packaging) {
      let count: Packagings = {id: packaging.id, name: packaging.name, image: packaging.image};
      return count;
    }

}
