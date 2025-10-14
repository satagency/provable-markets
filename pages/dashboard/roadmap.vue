<template>
  <div class="page-foundation">
    <div class="float-page">
      
      <!-- Logo -->
      <div class="logo">
        <img src="/Favicon.png" alt="Aurora" class="logo-image" />
      </div>

      <!-- Main Content -->
      <div class="main-content">
        
        <!-- Header -->
        <div class="header">
          <h1 class="title">Roadmap.</h1>
          <p class="description">{{ projectDescription }}</p>
        </div>

        <!-- Roadmap -->
        <div class="principles">
          <h2 class="principles-heading">IMPLEMENTATION PHASES...</h2>
          
          <div class="roadmap-container">
            <div class="roadmap-column">
              <div class="phase">
                <h3 class="phase-title">Phase 1: Foundation</h3>
                <div class="phase-timing">Aug - Oct 2025</div>
                <div class="phase-summary">Core matching interface and smart selection workflows</div>
                <ul class="phase-list">
                  <li>Strategy Builder - Core matching interface</li>
                  <li>Progressive Discovery - Smart selection</li>
                  <li>Bulk Order Tools - Multi-order updates</li>
                  <li>Agreement Templates - Smart defaults</li>
                </ul>
              </div>
            </div>
            
            <div class="roadmap-column">
              <div class="phase">
                <h3 class="phase-title">Phase 2: Intelligence</h3>
                <div class="phase-timing">Nov 2025 - Jan 2026</div>
                <div class="phase-summary">Advanced data tables and connected workflows</div>
                <ul class="phase-list">
                  <li>Advanced Tables - Saved views</li>
                  <li>Connected Workflows - Cross-screen data</li>
                  <li>Enhanced Orderbook - Market intelligence</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="roadmap-container">
            <div class="roadmap-column">
              <div class="phase">
                <h3 class="phase-title">Phase 3: Optimization</h3>
                <div class="phase-timing">Feb - Apr 2026</div>
                <div class="phase-summary">Enhanced workflows and technical debt resolution</div>
                <ul class="phase-list">
                  <li>Trade Booking - Manual workflows</li>
                  <li>System Features - Notifications</li>
                  <li>Vue3 Migration - Technical debt</li>
                </ul>
              </div>
            </div>
            
            <div class="roadmap-column">
              <div class="phase">
                <h3 class="phase-title">Success Metrics</h3>
                <div class="phase-timing">Ongoing</div>
                <div class="phase-summary">Measurable business outcomes and user engagement</div>
                <ul class="phase-list">
                  <li>40% increase in workflows</li>
                  <li>25% improvement in volume</li>
                  <li>30% reduction in support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
      
      <!-- Footer -->
      <div class="footer">
        <div class="footer-left">
          <span>If you have any questions, feel free to reach out on </span>
          <SlackIcon :size="16" />
          <span>Slack.</span>
        </div>
        <div class="footer-right">
          <!-- Social links removed -->
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SlackIcon } from '~/components/icons'

// Project Description
const projectDescription = ref('Our implementation roadmap is structured in three phases, each building upon the previous to create a comprehensive platform transformation.')

// First Principles
const designLedDescription = ref('Literally everything we do is permeated by design thinking, not "just" numbers. We trust our gut and obsess over details. We ship fast and iterate by talking directly to users.')

const smallTeamsDescription = ref('We believe small focused teams lead to improved trust, greater ownership and an increased opportunity for innovation — small teams build and "collaborate better".')

const lessFussDescription = ref('We strive for simplicity — less is more.')

// Set page title
useHead({
  title: 'Aurora - Provable Markets'
})
</script>

<style>
/* Float Design - Clean Implementation */
.float-page {
  padding: 4rem 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #ffffff;
  width: 100%;
  flex: 1;
  min-height: 100%;
  overflow-y: visible;
}

/* Logo */
.logo {
  margin-bottom: 3rem;
  margin-top: 0;
  padding-top: 0;
}

.logo-image {
  height: 24px;
  width: auto;
}

/* Main Content */
.main-content {
  margin-bottom: 4rem;
}

/* Header */
.header {
  display: flex;
  align-items: flex-start;
  gap: 2.5rem;
  margin-bottom: 4rem;
}

.title {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 1.2;
  color: #ffffff;
  margin: 0;
  flex-shrink: 0;
  width: 200px;
}

.description {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  flex: 1;
  max-width: 360px;
}

/* Principles */
.principles {
  margin-bottom: 4rem;
}

.principles-heading {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 3rem 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.principle {
  display: flex;
  align-items: flex-start;
  gap: 2.5rem;
  margin-bottom: 3rem;
}

.principle:last-child {
  margin-bottom: 0;
}

.principle-title {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.3;
  color: #ffffff;
  margin: 0;
  flex-shrink: 0;
  width: 200px;
}

.principle-text {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  flex: 1;
  max-width: 360px;
}

/* Roadmap Layout */
.roadmap-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.roadmap-column {
  display: flex;
  flex-direction: column;
}

.phase {
  margin-bottom: 0;
}

.phase-title {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.3;
  color: #ffffff;
  margin: 0 0 0.5rem 0;
  flex-shrink: 0;
  width: 200px;
}

.phase-timing {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 500;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.phase-summary {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 1rem 0;
  font-style: italic;
}

.phase-list {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 400;
  font-size: 0.85rem;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  padding-left: 1rem;
  flex: 1;
  max-width: 360px;
}

.phase-list li {
  margin-bottom: 0.3rem;
}

/* Footer */
.footer {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.7);
}

.footer-left {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-right {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.link {
  color: #ffffff;
  text-decoration: underline;
  text-underline-position: from-font;
}

.x-icon {
  margin: 0 0.25rem;
  color: #ffffff;
}

/* Responsive Design */
@media (max-width: 768px) {
  .float-page {
    padding: 2rem 1rem;
  }
  
  .header {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .title {
    width: 100%;
    font-size: 2rem;
  }
  
  .principle {
    flex-direction: column;
    gap: 1rem;
  }
  
  .principle-title {
    width: 100%;
    font-size: 1.25rem;
  }
  
  .footer {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
}
</style>