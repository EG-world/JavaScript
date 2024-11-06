// 문서가 로드 되었을 때
window.onload = function() {
    const ssn1 = document.getElementById('ssn1')
    ssn1.addEventListener('keyup', () => {
        if (ssn1.value.length >= 6) {
            document.getElementById('ssn2').focus()
        }
    })
    
    const ssn = document.querySelectorAll('.ssn') // 배열로 저장됨
    ssn.forEach((s) => {
        // console.log(s)
        s.addEventListener('input', () => {
            document.getElementById('ssncheck').value = 'n'
        })
    })
}

function checkssn() {
    const ssn1 = document.getElementById('ssn1')
    const ssn2 = document.getElementById('ssn2')
    const ssn = ssn1.value + ssn2.value
    const weight = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5]
    let result = 0

    for(let i = 0; i<12; i++) {
        result += parseInt(ssn[i] * weight[i])
    }

    result = (11-(result % 11)) % 10

    if(result == parseInt(ssn[12])) {
        return alert('유효한 주민등록번호입니다.')
        document.getElementById('ssncheck').value = 'y'
    }
    return alert('유효하지 않은 주민등록번호입니다.')
}

function sendit() {
    const userid = document.getElementById('userid')
    const userpw = document.getElementById('userpw')
    const userpw_re = document.getElementById('userpw_re')
    const name = document.getElementById('name')
    const hp = document.getElementById('hp')
    const email = document.getElementById('email')
    const ssncheck = document.getElementById('ssncheck')

    const expIdText = /^[A-Za-z0-9]{4,20}$/ // 한글을 사용하지 않고 4글자이상 20글자 이하
    const expPwText = /^(?=.*[A-za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/ // . 연결 * 몇글자든 관계없음 \d 숫자[0-9]와 같음
    const expNameText = /^[가-힣]+$/ // + 글자 제한없음
    const expHpText = /^\d{3}-\d{3,4}-\d{4}$/
    // dev.ryu@gmail.com dev-ryu@gmail.com
    const expEmailText = /^[A-Za-z0-9\-\.]+@[A-Za-z0-9\-]+\.[A-Za-z]+$/

    if (!expIdText.test(userid.value)){
        alert('아이디는 4자이상 20자 이하의 영문자 및 숫자로 입력해야합니다.')
        userid.focus()
        return false
    }

    if (!expPwText.test(userpw.value)){
        alert('비밀번호는 8자이상 20자이하의 영문자,숫자,특수문자를 1자이상 꼭 포함해야합니다.')
        userpw.focus()
        return false
    }

    if (userpw.value != userpw_re.value){
        alert('입력한 비밀번호와 비밀번호 확인이 틀립니다.')
        userpw_re.focus()
        return false
    }

    if (!expNameText.test(name.value)){
        alert('이름은 한글로 입력해야합니다.')
        name.focus()
        return false
    }

    if (!expHpText.test(hp.value)){
        alert('휴대폰번호 형식이 일치하지 않습니다.')
        hp.focus()
        return false
    }

    if (!expEmailText.test(email.value)){
        alert('이메일 형식이 일치하지 않습니다.')
        email.focus()
        return false
    }

    if (ssncheck.value == 'n'){
        alert('주민등록번호 확인버튼을 눌러주세요')
        return false
    }
    
    return true
}
