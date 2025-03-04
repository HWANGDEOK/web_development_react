import { useState } from "react";

export default function MyForm(){
  const [user, setUser] = useState({
    firstName:'',
    lastName:'',
    email:'',
  })

  // 입력 상자의 내용이 변경되면 값을 상태에 저장
  const handleChange = (event) => {
    setUser({... user, [event.target.name]:
      event.target.value});
  }
  const handleSubmit = (event) => {
    alert(`Welcome ${user.firstName} ${user.lastName}.`);
    event.preventDefault();
  }

  // handleSubmit을 리액트 형식으로 정의할겁니다.
  // 제출 버튼을 클릭하면 Welcom {user.firstName} {user.lastName}이 알람으로 나오게끔 작성할 예정입니다.

  // 그리고 return 파트에 firstName 작성란, lastName 작성란, email 작성란을 만들고 제출 버튼까지 생성하겠죠.

  // 내일 여러분이 할 예정인 것

  // 리턴 파트에 어떻게 작성을 해야할지 보고

  // handleSubmit 정의 부분

  // 리턴 부분
  return(
    <form onSubmit={handleSubmit}>
      <label>First Name </label>
      <input type="text" name="firstName" onChange={handleChange} value={user.firstName}/>
      {/* 이상을 기준으로 Last Name과 email 부분을 정의하시오. */}
      <br /><br />
      <label>Last Name </label>
      <input type="text" name="lastName" onChange={handleChange} value={user.lastName}/>
      {/* 이상을 기준으로 Last Name과 email 부분을 정의하시오. */}
      <br /><br />
      <label>Email </label>
      <input type="email" name="email" onChange={handleChange} value={user.email}/>
      <br /><br />
      <input type="submit" value="제출"/>
    </form>
  );
}