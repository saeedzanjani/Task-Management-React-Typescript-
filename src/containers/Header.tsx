import * as React from 'react';
import styles from './Header.module.css'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
}

export default function Header() {
    const navigate = useNavigate()

    let breadcrumb = 'Home'
    let absolutePath = window.location.pathname.split('/')[1]

    if (absolutePath){
        breadcrumb = absolutePath
    }

    return (
        <div className={styles.header} role="presentation" onClick={handleClick}>
            <Breadcrumbs className={styles.nav_items} separator=">" aria-label="breadcrumb">
                <p 
                 onClick={() => navigate('/')}
                 className={styles.header_title}
                 >
                    Task Management
                </p>
                <Link
                    underline="none"
                    color="inherit"
                    href=""
                    className={styles.header_title}
                >
                    {breadcrumb}
                </Link>
            </Breadcrumbs>
        </div>
    );
}
