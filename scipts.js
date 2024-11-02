document.addEventListener("DOMContentLoaded", function() {
    const uploadBtn = document.getElementById("uploadBtn");
    const uploadForm = document.getElementById("uploadForm");
    const fileInput = document.getElementById("fileInput");
    const submitBtn = document.getElementById("submitBtn");
    const fileList = document.getElementById("fileList");

    uploadBtn.addEventListener("click", function(event) {
        event.preventDefault();
        uploadForm.style.display = uploadForm.style.display === "none" ? "block" : "none";
    });

    submitBtn.addEventListener("click", function() {
        const files = fileInput.files;
        for (let i = 0; i < files.length; i++) {
            const listItem = document.createElement("li");
            listItem.textContent = files[i].name;
            fileList.appendChild(listItem);
        }
        fileInput.value = ""; // Reset input
    });

    document.getElementById("searchInput").addEventListener("keyup", function() {
        const input = this.value.toLowerCase();
        const items = fileList.getElementsByTagName("li");
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            item.style.display = item.textContent.toLowerCase().includes(input) ? "" : "none";
        }
    });
});
