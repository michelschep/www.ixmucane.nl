$(document).ready(function() {
	var header = $("#header");
	var helpBox = $("#helpBox");
	var aboutBox = $("#aboutBox");
	var errorMsg = $("#errorMsg");
	var bird = $("#birdTop img");
	var path = [0, 120, 150, 180, 250, 230, 280, 340, 370, 310, 400, 440, 390, 450, 430, 480, 520, 530, 500, 580, 600, 640, 610, 650,
				670, 700, 650, 610, 640, 600, 580, 500, 530, 520, 480, 430, 450, 390, 440, 400, 310, 370, 340, 280, 230, 250, 180, 160,
				120, 90, 100, 40, 10];
	var pathIndex = 0;
		
	function showError(msg, field) {
		errorMsg.html(msg);
		errorMsg.slideDown("fast");
		field && $(field).focus();
	}
	
	function toggleBox(box) {
		var pos = header.position();
		if (box.is(":hidden")) {
			var bodyWidth = $(document.body).width();
			var left = (Math.max(0, bodyWidth - box.width() - 40)) / 2;
			box.css("left", left + "px");
			box.css("top", (pos.top + header.outerHeight() + 80) + "px");
		}
		
		if (box == helpBox && !aboutBox.is(":hidden")) {
			aboutBox.hide();
		} else if (box == aboutBox && !helpBox.is(":hidden")) {
			helpBox.hide();
		}
		
		box.slideToggle();
	}
	
	function sendBookUpdate() {
		errorMsg.hide();
		
		var title = $.trim($("#bookTitle").val());
		if (title.length == 0) {
			showError("Vul a.u.b. het titel veld in.", "#bookTitle");
			return false;
		}
		
		var author = $.trim($("#bookAuthor").val());
		if (author.length == 0) {
			showError("Vul a.u.b. het auteur veld in.", "#bookAuthor");
			return false;
		}
		
		var comment = $.trim($("#comment").val());
		var status = "@DeBKL ";
		status += author + " \"" + title + "\"";
		if (comment.length > 0) {
			status += " - " + comment;
		}
		$("#status").val(status);
		
		return true;
	}

	function sendNewsItem() {
	    errorMsg.hide();

	    var title = $.trim($("#newsItemTitle").val());
	    if (title.length == 0) {
	        showError("Vul a.u.b. titel bericht in.", "#newsItemTitle");
	        return false;
	    }

	    var newsText = $.trim($("#newsItemText").val());
	    if (author.length == 0) {
	        showError("Vul a.u.b. bericht in.", "#newsItemText");
	        return false;
	    }

	    var status = "@DeBKL #news";
	    status += " \"" + title + "\" - " + newsText;
	    $("#statusNewsItem").val(status);

	    return true;
	}
	
	function moveBird() {
		bird.animate({left: path[pathIndex++] + "px"}, 5000);
		if (pathIndex == path.length) {
			pathIndex = 0;
		}
	}

	$("#sendForm").submit(sendBookUpdate);
	$("#sendNewsForm").submit(sendNewsItem);
	$("#helpLink").click(function() { toggleBox(helpBox); return false; });
	$("#aboutLink").click(function() { toggleBox(aboutBox); return false; });
	helpBox.click(function(e) { if (e.target.id == "helpBox") { toggleBox(helpBox); } });
	aboutBox.click(function(e) { if (e.target.id == "aboutBox") { toggleBox(aboutBox); } });
	errorMsg.click(function() { errorMsg.slideUp("fast"); });
	window.setInterval(moveBird, 30*1000);
	
	$("#bookTitle").focus();
});
