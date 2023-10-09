# Installation And Getting Started 

nextJS는 PageRouter / AppRouter 두가지 방식으로 개발을 할 수 있는데, 여기서는 AppRouter를 활용해본다

appRouter는 /app 하단의 디렉터리 구조를 라우터로 활용 (최신앱은 appRouter 사용 권장)
pageRouter는 /pages 하단의 디렉터리 구조를 라우터로 활용

- install 

`npx create-next-app@latest .`

- run
`npm run start`

# Test

우리는 백엔드를 쉽게 구축해서 테스트하기 위해 간단한 json을 리턴하는 REST Server인 json-server를 활용한다.
`npx json-server --watch db.json --port 9999`

이 것을 실행하면 `db.json`이라는 파일이 생성되는데, json 형식으로 되어있다.
