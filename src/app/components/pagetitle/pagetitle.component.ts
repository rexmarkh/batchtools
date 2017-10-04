import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagetitle',
  templateUrl: './pagetitle.component.html',
  styleUrls: ['./pagetitle.component.scss']
})
export class PagetitleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  companyName = 'Account: GlobalEnglish SQA ONLY';
  pageTitle = 'Upload File';
}
