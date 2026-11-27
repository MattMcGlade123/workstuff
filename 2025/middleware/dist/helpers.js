"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertId = exports.validateFullAmenities = void 0;
const validateFullAmenities = (amenityList) => amenityList.some(hasOwnPropertyName);
exports.validateFullAmenities = validateFullAmenities;
const hasOwnPropertyName = (amenity) => "name" in amenity;
const convertId = () => {
};
exports.convertId = convertId;
//# sourceMappingURL=helpers.js.map