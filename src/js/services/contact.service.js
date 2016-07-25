function ContactService ($http, SERVER) {
	this.readContacts = readContacts;
	this.addContact = addContact;
	this.readContact = readContact;

	function readContacts () {
		return $http.get(SERVER.URL);
	}

	function addContact (contact) {
		return $http.post(SERVER.URL, contact);
	};

	function readContact (id) {
		return $http.get(SERVER.URL + id);
	}
}

ContactService.$inject = ['$http', 'SERVER'];
export { ContactService }