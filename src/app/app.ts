import { Component } from '@angular/core';

import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import {  RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [Navbar,RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected title = 'projectone';
}import { RouterLink } from '@angular/router';

