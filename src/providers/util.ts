import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class UtilProvider {
  iabRef: any;
  loginData: any;
  
  constructor(public http: HttpClient, public loadingCtrl: LoadingController) {

  }
  
  loading(content?: string): any {
    let loading = this.loadingCtrl.create({
      content: content
    });

    return loading;
  }

  fMc2(money) {
    money = parseFloat(money);
    if (money == 0) {
      return "0.00";
    } else {
      money = money + "";
      var pointIndex = money.indexOf(".") + 1;
      if (money.indexOf(".") != -1) {
        money = money.substring(0, pointIndex + 3);
      }
      var valLen = money.toString().split(".");
      if (valLen.length == 1) {
        money = money.toString() + ".00";
        return money;
      }
      if (valLen.length > 1) {
        if (valLen[1].length < 2) {
          money = money.toString() + "0";
        } else if (valLen[1].length > 2) {
          var val = valLen[1].substr(valLen[1].length - 1, 1);
          money = Number(money);
          if (val != "0" && val != 0 && val != "") {
            return this.fMc2(Math.ceil(money * 100) / 100);
          } else {
            return money.toFixed(2);
          }
        }
        return money;
      }
      return money;
    }
  }

  /*
 * 格式化金额
 */
  //保留两位小数
  fM(money) {
    money = Number(money);
    if (money == 0) {
      return "0.00";
    } else {
      return money.toFixed(2);
    }
  }

  //千分位
  fMc(num) {
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num))
      num = "0.00";
    var reg = /\d{1,3}(?=(\d{3})+$)/g;
    var sign = num.replace(/^(\d+)((\.\d+)?)$/, function (_s0, s1, s2) { return s1.replace(reg, "$&,") + s2; });
    return sign;
  }

  //保留4位小数-进一法
  fMc1(money) {
    money = parseFloat(money);
    if (money == 0) {
      return "0.0000";
    } else {
      money = money + "";
      var pointIndex = money.indexOf(".") + 1;
      if (money.indexOf(".") != -1) {
        money = money.substring(0, pointIndex + 5);
      }
      var valLen = money.toString().split(".");
      if (valLen.length == 1) {
        money = money.toString() + ".0000";
        return money;
      }
      if (valLen.length > 1) {
        if (valLen[1].length < 2) {
          money = money.toString() + "000";
        } else if (valLen[1].length < 3) {
          money = money.toString() + "00";
        } else if (valLen[1].length < 4) {
          money = money.toString() + "0";
        } else if (valLen[1].length >= 4) {
          var val = valLen[1].substr(valLen[1].length - 1, 1);
          money = Number(money);
          if (val != "0" && val != 0 && val != "") {
            if ((Math.ceil(money * 10000) / 10000).toString().split(".")[1].length < 4) {
              return this.fMc1(Math.ceil(money * 10000) / 10000);
            } else {
              return Math.ceil(money * 10000) / 10000;
            }
          } else {
            return money.toFixed(4);
          }
        }
        return money;
      }
      return money;
    }
  }

  public toTime(diff: number) {
    if (diff < 0)
      return '00:00:00';

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);

    var hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);

    var mins = Math.floor(diff / (1000 * 60));
    diff -= mins * (1000 * 60);

    var seconds = Math.floor(diff / (1000));
    diff -= seconds * (1000);

    if (mins < 10)
      return hours + ":0" + mins;

    return hours + ":" + mins;
  }
}
