"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';

// Custom SVG icons for social media platforms
const FacebookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" data-magicpath-id="0" data-magicpath-path="SocialMediaConnect.tsx">
    <path fill="#90caf9" d="M40.121,44H15.879C13.737,44,12,42.263,12,40.121V15.879C12,13.737,13.737,12,15.879,12h24.242  C42.263,12,44,13.737,44,15.879v24.242C44,42.263,42.263,44,40.121,44z" data-magicpath-id="1" data-magicpath-path="SocialMediaConnect.tsx"></path>
    <path fill="#18193f" d="M20,29h4v12.235c0.979,0.16,1.976,0.265,3,0.265s2.021-0.105,3-0.265V29h3.625  c0.504,0,0.93-0.376,0.992-0.876l0.375-3c0.036-0.284-0.053-0.57-0.243-0.786C34.56,24.123,34.287,24,34,24h-4v-3.5  c0-1.103,0.897-2,2-2h2c0.552,0,1-0.447,1-1v-3.375c0-0.518-0.396-0.95-0.911-0.996C34.03,13.124,32.62,13,30.834,13  C26.427,13,24,15.617,24,20.368V24h-4c-0.552,0-1,0.447-1,1v3C19,28.553,19.448,29,20,29z" data-magicpath-id="2" data-magicpath-path="SocialMediaConnect.tsx"></path>
    <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M40.5,31.596V36.5  c0,2.209-1.791,4-4,4h-25c-2.209,0-4-1.791-4-4V20.83" data-magicpath-id="3" data-magicpath-path="SocialMediaConnect.tsx"></path>
    <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7.5,14.064V11.5  c0-2.209,1.791-4,4-4h25c2.209,0,4,1.791,4,4v14.479" data-magicpath-id="4" data-magicpath-path="SocialMediaConnect.tsx"></path>
  </svg>;
const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" data-magicpath-id="5" data-magicpath-path="SocialMediaConnect.tsx">
    <path fill="#f48fb1" d="M21,46h15c5.5,0,10-4.5,10-10V21c0-5.5-4.5-10-10-10H21c-5.5,0-10,4.5-10,10v15C11,41.5,15.5,46,21,46z" data-magicpath-id="6" data-magicpath-path="SocialMediaConnect.tsx"></path>
    <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M41.5,21.1v-4.6c0-5.5-4.5-10-10-10h-15c-5.5,0-10,4.5-10,10v3" data-magicpath-id="7" data-magicpath-path="SocialMediaConnect.tsx"></path>
    <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M6.5,25.6v5.9c0,5.5,4.5,10,10,10h15c5.5,0,10-4.5,10-10v-4.6" data-magicpath-id="8" data-magicpath-path="SocialMediaConnect.tsx"></path>
    <path fill="none" stroke="#18193f" strokeMiterlimit="10" strokeWidth="3" d="M24,15.5c-4.7,0-8.5,3.8-8.5,8.5s3.8,8.5,8.5,8.5s8.5-3.8,8.5-8.5S28.7,15.5,24,15.5z" data-magicpath-id="9" data-magicpath-path="SocialMediaConnect.tsx"></path>
    <path fill="#18193f" d="M34,12c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S35.1,12,34,12z" data-magicpath-id="10" data-magicpath-path="SocialMediaConnect.tsx"></path>
  </svg>;
const XIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" data-magicpath-id="11" data-magicpath-path="SocialMediaConnect.tsx">
    <path fill="#9fa8da" d="M40.121,44H15.879C13.737,44,12,42.263,12,40.121V15.879C12,13.737,13.737,12,15.879,12h24.242  C42.263,12,44,13.737,44,15.879v24.242C44,42.263,42.263,44,40.121,44z" data-magicpath-id="12" data-magicpath-path="SocialMediaConnect.tsx"></path>
    <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M40.5,34.128V36.5  c0,2.209-1.791,4-4,4h-25c-2.209,0-4-1.791-4-4V17.404" data-magicpath-id="13" data-magicpath-path="SocialMediaConnect.tsx"></path>
    <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7.5,11.5  c0-2.209,1.791-4,4-4h25c2.209,0,4,1.791,4,4v14.777" data-magicpath-id="14" data-magicpath-path="SocialMediaConnect.tsx"></path>
    <path fill="#18193f" d="M34.257,34H27.82L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z" data-magicpath-id="15" data-magicpath-path="SocialMediaConnect.tsx"></path>
    <polygon fill="#18193f" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34" data-magicpath-id="16" data-magicpath-path="SocialMediaConnect.tsx"></polygon>
    <polygon fill="#18193f" points="24.45,21.721 25.355,23.10 33.136,14 31.136,14" data-magicpath-id="17" data-magicpath-path="SocialMediaConnect.tsx"></polygon>
  </svg>;
const LinkedInIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" data-magicpath-id="18" data-magicpath-path="SocialMediaConnect.tsx">
    <path fill="#8ce7f2" d="M40,44H15c-2.2,0-4-1.8-4-4V15c0-2.2,1.8-4,4-4h25c2.2,0,4,1.8,4,4v25C44,42.2,42.2,44,40,44z" data-magicpath-id="19" data-magicpath-path="SocialMediaConnect.tsx"></path>
    <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M40.5,31.7v4.8c0,2.2-1.8,4-4,4h-25c-2.2,0-4-1.8-4-4V24.9" data-magicpath-id="20" data-magicpath-path="SocialMediaConnect.tsx"></path>
    <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M7.5,19.2v-7.7c0-2.2,1.8-4,4-4h25c2.2,0,4,1.8,4,4v14" data-magicpath-id="21" data-magicpath-path="SocialMediaConnect.tsx"></path>
    <circle cx="15.5" cy="15.5" r="2.5" fill="#18193f" data-magicpath-id="22" data-magicpath-path="SocialMediaConnect.tsx"></circle>
    <path fill="#18193f" d="M17,35h-3c-0.6,0-1-0.4-1-1V21c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v13C18,34.6,17.6,35,17,35z" data-magicpath-id="23" data-magicpath-path="SocialMediaConnect.tsx"></path>
    <path fill="#18193f" d="M29,20c-1.5,0-2.9,0.6-4,1.5V21c0-0.6-0.4-1-1-1h-3c-0.6,0-1,0.4-1,1v13c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1  v-7.5c0-1.4,1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5V34c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1v-8C35,22.7,32.3,20,29,20z" data-magicpath-id="24" data-magicpath-path="SocialMediaConnect.tsx"></path>
  </svg>;
const YouTubeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" data-magicpath-id="25" data-magicpath-path="SocialMediaConnect.tsx">
    <path fill="#ffab91" d="M27.86,14c-6.144,0-11.916,0.469-14.989,1.125c-2.048,0.469-3.817,1.875-4.19,4.031  c-0.371,2.25-0.744,5.125-0.744,9.344s0.373,7,0.838,9.344c0.373,2.063,2.141,3.563,4.19,4.031C16.223,42.531,21.809,43,27.953,43  s11.73-0.469,14.989-1.125c2.048-0.469,3.817-1.875,4.19-4.031c0.373-2.344,0.838-5.219,0.931-9.438  c0-4.219-0.466-7.094-0.931-9.438c-0.373-2.063-2.141-3.563-4.19-4.031C39.684,14.469,34.005,14,27.86,14L27.86,14z" data-magicpath-id="26" data-magicpath-path="SocialMediaConnect.tsx"></path>
    <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M28.79,10.093  C27.206,10.034,25.549,10,23.857,10l0,0c-6.278,0-12.176,0.469-15.316,1.125C6.448,11.594,4.641,13,4.26,15.156  C3.881,17.406,3.5,20.281,3.5,24.5s0.381,7,0.856,9.344c0.381,2.063,2.188,3.563,4.281,4.031c1.085,0.214,2.423,0.408,3.951,0.572" data-magicpath-id="27" data-magicpath-path="SocialMediaConnect.tsx"></path>
    <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M18.5,38.881  C20.233,38.958,22.067,39,23.952,39c6.278,0,11.986-0.469,15.316-1.125c2.093-0.469,3.9-1.875,4.281-4.031  c0.381-2.344,0.856-5.219,0.951-9.438c0-4.219-0.476-7.094-0.951-9.438c-0.381-2.063-2.188-3.563-4.281-4.031  c-0.888-0.125-1.952-0.25-3.154-0.366" data-magicpath-id="28" data-magicpath-path="SocialMediaConnect.tsx"></path>
    <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M18.5,24v4.514  c0,1.522,1.663,2.476,3,1.721l7.99-4.514c1.347-0.761,1.347-2.682,0-3.443l-7.99-4.514c-1.337-0.755-3,0.199-3,1.721" data-magicpath-id="29" data-magicpath-path="SocialMediaConnect.tsx"></path>
  </svg>;
const TikTokIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" data-magicpath-id="30" data-magicpath-path="SocialMediaConnect.tsx">
    <path fill="#9fa8da" d="M40.121,44H15.879C13.737,44,12,42.263,12,40.121V15.879C12,13.737,13.737,12,15.879,12h24.242  C42.263,12,44,13.737,44,15.879v24.242C44,42.263,42.263,44,40.121,44z" data-magicpath-id="31" data-magicpath-path="SocialMediaConnect.tsx"></path>
    <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M40.5,34.128V36.5  c0,2.209-1.791,4-4,4h-25c-2.209,0-4-1.791-4-4V17.404" data-magicpath-id="32" data-magicpath-path="SocialMediaConnect.tsx"></path>
    <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7.5,11.5  c0-2.209,1.791-4,4-4h25c2.209,0,4,1.791,4,4v14.777" data-magicpath-id="33" data-magicpath-path="SocialMediaConnect.tsx"></path>
    <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21,22.5  c-3.038,0-5.5,2.462-5.5,5.5s2.462,5.5,5.5,5.5s5.5-2.462,5.5-5.5V14.5l0,0c0,3.314,2.686,6,6,6" data-magicpath-id="34" data-magicpath-path="SocialMediaConnect.tsx"></path>
  </svg>;
interface SocialPlatform {
  id: string;
  name: string;
  connected: boolean;
  loading: boolean;
  icon: React.ComponentType;
  mpid?: string;
}
const SocialMediaConnect: React.FC = () => {
  const [platforms, setPlatforms] = useState<SocialPlatform[]>([{
    id: 'facebook',
    name: 'Facebook',
    connected: false,
    loading: false,
    icon: FacebookIcon,
    mpid: "2159e852-a935-4cae-a431-a7687fcb6ce2"
  }, {
    id: 'instagram',
    name: 'Instagram',
    connected: false,
    loading: false,
    icon: InstagramIcon,
    mpid: "9484f75f-d45a-4fd6-9d7d-036aafd5066d"
  }, {
    id: 'twitter',
    name: 'X',
    connected: false,
    loading: false,
    icon: XIcon,
    mpid: "50dcd9d1-efd5-42e6-879f-25ed8813b76c"
  }, {
    id: 'linkedin',
    name: 'LinkedIn',
    connected: false,
    loading: false,
    icon: LinkedInIcon,
    mpid: "01fbd2e2-5438-4ac5-8b99-61fc02145b7e"
  }, {
    id: 'youtube',
    name: 'YouTube',
    connected: false,
    loading: false,
    icon: YouTubeIcon,
    mpid: "fcb09165-134e-4f1c-a95a-122b9ff52946"
  }, {
    id: 'tiktok',
    name: 'TikTok',
    connected: false,
    loading: false,
    icon: TikTokIcon,
    mpid: "94032ce7-3f02-4f38-8ce2-036f38d568cd"
  }]);
  const handleConnect = async (platformId: string) => {
    setPlatforms(prev => prev.map(p => p.id === platformId ? {
      ...p,
      loading: true
    } : p));

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setPlatforms(prev => prev.map(p => p.id === platformId ? {
      ...p,
      loading: false,
      connected: true
    } : p));
  };
  const connectedCount = platforms.filter(p => p.connected).length;
  return <div className="text-center space-y-8 md:space-y-12" data-magicpath-id="35" data-magicpath-path="SocialMediaConnect.tsx">
      <div className="space-y-4 md:space-y-6" data-magicpath-id="36" data-magicpath-path="SocialMediaConnect.tsx">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 px-4" data-magicpath-id="37" data-magicpath-path="SocialMediaConnect.tsx">
          Connect Your Accounts
        </h2>
        <p className="text-base md:text-lg text-gray-500 max-w-md mx-auto font-light px-4" data-magicpath-id="38" data-magicpath-path="SocialMediaConnect.tsx">
          Link your social media accounts to start managing all your content from one place.
        </p>
        {connectedCount > 0 && <p className="text-sm text-gray-600 font-light" data-magicpath-id="39" data-magicpath-path="SocialMediaConnect.tsx">
            {connectedCount} of {platforms.length} connected
          </p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-2xl mx-auto px-4" data-magicpath-id="40" data-magicpath-path="SocialMediaConnect.tsx">
        {platforms.map((platform, index) => <motion.div key={platform.id} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: index * 0.1
      }} className={`relative p-4 md:p-6 rounded-2xl border transition-all duration-300 ${platform.connected ? 'border-gray-300 bg-gray-50' : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'}`} data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="41" data-magicpath-path="SocialMediaConnect.tsx">
            <div className="flex flex-col items-center space-y-3 md:space-y-4" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="42" data-magicpath-path="SocialMediaConnect.tsx">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gray-100 flex items-center justify-center" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="43" data-magicpath-path="SocialMediaConnect.tsx">
                <platform.icon data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="44" data-magicpath-path="SocialMediaConnect.tsx" />
              </div>
              
              <h3 className="font-light text-gray-900 text-sm" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="45" data-magicpath-path="SocialMediaConnect.tsx">
                {platform.name}
              </h3>

              <button onClick={() => handleConnect(platform.id)} disabled={platform.connected || platform.loading} className={`w-full py-2 px-3 md:px-4 rounded-xl text-xs md:text-sm font-light transition-all duration-200 ${platform.connected ? 'bg-gray-100 text-gray-500 cursor-default' : platform.loading ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'bg-gray-900 text-white hover:bg-gray-800 shadow-sm hover:shadow-md'}`} data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="46" data-magicpath-path="SocialMediaConnect.tsx">
                {platform.loading ? <div className="flex items-center justify-center space-x-2" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="47" data-magicpath-path="SocialMediaConnect.tsx">
                    <Loader2 className="w-3 h-3 animate-spin" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="48" data-magicpath-path="SocialMediaConnect.tsx" />
                    <span data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="49" data-magicpath-path="SocialMediaConnect.tsx">Connecting</span>
                  </div> : platform.connected ? <div className="flex items-center justify-center space-x-2" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="50" data-magicpath-path="SocialMediaConnect.tsx">
                    <Check className="w-3 h-3" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="51" data-magicpath-path="SocialMediaConnect.tsx" />
                    <span data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="52" data-magicpath-path="SocialMediaConnect.tsx">Connected</span>
                  </div> : 'Connect'}
              </button>
            </div>

            {platform.connected && <motion.div initial={{
          scale: 0
        }} animate={{
          scale: 1
        }} className="absolute -top-1 -right-1 w-4 h-4 bg-gray-900 rounded-full flex items-center justify-center" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="53" data-magicpath-path="SocialMediaConnect.tsx">
                <Check className="w-2 h-2 text-white" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="54" data-magicpath-path="SocialMediaConnect.tsx" />
              </motion.div>}
          </motion.div>)}
      </div>

      <div className="text-xs text-gray-400 max-w-md mx-auto font-light px-4" data-magicpath-id="55" data-magicpath-path="SocialMediaConnect.tsx">
        <p data-magicpath-id="56" data-magicpath-path="SocialMediaConnect.tsx">
          You can connect more accounts later from your dashboard settings.
        </p>
      </div>
    </div>;
};
export default SocialMediaConnect;