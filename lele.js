let uploadedPhotoUrl = localStorage.getItem('uploadedPhoto') || '';

function checkPassword() {
    const passwordInput = document.getElementById("passwordInput").value;
    if (passwordInput === "bali") {
        document.getElementById("passwordContainer").style.display = "none";
        document.getElementById("mainContainer").style.display = "block";
        if (uploadedPhotoUrl) {
            document.getElementById("modalImage").src = uploadedPhotoUrl; // Display uploaded photo if exists
        }
    } else {
        document.getElementById("errorMessage").innerText = "Incorrect Password";
    }
}

function showMessage() {
    document.getElementById("messageModal").style.display = "block";
}

function closeMessageModal() {
    document.getElementById("messageModal").style.display = "none";
}

function uploadPhoto() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = event => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedPhotoUrl = e.target.result; // Save the uploaded photo URL
            localStorage.setItem('uploadedPhoto', uploadedPhotoUrl); // Store in localStorage
            alert("Photo uploaded successfully! You can now show the photo.");
        }
        reader.readAsDataURL(file);
    }
    input.click();
}

function showPhotos() {
    if (uploadedPhotoUrl) {
        document.getElementById("modalImage").src = uploadedPhotoUrl;
        document.getElementById("photoModal").style.display = "block";
    } else {
        alert("Please upload a photo first!");
    }
}

function closePhotoModal() {
    document.getElementById("photoModal").style.display = "none";
}

function showGift() {
    document.getElementById("giftModal").style.display = "block";
}

function closeGiftModal() {
    document.getElementById("giftModal").style.display = "none";
}

function showFlowerGif() {
    const flowerModal = document.createElement('div');
    flowerModal.style.display = 'block';
    flowerModal.style.position = 'fixed';
    flowerModal.style.zIndex = '2';
    flowerModal.style.left = '0';
    flowerModal.style.top = '0';
    flowerModal.style.width = '100%';
    flowerModal.style.height = '100%';
    flowerModal.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    flowerModal.style.textAlign = 'center';
    flowerModal.innerHTML = `
        <span class="close" onclick="closeFlowerGif()">&times;</span>
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHh2Z2t2anRmeW51MGQ1OWJydW16ZGthdXVyNXg5Z2RldzIwM3FobiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iB6I46FbLRqsLliGpI/giphy.gif" style="max-width: 80%; margin-top: 100px;" />
    `;
    document.body.appendChild(flowerModal);
    
    // Hide the "Click Me!" button
    const giftButton = document.querySelector('#giftModal button');
    if (giftButton) {
        giftButton.style.display = 'none';
    }
}
function closeFlowerGif() {
    const flowerModal = document.querySelector('div[style*="fixed"]');
    if (flowerModal) {
        document.body.removeChild(flowerModal);
    }
}

function goBack() {
    document.getElementById("mainContainer").style.display = "none";
    document.getElementById("passwordContainer").style.display = "block";
}