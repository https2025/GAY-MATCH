// Simulasi daftar video
const videos = [
  { id: 1, title: "Belajar HTML", description: "Video pembelajaran dasar-dasar HTML.", thumbnail: "assets/thumbnails/thumb1.jpg" },
  { id: 2, title: "CSS Dasar", description: "Membuat tampilan website lebih cantik.", thumbnail: "assets/thumbnails/thumb2.jpg" }
];

// Fungsi: Muat daftar video
function loadVideos() {
  const grid = document.querySelector(".video-section");
  if (!grid) return;

  videos.forEach(video => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${video.thumbnail}" alt="${video.title}">
      <h3>${video.title}</h3>
      <p>Durasi: 5 menit</p>
      <a href="watch.html?video=${video.id}" class="btn">▶️ Tonton</a>
    `;
    grid.appendChild(card);
  });
}

// Fungsi: Load detail video di watch.html
function loadVideoDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const videoId = urlParams.get('video');

  if (videoId) {
    const video = videos.find(v => v.id == videoId);
    if (video) {
      document.getElementById("videoTitle").textContent = video.title;
      document.getElementById("videoDesc").textContent = video.description;
      const source = document.querySelector("video source");
      if (source) {
        source.src = `assets/videos/video${video.id}.mp4`;
        document.querySelector("video").load();
      }
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
});
