const header = React.createElement('h1', {className: 'resume'}, 'Resume');
const name = React.createElement('h2', null, 'James');
const color = React.createElement('p', null, 'สีที่ชอบ: สีเขียว');
const height = React.createElement('p', null, 'ส่วนสูง: 169 ซม.');
const weight = React.createElement('p', null, 'น้ำหนัก: 50 กก.');
const word = React.createElement('p', null, '"ต้องถึงเป้าหมายในสักวัน ถ้าเรายังไม่หยุดเดิน แม้จะเป็นก้าวเล็กๆก็ตาม"');
const Total = React.createElement('div', null, header, name, color, height, weight, word);
console.log(React);

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(Total);
