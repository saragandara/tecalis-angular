import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from 'src/app/models/store.model';
import { StoresService } from '../../services/stores.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  public storeId = 0;
  public store!: Store;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storesService: StoresService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe( (params) => {
      this.storeId = params.id;
      if (this.storeId) {
        this.getStoreDetail();
      }
    });
  }

  getStoreDetail() {
    this.storesService.getStoreDetail(this.storeId)
      .subscribe(resp => {
        this.store = resp;
      })
  }

  showStoreList() {
    this.router.navigate(['/']);
  }
}
