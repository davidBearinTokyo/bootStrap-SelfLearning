$(document).ready( function(){
		// handlers
	var $card = $('#card'),
		$mainmenu = $card.find('.mainmenu'),
		$submenu = $card.find('.submenu');
		$submenu.hide();
		console.log('method2!');
		
		$mainmenu.on('click', 'li', function(){
		$(this).next('.submenu').slideToggle().siblings('.submenu').slideUp();
		});
});