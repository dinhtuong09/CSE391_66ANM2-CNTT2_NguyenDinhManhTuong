const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const addBtn = document.getElementById("addBtn");

const searchInput = document.getElementById("search");
const filterRank = document.getElementById("filterRank");
const sortScore = document.getElementById("sortScore");

const tableBody = document.getElementById("tableBody");
const stats = document.getElementById("stats");

let students = [];
let filteredStudents = [];

let sortDirection = "asc";

/* Xếp loại */
function getRank(score){
    if(score >= 8.5) return "Giỏi";
    if(score >= 7) return "Khá";
    if(score >= 5) return "Trung bình";
    return "Yếu";
}

/* Thêm sinh viên */
function addStudent(){

    const name = nameInput.value.trim();
    const score = parseFloat(scoreInput.value);

    if(name === ""){
        alert("Họ tên không được trống");
        return;
    }

    if(isNaN(score) || score < 0 || score > 10){
        alert("Điểm phải từ 0 đến 10");
        return;
    }

    students.push({name,score});

    nameInput.value = "";
    scoreInput.value = "";
    nameInput.focus();

    applyFilters();
}

/* Áp dụng tìm kiếm + lọc + sắp xếp */
function applyFilters(){

    const keyword = searchInput.value.toLowerCase();
    const rank = filterRank.value;

    filteredStudents = students.filter(function(sv){

        const matchName =
        sv.name.toLowerCase().includes(keyword);

        const matchRank =
        rank === "all" || getRank(sv.score) === rank;

        return matchName && matchRank;

    });

    /* sắp xếp */
    filteredStudents.sort(function(a,b){

        if(sortDirection === "asc"){
            return a.score - b.score;
        }else{
            return b.score - a.score;
        }

    });

    renderTable();
}

/* Hiển thị bảng */
function renderTable(){

    tableBody.innerHTML = "";

    if(filteredStudents.length === 0){

        tableBody.innerHTML =
        `<tr>
        <td colspan="5">Không có kết quả</td>
        </tr>`;

        updateStats();
        return;
    }

    filteredStudents.forEach(function(sv,index){

        const tr = document.createElement("tr");

        if(sv.score < 5){
            tr.style.background = "yellow";
        }

        tr.innerHTML = `
        <td>${index+1}</td>
        <td>${sv.name}</td>
        <td>${sv.score}</td>
        <td>${getRank(sv.score)}</td>
        <td>
        <button data-index="${index}">Xóa</button>
        </td>
        `;

        tableBody.appendChild(tr);

    });

    updateStats();
}

/* Xóa sinh viên */
tableBody.addEventListener("click",function(e){

    if(e.target.tagName === "BUTTON"){

        const index = e.target.dataset.index;

        const student = filteredStudents[index];

        students = students.filter(function(sv){
            return sv !== student;
        });

        applyFilters();
    }

});

/* Thống kê */
function updateStats(){

    const total = filteredStudents.length;

    let avg = 0;

    if(total > 0){

        const sum =
        filteredStudents.reduce(function(s,sv){
            return s + sv.score;
        },0);

        avg = (sum / total).toFixed(2);
    }

    stats.innerText =
    `Tổng sinh viên: ${total} | Điểm trung bình: ${avg}`;
}

/* EVENT */

/* nút thêm */
addBtn.addEventListener("click",addStudent);

/* Enter để thêm */
scoreInput.addEventListener("keydown",function(e){
    if(e.key === "Enter"){
        addStudent();
    }
});

/* tìm kiếm realtime */
searchInput.addEventListener("input",applyFilters);

/* lọc xếp loại */
filterRank.addEventListener("change",applyFilters);

/* sắp xếp điểm */
sortScore.addEventListener("click",function(){

    if(sortDirection === "asc"){
        sortDirection = "desc";
        sortScore.innerText = "Điểm ▼";
    }else{
        sortDirection = "asc";
        sortScore.innerText = "Điểm ▲";
    }

    applyFilters();
});