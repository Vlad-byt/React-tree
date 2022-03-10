import {Component, Input} from '@angular/core';
import {Directory} from './directory';
@Component({
    selector: 'tree-view',
    templateUrl: './app.component.html'
})
export class TreeView {
    @Input() directories: Array<Directory>;
}
