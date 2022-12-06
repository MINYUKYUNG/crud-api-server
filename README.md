# 기업의 직원 채용을 위한 웹 서비스 (C.R.U.D)

## 배포 링크

<br/>
<br/>

## 기술 스택
- SQL + MySQL
- Express (Node.js)
- Sequelize
<br/>

## About project
1. 기업의 직원 채용을 위한, C.R.U.D API 서버 구현하기

2. 기능 구현
    - 회사 관리 : 전체 회사 조회, 개별 회사 조회, 회사 추가, 회사 갱신, 회사 삭제 기능
    - 채용 공고 관리 : 전체 채용 공고 조회, 채용 공고 검색 조회, 개별 채용 공고 조회, 채용 공고 추가, 채용 공고 갱신, 채용 공고 삭제 기능
    - 사용자 관리 : 전체 사용자 조회, 개별 사용자 조회, 사용자 추가, 사용자 갱신, 사용자 삭제 기능
    - 지원내역 관리 : 전체 지원내역 조회, 개별 지원내역 조회, 지원내역 추가, 지원내역 삭제 기능

3. 서비스 화면 미리보기
    - companies API
    ```json
        [
            {
                "id":1,
                "회사명":"네이버",
                "국가":"한국",
                "지역":"판교"
            },
            {
                "id":2,
                "회사명":"쿠팡",
                "국가":"한국",
                "지역":"서울"
            },
            ...
        ]
    ```

    - job_openings API
    ```json
        [
            {
                "채용공고_id":1,
                "회사명":"네이버",
                "국가":"한국",
                "지역":"판교",
                "채용포지션":"IOS Developer",
                "채용보상금":500000,
                "사용기술":"Swift"
            },
            {
                "채용공고_id":2,
                "회사명":"쿠팡",
                "국가":"한국",
                "지역":"서울",
                "채용포지션":"Server Developer",
                "채용보상금":500000,
                "사용기술":"Node.js"
            },
            ...
        ]
    ```
    
    - users API
    ```json
        [
            {"id":1},
            {"id":2},
            ...
        ]
    ```

    - applications API
    ```json
        [
            {
                "user_id":1,
                "company_id":1,
                "job_opening_id":1
            },
            {
                "user_id":2,
                "company_id":2,
                "job_opening_id":2
            },
            ...
        ]
    ```
<br/>

## 실행 방법
1. repository clone
```
$ git clone https://github.com/MINYUKYUNG/crud-api-server.git
```
2. dependencies install
```
npm install
```
3. project start
```
npm run start
```
<br/>

## 폴더 구조
| 폴더 | 구분 |
| -- | -- |
| config | 데이터베이스(DB) 접속에 관한, 각종 설정이 들어있는 디렉토리 |
| controllers | 데이터를 컨트롤하는 함수들이 있는 파일들이 들어있는 디렉토리 |
| migrations | 데이터베이스 내부에서 일어나는 모든 변경사항을 저장하는 파일들이 들어있는 디렉토리 |
| models | 데이터베이스의 각 테이블 정보 및 필드타입을 정의하고, 하나의 객체로 모으는 디렉토리 |
| routers | 기능별로 url 주소를 연결시킨 라우터 파일이 들어있는 디렉토리 |
| seeders | 테이블에 넣을 기본 데이터 파일들이 들어있는 디렉토리 |
<br/>
