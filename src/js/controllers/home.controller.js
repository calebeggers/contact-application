function HomeController (ContactService) {
	init();
	let vm = this;
	function init () {
		ContactService.readContacts().then( (res) => {
    		vm.contacts = res.data;
		})
	}
};


HomeController.$inject = ["ContactService"];
export { HomeController };