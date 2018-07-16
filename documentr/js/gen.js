

function merge(item){
	var html = '';

    html += '<div class="content-st">';
    html += '    <h2 class="title-st">' + item.title + '</h2>';
    html += '    <div class="tab-st">';
    html += '        <ul class="tabs-st">';
    html += '            <li>View</li>';
    html += '            <li>Code</li>';
    html += '        </ul> <!-- / tabs -->';
    html += '        <div class="tab-content-st" data-include-html="' + item.src +'" >';
    html += '            <div class="tabs-item-st js-tab-view">';
    html += '            </div>';
    html += '            <div class="tabs-item-st js-tab-code">';
    html += '                <pre></pre>';
    html += '            </div>';
    html += '        </div>';
    html += '    </div>'
    html += '</div><!-- /content-st -->'

    return html;
}


function gen(dados){
	dados.forEach(function(item){
	
		$('.js-main').append(merge(item))
	});
}

