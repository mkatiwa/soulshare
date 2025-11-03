'use client'
import Link from 'next/link'
import { useState, FormEvent } from 'react'
import styles from './Footer.module.css'

export default function Footer() {
    const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

    const handleSubscribe = (e: FormEvent) => {
        e.preventDefault()
    if (email) {
      setSubscribed(true)
        setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
    }

    return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <Link href="/" className={styles.brandLogo}>
              <span className={styles.brandContent}>
                <span className={styles.brandEmoji}>💜</span>
                <span className={styles.brandText}>SoulShare</span>
              </span>
            </Link>
            <p className={styles.brandDescription}>
              A safe community platform for mental health support, mood tracking, and local resource sharing.
            </p>
            <div className={styles.socialLinks}>
              <a
                href="#"
                aria-label="Facebook"
                className={styles.socialLink}
              >
                <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className={styles.socialLink}
              >
                <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                        </a>
              <a
                href="#"
                aria-label="Instagram"
                className={styles.socialLink}
              >
                <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                    </div>
                </div>

          {/* Quick Links */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <Link href="/" className={styles.footerLink}>
                  Home
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/listings" className={styles.footerLink}>
                  Listings
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/journal" className={styles.footerLink}>
                  Journal
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/support" className={styles.footerLink}>
                  Peer Support
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/auth/login" className={styles.footerLink}>
                  Login
                </Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/auth/signup" className={styles.footerLink}>
                  Sign Up
                </Link>
              </li>
                        </ul>
                    </div>

          {/* Resources */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Resources</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <a href="#" className={styles.footerLink}>
                  Mental Health Resources
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#" className={styles.footerLink}>
                  Community Guidelines
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#" className={styles.footerLink}>
                  Safety & Privacy
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#" className={styles.footerLink}>
                  Crisis Support
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#" className={styles.footerLink}>
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className={styles.newsletterSection}>
            <h4 className={styles.sectionTitle}>Stay Connected</h4>
            <p className={styles.newsletterText}>
              Subscribe to get updates on new features, community events, and wellbeing resources.
            </p>
            <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className={styles.newsletterInput}
              />
              <button
                type="submit"
                className={styles.newsletterButton}
              >
                {subscribed ? '✓ Subscribed!' : 'Subscribe'}
              </button>
                        </form>
            <p className={styles.newsletterPrivacy}>
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Contact & Legal */}
        <div className={styles.legalSection}>
          <div className={styles.legalGrid}>
            <div className={styles.legalBlock}>
              <h5 className={styles.legalTitle}>Contact Us</h5>
              <div className={styles.legalContent}>
                <div className={styles.legalItem}>
                  <span>📧</span>
                  <a href="mailto:hello@soulshare.com" className={styles.legalLink}>
                    hello@soulshare.com
                  </a>
                </div>
                <div className={styles.legalItem}>
                  <span>📞</span>
                  <a href="tel:+1234567890" className={styles.legalLink}>
                    +1 (234) 567-890
                  </a>
                </div>
                <div className={styles.legalItem}>
                  <span>📍</span>
                  <span>Available in communities worldwide</span>
                </div>
              </div>
            </div>
            <div className={styles.legalBlock}>
              <h5 className={styles.legalTitle}>Crisis Support</h5>
              <div className={styles.legalContent}>
                <div>If you're in immediate crisis, please contact:</div>
                <div className={styles.crisisLinks}>
                  <a href="tel:988" className={styles.crisisLink}>
                    988 Suicide & Crisis Lifeline
                  </a>
                  <a href="tel:741741" className={styles.crisisLink}>
                    Crisis Text Line: 741741
                  </a>
                        </div>
                    </div>
                </div>
            </div>

          {/* Bottom Bar */}
          <div className={styles.bottomBar}>
            <div className={styles.copyright}>
              © {new Date().getFullYear()} SoulShare. All rights reserved.
            </div>
            <div className={styles.legalLinks}>
              <Link href="#" className={styles.bottomLink}>
                Terms of Service
              </Link>
              <Link href="#" className={styles.bottomLink}>
                Privacy Policy
              </Link>
              <Link href="#" className={styles.bottomLink}>
                Cookie Policy
              </Link>
              <span className={styles.divider}>|</span>
              <span className={styles.loveText}>Made with 💜 for community wellbeing</span>
            </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
