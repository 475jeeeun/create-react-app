class 사람 {
    constructor(이름,나이,성별){
        this.이름 = 이름;
        this.나이 =나이;
        this.성별 = 성별;
    }
    말하기(){
        console.log(this.이름 + ":" + "안녕하세요!");

    }
}

class 학생 extends 사람 {
constructor(이름,나이,성별,성적){
    super(이름,나이,성별)
    this.성적 = 성적
}
말하기(){
    console.log(this.이름 + ":" + "알나란랑나");

}


공부하기(){
    console.log(`${this.이름}: 공부중...`)
}

}
const 김학생 = new 학생('김학생', 17,'남',99)
console.log(김학생)
김학생.말하기()
김학생.공부하기()