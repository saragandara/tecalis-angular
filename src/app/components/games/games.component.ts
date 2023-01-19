import { Component, Input, Output, EventEmitter, OnInit,  } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { GamesService } from '../../services/games.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  myModal?: BsModalRef;
  
  private _storeId = 0;
  
  public page = 1;
  public gamesList: Game[] = [];
  public gamesToShow: Game[] = [];
  public game!: Game;


  @Input() set storeId(storeId: number) {
    if (storeId) {
      this._storeId = storeId;
      this.getGamesList();
    }
  }
  get storeId() { return this._storeId; }

  @Output() goBackToStoreList = new EventEmitter<boolean>();

  constructor(
    private gamesService: GamesService
  ) { }

  ngOnInit(): void {
  }

  getGamesList() {
    this.gamesService.getGamesList()
      .subscribe(resp => {
        this.gamesList = resp;
        this.changePage(1);
      });
  }

  showGameDetails(id: number) {
    this.gamesService.getGameDetail(id)
      .subscribe(resp => {
        this.game = resp;
        this.game.rating_percentaje = (this.game.rating * 100) / this.game.rating_top;
      })
      
  }

  changePage(page: number) {
    const firstElement = page === 1 ? 0 : (page - 1) * 10;
    const lastElement = page < this.gamesList.length ? page * 10 : this.gamesList.length;
    this.gamesToShow = [...this.gamesList.slice(firstElement, lastElement)];
  }

  backToStoreList() {
    this.goBackToStoreList.emit(true);
  }

}
