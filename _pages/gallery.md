---
title: " "
permalink: /gallery/
layout: single
author_profile: true
---

<style>
.gallery-section {
  margin-bottom: 50px;
}

.gallery-section h2 {
  font-size: 1.5em;
  color: #2c5aa0;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 3px solid #4a9eff;
}

.gallery-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
  width: 100%;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #f8f9fa;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.25);
}

.gallery-item img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.gallery-item img.align-bottom {
  object-position: center bottom;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.gallery-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  color: white;
  padding: 15px;
  font-size: 0.9em;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-caption {
  opacity: 1;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .gallery-container {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .gallery-item img {
    height: 250px;
  }
  
  .gallery-caption {
    opacity: 1; /* 移动端始终显示标题 */
  }
}
</style>

<div class="gallery-section">
  <h2>🇭🇰 Hong Kong</h2>
  <div class="gallery-container">
    <div class="gallery-item">
      <img src="../images/Hong Kong1.jpg" alt="Hong Kong">
      <div class="gallery-caption">Graduation</div>
    </div>
    <div class="gallery-item">
      <img src="../images/sea3.jpg" alt="Hong Kong">
      <div class="gallery-caption">Coastal Beauty</div>
    </div>
    <div class="gallery-item">
      <img src="../images/HongKong3.jpg" alt="Hong Kong">
      <div class="gallery-caption">Hong Kong Life</div>
    </div>
    <div class="gallery-item">
      <img src="../images/HongKong4.jpg" alt="Hong Kong" class="align-bottom">
      <div class="gallery-caption">Hong Kong Memories</div>
    </div>
  </div>
</div>

<div class="gallery-section">
  <h2>🌍 Africa</h2>
  <div class="gallery-container">
    <div class="gallery-item">
      <img src="../images/Africa3.jpg" alt="Africa Volunteer">
      <div class="gallery-caption">Volunteer Work in Africa</div>
    </div>
    <div class="gallery-item">
      <img src="../images/Africa2.jpg" alt="Africa Volunteer">
      <div class="gallery-caption">African Volunteer Journey</div>
    </div>
    <div class="gallery-item">
      <img src="../images/Africa1.jpg" alt="Africa Volunteer">
      <div class="gallery-caption">African Adventure</div>
    </div>
    <div class="gallery-item">
      <img src="../images/Africa4.jpg" alt="Africa Volunteer">
      <div class="gallery-caption">African Village</div>
    </div>
  </div>
</div>

<div class="gallery-section">
  <h2>🌊 California</h2>
  <div class="gallery-container">
    <div class="gallery-item">
      <img src="../images/Cali2.jpg" alt="California">
      <div class="gallery-caption">Ocean Serenity</div>
    </div>
    <div class="gallery-item">
      <img src="../images/Cali1.jpg" alt="California">
      <div class="gallery-caption">California Dreams</div>
    </div>
  </div>
</div>

