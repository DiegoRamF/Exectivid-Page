import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'welcome',
  imports: [RouterLink],
  templateUrl: './welcome.html',
})
export default class Welcome { }
