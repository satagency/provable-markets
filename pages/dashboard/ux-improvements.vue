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
          <h1 class="title">Better UX.</h1>
          <p class="description">{{ projectDescription }}</p>
        </div>

        <!-- UX Improvements -->
        <div class="principles">
          <h2 class="principles-heading">UX IMPROVEMENTS...</h2>
          
          <div class="principle">
            <h3 class="principle-title">Smart Data Tables</h3>
            <ul class="principle-list">
              <li>Filterable & Sortable</li>
              <li>Customizable Views</li>
            </ul>
          </div>
          
          <div class="principle">
            <h3 class="principle-title">Connected Workflows</h3>
            <ul class="principle-list">
              <li>Cross-Screen Integration</li>
              <li>Contextual Navigation</li>
            </ul>
          </div>
          
          <div class="principle">
            <h3 class="principle-title">Progressive Discovery</h3>
            <ul class="principle-list">
              <li>Smart Defaults</li>
              <li>Intuitive Onboarding</li>
            </ul>
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
const projectDescription = ref('Reducing cognitive load and eliminating context switching through intuitive workflows.')

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

.principle-list {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  padding-left: 1rem;
  flex: 1;
  max-width: 360px;
}

.principle-list li {
  margin-bottom: 0.5rem;
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