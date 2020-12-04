window.dom={
    //增
    create(string){
        const container = document.createElement('template')
        container.innerHTML = string.trim()
        // console.log(`container:${container}`);
        // console.log(`container.firstChild:${container.firstChild}`);//null
        // console.log(`container.content.firstChild:${container.content.firstChild}`);
        return container.content.firstChild
    },

    before(node,node2){
        node.parentNode.insertBefore(node2,node)
    },

    after(node,node2){
        node.parentNode.insertBefore(node2,node.nextSibling)
    },

    append(parent,node){
        parent.append(node)
    },

    wrap(node,parent){
        dom.before(node,parent)
        dom.append(parent,node)
    },

    //删
    //删除节点
    remove(node){
        node.parentNode.removeChild(node)
        return node
    },

    //删除所有子节点
    empty(node){
        const childNodes = node.childNodes
        const arr = []
        let x = node.firstChild
        while(x){
            arr.push(dom.remove(node.firstChild))
            x=node.firstChild
            // console.log(`x:${x}`);
            // console.log(`arr:${arr}`);
        }
        return arr
        
    },

    //读写
    attr(node,name,value){
        if(arguments.length===3){
            node.setAttribute(name,value)
        }else if(arguments.length===2){
            node.getAttribute(name)
        }
    },

    text(node,string){
        if(arguments.length===2){
            if('innerText' in node){
                node.innerText = string
            }else{
                node.innerContent = string
            }
        }else if(arguments.length===1){
            if('innerText' in node){
                return node.innerText
            }else{
                return node.innerContent
            }
        }
    },

    html(node,string){
        if(arguments.length===2){
           innerHTML=string
        }else if(arguments.length===1){
            
                return node.innerHTML
           
        }
    },

    style(node,name,value){
        if(arguments.length===3){
            node.style[name]=value
        }else if(arguments.length===2){
            //dom.style(div1,color)
            if(typeof name ==='string'){
                return node.style[name]
            }else if(name instanceof Object){
                //dom.style(div1,{color:red,fontsize:12px})
                for(let key in name){
                    node.style[key] = name[key]
                }

            }
            
        }
    },

    class:{
        add(node,className){
            node.classList.add(className)
        },
        remove(node,className){
            node.classList.remove(className)
        },
        has(node,className){
            return node.classList.contains(className)
            //Node.contains()返回的是一个布尔值，来表示传入的节点是否为该节点的后代节点。
        }
    },

    on(node,eventName,fn){
        node.addEventListener(eventName,fn)
    },

    off(node,eventName,fn){
        node.removeEventListener(eventName,fn)
    },

    //查找
    find(selector,scope){
        return (scope||document).querySelectorAll(selector)
    },

    parent(node){
        return node.parentNode
      },

    children(node){
        return node.children
      },

    siblings(node){
        return Array.from(node.parentNode.children)
        .filter(n=>n!==node)
      },
    
    next(node){
        let x  = node.nextSibling
        while(x&&x.nodeType===3){
            x=x.nextSibling
        }
        //想查找的是下一个兄弟节点，但是文本节点也会被当作为兄弟节点，所以如果是文本节点的话，就再找下一个节点
        //如果没有下一个兄弟节点了，就直接返回，不循环了
        return x
    },

    previous(node){
        let x = node.previousSibling
        while(x&&x.nodeType===3){
            x=x.previousSibling
        }
        return x
    },

    each(nodeList,fn){
        for(let i = 0;i<nodeList.length;i++){
            fn.call(null,nodeList[i])
        }
    },

    index(node){
        const list = dom.children(node.parentNode)
        let i
        for(i=0;i<list.length;i++){
            if(list[i]===node){
                break
            }
        }
        return i 
    }
}