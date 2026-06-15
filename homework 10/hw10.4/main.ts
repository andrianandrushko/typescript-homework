let data: any = localStorage.getItem('data');
data = Number(data) + 1;
localStorage.setItem('data',data);