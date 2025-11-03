'use client'
import Link from 'next/link'
import styles from './page.module.css'

export default function HomePage() {
return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroGrid}>
            {/* Left Side - Content */}
            <div className={styles.heroLeft}>
              <div className={styles.emojiContainer}>
                <span className={styles.emoji}>💜</span>
              </div>
              <h1 className={styles.title}>
                SoulShare
              </h1>
              <p className={styles.heroSubtitle}>
                A safe community platform for mental health support & resource sharing
              </p>
              
              {/* Action Buttons - Side by Side */}
              <div className={styles.heroButtons}>
                <Link 
                  href="/auth/signup" 
                  className={`${styles.heroButton} ${styles.buttonPrimary}`}
                >
                  Get Started
                </Link>
                <Link 
                  href="/auth/login" 
                  className={`${styles.heroButton} ${styles.buttonSecondary}`}
                >
                  Login
                </Link>
              </div>
            </div>

            {/* Right Side - Image Placeholder */}
            <div className={styles.imagePlaceholder}>
              <div className={styles.imageBox}>
                <div className={styles.imageContent}>
                  <div className={styles.imageEmoji}>💚</div>
                  <p className={styles.imageText}>
                    Image Placeholder
                  </p>
                  <p className={styles.imageSubtext}>
                    Add your image here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresContainer}>
          <h2 className={styles.featuresTitle}>
            Everything You Need for Wellbeing
          </h2>
          <div className={styles.featuresGrid}>
            {/* Feature 1 */}
            <div className={styles.featureCard}>
              <div className={styles.featureEmoji}>📔</div>
              <h3 className={styles.featureTitle}>Mood Journal</h3>
              <p className={styles.featureDescription}>
                Track your daily moods and write private notes.
              </p>
              <Link href="/journal" className={styles.featureLink}>
                Start Journaling →
              </Link>
            </div>

            {/* Feature 2 */}
            <div className={styles.featureCard}>
              <div className={styles.featureEmoji}>🤝</div>
              <h3 className={styles.featureTitle}>Peer Support</h3>
              <p className={styles.featureDescription}>
                Connect safely with trained peer listeners.
              </p>
              <Link href="/support" className={styles.featureLink}>
                Find Support →
              </Link>
            </div>

            {/* Feature 3 */}
            <div className={styles.featureCard}>
              <div className={styles.featureEmoji}>📦</div>
              <h3 className={styles.featureTitle}>Community Listings</h3>
              <p className={styles.featureDescription}>
                Share or find resources in your neighborhood.
              </p>
              <Link href="/listings" className={styles.featureLink}>
                Browse Listings →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Safety Section */}
      <section className={styles.privacySection}>
        <div className={styles.privacyContainer}>
          <h2 className={styles.privacyTitle}>
            Your Privacy Matters
          </h2>
          <div className={styles.privacyGrid}>
            <div className={styles.privacyCard}>
              <div className={styles.privacyEmoji}>🔒</div>
              <h4 className={styles.privacyCardTitle}>Anonymous Options</h4>
              <p className={styles.privacyCardText}>Sign up anonymously</p>
            </div>
            <div className={styles.privacyCard}>
              <div className={styles.privacyEmoji}>🛡️</div>
              <h4 className={styles.privacyCardTitle}>Safe Environment</h4>
              <p className={styles.privacyCardText}>Moderated community</p>
            </div>
            <div className={styles.privacyCard}>
              <div className={styles.privacyEmoji}>📍</div>
              <h4 className={styles.privacyCardTitle}>Local Focus</h4>
              <p className={styles.privacyCardText}>Connect locally</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>
            Ready to Join Our Community?
          </h2>
          <p className={styles.ctaSubtitle}>
            Start your journey towards better wellbeing today
          </p>
          <Link 
            href="/auth/signup" 
            className={styles.ctaButton}
          >
            Create Your Account
          </Link>
        </div>
      </section>
    </div>
  )
}
