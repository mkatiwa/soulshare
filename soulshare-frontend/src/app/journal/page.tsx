'use client'
import { useState } from 'react'
import Link from 'next/link'

type MoodEntry = {
  id: number
  score: number
  note: string
  date: string
  tags: string[]
}

export default function JournalPage() {
  const [note, setNote] = useState('')
  const [selectedMood, setSelectedMood] = useState(5)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [entries, setEntries] = useState<MoodEntry[]>([
    {
      id: 1,
      score: 7,
      note: 'Feeling grateful today. Had a good conversation with a friend.',
      date: '2024-01-15',
      tags: ['grateful', 'social']
    }
  ])

  const moodLabels = ['Very Low', 'Low', 'Below Average', 'Average', 'Good', 'Great', 'Excellent']
  const availableTags = ['grateful', 'anxious', 'happy', 'sad', 'calm', 'energetic', 'tired', 'hopeful', 'social', 'alone']

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    )
  }

  const addEntry = () => {
    if (!note.trim()) return
    
    const newEntry: MoodEntry = {
      id: Date.now(),
      score: selectedMood,
      note: note.trim(),
      date: new Date().toISOString().split('T')[0],
      tags: [...selectedTags]
    }
    
    setEntries(prev => [newEntry, ...prev])
    setNote('')
    setSelectedMood(5)
    setSelectedTags([])
  }

  const getMoodColor = (score: number) => {
    if (score <= 2) return 'bg-red-100 text-red-700 border-red-300'
    if (score <= 4) return 'bg-orange-100 text-orange-700 border-orange-300'
    if (score <= 5) return 'bg-yellow-100 text-yellow-700 border-yellow-300'
    return 'bg-green-100 text-green-700 border-green-300'
  }

  const getMoodEmoji = (score: number) => {
    if (score <= 2) return '😞'
    if (score <= 4) return '😐'
    if (score <= 5) return '🙂'
    if (score <= 6) return '😊'
    return '😄'
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>Mood Journal</h1>
          <p className={styles.subtitle}>Track your emotions and reflect on your wellbeing journey</p>
        </div>

        {/* New Entry Form */}
        <div className={styles.entryForm}>
          <h2 className={styles.formTitle}>New Entry</h2>
          
          {/* Mood Selector */}
          <div className={styles.moodSection}>
            <label className={styles.moodLabel}>
              How are you feeling today?
            </label>
            <div className={styles.moodButtons}>
              {[1, 2, 3, 4, 5, 6, 7].map(score => (
                <button
                  key={score}
                  type="button"
                  onClick={() => setSelectedMood(score)}
                  className={`${styles.moodButton} ${selectedMood === score ? styles.moodButtonActive : ''}`}
                >
                  {score}
                </button>
              ))}
            </div>
            <p className={styles.moodInfo}>
              {selectedMood}/7 - {moodLabels[selectedMood - 1]} {getMoodEmoji(selectedMood)}
            </p>
          </div>

          {/* Tags */}
          <div className={styles.tagsSection}>
            <label className={styles.tagsLabel}>
              Tags (optional)
            </label>
            <div className={styles.tagsContainer}>
              {availableTags.map(tag => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className={`${styles.tagButton} ${selectedTags.includes(tag) ? styles.tagButtonActive : ''}`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Note Textarea */}
          <div className={styles.noteSection}>
            <label htmlFor="journal-note" className={styles.noteLabel}>
              What's on your mind?
            </label>
            <textarea
              id="journal-note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Write about your day, your feelings, or anything you'd like to remember..."
              className={styles.textarea}
            />
          </div>

          <button
            onClick={addEntry}
            disabled={!note.trim()}
            className={styles.saveButton}
          >
            Save Entry
          </button>
        </div>

        {/* Entries List */}
        <div className={styles.entriesSection}>
          <h2 className={styles.entriesTitle}>Your Journal Entries</h2>
          
          {entries.length === 0 ? (
            <div className={styles.emptyState}>
              <div className={styles.emptyEmoji}>📝</div>
              <p className={styles.emptyText}>No entries yet. Start journaling to track your mood!</p>
            </div>
          ) : (
            entries.map(entry => (
              <div key={entry.id} className={styles.entryCard}>
                <div className={styles.entryHeader}>
                  <div className={styles.entryMeta}>
                    <span className={`${styles.moodBadge} ${
                      entry.score <= 2 ? styles.moodBadgeRed :
                      entry.score <= 4 ? styles.moodBadgeOrange :
                      entry.score <= 5 ? styles.moodBadgeYellow :
                      styles.moodBadgeGreen
                    }`}>
                      {entry.score}/7 {getMoodEmoji(entry.score)}
                    </span>
                    <span className={styles.entryDate}>{entry.date}</span>
                  </div>
                </div>
                
                <p className={styles.entryNote}>{entry.note}</p>
                
                {entry.tags.length > 0 && (
                  <div className={styles.entryTags}>
                    {entry.tags.map(tag => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Stats Section */}
        {entries.length > 0 && (
          <div className={styles.statsSection}>
            <h3 className={styles.statsTitle}>Your Wellbeing Stats</h3>
            <div className={styles.statsGrid}>
              <div>
                <div className={styles.statsValue}>{entries.length}</div>
                <div className={styles.statsLabel}>Total Entries</div>
              </div>
              <div>
                <div className={styles.statsValue}>
                  {(entries.reduce((sum, e) => sum + e.score, 0) / entries.length).toFixed(1)}
                </div>
                <div className={styles.statsLabel}>Avg. Mood</div>
              </div>
              <div>
                <div className={styles.statsValue}>
                  {new Set(entries.flatMap(e => e.tags)).size}
                </div>
                <div className={styles.statsLabel}>Tags Used</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
