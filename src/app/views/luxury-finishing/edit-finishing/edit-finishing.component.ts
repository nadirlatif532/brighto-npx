import { Component, OnInit } from "@angular/core";
import { LuxuryFinishing } from "../../../core/models/luxury-finishing.interface";
import { LuxuryFinishingService } from "../../../core/services/luxury-finishing.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-edit-finishing",
  templateUrl: "./edit-finishing.component.html",
  styleUrls: ["./edit-finishing.component.scss"]
})
export class EditFinishingComponent implements OnInit {
  luxuryFinishing: LuxuryFinishing = {} as LuxuryFinishing;
  imageErr: boolean = false;
  images: any[] = [];
  coverImage: any;
  productImage: any;
  uploadImageStack: boolean;

  constructor(
    private finishingService: LuxuryFinishingService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params["id"];
    if (id) {
      this.finishingService.findById(id).subscribe(next => {
        this.luxuryFinishing = next;
      });
    }
  }
  myUploader(event) {

    this.imageErr = false;
    this.productImage = event.files[0];
  }
  CoverUploader(event) {

    this.imageErr = false;
    this.coverImage = event.files[0];
  }
  ImagesUploader(event) {
    for (let file of event.files) {
      this.images.push(file);
    }
    this.uploadImageStack = true;
  }
  removeImageUploader(event) {
    this.imageErr = true;
  }
  removeMultiImageUploads(event) {
    this.uploadImageStack = false;
  }
  submit() {
    var tags = String(this.luxuryFinishing.description);
    var description = tags.replace(/<[^>]*>/g, "");
    let formData = new FormData();
    formData.append("name", this.luxuryFinishing.name);
    formData.append("description", description);
    formData.append("video", this.luxuryFinishing.video);
    if (this.coverImage) {
      formData.append("coverImage", this.coverImage);
    }
    if (this.productImage) {
      formData.append("image1", this.productImage);
    }
    if (this.uploadImageStack) {
      for (let i = 1; i <= this.images.length; i++) {
        let imageKey = "image";
        imageKey = imageKey +( i + 1);
        formData.append(imageKey, this.images[i - 1]);
      }
    }
    this.finishingService
      .update(formData, this.luxuryFinishing.id)
      .subscribe(
        () => this.router.navigate(["luxury-finishing", "list"]),
        () => {},
        () => {}
      );
  }
}
