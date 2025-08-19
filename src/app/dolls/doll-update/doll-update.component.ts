import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DollService } from '../../services/doll.service';
import { CommonResponseService } from '../../services/common-response.service';

import { DollFormComponent } from '../doll-form/doll-form.component';

import { Toast } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-doll-update',
  imports: [
    DollFormComponent,
    Toast,
    CardModule,
    ButtonModule,
  ],
  providers: [MessageService],  
  templateUrl: './doll-update.component.html',
  styleUrl: './doll-update.component.css'
})
export class DollUpdateComponent implements OnInit {
  private dollService: DollService = inject(DollService);
  private commonResponseService = inject(CommonResponseService);
  private messageService = inject(MessageService)

  private router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute)

  doll!: any;
  notFound!: any;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id === undefined || id === null || isNaN(id))
    {
      this.router.navigate(['/dolls']);
    }
    else
    {
      this.dollService.getById(id)
        .subscribe({
          next: (response) => {
            this.doll = response;
          },
          error: (error) => {
            this.notFound = error.error;
          }
        });
    }
  }

  onSubmit(formData: any)
  {
    console.dir(formData);

    this.dollService.updateDoll(formData, this.doll.id)
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
