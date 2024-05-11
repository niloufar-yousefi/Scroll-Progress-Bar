let _span =  document.getElementsByTagName( 'span' )[0]
let _spanTxt =  document.getElementsByTagName( 'span' )[1]
let _main = document.getElementsByTagName( 'main' )[0]
let _div = document.getElementsByTagName( 'div' )[0]
_span.style.width = 0 

let maxScrollTop  = (_div.clientHeight ) - (_main.clientHeight)

_main.addEventListener('scroll',(e)=>{
   let _scrollTop = parseInt(e.target.scrollTop)
   let _percent = (_scrollTop * 100) / maxScrollTop 
   _span.style.width = _percent + '%' 
    _spanTxt.innerHTML = `${parseInt(_percent)}%`
    _spanTxt.style.left = '98%'
    if(_percent == 0  || _percent == 100 ){
        _spanTxt.innerHTML = ''
    }
    
  })       

