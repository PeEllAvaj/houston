import {Component, OnInit} from 'angular2/core';
import {EventsService} from '../../services/events/events.service';
import {Event} from '../../services/events/event';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {EventsListingComponent} from './events-listing';


@Component({
  template:  `
    <router-outlet></router-outlet>
  `,
  directives: [RouterOutlet],
  providers:  [EventsService]
})
@RouteConfig([
  {path:'/',         name: 'EventsListing', component: EventsListingComponent, useAsDefault: true},
])
export class EventsComponent { }