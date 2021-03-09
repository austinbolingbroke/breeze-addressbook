import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common';

import { Contact } from '../contact';
// import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact?: Contact;

  constructor(
    private route: ActivatedRoute,
    // private contactService: ContactService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getContact();
  }

  getContact(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    // this.contactService.getContact(id)
    //   .subscribe(contact => this.contact = contact);
  }

}
