import {Component, OnInit} from 'angular2/core';
import {DeveloperService} from '../../services/developers/developer.service';
import {IDeveloper} from '../../services/developers/developer';
import {RouteParams} from 'angular2/router';
import {Observable} from 'rxjs';
import {DeveloperEditFormComponent} from './developer-editform';

@Component({
    selector: 'developer-edit',
    directives: [DeveloperEditFormComponent],
    template:'<developer-editform [developer]="developer | async" (save)=saveDeveloper($event)>'
})
export class DeveloperEditComponent {
   
    developer: Observable<IDeveloper>;

    constructor(
        private _routeParams: RouteParams,
        public _devService: DeveloperService) { }

    ngOnInit() {
        this.developer = this._devService.getDeveloper(this._routeParams.get('id'));    
    }
    
    saveDeveloper(dev: IDeveloper){
        console.log('should be saved');
    }
}