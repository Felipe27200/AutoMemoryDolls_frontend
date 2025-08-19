import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { DollService } from '../../services/doll.service';
import { CommonResponseService } from '../../services/common-response.service';

import { DollFormComponent } from '../doll-form/doll-form.component';

import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-doll-create',
  imports: [
    DollFormComponent,
    Toast,
  ],
  providers: [MessageService],
  templateUrl: './doll-create.component.html',
  styleUrl: './doll-create.component.css'
})
export class DollCreateComponent {
  private dollService: DollService = inject(DollService);
  private commonResponseService = inject(CommonResponseService);
  private messageService = inject(MessageService)
  private router = inject(Router)

  onSubmit(formData: any)
  {
    console.dir(formData);

    this.dollService.createDoll(formData)
      .subscribe({
        next: (response: any) => {
          console.log(response);

          this.router.navigate(["/dolls"])
        },
        error: (error) => {
          this.messageService.addAll(this.commonResponseService.setToastErrorMessage(error));
        }
      })
  }
}
