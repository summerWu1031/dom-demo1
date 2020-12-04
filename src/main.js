dom.create('<div></div>')

// console.log(div1);
// dom.empty(div1);
// dom.attr(div1,'test','red');
// dom.text(div1,'hihihi')
// dom.style(div1,{color:'red',border:'1px solid red'})
// dom.class.add(div1,'xxx')
// console.log(dom.class.has(div1,'xxx'));

// let fn= ()=> console.log('我被点击了');

// dom.on(div1,'click',fn)
// dom.off(div1,'click',fn)
// console.log(dom.find('.red')[0]);
// console.log(dom.find('.red'));
// console.log(dom.find('.red',div2)[0]);
let div5 =dom.find('#div5')[0]
console.log(div5);

console.log(dom.children(div5));
console.log(dom.siblings(div5));

console.log(dom.next(div5));
console.log(dom.previous(xxx));

let travel = dom.find('#travel')[0];
dom.each(dom.children(travel),(n)=>{dom.style(n,'color','red')})

console.log(dom.index(t2))
