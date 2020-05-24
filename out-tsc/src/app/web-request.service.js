import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let WebRequestService = class WebRequestService {
    constructor(http) {
        this.http = http;
        this.ROOT_URL = 'http://localhost:3050';
    }
    get(uri) {
        return this.http.get(`${this.ROOT_URL}/${uri}`);
    }
    post(uri, payload) {
        //console.log(payload);
        return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
    }
    getFavoutite(uri) {
        //console.log(uri);
        return this.http.get(`${this.ROOT_URL}/${uri}`);
    }
    deleteFavoutite(uri) {
        return this.http.delete(`${this.ROOT_URL}/${uri}`);
    }
    addComment(uri, payload) {
        //console.log(payload);
        return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
    }
    getComment(uri) {
        return this.http.get(`${this.ROOT_URL}/${uri}`);
    }
    deleteComment(uri) {
        return this.http.delete(`${this.ROOT_URL}/${uri}`);
    }
    updateComment(uri, payload) {
        return this.http.put(`${this.ROOT_URL}/${uri}`, payload);
    }
    addScore(uri, payload) {
        //console.log(payload);
        return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
    }
    getScore(uri) {
        return this.http.get(`${this.ROOT_URL}/${uri}`);
    }
    deleteScore(uri) {
        return this.http.delete(`${this.ROOT_URL}/${uri}`);
    }
    updateScore(uri, payload) {
        return this.http.put(`${this.ROOT_URL}/${uri}`, payload);
    }
};
WebRequestService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], WebRequestService);
export { WebRequestService };
//# sourceMappingURL=web-request.service.js.map