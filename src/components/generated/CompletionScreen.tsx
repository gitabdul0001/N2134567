"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
const CompletionScreen: React.FC = () => {
  const achievements = ['Social media accounts connected', 'Post scheduling features explored', 'Analytics capabilities discovered', 'Ready to grow your audience'];
  useEffect(() => {
    // Add confetti styles
    const style = document.createElement('style');
    style.textContent = `
      #emitter {
        visibility: hidden;
        background-color: #222;
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        top: 40%;
        left: 0%;
      }
      .dot-container {
        position: absolute;
        left: 0;
        top: 0;
        overflow: visible;
        z-index: 5000;
        pointer-events: none;
      }
      .dot {
        position: absolute;
        pointer-events: none;
      }
    `;
    document.head.appendChild(style);

    // Add confetti explosion functionality
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    document.head.appendChild(script);
    script.onload = () => {
      const gsapScript = document.createElement('script');
      gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/Physics2DPlugin.min.js';
      document.head.appendChild(gsapScript);
      gsapScript.onload = () => {
        const roughScript = document.createElement('script');
        roughScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/RoughEase.min.js';
        document.head.appendChild(roughScript);
        roughScript.onload = () => {
          // Initialize confetti after all scripts are loaded
          setTimeout(() => {
            initializeConfetti();
          }, 1000);
        };
      };
    };
    return () => {
      // Cleanup
      const emitter = document.querySelector('#emitter');
      const containers = document.querySelectorAll('.dot-container');
      if (emitter) emitter.remove();
      containers.forEach(container => container.remove());
      if (style.parentNode) style.parentNode.removeChild(style);
    };
  }, []);
  const initializeConfetti = () => {
    if (typeof window === 'undefined' || !(window as any).gsap) return;
    const {
      gsap,
      TimelineLite,
      TweenLite,
      Linear,
      RoughEase,
      Physics2DPlugin
    } = window as any;
    if (!gsap || !TimelineLite || !TweenLite || !Physics2DPlugin || !RoughEase) return;
    gsap.registerPlugin(Physics2DPlugin);
    var emitterSize = 20,
      dotQuantity = 40,
      dotSizeMin = 6,
      dotSizeMax = 8,
      speed = 2.4,
      gravity = 0.7,
      explosionQuantity = 5,
      emitter = document.querySelector('#emitter'),
      explosions: any[] = [],
      currentExplosion = 0,
      container: any,
      i: number,
      move: any;
    function createExplosion(container: any) {
      var tl = new TimelineLite({
          paused: true
        }),
        dots: any[] = [],
        angle: number,
        duration: number,
        length: number,
        dot: any,
        i: number,
        size: number,
        r: number,
        g: number,
        b: number;
      for (i = 0; i < dotQuantity; i++) {
        dot = document.createElement('div');
        dots.push(dot);
        dot.className = 'dot';
        r = getRandom(30, 255);
        g = getRandom(30, 230);
        b = getRandom(30, 230);
        TweenLite.set(dot, {
          backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')',
          visibility: 'hidden'
        });
        size = getRandom(dotSizeMin, dotSizeMax);
        container.appendChild(dot);
        angle = getRandom(0.65, 0.85) * Math.PI * 2;
        length = Math.random() * (emitterSize / 2 - size / 2);
        duration = 3 + Math.random();
        TweenLite.set(dot, {
          x: Math.cos(angle) * length,
          y: Math.sin(angle) * length,
          width: size,
          height: size,
          xPercent: -50,
          yPercent: -50,
          visibility: 'hidden',
          force3D: true
        });
        tl.to(dot, duration / 2, {
          opacity: 0,
          ease: RoughEase.ease.config({
            points: 20,
            strength: 1.75,
            clamp: true
          })
        }, 0).to(dot, duration, {
          visibility: 'visible',
          rotationX: '-=' + getRandom(720, 1440),
          rotationZ: '+=' + getRandom(720, 1440),
          physics2D: {
            angle: angle * 180 / Math.PI,
            velocity: (100 + Math.random() * 250) * speed,
            gravity: 700 * gravity,
            friction: getRandom(0.1, 0.15)
          }
        }, 0).to(dot, 1.25 + Math.random(), {
          opacity: 0
        }, duration / 2);
      }
      return tl;
    }
    function explode(element: any) {
      var bounds = element.getBoundingClientRect(),
        explosion: any;
      if (++currentExplosion === explosions.length) {
        currentExplosion = 0;
      }
      explosion = explosions[currentExplosion];
      TweenLite.set(explosion.container, {
        x: bounds.left + bounds.width / 2,
        y: bounds.top + bounds.height / 2
      });
      explosion.animation.restart();
    }
    function getRandom(min: number, max: number) {
      var rand = min + Math.random() * (max - min);
      return rand;
    }
    function play() {
      move.play(0);
      var intervalCount = 0,
        interval = setInterval(function () {
          if (intervalCount < 5) {
            explode(emitter);
            intervalCount++;
          } else {
            clearInterval(interval);
          }
        }, 150);
    }
    function setup() {
      for (i = 0; i < explosionQuantity; i++) {
        container = document.createElement('div');
        container.className = 'dot-container';
        document.body.appendChild(container);
        explosions.push({
          container: container,
          animation: createExplosion(container)
        });
      }
      move = new TimelineLite({
        paused: true
      }).fromTo(emitter, 0.4, {
        left: '40%'
      }, {
        left: '60%',
        ease: Linear.easeNone
      }).fromTo(emitter, 0.4, {
        left: '60%'
      }, {
        left: '40%',
        ease: Linear.easeNone
      });
      play();
    }
    setup();
  };
  return <>      
      <div id="emitter"></div>
      
      <div className="text-center space-y-8 md:space-y-12">
        <motion.div initial={{
        scale: 0
      }} animate={{
        scale: 1
      }} transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.2
      }} className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center shadow-lg">
          <Check className="w-8 h-8 md:w-10 md:h-10 text-white" />
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.4
      }} className="space-y-4 md:space-y-6 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900">
            You're All Set
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-lg mx-auto font-light leading-relaxed">
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
      }} className="max-w-sm mx-auto px-4">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm">
            <h3 className="text-base md:text-lg font-light text-gray-900 mb-4 md:mb-6">
              What You've Accomplished
            </h3>
            
            <div className="space-y-3 md:space-y-4">
              {achievements.map((achievement, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: 0.8 + index * 0.1
            }} className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-2 h-2 text-white" />
                  </div>
                  <span className="text-gray-700 font-light text-xs md:text-sm text-left">
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
      }} className="space-y-4 md:space-y-6 px-4">
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <span className="font-light text-sm">Ready to dive in?</span>
            <ArrowRight className="w-4 h-4" />
          </div>
          
          <div className="text-xs text-gray-400 max-w-md mx-auto font-light">
            <p>
              Your dashboard is ready with all the tools you need to create, 
              schedule, and analyze your social media content. Let's start building 
              your online presence.
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
      }} className="pt-4">
          <button onClick={() => window.location.href = 'https://app.reaxo.xyz'} className="inline-flex items-center space-x-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full font-light text-xs md:text-sm shadow-sm hover:shadow-md transition-all duration-200 hover:from-gray-700 hover:to-gray-800">
            <span>Go to Dashboard</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </motion.div>
      </div>
    </>;
};
export default CompletionScreen;
