// Simulasi daftar video
let videos = [];

// Fungsi: Muat semua video
function loadVideos() {
  const grid = document.querySelector(".video-section");
  if (!grid) return;

  // Kosongkan konten lama
  grid.innerHTML = "";

  videos.forEach(video => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${video.thumbnail}" alt="${video.title}">
      <h3>${video.title}</h3>
      <p>Durasi: ~5 menit</p>
      <a href="watch.html?video=${video.id}" class="btn">▶️ Tonton</a>
    `;
    grid.appendChild(card);
  });
}

// Fungsi: Load detail video di halaman watch
function loadVideoDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const videoId = urlParams.get('video');

  if (videoId) {
    const video = videos.find(v => v.id == videoId);
    if (video) {
      document.getElementById("videoTitle").textContent = video.title;
      document.getElementById("videoDesc").textContent = video.description;

      const player = document.querySelector(".player-container");
      player.innerHTML = `
        <iframe width="100%" height="500" src="${video.link}" frameborder="0" allowfullscreen></iframe>
      `;
    } else {
      alert("Video tidak ditemukan.");
      window.location.href = "index.html";
    }
  }
}

// Fungsi: Handle pencarian
document.addEventListener("DOMContentLoaded", () => {
  loadVideos();
  loadVideoDetail();

  const searchBox = document.getElementById("searchBox");
  if (searchBox) {
    searchBox.addEventListener("input", function () {
      const term = this.value.toLowerCase();
      const cards = document.querySelectorAll(".card");

      cards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        card.style.display = title.includes(term) ? "block" : "none";
      });
    });
  }

  // Handle form upload
  const form = document.getElementById("uploadForm");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const title = document.getElementById("title").value.trim();
      const desc = document.getElementById("description").value.trim();
      const link = document.getElementById("videoLink").value.trim();
      const thumbnail = document.getElementById("thumbnail").value.trim();

      if (!title || !desc || !link || !thumbnail) {
        alert("Semua field harus diisi!");
        return;
      }

      const id = Date.now(); // ID unik berdasarkan waktu
      videos.push({ id, title, description: desc, link, thumbnail });

      alert("Video berhasil ditambahkan!");
      window.location.href = "index.html";
    });
  }
});
