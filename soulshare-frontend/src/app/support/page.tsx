'use client'
import { useState } from 'react'
import styles from './page.module.css'

type SupportThread = {
  id: number
  peerName: string
  lastMessage: string
  timestamp: string
  unread: number
  status: 'online' | 'offline'
}

export default function SupportPage() {
  const [threads] = useState<SupportThread[]>([
    {
      id: 1,
      peerName: 'Peer Listener Sarah',
      lastMessage: 'Thank you for sharing. I understand how you\'re feeling.',
      timestamp: '2 hours ago',
      unread: 0,
      status: 'online'
    },
    {
      id: 2,
      peerName: 'Support Friend',
      lastMessage: 'You\'re doing great. Remember to take things one step at a time.',
      timestamp: '1 day ago',
      unread: 2,
      status: 'offline'
    },
    {
      id: 3,
      peerName: 'Anonymous Peer',
      lastMessage: 'It\'s okay to feel this way. Would you like to talk more about it?',
      timestamp: '3 days ago',
      unread: 0,
      status: 'online'
    }
  ])

  const [selectedThread, setSelectedThread] = useState<number | null>(null)
  const [message, setMessage] = useState('')

  const handleSendMessage = () => {
    if (!message.trim()) return
    // Handle sending message
    setMessage('')
  }

return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>Peer Support</h1>
          <p className={styles.subtitle}>Connect with trained peer listeners in a safe, confidential space</p>
        </div>

        <div className={styles.mainGrid}>
          {/* Threads List */}
          <div>
            <div className={styles.threadsList}>
              <div className={styles.threadsHeader}>
                <h2 className={styles.threadsHeaderTitle}>Your Conversations</h2>
                <p className={styles.threadsHeaderSubtitle}>{threads.length} active threads</p>
              </div>
              
              <div className={styles.threadsContainer}>
                {threads.map(thread => (
                  <button
                    key={thread.id}
                    onClick={() => setSelectedThread(thread.id)}
                    className={`${styles.threadItem} ${selectedThread === thread.id ? styles.threadItemActive : ''}`}
                  >
                    <div className={styles.threadHeader}>
                      <div className={styles.threadInfo}>
                        <div className={`${styles.statusDot} ${
                          thread.status === 'online' ? styles.statusOnline : styles.statusOffline
                        }`}></div>
                        <span className={styles.threadName}>{thread.peerName}</span>
                      </div>
                      {thread.unread > 0 && (
                        <span className={styles.unreadBadge}>
                          {thread.unread}
                        </span>
                      )}
</div>
                    <p className={styles.threadMessage}>{thread.lastMessage}</p>
                    <p className={styles.threadTimestamp}>{thread.timestamp}</p>
                  </button>
                ))}
              </div>

              <div className={styles.newThreadButton}>
                <button>+ Start New Conversation</button>
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div>
            {selectedThread ? (
              <div className={styles.chatArea}>
                {/* Chat Header */}
                <div className={styles.chatHeader}>
                  <div className={styles.chatHeaderContent}>
                    <div className={styles.chatUserInfo}>
                      <div className={styles.userAvatar}>
                        {threads.find(t => t.id === selectedThread)?.peerName.charAt(0) || 'P'}
                      </div>
                      <div className={styles.userDetails}>
                        <div className={styles.userName}>
                          {threads.find(t => t.id === selectedThread)?.peerName}
                        </div>
                        <div className={styles.userStatus}>
                          <span className={`${styles.statusIndicator} ${
                            threads.find(t => t.id === selectedThread)?.status === 'online' 
                              ? styles.statusIndicatorOnline 
                              : styles.statusIndicatorOffline
                          }`}></span>
                          {threads.find(t => t.id === selectedThread)?.status === 'online' ? 'Online' : 'Offline'}
                        </div>
                      </div>
                    </div>
                    <button className={styles.closeButton}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Messages Area */}
                <div className={styles.messagesArea}>
                  <div className={styles.messagesContainer}>
                    {/* Sample messages */}
                    <div className={`${styles.message} ${styles.messageReceived}`}>
                      <div className={`${styles.messageBubble} ${styles.messageBubbleReceived}`}>
                        <p className={styles.messageText}>Hi there! How are you feeling today?</p>
                        <p className={styles.messageTime}>2 hours ago</p>
                      </div>
                    </div>
                    <div className={`${styles.message} ${styles.messageSent}`}>
                      <div className={`${styles.messageBubble} ${styles.messageBubbleSent}`}>
                        <p className={styles.messageText}>I'm feeling a bit overwhelmed lately.</p>
                        <p className={styles.messageTime}>2 hours ago</p>
                      </div>
                    </div>
                    <div className={`${styles.message} ${styles.messageReceived}`}>
                      <div className={`${styles.messageBubble} ${styles.messageBubbleReceived}`}>
                        <p className={styles.messageText}>Thank you for sharing. I understand how you're feeling. Would you like to talk more about what's causing the overwhelm?</p>
                        <p className={styles.messageTime}>1 hour ago</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <div className={styles.messageInput}>
                  <div className={styles.inputContainer}>
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Type your message..."
                      className={styles.messageInputField}
                    />
                    <button
                      onClick={handleSendMessage}
                      className={styles.sendButton}
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.emptyChat}>
                <div className={styles.emptyChatContent}>
                  <div className={styles.emptyChatEmoji}>💬</div>
                  <h3 className={styles.emptyChatTitle}>Select a conversation</h3>
                  <p className={styles.emptyChatText}>Choose a thread from the list to start messaging</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Support Info */}
        <div className={styles.infoSection}>
          <div className={`${styles.infoCard} ${styles.infoCardGreen}`}>
            <h3 className={`${styles.infoCardTitle} ${styles.infoCardTitleGreen}`}>🤝 What is Peer Support?</h3>
            <p className={`${styles.infoCardText} ${styles.infoCardTextGreen}`}>
              Peer support connects you with trained community members who understand what you're going through. 
              These conversations are confidential and judgment-free.
            </p>
          </div>
          <div className={`${styles.infoCard} ${styles.infoCardBlue}`}>
            <h3 className={`${styles.infoCardTitle} ${styles.infoCardTitleBlue}`}>🔒 Your Privacy Matters</h3>
            <p className={`${styles.infoCardText} ${styles.infoCardTextBlue}`}>
              All conversations are encrypted and anonymous. You can choose to reveal as much or as little 
              about yourself as you're comfortable with.
            </p>
          </div>
        </div>

        {/* Crisis Resources */}
        <div className={styles.crisisBox}>
          <h3 className={styles.crisisTitle}>⚠️ Need Immediate Help?</h3>
          <p className={styles.crisisText}>
            If you're in crisis, please contact emergency services or a crisis hotline:
          </p>
          <div className={styles.crisisLinks}>
            <a href="tel:988" className={styles.crisisLink}>988 Suicide & Crisis Lifeline</a>
            <a href="tel:741741" className={styles.crisisLink}>Crisis Text Line: Text HOME to 741741</a>
          </div>
        </div>
</div>
</div>
)
}
