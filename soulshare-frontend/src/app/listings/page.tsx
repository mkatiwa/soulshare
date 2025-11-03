'use client'
import { useState } from 'react'
import styles from './page.module.css'

type Listing = {
  id: number
  title: string
  description: string
  category: 'food' | 'goods' | 'help' | 'services'
  location: string
  postedBy: string
  postedDate: string
  status: 'available' | 'claimed'
}

export default function ListingsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [listings] = useState<Listing[]>([
    {
      id: 1,
      title: 'Fresh vegetables from garden',
      description: 'Have extra tomatoes, cucumbers, and lettuce. Happy to share with neighbors!',
      category: 'food',
      location: 'Downtown District',
      postedBy: 'Anonymous',
      postedDate: '2024-01-15',
      status: 'available'
    },
    {
      id: 2,
      title: 'Winter coats and blankets',
      description: 'Cleaning out closet - several warm coats and blankets in good condition.',
      category: 'goods',
      location: 'Northside',
      postedBy: 'Community Helper',
      postedDate: '2024-01-14',
      status: 'available'
    },
    {
      id: 3,
      title: 'Need help moving furniture',
      description: 'Looking for someone to help move a couch this weekend. Can trade with baked goods!',
      category: 'help',
      location: 'East Park',
      postedBy: 'Anonymous',
      postedDate: '2024-01-13',
      status: 'available'
    },
    {
      id: 4,
      title: 'Free tutoring sessions',
      description: 'Offering free math tutoring for students. Online or in-person options available.',
      category: 'services',
      location: 'City Center',
      postedBy: 'Teacher123',
      postedDate: '2024-01-12',
      status: 'available'
    }
  ])

  const categories = [
    { id: 'all', label: 'All', emoji: '📋' },
    { id: 'food', label: 'Food', emoji: '🍎' },
    { id: 'goods', label: 'Goods', emoji: '📦' },
    { id: 'help', label: 'Help', emoji: '🤝' },
    { id: 'services', label: 'Services', emoji: '🛠️' }
  ]

  const filteredListings = selectedCategory === 'all'
    ? listings
    : listings.filter(l => l.category === selectedCategory)


  const getCategoryClassName = (category: string) => {
    switch (category) {
      case 'food': return styles.categoryFood
      case 'goods': return styles.categoryGoods
      case 'help': return styles.categoryHelp
      case 'services': return styles.categoryServices
      default: return ''
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>Community Listings</h1>
          <p className={styles.subtitle}>Share resources, find help, and connect with your local community</p>
        </div>

        {/* Category Filter */}
        <div className={styles.categoryFilter}>
          <div className={styles.categoryButtons}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`${styles.categoryButton} ${
                  selectedCategory === cat.id
                    ? styles.categoryButtonActive
                    : styles.categoryButtonInactive
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Create New Listing Button */}
        <div className={styles.createButton}>
          <button>+ Create New Listing</button>
        </div>

        {/* Listings Grid */}
        {filteredListings.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyEmoji}>📋</div>
            <p className={styles.emptyText}>No listings found in this category.</p>
          </div>
        ) : (
          <div className={styles.listingsGrid}>
            {filteredListings.map(listing => (
              <div key={listing.id} className={styles.listingCard}>
                <div className={styles.listingHeader}>
                  <div className={styles.listingContent}>
                    <h3 className={styles.listingTitle}>{listing.title}</h3>
                    <p className={styles.listingDescription}>{listing.description}</p>
                  </div>
                </div>

                <div className={styles.listingTags}>
                  <span className={`${styles.categoryBadge} ${getCategoryClassName(listing.category)}`}>
                    {listing.category.charAt(0).toUpperCase() + listing.category.slice(1)}
                  </span>
                  <span className={`${styles.statusBadge} ${
                    listing.status === 'available' ? styles.statusAvailable : styles.statusClaimed
                  }`}>
                    {listing.status === 'available' ? 'Available' : 'Claimed'}
                  </span>
                </div>

                <div className={styles.listingMeta}>
                  <div className={styles.listingLocation}>
                    <span>📍</span>
                    <span>{listing.location}</span>
                  </div>
                  <div>{listing.postedDate}</div>
                </div>

                <div className={styles.listingFooter}>
                  <div className={styles.listingAuthor}>
                    Posted by: <span className={styles.listingAuthorName}>{listing.postedBy}</span>
                  </div>
                  <button className={styles.contactButton}>
                    {listing.status === 'available' ? 'Contact' : 'View Details'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Info Box */}
        <div className={styles.infoBox}>
          <h3 className={styles.infoTitle}>💡 How It Works</h3>
          <ul className={styles.infoList}>
            <li>• Browse listings by category to find what you need</li>
            <li>• Post your own listings to share resources with the community</li>
            <li>• All interactions can be anonymous - your privacy is protected</li>
            <li>• Contact posters through the platform to arrange exchanges</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
