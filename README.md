# 🍅  단 감

감정 단어 일기


## DESCRIPTION 👨‍💻

사용자가 작성하는 일기를 DB 에 저장하고,
그 일기데이터에 입력된 감정데이터를 기반으로 감정 빈도를 분석해 차트로 표현해 출력해보자!<br/>
<br/>

---

## MEMBERS 🙍‍♂️🙍‍♀️🙍‍♂️

- 이세운 - 백엔드
- 문선화 - 프론트엔드
- 김도현 - 리액션

<br/>

---

## PROJECT TREE 🎉

*service flow*<br/>
![serviceflow](https://user-images.githubusercontent.com/98632452/174228495-9e8228ad-7b68-4211-866d-3831dd8f43e6.png)

*data table*
![datatable](https://user-images.githubusercontent.com/98632452/174233328-c7fa7dc4-4feb-49f8-adbe-be82edef33a4.png)


<br/>

*tree*<br/>
![tree](https://user-images.githubusercontent.com/98632452/174227908-51c696ee-dbf2-48d5-8286-0f5acfa33d53.png)


---
## DESCRIPTION & UI 🎨

*main calendar*<br/>
![MAINCALLENDAR](https://user-images.githubusercontent.com/98632452/174229212-22905cc4-beff-4cf3-be21-77fffca8f5c4.png)

<br/>
1. 메인 페이지 에서는 달력이 표시되어, 바로 날짜를 선택할 수 있도록 했습니다.
<br/>
2. 로그인을 하지 않았다면 회원가입 및 로그인을 해야합니다.
<br/>
<br/>
<br/>

*login*
![image](https://user-images.githubusercontent.com/98632452/174230517-1ba8f66f-3ebe-433d-b798-2666c012c646.png)





*post diary*<br/>
![CHOOSEEMOTION](https://user-images.githubusercontent.com/98632452/174227690-04700628-1320-469e-952a-bdf160b30e0b.png)

<br/>
3. 메인페이지에서 일기를 작성할 날짜를 선택하면, 감정 카테고리 8가지 중 하나를 선택할 수 있고,<br/>
4. 감정 카테고리 중 하나를 선택하면 해당 감정 카테고리에 속한 감정들이 표시됩니다.<br/>
5. 아래에 있는 슬라이드를 통해 감정의 강도를 조정하며 그에 맞게 표시되는 감정 단어들을 확인할 수 있습니다.

<br/>
<br/>
<br/>

*mypage - post analyzer*<br/>
![mypage](https://user-images.githubusercontent.com/98632452/174232166-f49fc413-3179-4948-af58-938a66294fac.png)

<br/>
6. 마이페이지에서는 자신이 작성한 일기에 포함된 감정들의 빈도를 그래프를 통해 표시해줍니다. ( 주간 / 월간 / 총 )<br/>
7. 그래프 아래 쪽에는 기간에 따라 가장 많이 작성된 감정을 카드형태로 표시하고, 그 감정이 들어있는 문장을 추출해 나타냅니다.






---

## 느낀점

### 👩‍🎨 문선화


### 👨‍💻 이세운
기술명세를 아주 자세하게 작성하는게 도움이 될것같았습니다
그리고 개인역량을 감안하여 기술별로 시간분배를 하고 그 시간이 넘어가게 되면 과감하게 버리거나 다른 부가적인 기능을 버려서 그 부가적인 기능 시간을 사용하는등 그러한 결단력이 필요하다고 느꼈습니다 

### 🤡 김도현
왜 안 되는지 왜 되는지 몰라 나중에 이와 비슷한 작업을 해야할 때가 왔을 때, 그 때도 지금처럼 못 할 것 같아 너무나 속상합니다.
더 열심히 복습하고 공부해야겠습니다. 라는 생각을 4번째 하고 있습니다.

---

## TECH STACK

- JAVA
- JavaScript
- SPRINGBOOT 2.7.0
- MySQL
- REACT
- Next.js

`Prerequisite`
JDBC, lombok, jackson.core, react-chartjs-2, styled-components, next-images

`Tools`
Intelli J , SPRINGBOOT, VS CODE

----

## REFERENCE

- `단어의 감정을 수치화해놓은 자료`<br/>
한국어 감정표현단어의 추출과 범주화 - 감성과학, VOL 15, 2012<br/>
*emotion table*<br/>
![감정단어표](https://user-images.githubusercontent.com/98632452/174223736-b2470d10-275d-4989-8f4b-819b0e2786d8.png)
