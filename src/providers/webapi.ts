import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UtilProvider } from './util';

@Injectable()
export class WebApi {
    constructor(
        public events: Events,
        public storage: Storage,
        public http: HttpClient,
        public util: UtilProvider) {

    }
}