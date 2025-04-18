document.addEventListener('DOMContentLoaded', function() {
	let stars = document.getElementById('stars');
	let moon = document.getElementById('moon');
	let mountains_behind = document.getElementById('mountains_behind');
	let text = document.getElementById('text');
	let btn = document.getElementById('btn');
	let mountains_front = document.getElementById('mountains_front');
	let header = document.querySelector('header');

	window.addEventListener('scroll', function() {
		let value = window.scrollY;
		stars.style.left = value * 0.25 + 'px';
		moon.style.top = value * 1.05 + 'px';
		mountains_behind.style.top = value * 0.5 + 'px';
		mountains_front.style.top = value * 0 + 'px';
		text.style.marginRight = value * 4 + 'px';
		text.style.marginTop = value * 1.5 + 'px';
		btn.style.marginTop = value * 1.5 + 'px';

		// ヘッダースタイル変更
		if (value > 100) {
			header.classList.add('scrolled');
		} else {
			header.classList.remove('scrolled');
		}
	});

	// モバイルメニュートグル
	const menuToggle = document.querySelector('.menu-toggle');
	const nav = document.querySelector('header ul');

	menuToggle.addEventListener('click', function() {
		nav.classList.toggle('active');
		menuToggle.innerHTML = nav.classList.contains('active') ?
			'<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
	});

	// ナビゲーションリンククリック時の処理
	document.querySelectorAll('header ul li a').forEach(link => {
		link.addEventListener('click', function(e) {
			// モバイルメニューを閉じる
			if (nav.classList.contains('active')) {
				nav.classList.remove('active');
				menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
			}

			// アクティブクラスの更新
			document.querySelectorAll('header ul li a').forEach(item => {
				item.classList.remove('active');
			});
			this.classList.add('active');
		});
	});

	// トップに戻るボタン
	const backToTopBtn = document.querySelector('.back-to-top');

	window.addEventListener('scroll', function() {
		if (window.pageYOffset > 300) {
			backToTopBtn.classList.add('active');
		} else {
			backToTopBtn.classList.remove('active');
		}
	});

	backToTopBtn.addEventListener('click', function(e) {
		e.preventDefault();
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	});

	// スキルバーのアニメーション
	const skills = document.querySelectorAll('.skill');

	function animateSkills() {
		skills.forEach(skill => {
			skill.style.opacity = '1';
		});
	}

	// スクロール時にスキルセクションが表示されたらアニメーションを実行
	const skillsSection = document.getElementById('skills');

	function checkScroll() {
		const sectionPos = skillsSection.getBoundingClientRect().top;
		const screenPos = window.innerHeight / 1.3;

		if (sectionPos < screenPos) {
			animateSkills();
			window.removeEventListener('scroll', checkScroll);
		}
	}

	window.addEventListener('scroll', checkScroll);
	checkScroll(); // 初期チェック

	// スクロールスパイ
	const sections = document.querySelectorAll('.section');

	window.addEventListener('scroll', function() {
		let current = '';

		sections.forEach(section => {
			const sectionTop = section.offsetTop;
			const sectionHeight = section.clientHeight;

			if (pageYOffset >= (sectionTop - 300)) {
				current = section.getAttribute('id');
			}
		});

		document.querySelectorAll('header ul li a').forEach(item => {
			item.classList.remove('active');
			if (item.getAttribute('href') === '#' + current) {
				item.classList.add('active');
			}
		});
	});

	// フォーム送信処理
	const contactForm = document.querySelector('.contact-form');

	if (contactForm) {
		contactForm.addEventListener('submit', function(e) {
			e.preventDefault();

			// ここにフォーム送信処理を追加
			alert('お問い合わせありがとうございます。後ほどご連絡いたします。');
			this.reset();
		});
	}
});



// 作品フィルター機能
document.addEventListener('DOMContentLoaded', function() {
	// 既存のコードはそのまま保持

	// 作品フィルター
	const filterButtons = document.querySelectorAll('.filter-btn');
	const portfolioItems = document.querySelectorAll('.portfolio-item');

	if (filterButtons.length > 0) {
		filterButtons.forEach(button => {
			button.addEventListener('click', function() {
				// アクティブボタンの切り替え
				filterButtons.forEach(btn => btn.classList.remove('active'));
				this.classList.add('active');

				const filterValue = this.getAttribute('data-filter');

				// 作品のフィルタリング
				portfolioItems.forEach(item => {
					if (filterValue === 'all') {
						item.style.display = 'block';
					} else {
						if (item.getAttribute('data-category') === filterValue) {
							item.style.display = 'block';
						} else {
							item.style.display = 'none';
						}
					}
				});
			});
		});
	}
});