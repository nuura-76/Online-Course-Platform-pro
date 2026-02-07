// ==========================================
// 1. DATA HANDLING (Array of Objects)
// ==========================================
const coursesData = [
    { title: "Web Development", price: "$49", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400" },
    { title: "Data Science", price: "$59", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400" },
    { title: "Graphic Design", price: "$39", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400" },
    { title: "Cyber Security", price: "$69", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400" }
];

// ==========================================
// 2. DOM MANIPULATION: RENDER COURSES (Bogga 2.html)
// ==========================================
const grid = document.getElementById('course-grid');
if(grid) {
    coursesData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.innerHTML = `
            <img src="${item.img}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>Price: ${item.price}</p>
            <button class="btn-enroll" onclick="enroll('${item.title}')">Enroll Now</button>
        `;
        grid.appendChild(card);
    });
}

// ==========================================
// 3. EVENT HANDLING: CART COUNTER
// ==========================================
let count = 0;
function enroll(courseName) {
    count++;
    const countDisplay = document.getElementById('cart-count');
    if(countDisplay) {
        countDisplay.innerText = count;
        alert("Successfully enrolled in: " + courseName);
    }
}

// ==========================================
// 4. CONTACT VALIDATION (Bogga 5.html)
// ==========================================
const contactForm = document.getElementById('contactForm');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        const name = document.getElementById('cName').value.trim();
        const email = document.getElementById('cEmail').value.trim();
        const message = document.getElementById('cMessage').value.trim();
        const feedback = document.getElementById('formMsg');

        // Shuruudaha (Conditions)
        if (name === "" || email === "" || message === "") {
            feedback.innerText = "Error: All fields are required!";
            feedback.style.color = "red";
        } 
        else if (/\d/.test(name)) { 
            feedback.innerText = "Error: Name cannot contain numbers!";
            feedback.style.color = "red";
        } 
        // KAN AYAA AH SHURUUDDA CUSUB (No numbers in Message)
        else if (/\d/.test(message)) {
            feedback.innerText = "Error: Message must be text only (No numbers)!";
            feedback.style.color = "red";
        }
        else if (message.length < 10) {
            feedback.innerText = "Error: Message too short (min 10 chars).";
            feedback.style.color = "orange";
        } 
        else {
            feedback.innerText = "Thank you! Your inquiry has been sent.";
            feedback.style.color = "green";
            contactForm.reset();
        }
    });
}

// ==========================================
// 5. PROFILE VALIDATION (Bogga 6.html)
// ==========================================
const pForm = document.getElementById('profileForm');
if(pForm) {
    pForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nameInput = document.getElementById('nameInput').value.trim();
        const msg = document.getElementById('profileMessage');
        const nameDisplay = document.getElementById('userNameDisplay');

        if (nameInput === "" || /\d/.test(nameInput)) {
            msg.innerText = "Error: Enter a valid name (No numbers)!";
            msg.style.color = "red";
        } 
        else if (nameInput.length < 5) {
            msg.innerText = "Error: Name must be at least 5 characters.";
            msg.style.color = "red";
        } 
        else {
            if(nameDisplay) nameDisplay.innerText = nameInput;
            msg.innerText = "Profile updated successfully!";
            msg.style.color = "green";
        }
    });
}