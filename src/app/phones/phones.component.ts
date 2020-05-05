import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { HttpService } from '../../shared-service/http.service';
import { IBike } from '../cart/cart.component';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {

  bikes: Array<IBike> = [];
  myName = '';
  phone = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService,
    private http: HttpService
  ) { }

  async ngOnInit() {
    this.phone = await this.getAllPhone('phone');
    // this.createCar('car', { make: 'Tesla', model: 'X'});
    // this.updateCar('car/id/1', { make: 'Ford', model: 'Fiesta' })
  }

  async refresh() {
    this.phone = await this.getAllPhone('phone');
  }


  // getCars('car');
  async getAllPhone(path: string) {
    const resp = await this.http.get(path);
    console.log('resp from getPhone()', resp);
    return resp;
  }

  async createPhone() {
    const phone = {
      brand: null,
      model: null,
      color: null,
      price: null,
      seller: null,
      image_url: null
    };
    const resp = await this.http.post('phone', phone);
    console.log('from createPhone resp: ', resp);
    if (resp) {
      // this.refresh();
      this.phone.unshift(resp);
    } else {
      this.toastService.showToast('danger', 3000, 'Phones create failed!')
    }
  }

  async updatePhone(phone: any) {
    console.log('from updatePhone phone: ', phone);
    const resp = await this.http.put(`phone/id/${phone.id}`, phone);
    if (resp) {
      this.toastService.showToast('success', 3000, 'phone updated successfully!')
    }
    return resp;
  }

  async removePhone(phone: any, index: number) {
    console.log('from removePhone...', index)
    this.phone.splice(index, 1);
  }

}
