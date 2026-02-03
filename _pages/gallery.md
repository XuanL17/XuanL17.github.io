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
  color: #2c8589;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 3px solid #6BC5C9;
}

.gallery-container {
  display: flex;
  gap: 15px;
  margin-top: 20px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 15px;
  scroll-behavior: smooth;
}

.gallery-container::-webkit-scrollbar {
  height: 8px;
}

.gallery-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.gallery-container::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.gallery-container::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.gallery-item {
  position: relative;
  flex: 0 0 auto;
  width: 220px;
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
  width: 220px;
  height: 220px;
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
  display: none;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .gallery-item {
    width: 180px;
  }
  
  .gallery-item img {
    width: 180px;
    height: 180px;
  }
}
</style>

<div class="gallery-section">
  <h2>Hong Kong</h2>
  <div class="gallery-container">
    <div class="gallery-item">
      <img src="../images/Hong Kong1.jpg" alt="Hong Kong">
      <div class="gallery-caption">Graduation</div>
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
  <h2>Africa</h2>
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
  <h2>California</h2>
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

