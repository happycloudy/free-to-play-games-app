"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let ApiService = class ApiService {
    constructor() {
        this.client = new axios_1.Axios({
            baseURL: 'https://www.freetogame.com/api',
        });
    }
    async getAll(params) {
        let query = Object.keys(params).length ? '?' : '';
        for (const param of Object.keys(params)) {
            if (params[param]) {
                query += `${param}=${params[param]}&`;
            }
        }
        query = query.slice(0, query.length - 1);
        try {
            const res = await this.client.get(`/games${query}`);
            return JSON.parse(res.data);
        }
        catch (e) {
            return new common_1.HttpException('Unexpected error', 500);
        }
    }
    async findOneById(id) {
        try {
            const res = await this.client.get(`/game/?id=${id}`);
            return JSON.parse(res.data);
        }
        catch (e) { }
    }
};
exports.ApiService = ApiService;
exports.ApiService = ApiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ApiService);
//# sourceMappingURL=api.service.js.map