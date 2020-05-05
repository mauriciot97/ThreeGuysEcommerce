import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { HttpService } from '../../shared-service/http.service';
import { IBike } from '../cart/cart.component';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {

  bikes: Array<IBike> = [];
  myName = '';
  clothes = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService,
    private http: HttpService
  ) { }

  async ngOnInit() {
    this.clothes = await this.getAllClothes('clothes');
    // this.createCar('car', { make: 'Tesla', model: 'X'});
    // this.updateCar('car/id/1', { make: 'Ford', model: 'Fiesta' })
  }

  async refresh() {
    this.clothes = await this.getAllClothes('car');
  }


  // getCars('car');
  async getAllClothes(path: string) {
    const resp = await this.http.get(path);
    console.log('resp from getClothes()', resp);
    return resp;
  }

  async createClothes() {
    const clothes = {
      make: null,
      model: null,
      year: null
    };
    const resp = await this.http.post('clothes', clothes);
    console.log('from createClothes resp: ', resp);
    if (resp) {
      // this.refresh();
      this.clothes.unshift(resp);
    } else {
      this.toastService.showToast('danger', 3000, 'Clothes create failed!')
    }
  }

  async updateClothes(clothes: any) {
    console.log('from updateClothes clothes: ', clothes);
    const resp = await this.http.put(`clothes/id/${clothes.id}`, clothes);
    if (resp) {
      this.toastService.showToast('success', 3000, 'Clothes updated successfully!')
    }
    return resp;
  }

  async removeClothes(clothes: any, index: number) {
    console.log('from removeClothes...', index)
    this.clothes.splice(index, 1);
  }

}
