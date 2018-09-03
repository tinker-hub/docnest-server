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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const database_1 = require("../../database");
let MediaResolver = class MediaResolver {
    constructor(mediaRepository) {
        this.mediaRepository = mediaRepository;
    }
    getMedia(request, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { mediaId } = args;
            return this.mediaRepository.findOne(mediaId);
        });
    }
    getMedias(request, args) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.mediaRepository.find();
        });
    }
    saveMedia(request, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { media } = args;
            return this.mediaRepository.save(Object.assign({}, media));
        });
    }
    deleteMedia(request, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { mediaId } = args;
            return this.mediaRepository.delete(mediaId);
        });
    }
};
__decorate([
    graphql_1.Query(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MediaResolver.prototype, "getMedia", null);
__decorate([
    graphql_1.Query(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MediaResolver.prototype, "getMedias", null);
__decorate([
    graphql_1.Mutation(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MediaResolver.prototype, "saveMedia", null);
__decorate([
    graphql_1.Mutation(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MediaResolver.prototype, "deleteMedia", null);
MediaResolver = __decorate([
    graphql_1.Resolver('Media'),
    __param(0, common_1.Inject('MediaRepositoryToken')),
    __metadata("design:paramtypes", [database_1.MediaRepository])
], MediaResolver);
exports.MediaResolver = MediaResolver;
