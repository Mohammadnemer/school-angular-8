import { Directive, TemplateRef, ViewContainerRef , OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appCreateModal]'
})
export class CreateModalDirective implements OnInit {
  context = null;
  @Input("appCreateModalFrom") appCreateModal;
  constructor(private templateRef : TemplateRef<any> , private viewContainer: ViewContainerRef) {
    
   }
   ngOnInit(): void {
      this.appCreateModal.forEach((input , i) => {
        input.index = Number(i);
        this.context = {
          $implicit:input
        };
        this.viewContainer.createEmbeddedView(this.templateRef,this.context);
      })
           
  }
}
