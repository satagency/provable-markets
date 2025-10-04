<template>
  <div style="background-color: #000000; min-height: 100vh; display: flex; flex-direction: column;">
    <!-- Header -->
    <div style="display: flex; justify-content: space-between; align-items: center; padding: 2rem;">
      <!-- Logo -->
      <div style="display: flex; align-items: center;">
        <svg width="106" height="13" viewBox="0 0 106 13" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 12px;">
          <path d="M3.95198 12.171C1.70998 12.171 0.474976 10.822 0.474976 9.05503C0.474976 7.21203 1.72898 5.99602 4.46498 5.99602C5.20598 5.99602 6.19398 6.14802 6.59298 6.28102V5.46403C6.59298 4.78002 6.15598 4.24802 5.07298 4.24802C4.16098 4.24802 3.62898 4.74202 3.62898 5.35002H0.892976C0.892976 3.48802 2.24198 1.89202 5.16798 1.89202C7.88498 1.89202 9.51898 3.39303 9.51898 5.46403V12H6.89698L6.68798 11.107H6.61198C6.06098 11.734 5.18698 12.171 3.95198 12.171ZM4.69298 9.89102C5.88998 9.89102 6.59298 9.18802 6.59298 8.37102V8.27602C5.98498 8.02902 5.37698 7.95302 4.80698 7.95302C3.85698 7.95302 3.36298 8.37102 3.36298 8.90302C3.36298 9.47302 3.81898 9.89102 4.69298 9.89102Z" fill="#04CF8B"/>
          <path d="M17.2143 2.06302H20.1403V8.02903C20.1403 10.138 18.8483 12.171 15.5993 12.171C15.5803 12.171 15.5803 12.171 15.5803 12.171C12.3313 12.171 11.0393 10.138 11.0393 8.02903V2.06302H13.9653V7.59202C13.9653 8.73202 14.4403 9.41603 15.5993 9.41603C16.7393 9.41603 17.2143 8.73202 17.2143 7.59202V2.06302Z" fill="#04CF8B"/>
          <path d="M21.8522 12V2.06302H24.2842L24.5122 3.50702H24.5882C25.0252 2.63302 25.8612 1.89202 27.1342 1.89202H27.8182V4.57102H26.8682C25.4812 4.57102 24.5882 5.50203 24.5882 7.09802V12H21.8522Z" fill="#04CF8B"/>
          <path d="M33.531 12.171C30.301 12.171 28.572 10.024 28.572 7.04102C28.572 4.05802 30.339 1.89202 33.531 1.89202C36.723 1.89202 38.49 4.05802 38.49 7.04102C38.49 10.005 36.761 12.171 33.531 12.171ZM33.531 9.60602C34.747 9.60602 35.507 8.84602 35.507 7.04102C35.507 5.23602 34.747 4.45702 33.531 4.45702C32.315 4.45702 31.555 5.25502 31.555 7.04102C31.555 8.84602 32.334 9.60602 33.531 9.60602Z" fill="#04CF8B"/>
          <path d="M39.73 12V2.06302H42.162L42.39 3.50702H42.466C42.903 2.63302 43.739 1.89202 45.012 1.89202H45.696V4.57102H44.746C43.359 4.57102 42.466 5.50203 42.466 7.09802V12H39.73Z" fill="#04CF8B"/>
          <path d="M49.6485 12.171C47.4065 12.171 46.1715 10.822 46.1715 9.05503C46.1715 7.21203 47.4255 5.99602 50.1615 5.99602C50.9025 5.99602 51.8905 6.14802 52.2895 6.28102V5.46403C52.2895 4.78002 51.8525 4.24802 50.7695 4.24802C49.8575 4.24802 49.3255 4.74202 49.3255 5.35002H46.5895C46.5895 3.48802 47.9385 1.89202 50.8645 1.89202C53.5815 1.89202 55.2155 3.39303 55.2155 5.46403V12H52.5935L52.3845 11.107H52.3085C51.7575 11.734 50.8835 12.171 49.6485 12.171ZM50.3895 9.89102C51.5865 9.89102 52.2895 9.18802 52.2895 8.37102V8.27602C51.6815 8.02902 51.0735 7.95302 50.5035 7.95302C49.5535 7.95302 49.0595 8.37102 49.0595 8.90302C49.0595 9.47302 49.5155 9.89102 50.3895 9.89102Z" fill="#04CF8B"/>
          <path d="M65.05 8.70003H63.75V7.40002H62.45V6.10002H61.15V10H59.85V0.900024H65.05V2.20002H66.35V4.80002H65.05V6.10002H63.75V7.40002H65.05V8.70003H66.35V10H65.05V8.70003ZM61.15 4.80002H65.05V2.20002H61.15V4.80002Z" fill="#D7EBFF"/>
          <path d="M74.7949 10H68.2949V0.900024H74.7949V2.20002H69.5949V4.80002H73.4949V6.10002H69.5949V8.70003H74.7949V10Z" fill="#D7EBFF"/>
          <path d="M80.6398 8.70003V10H79.3398V8.70003H78.0398V7.40002H76.7398V0.900024H78.0398V7.40002H79.3398V8.70003H80.6398V7.40002H81.9398V0.900024H83.2398V7.40002H81.9398V8.70003H80.6398Z" fill="#D7EBFF"/>
          <path d="M85.1848 10V8.70003H86.4848V2.20002H85.1848V0.900024H89.0848V2.20002H87.7848V8.70003H89.0848V10H85.1848Z" fill="#D7EBFF"/>
          <path d="M97.5398 10H91.0398V0.900024H97.5398V2.20002H92.3398V4.80002H96.2398V6.10002H92.3398V8.70003H97.5398V10Z" fill="#D7EBFF"/>
          <path d="M104.685 8.70003V10H103.385V8.70003H102.085V10H100.785V8.70003H99.4848V0.900024H100.785V8.70003H102.085V4.80002H103.385V8.70003H104.685V0.900024H105.985V8.70003H104.685Z" fill="#D7EBFF"/>
        </svg>
      </div>
      
      <!-- Join Button -->
      <button style="border: 1px solid #F97316; background: transparent; color: white; padding: 0.5rem 1rem; border-radius: 0.375rem; font-size: 0.875rem;">
        Join Provable Markets
      </button>
    </div>

    <!-- Main Content -->
    <div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 2rem;">
      <div style="max-width: 1200px; width: 100%; display: flex; justify-content: center;">
        <div style="max-width: 400px; width: 100%;">
          <!-- Main Title -->
          <h1 style="color: white; font-family: serif; font-size: 2.5rem; font-weight: bold; text-align: center; margin-bottom: 3rem;">
            Log in to Provable Markets
          </h1>
          
          <!-- Login Form -->
        <form style="display: flex; flex-direction: column; gap: 1.5rem;">
          <input 
            type="email" 
            placeholder="Email address"
            style="width: 100%; padding: 1rem; background-color: #2C2C2C; color: white; border: none; border-radius: 0.75rem; font-size: 1rem; text-align: center;"
          />
          
          <input 
            type="password" 
            placeholder="Password"
            style="width: 100%; padding: 1rem; background-color: #2C2C2C; color: white; border: none; border-radius: 0.75rem; font-size: 1rem; text-align: center;"
          />
          
          <button 
            type="submit"
            style="width: 100%; padding: 1rem; background-color: #2C2C2C; color: white; border: 1px solid #F97316; border-radius: 0.75rem; font-size: 1rem; font-weight: 500; cursor: pointer; margin-top: 0.5rem;"
          >
            Log in
          </button>
        </form>
        
        <div style="text-align: center; margin-top: 1rem;">
          <a href="#" style="color: #A0A0A0; text-decoration: none; font-size: 0.875rem;">Forgot password?</a>
        </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div style="padding: 2rem; display: flex; justify-content: center;">
      <div style="max-width: 1200px; width: 100%;">
        <p style="color: #A0A0A0; font-size: 0.75rem; margin-bottom: 1rem;">
          © 2025 Provable Markets LLC. All Rights Reserved.
        </p>
        
        <div style="color: #A0A0A0; font-size: 0.625rem; line-height: 1.6; max-width: 800px; text-align: center;">
        <p style="margin-bottom: 1rem;">Securities lending services are provided by Provable Markets LLC ("Provable Markets"), a securities lending platform registered with the Securities and Exchange Commission ("SEC"). By using this website, you accept and agree to Provable Markets' <u>Terms of Use</u> and <u>Privacy Policy</u>. Provable Markets' securities lending services are available only to qualified institutional investors and registered broker-dealers in jurisdictions where Provable Markets is authorized to operate.</p>
        
        <p style="margin-bottom: 1rem;">Nothing on this website should be considered an offer, solicitation of an offer, or advice to engage in securities lending transactions or investment products. Past performance is no guarantee of future results. Any historical returns, expected returns, or probability projections are purely hypothetical in nature and may not reflect actual or potential future performance; nor do they represent actual performance outcomes of a client.</p>
        
        <p style="margin-bottom: 1rem;">Please see Provable Markets' Interactive Performance Tool available at <u>www.provablemarkets.com/historical-performance</u> for important information and disclosures. Strategy holdings and other information provided are for illustrative purposes only and are not to be considered investment recommendations. The content on this website is for informational purposes only and does not constitute a comprehensive description of Provable Markets' securities lending services.</p>
        
        <p style="margin-bottom: 1rem;">Please refer to Provable Markets' Program Brochure for important additional information. Certain securities lending transactions are not suitable for all investors. Before engaging in securities lending, you should consider your investment objectives, risk tolerance, and any fees charged by Provable Markets. The rate of return on securities lending transactions can vary widely over time, especially for long term positions.</p>
        
        <p style="margin-bottom: 1rem;">Investment losses are possible, including the potential loss of all amounts invested, including principal. Securities lending services are provided to Provable Markets clients by Provable Markets LLC and its clearing partners, both registered broker-dealers and members of FINRA/SIPC. For more information, visit our disclosures page. You may check the background of these firms by visiting FINRA's BrokerCheck.</p>
        
        <p style="margin-bottom: 1rem;">Various securities lending products and strategies ("Third Party Strategies") offered by third party fund families and investment companies are made available on the platform. Before engaging in such Third Party Strategies you should consult the specific supplemental information available for each product.</p>
        
        <p style="margin-bottom: 1rem;">Certain Third Party Strategies that are available on Provable Markets' platform involve complex securities lending arrangements. Investments in these strategies are highly speculative and subject to liquidity constraints that are generally available in other types of investments. Actual investment return and principal value is likely to fluctuate and may depreciate in value when redeemed.</p>
        
        <p style="margin-bottom: 1rem;">The securities lending program is made available in coordination with our clearing partners through Provable Markets LLC. Please visit www.provablemarkets.com/legal for applicable terms and conditions and important disclosures.</p>
        
        <p style="margin-bottom: 1rem;"><strong>Securities lending transactions with exposure to volatile securities are only suitable for investors who are willing to bear the risk of loss and experience sharp drawdowns, as they still carry inherent risk associated with market volatility.</strong> You are solely responsible for evaluating the merits and risks associated with the use of any information, materials, content, user content, or third party content provided before making any decisions based on such content.</p>
        
        <p style="margin-bottom: 1rem;">All securities lending transactions carry risk, including the potential loss of principal. Investment growth is not guaranteed. Provable Markets' institutional services are available exclusively to Provable Markets clients, subject to availability and location, and are not guaranteed. Certain services are subject to eligibility. Terms and conditions apply.</p>
        
        <p style="margin-bottom: 1rem;">Risk management services via Provable Markets Risk are offered by our risk management partners. Provable Markets does not provide investment advice, and our risk management partners are not affiliates of Provable Markets. Terms apply, and details are available in our partners' Terms of Use.</p>
        
        <p style="margin-bottom: 1rem;">Any logos or mentions of other companies are for informational purposes only and do not imply affiliation or endorsement of Provable Markets by these companies. Information provided by Provable Markets Support is for informational and general educational purposes only and is not investment or financial advice.</p>
        
        <p style="margin-bottom: 0;">Contact Provable Markets at support@provablemarkets.com. 123 Wall Street, New York, NY 10005.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Partner Login'
})
</script>