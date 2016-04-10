@Component({
    selector:    'item-list',
    templateUrl: 'app/item-list.component.html',
    styleUrls: ['app/item-list.component.css'],
    directives:  [ItemDetailComponent],
    providers:   [ItemService]
})
export class ItemsComponent { ... }