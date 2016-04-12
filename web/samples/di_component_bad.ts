@Component({
    selector:    'item-list',
    templateUrl: 'app/item-list.component.html',
    styleUrls: ['app/item-list.component.css'],
    directives:  [ItemDetailComponent]
})
export class ItemsComponent {
    items: Item[];
    constructor() {
        let itemService = new ItemService();
        this.items = itemService.getItems();
    }
}