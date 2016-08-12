System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Address, Users;
    return {
        setters:[],
        execute: function() {
            /**
             * @author Temur Mahmudov
             */
            Address = (function () {
                function Address() {
                }
                return Address;
            }());
            exports_1("Address", Address);
            Users = (function () {
                function Users() {
                    this.address = new Address();
                }
                return Users;
            }());
            exports_1("Users", Users);
        }
    }
});
//# sourceMappingURL=users.js.map