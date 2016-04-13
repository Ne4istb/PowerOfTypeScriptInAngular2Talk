@Injectable()
class Logger {

    logs:string[] = [];

    constructor(private _userService: UserService) { }

    log(message:string){
        let userName = this._userService.user.name;
        message = `Message to ${userName}: ${message}.`;
        console.log(message);
        this.logs.push(message);
    }
}