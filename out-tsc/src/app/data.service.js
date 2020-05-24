import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let DataService = class DataService {
    constructor(webRequestService) {
        this.webRequestService = webRequestService;
    }
    get(title) {
        return this.webRequestService.get(`bookSearch?q=${title}`);
    }
    addFavourite(bid, title, description) {
        return this.webRequestService.post(`favourite`, { bid, title, description });
    }
    getFavourite() {
        return this.webRequestService.getFavoutite(`favourite`);
    }
    getFavouriteDetails(id) {
        return this.webRequestService.getFavoutite(`favourite/${id}`);
    }
    deleteFavourite(id) {
        return this.webRequestService.deleteFavoutite(`favourite/${id}`);
    }
    addComment(comment, id) {
        return this.webRequestService.addComment(`favourite/${id}/comment`, { comment });
    }
    getComment(id) {
        return this.webRequestService.getComment(`favourite/${id}/comment`);
    }
    deleteComment(id, commentId) {
        return this.webRequestService.deleteComment(`favourite/${id}/comment/${commentId}`);
    }
    updateComment(id, commentId, comment) {
        return this.webRequestService.updateComment(`favourite/${id}/comment/${commentId}`, { comment });
    }
    addScore(score, id) {
        return this.webRequestService.addScore(`favourite/${id}/bookScore`, { score });
    }
    getScore(id) {
        return this.webRequestService.getScore(`favourite/${id}/bookScore`);
    }
    deleteScore(id, bookScoreId) {
        return this.webRequestService.deleteScore(`favourite/${id}/bookScore/${bookScoreId}`);
    }
    updateScore(id, bookScoreId, score) {
        return this.webRequestService.updateScore(`favourite/${id}/bookScore/${bookScoreId}`, { score });
    }
};
DataService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], DataService);
export { DataService };
//# sourceMappingURL=data.service.js.map