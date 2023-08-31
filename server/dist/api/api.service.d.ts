import { Axios } from 'axios';
import { FilterParamsType } from '../types/filter-params.type';
export declare class ApiService {
    client: Axios;
    constructor();
    getAll(params: Partial<FilterParamsType>): Promise<any>;
    findOneById(id: string): Promise<any>;
}
