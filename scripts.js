function popap(popapSelector) {
		const popap = document.querySelector(popapSelector),
			  btns = document.querySelectorAll('.popap-open'),
			  closeBtn = popap.querySelector('.close-popap'),
			  bg = document.createElement('div');

		document.body.append(bg);
		bg.classList.add('bg');

		function closePopap(btn) {
			btn.addEventListener('click', () => {
				if (popap.classList.contains('open')) {
					popap.classList.remove('open');
					bg.classList.remove('open')
				}else{
					popap.classList.add('open');
					bg.classList.add('open')
				}
			});
		}

		btns.forEach(item => {
			closePopap(item)
		})
		
		closePopap(closeBtn);
		closePopap(bg);
	}