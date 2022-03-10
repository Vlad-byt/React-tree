import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import{TreeView} from './tree-view';
import {Directory} from './directory';

@Component({
    selector: 'tree',
    template: '<tree-view [directories]="directories"></tree-view>'
})
class AppComponen {
    directories: Array;
    constructor() {
        let fall2014 = new Directory('Developer1',[],['Student','Student']);
        let summer2014 = new Directory('Developer2',[],['Student']);
        let pics = new Directory('Leader',[Developer1, Developer2],[]);
        this.directories = [pics];
    }
}
bootstrap(MyDemoApp);
