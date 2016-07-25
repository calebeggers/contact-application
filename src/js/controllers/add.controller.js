function AddController ($state, ContactService) {
	let vm = this;
	vm.addContact = addContact;

	function addContact (contact) {
		ContactService.addContact(contact).then( (res) => {
    		$state.go('home')
    	})
	}
};


AddController.$inject = ["$state", "ContactService"];
export { AddController };