function SingleController (ContactService, $stateParams) {
	let vm = this;
	init();
	function init () {
		ContactService.readContact($stateParams.contactid).then( res => {
			vm.contact = res.data;
		});
	}
};

SingleController.$inject = ["ContactService", "$stateParams"];
export { SingleController };