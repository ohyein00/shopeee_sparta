$(function(){
// 검색창 클릭시 최근검색어창 토글
// ico_arr 이미지 변경
$input.on("click", function () {
  // 검색기록창 토글
  $autoFrame.toggle();
});

// search 바깥쪽 클릭시( body 영역에서 search 영역 을 제외한 부분 )
// 최근검색어 영역 닫기

// ------------ 아래 부분 기존 naver랑 다르게 변경되었습니다 --------//
$(document).on('mouseup',function(e){
  console.log($('#autoFrame'))
  console.log(e.target)
  if($autoFrame.has(e.target).length === 0){
    $autoFrame.hide()
  }
})
// form 기본 동작 막기
// form submit시 검색어와 날짜 저장하기
$sform.on("submit", function (e) {
  // form 태그의 기본 이벤트를 막아서
  // 다른 페이지로 리다이렉션 되는 것을 막는다.
  // preventDefault MDN
  // https://developer.mozilla.org/ko/docs/Web/API/Event/preventDefault
  e.preventDefault();

  // 최근 검색어를 저장한다
  // 현재 input 에 있는 검색어 가져오기
  const query = $input.val();
  // 검색창에 아무것도 입력하지 않고 검색할 경우 조기리턴
  if(!query){
    alert('검색어를 입력하세요!')
    return;
  }

  // recentSearchData 배열에 넣을 객체 만들기
  const recentSearchItem = {};
  recentSearchItem.search = query;

  // recentSearchData 배열에 앞에서 부터 recentSearchItem 삽입
  const recentSearch = recentSearchItem;
  recentSearchData.unshift(recentSearch);

  // 최근검색어 li 만들기
  createRecentItem();

  // 검색창 초기화
  cleanInput();
  // 최근 검색창 항상 보여주기
  $autoFrame.show();
});

// 개별삭제 클릭시 데이터 해당 데이터 삭제
// 삭제 버튼(bt_item del)은 동적 생성 되는 엘리먼트라
// event delegation 을 사용
// https://learn.jquery.com/events/event-delegation/
$search.on('click', '.bt_item._del' , function(){
  // 부모 li data-rank 를 가져와서 -1 을 한후 index로 사용
  const index = $(this).parents('li').data('rank') - 1;
  // 개별 삭제
  deleteSelectedItem(index);
  // 최근 검색어(li) 다시 만들기
  createRecentItem();
});
})
