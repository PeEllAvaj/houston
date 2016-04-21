import {EventEmitter, Output, Component, Input, ChangeDetectionStrategy} from 'angular2/core';

import {COMMUNITY_TYPES} from '../../const/const';
import {ICommunity} from '../../communities';
import {IDeveloper} from '../../developers';

import {Observable} from 'rxjs/Observable';
import {DataService} from '../../data-service';


@Component({
  selector: 'community-editform',
  templateUrl: 'app/+communities/+community-edit/community-editform.html',
  styles: ['.mdl-textfield__label {top: 0;}'],
  inputs: ['community'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommunityEditFormComponent {
  submitted = false;
  communityTypes = COMMUNITY_TYPES;

  @Output()
  save: EventEmitter<ICommunity> = new EventEmitter();
  @Output()
  cancel: EventEmitter<ICommunity> = new EventEmitter();

  originalID: string;
  selectedCommunity: ICommunity;
  developers$: Observable<IDeveloper[]>;
  developers: IDeveloper[] = [];
  selectedDeveloper: IDeveloper;

  constructor(private _dataService: DataService) {
    this.developers$ = _dataService.developers$;
    this.developers$.subscribe(
      next => {
        for(let dev of next) {
          this.developers.push(dev);
        }
      },
      err => console.log('Err:',err),
      () => console.log('Finished')
    );
  }
  
  add(developer) {
    let dev:IDeveloper = this.developers.find( elem => {
      return elem.id === developer;
    });
    
    if(!this.selectedCommunity.members) {
      this.selectedCommunity.members = [];
    }
    this.selectedCommunity.members.push(dev);
  }
    

  @Input('community')
  set community(value: ICommunity) {
    if (value) this.originalID = value.id;
    this.selectedCommunity = Object.assign({}, value);
  }

  onSubmit() { this.submitted = true; }
}
