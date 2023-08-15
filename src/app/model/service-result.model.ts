export class ServiceResult<T>{
    Status: boolean = false;
    Mensagens: string[] = [];
    Error: string = '';
    Result: T | any ;
}