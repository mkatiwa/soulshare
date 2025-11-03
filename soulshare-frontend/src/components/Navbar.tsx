'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import useAuth from '../hooks/useAuth'
import styles from './Navbar.module.css'

function Navbar() {
  const { user, logout } = useAuth()
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <span className={styles.logoEmoji}>💜</span>
            <span className={styles.logoText}>
              SoulShare
            </span>
          </Link>

          {/* Navigation Links */}
          <div className={styles.navLinks}>
            <Link
              href="/listings"
              className={`${styles.navLink} ${isActive('/listings') ? styles.navLinkActive : ''}`}
            >
              Listings
            </Link>
            <Link
              href="/journal"
              className={`${styles.navLink} ${isActive('/journal') ? styles.navLinkActive : ''}`}
            >
              Journal
            </Link>
            <Link
              href="/support"
              className={`${styles.navLink} ${isActive('/support') ? styles.navLinkActive : ''}`}
            >
              Support
            </Link>

            {/* Auth Buttons */}
            {user ? (
              <div className={styles.authSection}>
                <span className={styles.userInfo}>
                  {user.isAnonymous ? 'Anonymous' : (user.username || user.email || 'User')}
                </span>
                <button
                  onClick={logout}
                  className={styles.logoutButton}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className={styles.authButtons}>
                <Link
                  href="/auth/login"
                  className={styles.loginButton}
                >
                  Login
                </Link>
                <Link
                  href="/auth/signup"
                  className={styles.signupButton}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
