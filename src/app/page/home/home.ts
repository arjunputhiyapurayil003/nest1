import { Component } from '@angular/core';
import { Courosel } from '../../courosel/courosel';
import { Section } from '../../section/section';
import { Product } from '../../card/card';


@Component({
  selector: 'app-home',
  imports: [Courosel,Section,Product],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
