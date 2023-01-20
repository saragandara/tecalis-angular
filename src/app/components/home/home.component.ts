import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from 'src/app/models/store.model';
import { StoresService } from '../../services/stores.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public defaultImage = 'assets/img/default.png';
  public storeList: Store[] = [];
  public isDomainClicked = false;

  constructor(
    private router: Router,
    private storesService: StoresService
  ) { }

  ngOnInit(): void {    
    this.getStoresList();
  }

  getStoresList() {
    this.storesService.getStoresList()
      .subscribe(resp => {
        this.storeList = resp;
      });
  }

  setDefaultImage(event: any) {
    event.target.src = this.defaultImage;
  }

  showStoreDetails(id: number) {
    if (this.isDomainClicked) {
      this.isDomainClicked = false;
    } else {
      this.router.navigate([`store/${id}`]);
    }
  }

  domainClick() {
    this.isDomainClicked = true;
  }
}
