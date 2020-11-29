import React,{useState, useEffect} from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import Input from "./input";
import Fuse from "fuse.js";


function Header() {
    const [{ basket, user }] = useStateValue();
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fuse = new Fuse( { keys: ['data.description', 'data.title', 'data.genre'] });
    }, [searchTerm])

    return (
        <div className='header'>
            <Link to="/">
                <img
                    alt="Amazon logo"
                    className='header__logo'
                    src='https://images-platform.99static.com//8fVzzet3H-rCWZ0P5uhPRGPtA84=/0x0:2040x2040/fit-in/500x500/99designs-contests-attachments/112/112138/attachment_112138805'
                />
            </Link>
            <div
                className="header__search">
                    <Input searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <SearchIcon
                    className="header__searchIcon" />
            </div>

            <div className="header__nav">

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
