describe("Lightbox", function() {
	it('should show the hidden instructions', function() {
		$('#instructions').click();
		expect($('.instructions').attr('hidden')).toBeFalsy();
	});	
});		