(function() {
  'use strict';

  angular
    .module('app.admin')
    .controller('AdminController', AdminController);

  AdminController.$inject = ['logger'];
  /* @ngInject */
  function AdminController(logger) {
    var vm = this;
    vm.title = 'Multiple select test';
    vm.columns = [
      'Id',
      'Address',
      'Name'
    ];
    vm.selectedColumns = [];
    vm.printSelectedColumns = function() {
      var numberofcols = vm.selectedColumns.length;
      if(numberofcols > 0) {
        return vm.selectedColumns.join(', ');
      }
    };
    activate();

    function activate() {
      logger.info('Activated Admin View');
    }
  }
})();
