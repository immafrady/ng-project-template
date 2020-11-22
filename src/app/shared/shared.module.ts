import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// 自定义的
const COMPONENTS: Type<any>[] = [];
const DIRECTIVES: Type<any>[] = [];
const PIPES: Type<any>[] = [];
// 第三方的模块（大部分从npm下载的"ngx-*"开头的）
const THIRD_PARTY_MODULES: Type<any>[] = [];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ...THIRD_PARTY_MODULES
  ],
  declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    // 导出第三方模块
    ...THIRD_PARTY_MODULES,
    // 导出自定义的组件、指令和管道
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ]
})
export class SharedModule { }
