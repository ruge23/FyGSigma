import React from 'react';

const Search = function(){
    return(
        <div className='search-control' style={{position:'absolute', zIndex:'10', marginTop:'1%', width:'70px'}}>
            <div className='search-component'style={{backgroundColor:'white', marginLeft:'10px', transition:'all 0.1s linear'}} >
                <div className='search-container' style={{backgroundColor:'white', whiteSpace:'nowrap',height:'40px', display: 'flex'}}>
                    <div className='input container' style={{backgroundColor:'white', display:'inline-block', paddingLeft:'8px', paddingRight:'4px'}}>
                        <a className='menu-button'><i className='material-icons'>menu</i></a>
                    </div>
                    <div className='searchbox-container' style={{backgroundColor:'white', display:'inline-block', maxWidth:'284.48px', width:'284.48px'}}>
                        <input className='search-box' type='text' placeholder='Buscar...' style={{backgroundColor:'white', color:'black', marginBottom:'0', border:'1px solid transparent', borderRadius:'1px 0 0 1px', height:'38px', outline:'none', paddingLeft:'7px', borderLeft:'1px solid #e6e6e6'}} /> 
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Search;