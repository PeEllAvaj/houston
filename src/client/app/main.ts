import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {provideStore} from '@ngrx/store';

import {AppComponent} from './app';
import {DeveloperService} from './developers';
import {developers, events, communities} from './store';


bootstrap(AppComponent, [
  HTTP_PROVIDERS, DeveloperService, provideStore(
                                        {
                                            developers, events, communities,
                                        })
]);
