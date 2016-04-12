@Injectable()
class Logger {

    logs:string[] = [];

    constructor(private _userService: UserService) { }

    log(message:string){
        message = `Message to ${this._userService.user.name}: ${message}.`;
        console.log(message);
        this.logs.push(message);
    }
}