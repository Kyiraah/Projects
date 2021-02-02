//variable declarations
//of the various id values
	
		var courseCode = document.getElementById('coursecode');
		var courseName = document.getElementById('coursename');
		var lecturer = document.getElementById('lecturername');
		var mail = document.getElementById('txtemail');
		var save = document.getElementById('saveButton');
		var del = document.getElementById('deleteButton');
		var edit = document.getElementById('updateButton');
		var coursetable = document.getElementById('coursebook');
		var course = document.getElementById('course');
		var dropdown = document.getElementById('selectlist');
		var kezia = document.getElementById('boldStuff');

//set global variable
var registeredCourses = {
		"courselist":[]
}


function addCourse() {
	
	if(registeredCourses.courselist.findIndex(x=>x.coursecode==courseCode.value) >-1){
	var take=registeredCourses.courselist.findIndex(x=>x.coursecode==courseCode.value);
	registeredCourses.courselist[take].coursecode=courseCode.value;
	registeredCourses.courselist[take].coursename=courseName.value;
	registeredCourses.courselist[take].lecturername=lecturer.value;
	registeredCourses.courselist[take].txtemail=mail.value;
	}
		else{
			registeredCourses.courselist.push(
			{
		        "coursecode":courseCode.value,
		        "coursename":courseName.value,
		        "lecturername":lecturer.value,
		        "txtemail":mail.value
			});	
		}
 
			var mm="";
			for(var i=0;i<registeredCourses.courselist.length;i++){

			mm +="<tr><td>"+registeredCourses.courselist[i].coursecode+
			"</td><td>"+registeredCourses.courselist[i].coursename+
			"</td><td>"+registeredCourses.courselist[i].lecturername+
			"</td><td><a href='mailto:mail.value'>"+registeredCourses.courselist[i].txtemail+
			"</a></td></tr>"

			}
			course.innerHTML=mm;


				var count=0;
				var ss="<option>Please Select</option>";

				while(count<registeredCourses.courselist.length){
				//
				ss += "<option value='"+registeredCourses.courselist[count].coursecode+ "'>"+ registeredCourses.courselist[count].coursecode + "</option>";

				count++;
				}
				dropdown.innerHTML=ss;


				}

function clickDiscard(){
	courseform.reset();
}

function populate(r){
	var count=0;
var ss="<option>Please Select</option>";

while(count<registeredCourses.courselist.length){
//
ss += "<option value='"+registeredCourses.courselist[count].coursecode+ "'>"+
 registeredCourses.courselist[count].coursecode + "</option>";

count++;
}
dropdown.innerHTML=ss;
}


function clickSave(){

	if(courseCode.value==""||courseName.value==""||lecturer.value==""
		||mail.value==""||save.value==""){
	kezia.innerHTML = 'All fields are required';
	kezia.style.color = 'red';
	
}
	else if( save.value=="Save"){
		addCourse();
		courseform.reset();
		kezia.innerHTML = 'Added successfully';
		kezia.style.color = 'black';
}

if( save.value=="UPDATE"){

	addCourse();
		courseform.reset();
		kezia.innerHTML = 'Updated successfully';
		kezia.style.color = 'black';
		save.value="Save";
}
}


function update(){
	save.value="UPDATE";
	
var getme=dropdown.options[dropdown.selectedIndex].value;
	
	var take=registeredCourses.courselist.findIndex(x=>x.coursecode==getme);
	courseCode.value=registeredCourses.courselist[take].coursecode;
	courseName.value=registeredCourses.courselist[take].coursename;
	lecturer.value=registeredCourses.courselist[take].lecturername;
	mail.value=registeredCourses.courselist[take].txtemail;
kezia.innerHTML = '';


}
function delSelect(){
	var getme=dropdown.options[dropdown.selectedIndex].value;
	//alert(getme);
	var take=registeredCourses.courselist.findIndex(x=>x.coursecode==getme);
	//alert(take);
	if(take>-1){
		registeredCourses.courselist.splice(take,1);
		dropdown.remove(dropdown.selectedIndex);
		alert("Done");
	}
		 
}

		function refresh(registeredCourses){
			var mm="";
		for(var i=0;i<registeredCourses.courselist.length;i++){

		mm+="<tr><td>"+registeredCourses.courselist[i].coursecode+"</td><td>"+
		registeredCourses.courselist[i].coursename+"</td><td>"+
		registeredCourses.courselist[i].lecturername+"</td><td><a href='#'>"+
		registeredCourses.courselist[i].txtemail+"</a></td></tr>"

		}
		course.innerHTML=mm;
		}

function clickDelete(){
	var txt
	if(del.value=="DELETE"){
		 var txt;
  			if (confirm("Are you sure you want to delete!")) {
  				delSelect();
		populate(registeredCourses);
		refresh(registeredCourses);
			
		kezia.innerHTML = 'Deleted';
		kezia.style.color = 'black';
				  } 

				  else {

				  }
				  document.getElementById("demo").innerHTML = txt;
		
		
	}					
	
}

				function clickUpdate(){
				var getme=dropdown.options[dropdown.selectedIndex].value;
				
				var take=registeredCourses.courselist.findIndex(x=>x.coursecode==getme);
				
				if(take>-1){
					registeredCourses.courselist.splice(take,1);
					dropdown.remove(dropdown.selectedIndex);
					alert("Done");
				}
					 
			}
