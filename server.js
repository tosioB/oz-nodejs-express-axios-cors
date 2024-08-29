// server.js
const express = require('express'); // express 모듈 불러오기
const cors = require('cors'); // cors 모듈 불러오기

const app = express(); // express 실행

app.use(cors({
  origin: 'http://127.0.0.1:5500',
  methods: ['OPTIONS', 'POST', 'GET', 'PUT', 'DELETE']
}))

app.use(express.json()); // JSON 형식의 요청 본물을 파싱
app.use(express.text()); // 텍스트 형식의 요청 본문을 파싱

let data = { message: '여러분 화이팅!' };

app.options('/', (req, res) => {
  return res.send('요청을 보내세요');
})

app.get('/', (req, res) => {
  res.json(data);
})

app.post('/', (req, res) => {
  data.message = req.body;
  res.send(`받은 데이터: ${req.body}`);
})

app.put('/', (req, res) => {
  data.message = req.body
  res.send(req.body);
})

app.delete('/', (req, res) => {
  data = {}
  res.send('메세지가 삭제되었습니다.')
})

app.listen(3000, () => {
  console.log('서버가 http://localhost:3000/ 에서 실행 중입니다.');
});
