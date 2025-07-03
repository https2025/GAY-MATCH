// Simulasi daftar video
const videos = [
  {
    id: 1,
    title: "Video Tutorial",
    description: "Belajar dasar-dasar coding",
    src: "assets/videos/video1.mp4"
  }
];

function loadVideos() {
  const grid = document.querySelector(".video-grid");
  videos.forEach(video => {
    const card = document.createElement("div");
    card.className = "video-card";
    card.innerHTML = `
      <img src="assets/thumbnails/thumb1.jpg" alt="${video.title}">
      <h3>${video.title}</h3>
      <a href="watch.html?video=${video.id}">Tonton</a>
    `;
    grid.appendChild(card);
  });
}

window.onload = () => {
  if (document.querySelector(".video-grid")) {
    loadVideos();
  }

  // Load detail video di halaman watch.html
  const urlParams = new URLSearchParams(window.location.search);
  const videoId = urlParams.get('video');
  if (videoId) {
    const video = videos.find(v => v.id == videoId);
    if (video) {
      document.getElementById("videoTitle").textContent = video.title;
      document.getElementById("videoDesc").textContent = video.description;
      document.querySelector("video source").src = video.src;
      document.querySelector("video").load();
    }
  }
};
