// إنشاء شبكة ديناميكية من العناصر
const gridContainer = document.getElementById("grid-container");

for (let i = 1; i <= 200; i++) {
    const colDiv = document.createElement("div");
    colDiv.className = "col-6 col-md-4 col-lg-3";

    const cardDiv = document.createElement("div");
    cardDiv.className = "card py-3";

    cardDiv.textContent = `عنصر ${i}`;

    colDiv.appendChild(cardDiv);
    gridContainer.appendChild(colDiv);
}

// وظيفة إرسال البيانات
function submitForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const reason = document.getElementById("reason").value;

    if (!username || !email || !reason) {
        alert("يرجى تعبئة جميع الحقول!");
        return;
    }

    alert(`تم إرسال بياناتك بنجاح!\nاسم المستخدم: ${username}\nالبريد الإلكتروني: ${email}\nسبب الانضمام: ${reason}`);
}
