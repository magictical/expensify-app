// 현재위치에서 moment를 import하면 mocked 버전을 가져오고 return도 moment인
// mocked moment를 export하게 되서 무한루프로 stacktrace error가 발생된다
// 이를 해결하려면 requireActual()로 실제 module을 지정해줘야한다.
// mocked 버전을 위해서 변형시킨 import 과정이라고 생각하자
const moment = require.requireActual('moment');

export default (timeStamp = 0) => {
  return moment(timeStamp);
};
