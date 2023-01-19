import { Component, OnInit } from '@angular/core';
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
  public store!: Store;
  public storeId = 0;
  public isDomainClicked = false;

  constructor(
    private storesService: StoresService
  ) { }

  ngOnInit(): void {    
    this.getStoresList();
  }

  getStoreDetail() {
    this.storesService.getStoreDetail(this.storeId)
      .subscribe(resp => {
        this.store = resp;
      })
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
      this.storeId = id;
      this.getStoreDetail();
    }
  }

  showStoreList() {
    this.storeId = 0;
  }

  domainClick() {
    this.isDomainClicked = true;
  }
}
