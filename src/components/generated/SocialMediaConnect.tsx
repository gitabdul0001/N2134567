import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';
interface SocialPlatform {
  id: string;
  name: string;
  connected: boolean;
  loading: boolean;
  mpid?: string;
}
const SocialMediaConnect: React.FC = () => {
  const [platforms, setPlatforms] = useState<SocialPlatform[]>([{
    id: 'facebook',
    name: 'Facebook',
    connected: false,
    loading: false,
    mpid: "6e925553-0393-4c4e-b50e-74dcc3d01b74"
  }, {
    id: 'instagram',
    name: 'Instagram',
    connected: false,
    loading: false,
    mpid: "a85a88c4-29f8-466f-80b9-db7681ff25e8"
  }, {
    id: 'twitter',
    name: 'Twitter',
    connected: false,
    loading: false,
    mpid: "3ef611cd-dc2a-4b28-b7b1-803f11f3fca2"
  }, {
    id: 'linkedin',
    name: 'LinkedIn',
    connected: false,
    loading: false,
    mpid: "3850a5f5-4f60-4b5a-b4a8-4a4f96688393"
  }, {
    id: 'youtube',
    name: 'YouTube',
    connected: false,
    loading: false,
    mpid: "f67fdaed-5df3-4621-aa1d-e0ed337482e6"
  }, {
    id: 'tiktok',
    name: 'TikTok',
    connected: false,
    loading: false,
    mpid: "ef432f3c-fd20-47fd-a34d-ec56abb7b782"
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
  return <div className="text-center space-y-12" data-magicpath-id="0" data-magicpath-path="SocialMediaConnect.tsx">
      <div className="space-y-6" data-magicpath-id="1" data-magicpath-path="SocialMediaConnect.tsx">
        <h2 className="text-4xl md:text-5xl font-light text-gray-900" data-magicpath-id="2" data-magicpath-path="SocialMediaConnect.tsx">
          Connect Your Accounts
        </h2>
        <p className="text-lg text-gray-500 max-w-md mx-auto font-light" data-magicpath-id="3" data-magicpath-path="SocialMediaConnect.tsx">
          Link your social media accounts to start managing all your content from one place.
        </p>
        {connectedCount > 0 && <p className="text-sm text-gray-600 font-light" data-magicpath-id="4" data-magicpath-path="SocialMediaConnect.tsx">
            {connectedCount} of {platforms.length} connected
          </p>}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto" data-magicpath-id="5" data-magicpath-path="SocialMediaConnect.tsx">
        {platforms.map((platform, index) => <motion.div key={platform.id} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: index * 0.1
      }} className={`relative p-6 rounded-2xl border transition-all duration-300 ${platform.connected ? 'border-gray-300 bg-gray-50' : 'border-gray-200 bg-white hover:border-gray-300'}`} data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="6" data-magicpath-path="SocialMediaConnect.tsx">
            <div className="flex flex-col items-center space-y-4" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="7" data-magicpath-path="SocialMediaConnect.tsx">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="8" data-magicpath-path="SocialMediaConnect.tsx">
                <span className="text-xs font-medium text-gray-600 uppercase tracking-wide" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="9" data-magicpath-path="SocialMediaConnect.tsx">
                  {platform.name.slice(0, 2)}
                </span>
              </div>
              
              <h3 className="font-light text-gray-900 text-sm" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="10" data-magicpath-path="SocialMediaConnect.tsx">
                {platform.name}
              </h3>

              <button onClick={() => handleConnect(platform.id)} disabled={platform.connected || platform.loading} className={`w-full py-2 px-4 rounded-xl text-sm font-light transition-all duration-200 ${platform.connected ? 'bg-gray-100 text-gray-500 cursor-default' : platform.loading ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'bg-gray-900 text-white hover:bg-gray-800'}`} data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="SocialMediaConnect.tsx">
                {platform.loading ? <div className="flex items-center justify-center space-x-2" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="12" data-magicpath-path="SocialMediaConnect.tsx">
                    <Loader2 className="w-3 h-3 animate-spin" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="SocialMediaConnect.tsx" />
                    <span data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="14" data-magicpath-path="SocialMediaConnect.tsx">Connecting</span>
                  </div> : platform.connected ? <div className="flex items-center justify-center space-x-2" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="15" data-magicpath-path="SocialMediaConnect.tsx">
                    <Check className="w-3 h-3" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="16" data-magicpath-path="SocialMediaConnect.tsx" />
                    <span data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="17" data-magicpath-path="SocialMediaConnect.tsx">Connected</span>
                  </div> : 'Connect'}
              </button>
            </div>

            {platform.connected && <motion.div initial={{
          scale: 0
        }} animate={{
          scale: 1
        }} className="absolute -top-1 -right-1 w-4 h-4 bg-gray-900 rounded-full flex items-center justify-center" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="18" data-magicpath-path="SocialMediaConnect.tsx">
                <Check className="w-2 h-2 text-white" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="19" data-magicpath-path="SocialMediaConnect.tsx" />
              </motion.div>}
          </motion.div>)}
      </div>

      <div className="text-xs text-gray-400 max-w-md mx-auto font-light" data-magicpath-id="20" data-magicpath-path="SocialMediaConnect.tsx">
        <p data-magicpath-id="21" data-magicpath-path="SocialMediaConnect.tsx">
          You can connect more accounts later from your dashboard settings.
        </p>
      </div>
    </div>;
};
export default SocialMediaConnect;