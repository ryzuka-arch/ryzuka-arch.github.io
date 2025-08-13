    function showSection(sectionId) {
        document.querySelectorAll('.container > div').forEach(section => {
            section.classList.add('d-none');
        });
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.remove('d-none');
        }
    }

    // Atur halaman awal berdasarkan URL
    const path = window.location.pathname.split('/').pop();
    const currentSectionId = sections[path] || 'home-section';
    showSection(currentSectionId);

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');

            // Mencegah navigasi penuh dan mengendalikan tampilan halaman
            const href = this.getAttribute('href');
            const targetSectionId = sections[href];
            if (targetSectionId) {
                event.preventDefault();
                window.history.pushState({}, '', href);
                showSection(targetSectionId);
            }
        });
    });

    // Logika validasi form kontak
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah form submit
            
            const nama = document.getElementById('nama').value.trim();
            const email = document.getElementById('email').value.trim();
            const pesan = document.getElementById('pesan').value.trim();
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (nama === '' || email === '' || pesan === '') {
                alert('Semua kolom harus diisi!');
                return;
            }
            
            if (!emailRegex.test(email)) {
                alert('Format email tidak valid.');
                return;
            }
            
            alert('Pesan Anda berhasil dikirim!');
            contactForm.reset();
        });
    }