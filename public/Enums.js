"use strict";
// Enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["MOVIE"] = 0] = "MOVIE";
    ResourceType[ResourceType["PERSON"] = 1] = "PERSON";
    ResourceType[ResourceType["AUTHOR"] = 2] = "AUTHOR";
    ResourceType[ResourceType["DVD"] = 3] = "DVD";
    ResourceType[ResourceType["CD"] = 4] = "CD";
})(ResourceType || (ResourceType = {}));
const docFive = {
    uid: 6,
    resourceType: ResourceType.DVD,
    data: { title: 'best love' }
};
const docSix = {
    uid: 11,
    resourceType: ResourceType.MOVIE,
    data: { name: 'jemol' }
};
