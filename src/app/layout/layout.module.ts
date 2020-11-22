/**
 * 页面的结构布局通过这里统一引入，统一导出
 */
import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';

// 组件
const COMPONENTS: Type<any>[] = [];

@NgModule({
  imports: [SharedModule],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class LayoutModule { }
