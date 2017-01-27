(function () {
	initHighlightJs();
	initLanguagePickers();

	function initHighlightJs() {
		console.log(document.querySelectorAll('.highlight'));
		document.querySelectorAll('.highlight').forEach(function(el) {
			hljs.initHighlightingOnLoad(el);
		});
	}

	function initLanguagePickers() {
		var lang_pickers = document.querySelectorAll('.language-picker');
		
		lang_pickers.forEach(function(el) {
			var lang_tabs = el.querySelectorAll('a');
			lang_tabs.forEach(function(el) {
				el.addEventListener('click', selectLanguage);
			});

			var lang_code = el.querySelectorAll('pre');
			lang_code.forEach(function(el) {
				hljs.initHighlightingOnLoad(el);
			});

			selectLanguage(el.querySelector('a:first-child'));
	 	});	
	}

	function selectLanguage(sender) {
		var tab = sender.target ? sender.target : sender;
		var lang = tab.getAttribute('data-language');
		hideCurrentLanguage();
		showLanguage(lang)
	}

	function showLanguage(lang) {
		document.querySelectorAll('a[data-language=' + lang + ']').forEach(function(el) {
			el.className += 'active';
		});
		document.querySelectorAll('pre.' + lang).forEach(function(el) {
			el.style.display = 'block';
		});
	}

	function hideCurrentLanguage() {
		document.querySelectorAll('.languages > a.active').forEach(function(el) {
			el.classList.remove('active');
		});
		document.querySelectorAll('.code > pre').forEach(function(el) {
			el.style.display = 'none';
		});
	}
})();
