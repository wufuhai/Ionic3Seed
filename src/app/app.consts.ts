import { ComponentsModule } from './../components/components.module';
import { ApiInterceptor } from './../providers/api-interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { SplashScreen } from "@ionic-native/splash-screen";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { SharedModule } from "../shared/shared.module";


export const PROVIDERS = [
    SplashScreen,
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
]

export const MODULES = [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    SharedModule,
    ComponentsModule
]