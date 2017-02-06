import { Component } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  events = null;
  events_name = null;
  events_description = null;
  events_image = null;
  events_img_url = null;
  mydata = [];
  constructor(public http: Http) {
    const endpoint = 'https://www.eventbriteapi.com/v3/events/search/?token=4GD7NTDMEHS6K7GSVVLJ&q=lsbu';
      this.http.get(endpoint).map(res => res.json()).subscribe(data => {
          this.events = data.events;

          for (var i=0; i < this.events.length; i++) {
              if (this.events[i].logo === null) {
                  this.mydata.push({
                      name: this.events[i].name.html,
                      img: 'no-image',
                  })
              } else {
                  this.mydata.push({
                      name: this.events[i].name.html,
                      img: this.events[i].logo.url,
                  })
              }
          }
      });
  }

}
