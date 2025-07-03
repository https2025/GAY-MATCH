document.getElementById("uploadForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const desc = document.getElementById("description").value;
  const file = document.getElementById("videoFile").files[0];

  if (!file) return alert("Pilih video dulu!");

  const reader = new FileReader();
  reader.onload = function(event) {
    localStorage.setItem("uploadedVideo", JSON.stringify({
      id: Date.now(),
      title,
      description: desc,
      src: event.target.result // Untuk simulasi, pakai base64
    }));

    alert("Video berhasil diupload!");
    window.location.href = "index.html";
  };

  reader.readAsDataURL(file);
});
