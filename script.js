document.addEventListener('DOMContentLoaded', function() {
    // Efek ledakan saat mengklik
    document.addEventListener('click', function(e) {
        createExplosion(e.clientX, e.clientY);
    });

    // Efek ledakan saat mengklik tombol navigasi
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            createExplosion(e.clientX, e.clientY);
        });
    });

    function createExplosion(x, y) {
        const colors = ['#d4a76a', '#8b5a2b', '#ffd700', '#ff5733', '#c70039'];
        const explosion = document.createElement('div');
        explosion.className = 'explosion';
        
        // Pilih warna acak dari array colors
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        explosion.style.backgroundColor = randomColor;
        
        explosion.style.left = x + 'px';
        explosion.style.top = y + 'px';
        
        document.body.appendChild(explosion);
        
        // Hapus elemen setelah animasi selesai
        setTimeout(() => {
            explosion.remove();
        }, 500);
    }
});