"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import styles from "../styles/Navigation.module.css";
export default function Navigation() {
    const path = usePathname()
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link href="/">Home {path === "/" ? "🏠" : null}</Link></li>
                <li><Link href="/about-us">About Us {path === "/about-us" ? "📖" : null}</Link></li>
            </ul>
        </nav>
    )
}