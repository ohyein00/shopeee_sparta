// 변수 선언

// search 선언
const $search = $('#search');
// form 선언
const $sform = $("#sform");
// input 선언
const $input = $("input#query");

// kwd_lst 선언 (최근 검색어 ul)
const $kwd_lst = $('.kwd_lst');
// autoFrame 선언(최근검색어 창)
const $autoFrame = $('#autoFrame');
// nautocomplete 선언
const $nautocomplete = $('#nautocomplete');


// 자동완성 기능 flag
let isRecentSearch = true;


let recentSearchData = [
  // { search: "스파르타 코딩클럽 웹 퍼블리싱"},
];

// 최근 검색어 리스트(li)를 만드는 함수
const createRecentItem = () => {
  // 초기화
  $kwd_lst.empty();
  recentSearchData.forEach((item, index) => {
    // li 만들기
    $kwd_lst.append(
      `
      <li class="item recent_item" data-rank="${index + 1}" data-template-type="history" data-keyword="${item.search}">
        <a href="#" class="kwd">
          <span class="fix">
            <span>${item.search}</span>
          </span>
        </a>
      </li>
      `
    )
  })
}

// 검색창 초기화 함수
const cleanInput = () => {
  $input.val('');
}

// 개별삭제
const deleteSelectedItem = (index) => {
  recentSearchData.splice(index, 1);
}
