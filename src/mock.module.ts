import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MockInterceptor } from './mock.interceptor';

@NgModule({
  declarations: [],
  exports: [],
})
export class NgMockModule {
  static forRoot(): ModuleWithProviders<NgMockModule> {
    return {
      ngModule: NgMockModule,
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true },
      ],
    };
  }

  static forChild(): ModuleWithProviders<NgMockModule> {
    return {
      ngModule: NgMockModule,
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true },
      ],
    };
  }
}
