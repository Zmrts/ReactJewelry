import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function BurgerMenu(props) {

    const {togglePadding} = props;
    const [isOpen, setIsOpen] = useState(false);


    const showStyle = {
        left:'0'
    }
    const hideStyle = {
        left:'-120%'
    }
    const closeMenu = () => {
        setIsOpen(false);
    }
    useEffect(() => {
        const burgerLinks = document.querySelectorAll('.burger .burger-items li');
        if (isOpen) {
        burgerLinks.forEach((link, index) => {
            link.style.transition = 'opacity 1.2s ease, left 0.5s cubic-bezier(0.79, 0.33, 0, 1.03)';
            setTimeout(() => {
                setTimeout(() => {

                    link.style.opacity = '0.9'

                }, (100*(index+1)));  
            }, 100);
            
        }) 
        } else {
            burgerLinks.forEach((link) => {
                link.style.transition = 'none'; 
                link.style.opacity = '0'; 

               
            })
        }
        
    }, [isOpen])
    useEffect(() => {
        const burgerLinks = document.querySelectorAll('.burger .burger-items li');
        burgerLinks.forEach((link) => {
            link.addEventListener('click', closeMenu)
        })
    },[])
    useEffect(() => {

            setTimeout(() => {
                togglePadding(isOpen);
            }, 200);
        
        
    },[isOpen])

    const handleShowMenu = () => {
        setIsOpen(!isOpen);
    }
    
    return <div className="burger">
        <div onClick={handleShowMenu} className="burger-icon">
            <div className={`bar1 ${isOpen ? 'open' : ''}`}></div>
            <div className={`bar2 ${isOpen ? 'open' : ''}`}></div>
            <div className={`bar3 ${isOpen ? 'open' : ''}`}></div>
        </div>
        <ul style={isOpen ? showStyle : hideStyle} className="burger-items">
            <li><Link to='/basket'>Корзина</Link></li>
            <li><Link to='/favorites'>Закладки</Link></li>
            <li><Link to='/orders'>Заказы</Link></li>
            <li>REPO</li>
            <li>About</li>
        </ul>
       
    </div>
}

export {BurgerMenu}