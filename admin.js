document.getElementById("uploadForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const desc = document.getElementById("description").value.trim();
  const file = document.getElementById("videoFile").files[0];

  if (!title || !desc || !file) {
    alert("Semua field harus diisi!");
    return;
  }

  alert("Video berhasil diupload (simulasi)");
});
