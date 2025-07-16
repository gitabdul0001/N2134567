import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
const CompletionScreen: React.FC = () => {
  const achievements = ['Social media accounts connected', 'Post scheduling features explored', 'Analytics capabilities discovered', 'Ready to grow your audience'];
  return <div className="text-center space-y-8" data-magicpath-id="0" data-magicpath-path="CompletionScreen.tsx">
      <motion.div initial={{
      scale: 0
    }} animate={{
      scale: 1
    }} transition={{
      type: "spring",
      stiffness: 200,
      damping: 20,
      delay: 0.2
    }} className="relative" data-magicpath-id="1" data-magicpath-path="CompletionScreen.tsx">
        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-2xl" data-magicpath-id="2" data-magicpath-path="CompletionScreen.tsx">
          <CheckCircle className="w-16 h-16 text-white" data-magicpath-id="3" data-magicpath-path="CompletionScreen.tsx" />
        </div>
        
        <motion.div initial={{
        scale: 0,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} transition={{
        delay: 0.5
      }} className="absolute -top-4 -right-4" data-magicpath-id="4" data-magicpath-path="CompletionScreen.tsx">
          <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg" data-magicpath-id="5" data-magicpath-path="CompletionScreen.tsx">
            <Sparkles className="w-6 h-6 text-yellow-800" />
          </div>
        </motion.div>
      </motion.div>

      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.4
    }} className="space-y-4" data-magicpath-id="6" data-magicpath-path="CompletionScreen.tsx">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="7" data-magicpath-path="CompletionScreen.tsx">
          You're All Set!
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed" data-magicpath-id="8" data-magicpath-path="CompletionScreen.tsx">
          Congratulations! You've successfully completed the Reaxo onboarding. 
          Your social media management journey starts now.
        </p>
      </motion.div>

      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 0.6
    }} className="max-w-md mx-auto" data-magicpath-id="9" data-magicpath-path="CompletionScreen.tsx">
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 border border-gray-100" data-magicpath-id="10" data-magicpath-path="CompletionScreen.tsx">
          <h3 className="text-lg font-semibold text-gray-900 mb-6" data-magicpath-id="11" data-magicpath-path="CompletionScreen.tsx">
            What You've Accomplished
          </h3>
          
          <div className="space-y-4" data-magicpath-id="12" data-magicpath-path="CompletionScreen.tsx">
            {achievements.map((achievement, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.8 + index * 0.1
          }} className="flex items-center space-x-3" data-magicpath-uuid={(achievement as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="CompletionScreen.tsx">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0" data-magicpath-uuid={(achievement as any)["mpid"] ?? "unsafe"} data-magicpath-id="14" data-magicpath-path="CompletionScreen.tsx">
                  <CheckCircle className="w-4 h-4 text-white" data-magicpath-uuid={(achievement as any)["mpid"] ?? "unsafe"} data-magicpath-id="15" data-magicpath-path="CompletionScreen.tsx" />
                </div>
                <span className="text-gray-700 font-medium text-left" data-magicpath-uuid={(achievement as any)["mpid"] ?? "unsafe"} data-magicpath-id="16" data-magicpath-path="CompletionScreen.tsx">
                  {achievement}
                </span>
              </motion.div>)}
          </div>
        </div>
      </motion.div>

      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 1.2
    }} className="space-y-6" data-magicpath-id="17" data-magicpath-path="CompletionScreen.tsx">
        <div className="flex items-center justify-center space-x-2 text-blue-600" data-magicpath-id="18" data-magicpath-path="CompletionScreen.tsx">
          <span className="font-medium" data-magicpath-id="19" data-magicpath-path="CompletionScreen.tsx">Ready to dive in?</span>
          <ArrowRight className="w-5 h-5" data-magicpath-id="20" data-magicpath-path="CompletionScreen.tsx" />
        </div>
        
        <div className="text-sm text-gray-500 max-w-lg mx-auto" data-magicpath-id="21" data-magicpath-path="CompletionScreen.tsx">
          <p data-magicpath-id="22" data-magicpath-path="CompletionScreen.tsx">
            Your dashboard is ready with all the tools you need to create, 
            schedule, and analyze your social media content. Let's start building 
            your online presence!
          </p>
        </div>
      </motion.div>

      <motion.div initial={{
      opacity: 0,
      scale: 0.9
    }} animate={{
      opacity: 1,
      scale: 1
    }} transition={{
      delay: 1.4
    }} className="pt-4" data-magicpath-id="23" data-magicpath-path="CompletionScreen.tsx">
        <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-medium shadow-lg" data-magicpath-id="24" data-magicpath-path="CompletionScreen.tsx">
          <Sparkles className="w-5 h-5" />
          <span data-magicpath-id="25" data-magicpath-path="CompletionScreen.tsx">Welcome to Reaxo</span>
        </div>
      </motion.div>
    </div>;
};
export default CompletionScreen;