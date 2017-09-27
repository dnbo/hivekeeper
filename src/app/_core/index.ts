import { Constants } from './constants';
import { EnsureModuleLoadedOnceGuard } from './ensureModuleLoadedOnceGuard';
import { NgModule, Optional, SkipSelf } from '@angular/core';

/*
  This is where we add services, logging and other core logic components
 */
@NgModule({
  imports: [],
  exports: [],
  providers: [],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
