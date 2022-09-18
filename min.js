var data = document.getElementById('data');
var userList = document.getElementById('userList');
// add user code
var counter = 0;
function addUser(){
	var inputdata = document.getElementById('data').value;
	// console.log(inputdata);
	

	var html =  '<div class="row" id="data'+counter+'" style="margin-bottom: 15px;">'+
			'<div class="col-md-6 col-sm-12 col-xs-12">'+
            '<input type="text" class="form-control" value="'+inputdata+'" disbled>'+
		'</div>'+
		'<div class="col-md-2 col-sm-4 col-xs-4">'+
			'<button type="button" class="btn btn-success" onclick="edit(this.id)" id="edit'+counter+'">Edit</button>'+
		'</div>'+

		'<div class="col-md-2 col-sm-4 col-xs-4">'+
			'<button type="button" class="btn btn-success" onclick="update(this.id)" id="update'+counter+'">Update</button>'+
		'</div>'+
		'<div class="col-md-2  col-sm-4 col-xs-4">'+
			'<button type="button" class="btn btn-danger" onclick="remove(this.id)" id="delete'+counter+'">Delete</button>'+
		'</div>'+
	'</div>';
	document.getElementById('userList').insertAdjacentHTML('beforeend', html);
	counter++;
}

function edit(editId){
	// console.log(editId);
	var parent = document.getElementById(editId).parentNode.parentNode;
	var child = parent.firstChild.firstChild;
	child.removeAttribute('disbled');
	console.log(child);

}

function update(updateId){
	// console.log(updateId);
	var parent = document.getElementById(updateId).parentNode.parentNode;
	var child = parent.firstChild.firstChild;
	child.setAttribute("disbled",'disbled');
	console.log(child);

}

function remove(deleteId){
	// console.log(deleteId);
	var parent = document.getElementById(deleteId).parentNode.parentNode;
	parent.remove();
	console.log(parent);


}