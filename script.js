// 共通部分を読み込む関数
function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

// ヘッダーとフッターを挿入
loadComponent("header", "header.html");
loadComponent("footer", "footer.html");