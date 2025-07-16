import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';
interface SocialPlatform {
  id: string;
  name: string;
  icon: string;
  color: string;
  connected: boolean;
  loading: boolean;
  mpid?: string;
}
const SocialMediaConnect: React.FC = () => {
  const [platforms, setPlatforms] = useState<SocialPlatform[]>([{
    id: 'facebook',
    name: 'Facebook',
    icon: '📘',
    color: 'bg-blue-600',
    connected: false,
    loading: false,
    mpid: "65986633-f91a-4929-89ce-6a7b218f1c7b"
  }, {
    id: 'instagram',
    name: 'Instagram',
    icon: '📷',
    color: 'bg-pink-600',
    connected: false,
    loading: false,
    mpid: "510a06f9-63cc-4a86-ba6c-768a77e91836"
  }, {
    id: 'twitter',
    name: 'Twitter',
    icon: '🐦',
    color: 'bg-sky-500',
    connected: false,
    loading: false,
    mpid: "2b7ec948-1914-4d11-9662-1e70fa7460d6"
  }, {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: '💼',
    color: 'bg-blue-700',
    connected: false,
    loading: false,
    mpid: "f85f6423-8d55-4175-895b-f054b41f311d"
  }, {
    id: 'youtube',
    name: 'YouTube',
    icon: '📺',
    color: 'bg-red-600',
    connected: false,
    loading: false,
    mpid: "5fbf60a0-1da6-4397-b1fe-1c1f0d433f57"
  }, {
    id: 'tiktok',
    name: 'TikTok',
    icon: '🎵',
    color: 'bg-black',
    connected: false,
    loading: false,
    mpid: "5271abac-9c80-4ef7-af26-4986cad34613"
  }]);
  const handleConnect = async (platformId: string) => {
    setPlatforms(prev => prev.map(p => p.id === platformId ? {
      ...p,
      loading: true
    } : p));

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setPlatforms(prev => prev.map(p => p.id === platformId ? {
      ...p,
      loading: false,
      connected: true
    } : p));
  };
  const connectedCount = platforms.filter(p => p.connected).length;
  return <div className="text-center space-y-8" data-magicpath-id="0" data-magicpath-path="SocialMediaConnect.tsx">
      <div className="space-y-4" data-magicpath-id="1" data-magicpath-path="SocialMediaConnect.tsx">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900" data-magicpath-id="2" data-magicpath-path="SocialMediaConnect.tsx">
          Connect Your Social Accounts
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto" data-magicpath-id="3" data-magicpath-path="SocialMediaConnect.tsx">
          Link your social media accounts to start managing all your content from one place.
        </p>
        {connectedCount > 0 && <p className="text-sm text-green-600 font-medium" data-magicpath-id="4" data-magicpath-path="SocialMediaConnect.tsx">
            {connectedCount} of {platforms.length} accounts connected
          </p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto" data-magicpath-id="5" data-magicpath-path="SocialMediaConnect.tsx">
        {platforms.map((platform, index) => <motion.div key={platform.id} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: index * 0.1
      }} className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${platform.connected ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'}`} data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="6" data-magicpath-path="SocialMediaConnect.tsx">
            <div className="flex flex-col items-center space-y-4" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="7" data-magicpath-path="SocialMediaConnect.tsx">
              <div className={`w-16 h-16 rounded-2xl ${platform.color} flex items-center justify-center text-2xl shadow-lg`} data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-field="icon:unknown" data-magicpath-id="8" data-magicpath-path="SocialMediaConnect.tsx">
                {platform.icon}
              </div>
              
              <div className="text-center" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="9" data-magicpath-path="SocialMediaConnect.tsx">
                <h3 className="font-semibold text-gray-900 text-lg" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="10" data-magicpath-path="SocialMediaConnect.tsx">
                  {platform.name}
                </h3>
              </div>

              <button onClick={() => handleConnect(platform.id)} disabled={platform.connected || platform.loading} className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-200 ${platform.connected ? 'bg-green-100 text-green-700 cursor-default' : platform.loading ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'bg-gray-900 text-white hover:bg-gray-800 shadow-md hover:shadow-lg'}`} data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="SocialMediaConnect.tsx">
                {platform.loading ? <div className="flex items-center justify-center space-x-2" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="12" data-magicpath-path="SocialMediaConnect.tsx">
                    <Loader2 className="w-4 h-4 animate-spin" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="SocialMediaConnect.tsx" />
                    <span data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="14" data-magicpath-path="SocialMediaConnect.tsx">Connecting...</span>
                  </div> : platform.connected ? <div className="flex items-center justify-center space-x-2" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="15" data-magicpath-path="SocialMediaConnect.tsx">
                    <Check className="w-4 h-4" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="16" data-magicpath-path="SocialMediaConnect.tsx" />
                    <span data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="17" data-magicpath-path="SocialMediaConnect.tsx">Connected</span>
                  </div> : 'Connect'}
              </button>
            </div>

            {platform.connected && <motion.div initial={{
          scale: 0
        }} animate={{
          scale: 1
        }} className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="18" data-magicpath-path="SocialMediaConnect.tsx">
                <Check className="w-4 h-4 text-white" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="19" data-magicpath-path="SocialMediaConnect.tsx" />
              </motion.div>}
          </motion.div>)}
      </div>

      <div className="text-sm text-gray-500 max-w-md mx-auto" data-magicpath-id="20" data-magicpath-path="SocialMediaConnect.tsx">
        <p data-magicpath-id="21" data-magicpath-path="SocialMediaConnect.tsx">
          You can connect more accounts later from your dashboard settings.
        </p>
      </div>
    </div>;
};
export default SocialMediaConnect;