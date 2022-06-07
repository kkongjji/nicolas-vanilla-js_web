const quotes = [
    {
      quote: "삶이 있는 한 희망은 있다",
      author: "키케로",
    },
    {
      quote: "산다는것 그것은 치열한 전투이다.",
      author: "로망로랑",
    },
    {
      quote:
        "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
      author: "사무엘존슨",
    },
    {
      quote: "언제나 현재에 집중할수 있다면 행복할것이다.",
      author: "파울로 코엘료",
    },
    {
      quote: "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해",
      author: "찰리 채플린",
    },
    {
      quote: "피할수 없으면 즐겨라 ",
      author: "로버트 엘리엇",
    },
    {
      quote: "절대 어제를 후회하지 마라. 인생은 오늘의  내 안에 있고 내일은 스스로 만드는것이다.",
      author: "-L론허바드",
    },
    {
      quote: "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다.",
      author: "단테",
    },
    {
      quote: "행복은 습관이다,그것을 몸에 지니라.",
      author: "허버드",
    },
    {
      quote: "1퍼센트의 가능성, 그것이 나의 길이다.",
      author: "나폴레옹",
    },
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;