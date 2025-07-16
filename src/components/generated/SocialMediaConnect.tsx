"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';

// Custom SVG icons for social media platforms
const FacebookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" data-magicpath-id="0" data-magicpath-path="SocialMediaConnect.tsx">
    <path fill="#3b82f6" d="M40.121,44H15.879C13.737,44,12,42.263,12,40.121V15.879C12,13.737,13.737,12,15.879,12h24.242C42.263,12,44,13.737,44,15.879v24.242C44,42.263,42.263,44,40.121,44z" data-magicpath-id="1" data-magicpath-path="SocialMediaConnect.tsx" />
    <path fill="#ffffff" d="M20,29h4v12.235c0.979,0.16,1.976,0.265,3,0.265s2.021-0.105,3-0.265V29h3.625c0.504,0,0.93-0.376,0.992-0.876l0.375-3c0.036-0.284-0.053-0.57-0.243-0.786C34.56,24.123,34.287,24,34,24h-4v-3.5c0-1.103,0.897-2,2-2h2c0.552,0,1-0.447,1-1v-3.375c0-0.518-0.396-0.95-0.911-0.996C34.03,13.124,32.62,13,30.834,13C26.427,13,24,15.617,24,20.368V24h-4c-0.552,0-1,0.447-1,1v3C19,28.553,19.448,29,20,29z" data-magicpath-id="2" data-magicpath-path="SocialMediaConnect.tsx" />
  </svg>;
const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" data-magicpath-id="3" data-magicpath-path="SocialMediaConnect.tsx">
    <radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse" data-magicpath-id="4" data-magicpath-path="SocialMediaConnect.tsx">
      <stop offset="0" stopColor="#fd5" />
      <stop offset=".328" stopColor="#ff543f" />
      <stop offset=".348" stopColor="#fc5245" />
      <stop offset=".504" stopColor="#e64771" />
      <stop offset=".643" stopColor="#d53e91" />
      <stop offset=".761" stopColor="#cc39a4" />
      <stop offset=".841" stopColor="#c837ab" />
    </radialGradient>
    <path fill="url(#yOrnnhliCrdS2gy~4tD8ma)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20C42.014,38.383,38.417,41.986,34.017,41.99z" data-magicpath-id="5" data-magicpath-path="SocialMediaConnect.tsx" />
    <radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse" data-magicpath-id="6" data-magicpath-path="SocialMediaConnect.tsx">
      <stop offset="0" stopColor="#4168c9" />
      <stop offset=".999" stopColor="#4168c9" stopOpacity="0" />
    </radialGradient>
    <path fill="url(#yOrnnhliCrdS2gy~4tD8mb)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20C42.014,38.383,38.417,41.986,34.017,41.99z" data-magicpath-id="7" data-magicpath-path="SocialMediaConnect.tsx" />
    <path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z" data-magicpath-id="8" data-magicpath-path="SocialMediaConnect.tsx" />
    <circle cx="31.5" cy="16.5" r="1.5" fill="#fff" data-magicpath-id="9" data-magicpath-path="SocialMediaConnect.tsx" />
    <path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z" data-magicpath-id="10" data-magicpath-path="SocialMediaConnect.tsx" />
  </svg>;
const XIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" data-magicpath-id="11" data-magicpath-path="SocialMediaConnect.tsx">
    <path fill="#212121" d="M40.121,44H15.879C13.737,44,12,42.263,12,40.121V15.879C12,13.737,13.737,12,15.879,12h24.242C42.263,12,44,13.737,44,15.879v24.242C44,42.263,42.263,44,40.121,44z" data-magicpath-id="12" data-magicpath-path="SocialMediaConnect.tsx" />
    <path fill="#ffffff" d="M34.257,34H27.82L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z" data-magicpath-id="13" data-magicpath-path="SocialMediaConnect.tsx" />
    <polygon fill="#ffffff" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34" data-magicpath-id="14" data-magicpath-path="SocialMediaConnect.tsx" />
    <polygon fill="#ffffff" points="24.45,21.721 25.355,23.01 33.136,14 31.136,14" data-magicpath-id="15" data-magicpath-path="SocialMediaConnect.tsx" />
  </svg>;
const LinkedInIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" data-magicpath-id="16" data-magicpath-path="SocialMediaConnect.tsx">
    <path fill="#0078d4" d="M40,44H15c-2.2,0-4-1.8-4-4V15c0-2.2,1.8-4,4-4h25c2.2,0,4,1.8,4,4v25C44,42.2,42.2,44,40,44z" data-magicpath-id="17" data-magicpath-path="SocialMediaConnect.tsx" />
    <circle cx="15.5" cy="15.5" r="2.5" fill="#ffffff" data-magicpath-id="18" data-magicpath-path="SocialMediaConnect.tsx" />
    <path fill="#ffffff" d="M17,35h-3c-0.6,0-1-0.4-1-1V21c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v13C18,34.6,17.6,35,17,35z" data-magicpath-id="19" data-magicpath-path="SocialMediaConnect.tsx" />
    <path fill="#ffffff" d="M29,20c-1.5,0-2.9,0.6-4,1.5V21c0-0.6-0.4-1-1-1h-3c-0.6,0-1,0.4-1,1v13c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1v-7.5c0-1.4,1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5V34c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1v-8C35,22.7,32.3,20,29,20z" data-magicpath-id="20" data-magicpath-path="SocialMediaConnect.tsx" />
  </svg>;
const YouTubeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" data-magicpath-id="21" data-magicpath-path="SocialMediaConnect.tsx">
    <path fill="#ff3d00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z" data-magicpath-id="22" data-magicpath-path="SocialMediaConnect.tsx" />
    <path fill="#fff" d="M20 31V17l11 7L20 31z" data-magicpath-id="23" data-magicpath-path="SocialMediaConnect.tsx" />
  </svg>;
const TikTokIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" data-magicpath-id="24" data-magicpath-path="SocialMediaConnect.tsx">
    <path fill="#212121" d="M40.121,44H15.879C13.737,44,12,42.263,12,40.121V15.879C12,13.737,13.737,12,15.879,12h24.242C42.263,12,44,13.737,44,15.879v24.242C44,42.263,42.263,44,40.121,44z" data-magicpath-id="25" data-magicpath-path="SocialMediaConnect.tsx" />
    <path fill="#ff0050" d="M21,22.5c-3.038,0-5.5,2.462-5.5,5.5s2.462,5.5,5.5,5.5s5.5-2.462,5.5-5.5V14.5l0,0c0,3.314,2.686,6,6,6" data-magicpath-id="26" data-magicpath-path="SocialMediaConnect.tsx" />
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
    mpid: "094899f0-e3ce-4a2d-b431-bbeb5f3d32ec"
  }, {
    id: 'instagram',
    name: 'Instagram',
    connected: false,
    loading: false,
    icon: InstagramIcon,
    mpid: "1ece8b6e-b731-4e88-88c0-b0cbe85593d4"
  }, {
    id: 'twitter',
    name: 'X',
    connected: false,
    loading: false,
    icon: XIcon,
    mpid: "1e5b4cda-72a5-467f-bbf8-2570071ce6f4"
  }, {
    id: 'linkedin',
    name: 'LinkedIn',
    connected: false,
    loading: false,
    icon: LinkedInIcon,
    mpid: "41eb6ed9-38e0-4e0a-a7bc-a6bed7a037d6"
  }, {
    id: 'youtube',
    name: 'YouTube',
    connected: false,
    loading: false,
    icon: YouTubeIcon,
    mpid: "1d5cbcd8-97e6-4664-8dee-9f29944b0553"
  }, {
    id: 'tiktok',
    name: 'TikTok',
    connected: false,
    loading: false,
    icon: TikTokIcon,
    mpid: "7819439c-4933-4cd5-a498-ed2be7716ba7"
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
  return <div className="text-center space-y-8 md:space-y-12" data-magicpath-id="27" data-magicpath-path="SocialMediaConnect.tsx">
      <div className="space-y-4 md:space-y-6" data-magicpath-id="28" data-magicpath-path="SocialMediaConnect.tsx">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 px-4" data-magicpath-id="29" data-magicpath-path="SocialMediaConnect.tsx">
          Connect Your Accounts
        </h2>
        <p className="text-base md:text-lg text-gray-500 max-w-md mx-auto font-light px-4" data-magicpath-id="30" data-magicpath-path="SocialMediaConnect.tsx">
          Link your social media accounts to start managing all your content from one place.
        </p>
        {connectedCount > 0 && <p className="text-sm text-gray-600 font-light" data-magicpath-id="31" data-magicpath-path="SocialMediaConnect.tsx">
            {connectedCount} of {platforms.length} connected
          </p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-2xl mx-auto px-4" data-magicpath-id="32" data-magicpath-path="SocialMediaConnect.tsx">
        {platforms.map((platform, index) => <motion.div key={platform.id} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: index * 0.1
      }} className={`relative p-4 md:p-6 rounded-2xl border transition-all duration-300 ${platform.connected ? 'border-gray-300 bg-gray-50' : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'}`} data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="33" data-magicpath-path="SocialMediaConnect.tsx">
            <div className="flex flex-col items-center space-y-3 md:space-y-4" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="34" data-magicpath-path="SocialMediaConnect.tsx">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gray-100 flex items-center justify-center" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="35" data-magicpath-path="SocialMediaConnect.tsx">
                <platform.icon data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="36" data-magicpath-path="SocialMediaConnect.tsx" />
              </div>
              
              <h3 className="font-light text-gray-900 text-sm" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="37" data-magicpath-path="SocialMediaConnect.tsx">
                {platform.name}
              </h3>

              <button onClick={() => handleConnect(platform.id)} disabled={platform.connected || platform.loading} className={`w-full py-2 px-3 md:px-4 rounded-xl text-xs md:text-sm font-light transition-all duration-200 ${platform.connected ? 'bg-gray-100 text-gray-500 cursor-default' : platform.loading ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'bg-gray-900 text-white hover:bg-gray-800 shadow-sm hover:shadow-md'}`} data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="38" data-magicpath-path="SocialMediaConnect.tsx">
                {platform.loading ? <div className="flex items-center justify-center space-x-2" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="39" data-magicpath-path="SocialMediaConnect.tsx">
                    <Loader2 className="w-3 h-3 animate-spin" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="40" data-magicpath-path="SocialMediaConnect.tsx" />
                    <span data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="41" data-magicpath-path="SocialMediaConnect.tsx">Connecting</span>
                  </div> : platform.connected ? <div className="flex items-center justify-center space-x-2" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="42" data-magicpath-path="SocialMediaConnect.tsx">
                    <Check className="w-3 h-3" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="43" data-magicpath-path="SocialMediaConnect.tsx" />
                    <span data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="44" data-magicpath-path="SocialMediaConnect.tsx">Connected</span>
                  </div> : 'Connect'}
              </button>
            </div>

            {platform.connected && <motion.div initial={{
          scale: 0
        }} animate={{
          scale: 1
        }} className="absolute -top-1 -right-1 w-4 h-4 bg-gray-900 rounded-full flex items-center justify-center" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="45" data-magicpath-path="SocialMediaConnect.tsx">
                <Check className="w-2 h-2 text-white" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="46" data-magicpath-path="SocialMediaConnect.tsx" />
              </motion.div>}
          </motion.div>)}
      </div>

      <div className="text-xs text-gray-400 max-w-md mx-auto font-light px-4" data-magicpath-id="47" data-magicpath-path="SocialMediaConnect.tsx">
        <p data-magicpath-id="48" data-magicpath-path="SocialMediaConnect.tsx">
          You can connect more accounts later from your dashboard settings.
        </p>
      </div>
    </div>;
};
export default SocialMediaConnect;