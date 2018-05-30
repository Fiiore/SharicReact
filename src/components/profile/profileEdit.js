
var editingMode = false, image, name, description;

window.onload = function() {
	image = document.getElementById('profileImage');
	name = document.getElementsByClassName('name')[0];
	description = document.getElementsByClassName('description')[0];

	//inputElements = document.getElementsByClassName('newData');
}

// Function to show or hide input elements on editing the profile
function editProfile(editBtn) {
	editingMode = !editingMode;
	var inputElementsProperty = (editingMode) ? 'none' : 'block';
	for (var i = 0; i < inputElements.length; i++) {
		name.style.display = inputElementsProperty;
		description.style.display = inputElementsProperty;
	}
	/*
    if (editingMode) {
    	var nameInput = document.createElement("INPUT");
    	var descriptionInput = document.createElement("INPUT");
        var imageInput = document.createElement("INPUT");

        nameInput.setAttribute("type", "text");
        descriptionInput.setAttribute("type", "text");
        imageInput.setAttribute("type", "file");

        name.insertAdjacentElement('afterend', nameInput);
        description.insertAdjacentElement('beforebegin', descriptionInput);
        description.insertAdjacentElement('afterend', imageInput);
        
    }
    else {
    	editBtn.innerText = '';
        $(document).find('input.editing').each(function() {
            var div = $('<div class="editable" />').text($(this).val());
            $(this).replaceWith(div);
        });
    }
    */
}