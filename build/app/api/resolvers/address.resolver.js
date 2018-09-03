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
let AddressResolver = class AddressResolver {
    constructor(addressRepository) {
        this.addressRepository = addressRepository;
    }
    getAddress(request, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { addressId } = args;
            return this.addressRepository.findOne(addressId);
        });
    }
    getAddresses(request, args) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.addressRepository.find();
        });
    }
    saveAddress(request, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { address } = args;
            return this.addressRepository.save(Object.assign({}, address));
        });
    }
    deleteAddress(request, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { addressId } = args;
            return this.addressRepository.delete(addressId);
        });
    }
};
__decorate([
    graphql_1.Query(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AddressResolver.prototype, "getAddress", null);
__decorate([
    graphql_1.Query(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AddressResolver.prototype, "getAddresses", null);
__decorate([
    graphql_1.Mutation(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AddressResolver.prototype, "saveAddress", null);
__decorate([
    graphql_1.Mutation(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AddressResolver.prototype, "deleteAddress", null);
AddressResolver = __decorate([
    graphql_1.Resolver('Address'),
    __param(0, common_1.Inject('AppointmentRepositoryToken')),
    __metadata("design:paramtypes", [database_1.AddressRepository])
], AddressResolver);
exports.AddressResolver = AddressResolver;
