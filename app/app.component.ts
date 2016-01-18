import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {DeveloperService} from './services/developers/developer.service';
import {DevelopersComponent} from './components/developers/developers';
import {MissionsComponent} from './components/missions/missions';
import {MissionsService} from './services/missions/mission.service';

@Component({
  selector: 'my-app',
  template: `
  
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Mission Control</span>
    <nav class="mdl-navigation">
      <a class="mdl-navigation__link" [routerLink]="['MissionsComponent']">Missions</a>
      <a class="mdl-navigation__link" [routerLink]="['DevelopersComponent']">Developers</a>
    </nav>
  </div>
         
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <div class="mdl-layout-spacer"></div>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right">
            <label class="mdl-button mdl-js-button mdl-button--icon" for="fixed-header-drawer-exp">
              <i class="material-icons">search</i>
            </label>
            <div class="mdl-textfield__expandable-holder">
              <input class="mdl-textfield__input" type="text" name="sample" id="fixed-header-drawer-exp">
            </div>
          </div>
        </div>    
    </header>
    
    <main class="mdl-layout__content">      
      <div class="page-content" style="padding-left:10px;">
        
        <router-outlet></router-outlet>
  
      </div>            
    </main>   
    
  </div>
</div>
  
  `,
  directives: [DevelopersComponent, MissionsComponent, [ROUTER_DIRECTIVES]],
  providers: [DeveloperService, MissionsService]
})
@RouteConfig([
 
   { 
    path: '/developers/...',
    name: 'DevelopersComponent',
    component: DevelopersComponent,
    useAsDefault: true
  },    
   { 
    path: '/missions/...',
    name: 'MissionsComponent',
    component: MissionsComponent
  }    


])
export class AppComponent{

}