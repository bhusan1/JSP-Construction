import { Component, OnInit, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FirebaseService } from 'app/services/firebase.service';
import { defaultNoOfItems } from '../../config';
import { QueryFn } from '@angular/fire/firestore';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit {
  @Input() noOfItems: number | string;
  @Input() projectListings: any;
  @Input() projectType: string;
  noOfItemsFromConfig = defaultNoOfItems;

  constructor(private fbService: FirebaseService) {}

  ngOnInit() {
    this.showProjectListingsDefault();
  }

  showProjectListingsDefault() {
    const queryFunction: QueryFn = this.getQueryFunction();
    if (!this.projectListings) {
      this.fbService
        .getFirestoreCollection('projects', queryFunction)
        .valueChanges()
        .subscribe((data) => {
          this.projectListings = data;
        });
    }
  }

  getQueryFunction() {
    if (this.noOfItems) {
      if (typeof this.noOfItems === 'number') {
        return (ref: any) =>  ref.where('projectCategory', '==', this.projectType).limit(this.noOfItems);
      }
      else if (typeof this.noOfItems === 'string' && this.noOfItems === 'all') {
        return (ref: any) => ref.where('projectCategory', '==', this.projectType);
      }
    }
    return (ref: any) => ref.where('projectCategory', '==', this.projectType).limit(this.noOfItemsFromConfig);
  }
}
