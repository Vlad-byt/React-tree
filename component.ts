import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import{TreeView} from './tree-view';
import {Directory} from './directory';

@Component({
    selector: 'tree',
    template: '<tree-view [directories]="directories"></tree-view>'
})
class AppComponent {
    directories: Array;
    constructor() {
        let dev1 = new Directory('Developer1',[],['Student','Student']);
        let dev2 = new Directory('Developer2',[],['Student']);
        let lead = new Directory('Leader',[dev1, dev2],[]);
        this.directories = [lead];
    }
}
bootstrap(MyDemoApp);
