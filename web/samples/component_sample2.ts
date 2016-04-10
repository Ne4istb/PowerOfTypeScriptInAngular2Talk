@Component({
    selector:    'item',
    templateUrl: 'app/item.component.html',
    styleUrls: ['app/item.component.css']
})
export class ItemsComponent {
    @Input() name: string;
    @Output() update: EventEmitter = new EventEmitter();
    ...
}