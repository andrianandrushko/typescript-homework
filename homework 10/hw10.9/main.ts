let money = Number(localStorage.getItem('money')) + 10;
localStorage.setItem('money', String(money));
let st = document.getElementById('money') as HTMLElement | null;
if (st)st.innerText = String(money);