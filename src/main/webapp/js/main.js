$(document).ready(function() {
	$(".slider").slick({
		dots: false,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000
	});
});

document.addEventListener('DOMContentLoaded', function() {
	let plane = document.getElementById('plane');
	let mountains = document.getElementById('mountains');
	let behind = document.getElementById('behind');
	let front = document.getElementById('front');
	let sky = document.getElementById('sky');
	let header = document.querySelector('header');

	window.addEventListener('scroll', function() {
		let value = window.scrollY;
		plane.style.left = value * 0.25 + 'px';
		plane.style.top = value * 0.15 + 'px'; 
		mountains.style.top = value * 0.5 + 'px';
		behind.style.top = value * 0.25 + 'px';
		front.style.top = value * 0 + 'px';
		sky.style.top = value * 0.1 + 'px'; 

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

document.addEventListener('DOMContentLoaded', function() {
	// モーダル機能
	const hobbyCards = document.querySelectorAll('.hobby-card');
	const modals = document.querySelectorAll('.hobby-modal');
	const closeButtons = document.querySelectorAll('.close-modal');

	// カードクリックでモーダル表示
	hobbyCards.forEach(card => {
		card.addEventListener('click', function() {
			const modalId = this.getAttribute('data-modal');
			if (modalId) {
				document.getElementById(modalId).style.display = 'block';
				document.body.style.overflow = 'hidden'; // スクロール防止
			}
		});
	});

	// モーダル閉じる
	closeButtons.forEach(btn => {
		btn.addEventListener('click', function() {
			this.closest('.hobby-modal').style.display = 'none';
			document.body.style.overflow = 'auto';
		});
	});

	// モーダル外側クリックで閉じる
	window.addEventListener('click', function(e) {
		if (e.target.classList.contains('hobby-modal')) {
			e.target.style.display = 'none';
			document.body.style.overflow = 'auto';
		}
	});

	// ESCキーで閉じる
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Escape') {
			modals.forEach(modal => {
				modal.style.display = 'none';
				document.body.style.overflow = 'auto';
			});
		}
	});
});


document.addEventListener('DOMContentLoaded', function() {
    // 获取所有作品项和模态框
    const portfolioItems = document.querySelectorAll('.portfolio-item, .portfolio-overlay');
    const modal = document.getElementById('work-modal');
    const modalImg = modal.querySelector('img');
    const closeBtn = modal.querySelector('.close-modal');
    
    // 为每个作品项和overlay添加点击事件
    portfolioItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // 阻止事件冒泡（避免重复触发）
            e.stopPropagation();
            
            // 找到最近的portfolio-item元素
            const portfolioItem = this.closest('.portfolio-item') || this;
            
            const imgSrc = portfolioItem.querySelector('img').src;
            const imgAlt = portfolioItem.querySelector('img').alt;
            
            modalImg.src = imgSrc;
            modalImg.alt = imgAlt;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

	// 关闭模态框
	closeBtn.addEventListener('click', function() {
		modal.style.display = 'none';
		document.body.style.overflow = 'auto';
	});

	// 点击模态框背景也关闭
	modal.addEventListener('click', function(e) {
		if (e.target === modal) {
			modal.style.display = 'none';
			document.body.style.overflow = 'auto';
		}
	});

	// ESC键关闭
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Escape' && modal.style.display === 'block') {
			modal.style.display = 'none';
			document.body.style.overflow = 'auto';
		}
	});
});





