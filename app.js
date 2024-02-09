document.addEventListener('DOMContentLoaded', function() {
    const imageGrid = document.getElementById('imageGrid');
    
   
    const imageUrls = [
      'images/Mtga_flying.png',
      'images/Mtga_first_strike.png',
      'images/Mtga_double_strike.png',
      'images/Mtga_deathtouch.png',
      'images/Mtga_hexproof.png',
      'images/Mtga_indestructible.png',
      'images/Mtga_lifelink.png',
      'images/Mtga_menace.png',
      'images/Mtga_reach.png',
      'images/Mtga_trample.png',
      'images/Mtga_vigilance.png',

      
    ];
  
    imageUrls.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.classList.add('grid-image');
        img.addEventListener('click', function() {
          this.classList.toggle('opacity');
        });
        imageGrid.appendChild(img);
      });
    });