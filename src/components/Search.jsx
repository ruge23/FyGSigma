import React from 'react';
import materialize from 'materialize-css';
import s from './Search.ncss';

const Search = function(props){
    return(
        <div className={s.searchComponent}>
					<div className={s.searchContainer}>
						<div className={s.hamburguerContainer}>
							<a className={s.menuButton}><i className="material-icons">menu</i></a>
						</div>
						<div className={s.searchboxContainer}>
							<input className={s.searchBox} type="text" placeholder="Buscar.." value={props.value} onChange={props.onChange}/>
									<div className={s.clearButton}><i className="material-icons" style={{color:"rgba(0,0,0,0.3)"}} >clear</i></div>
							
						</div>
						<div className={s.logoContainer}>
							<img className={s.horiz} src="../assets/img/ypfLogo.png" />
						</div>
					</div>
					<div className={s.maxHeight}>
						{ props.autocomplete.length === 0 ? null: 
							props.autocomplete.map(lugar => (
								<div className={s.searchResult}>
									<div className={s.centered}> 
										{props.mostrar(lugar, s)}
									</div>
								</div>
								)
							)
						}
					</div>
				</div>
    )
}

export default Search;

