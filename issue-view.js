//Ju Young Park
//May 29 2017

function IssueView(data){

	this.gitAddress = "https://api.github.com/repos/" + data.repo;
	this.issues = this.gitAddress + "/issues";

	this.renderInto = function(id){
		var lListForTable = [];
		//var containerId = document.getElementById(container);
		$.getJSON(this.gitAddress,{},function(data){
			console.log(data);
					
			if(data['has_issues']){
				console.log("open issues are : " + data['open_issues_count']);
				$.getJSON('https://api.github.com/repos/nasa/openmct/issues',{},function(result){
							
					drawTable(result,id);

				});
			}

		});

		function drawTable(result, containerId){
			console.log(result.length);
			var lListForFilter = [''];
			var table = document.createElement('table');
			table.id = 'issueTable';
			var introText = document.createElement('div');

			introText.innerHTML = "Filter by Label ";
			var filter = document.createElement('select');
			filter.onchange = chooseFilter;
			introText.appendChild(filter);
			var option = document.createElement('option');
			option.text = "";
			option.value = "";
			filter.appendChild(option);


			for (var j = 0; j<result.length; j++){
				var tr = document.createElement('tr');
				if(result[j]['labels'].length>0){
					for(var k = 0; k<result[j]['labels'].length; k++){
						tr.className += (result[j]['labels'][k]['name'] + " ");
						if(lListForFilter.indexOf(result[j]['labels'][k]['name'])==-1){
							lListForFilter.push(result[j]['labels'][k]['name']);
							var option = document.createElement('option');

							option.text = result[j]['labels'][k]['name'];
							option.value = result[j]['labels'][k]['name'];
							filter.appendChild(option);
						}
					}
								
				} else {
					tr.className = "";
				}

				var td1 = document.createElement('td');
				var td2 = document.createElement('td');
				var text1 = document.createTextNode(result[j]['number']);
    			var text2 = document.createTextNode(result[j]['title']);

    			td1.appendChild(text1);
    			td2.appendChild(text2);
							    
				tr.appendChild(td1);
				tr.appendChild(td2);

				table.appendChild(tr);
			}


			containerId.appendChild(introText);
			containerId.appendChild(table);
		};

		function chooseFilter() {
			var selectFilter = $(this).val();
			reDraw(selectFilter);
			
		};

		function reDraw(filterName){
			var issueTable = $("#issueTable");
			$("#issueTable > tr").each(function(){

				if(filterName == ""){
					$(this).show();
				} else {
					if($(this).hasClass(filterName)){
						$(this).show();
					} else {
						$(this).hide();
					}
				}
				
			});
		}
	};			
}