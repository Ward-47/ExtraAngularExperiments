System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CourseService;
    return {
        setters:[],
        execute: function() {
            CourseService = (function () {
                function CourseService() {
                }
                CourseService.prototype.getCourses = function () {
                    return ["Halo: Combat Evolved", "Halo 2", "Halo 3", "Halo Wars", "Halo 3: ODST", "Halo: Reach", "Halo 4", "Halo 5: Guardians", "Halo Wars 2", "Halo Infinite"];
                };
                return CourseService;
            }());
            exports_1("CourseService", CourseService);
        }
    }
});
//# sourceMappingURL=course.service.js.map