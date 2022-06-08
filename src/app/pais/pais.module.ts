import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';

@NgModule({
  declarations: [
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    PorCapitalComponent,
    PaisTablaComponent,
    PaisInputComponent
  ],
  exports: [
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    PorCapitalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PaisModule { }
