# Wetube

Wetube 클론 코딩 해보기

morgan : http요청 로깅 미들웨어.  
helmet : 보안을 위해 사용.

미들웨어란 ? 라우트(유저)와 실행하는 콜백함수 사이에서 동작하는 함수  
적용방법 : 전역으로 적용시 app.use(); 각각 적용시 라우팅과 콜백함수 사이에 쓰는방법  
미들웨어함수는 유저-응답 사이에서 동작하므로 미들웨어가 끝나고 난뒤 응답을 실행하기위해서는 next();가 필수로 호출되어야함 미 호출시 응답콜백함수가 실행되지 않고 중간에서 끊김

MVC (패턴)  
M Model : data 데이터  
V View : how does data look 데이터를 어떻게 생겼는지  
C Control : function that look for the data 데이터를 찾는 함수

## pages:

- [ ] Home
- [x] Join
- [x] Login
- [x] Search 
- [ ] UserDetail
- [ ] EditProfile
- [x] ChangePassword
- [x] UploadVideo
- [ ] VideoDetail
- [ ] EditVideo