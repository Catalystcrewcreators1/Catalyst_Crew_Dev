'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NextImage from 'next/image';
import { Code2, Database, Palette, Bot, X, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

const PROFILES = [
  {
    id: 1,
    name: 'Aryan',
    role: 'Full Stack Developer',
    experience: '3 YOE',
    bio: 'I build wildly over-engineered side projects. Looking for a UI designer for an upcoming Web3 hackathon.',
    avatar: '/Aryan.jpg',
    skills: ['React', 'Next.js', 'Rust'],
    icon: Code2,
    color: 'bg-brand-red',
  },
  {
    id: 2,
    name: 'Vansh',
    role: 'Systems Engineer',
    experience: '2 YOE',
    bio: 'Linux kernel hacker and performance obsessed. Need a solid frontend partner to build a new distributed caching CLI.',
    avatar: '/Vansh.png',
    skills: ['C++', 'Rust', 'Go'],
    icon: Database,
    color: 'bg-brand-blue',
  },
  {
    id: 3,
    name: 'Riddhima',
    role: 'UI/UX Designer',
    experience: '4 YOE',
    bio: 'I make things look good and feel neo-brutal. Looking for talented engineers who can actually center a div.',
    avatar: '/Riddhima.jpg',
    skills: ['Figma', 'Framer', 'CSS'],
    icon: Palette,
    color: 'bg-brand-yellow',
  },
  {
    id: 4,
    name: 'Ashwin',
    role: 'AI Researcher',
    experience: '5 YOE',
    bio: 'Building autonomous agents that code themselves. Want to hack on LangChain and vector databases?',
    avatar: '/Ashwin.png',
    skills: ['Python', 'PyTorch', 'LLMs'],
    icon: Bot,
    color: 'bg-brand-emerald',
  },
  {
    id: 5,
    name: 'Aviral',
    role: 'Blockchain Dev',
    experience: '2 YOE',
    bio: 'Deploying smart contracts and breaking things. Let\'s build the next big DeFi protocol this weekend.',
    avatar: '/Aviral.jpg',
    skills: ['Solidity', 'Web3.js', 'Foundry'],
    icon: Code2,
    color: 'bg-brand-red',
  },
];

export default function SwipeDeck() {
  const [cards, setCards] = useState(PROFILES);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

  const removeCard = (id: number, swipeDirection: 'left' | 'right') => {
    setDirection(swipeDirection);
    setTimeout(() => {
      setCards((prev) => prev.filter((card) => card.id !== id));
      setDirection(null);
    }, 200);
  };

  if (cards.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[500px] w-full max-w-sm mx-auto bg-brand-white border-3 border-brand-ink rounded-brutal shadow-brutal p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-brand-yellow border-3 border-brand-ink flex items-center justify-center mb-6 shadow-brutal-sm">
          <Bot className="w-8 h-8 text-brand-ink" />
        </div>
        <h2 className="font-display font-bold text-2xl mb-2">No more devs!</h2>
        <p className="text-brand-neutral mb-8">You've seen all the available developers for the upcoming hackathon.</p>
        <button 
          onClick={() => setCards(PROFILES)}
          className="px-6 py-3 bg-brand-ink text-white font-bold tracking-wider rounded-brutal shadow-brutal-sm hover:-translate-y-1 transition-transform"
        >
          RELOAD DECK
        </button>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-sm mx-auto h-[600px] flex items-center justify-center">
      <AnimatePresence>
        {cards.map((card, index) => {
          const isTop = index === cards.length - 1;
          return (
            <motion.div
              key={card.id}
              className="absolute w-full h-[500px] bg-brand-white border-3 border-brand-ink rounded-brutal shadow-brutal flex flex-col overflow-hidden cursor-grab active:cursor-grabbing"
              style={{
                zIndex: index,
              }}
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ 
                scale: isTop ? 1 : 0.95 - (cards.length - 1 - index) * 0.05,
                y: isTop ? 0 : (cards.length - 1 - index) * 15,
                opacity: 1 
              }}
              exit={{ 
                x: direction === 'left' ? -300 : direction === 'right' ? 300 : 0,
                opacity: 0,
                rotate: direction === 'left' ? -20 : direction === 'right' ? 20 : 0
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              drag={isTop ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.8}
              onDragEnd={(e, info) => {
                if (info.offset.x > 100) removeCard(card.id, 'right');
                else if (info.offset.x < -100) removeCard(card.id, 'left');
              }}
            >
              <div className={`h-32 w-full ${card.color} border-b-3 border-brand-ink relative flex justify-center`}>
                <div className="absolute -bottom-12 w-24 h-24 rounded-full border-3 border-brand-ink overflow-hidden bg-brand-cream">
                  <NextImage src={card.avatar} alt={card.name} fill className="object-cover" />
                </div>
              </div>
              
              <div className="pt-16 pb-6 px-6 flex-1 flex flex-col text-center">
                <h3 className="font-display font-bold text-2xl">{card.name}</h3>
                <div className="text-brand-neutral font-medium mb-4">{card.role} • {card.experience}</div>
                
                <p className="text-brand-ink/80 text-sm leading-relaxed mb-6 flex-1 italic">
                  "{card.bio}"
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {card.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-brand-cream border-2 border-brand-ink rounded-full text-xs font-bold text-brand-ink shadow-brutal-sm">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Manual Buttons */}
                <div className="flex justify-center gap-6 mt-auto">
                  <button 
                    onClick={() => removeCard(card.id, 'left')}
                    className="w-14 h-14 rounded-full bg-brand-white border-3 border-brand-ink flex items-center justify-center text-brand-red shadow-brutal hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(20,20,20,1)] transition-all"
                  >
                    <X className="w-6 h-6 stroke-[3]" />
                  </button>
                  <button 
                    onClick={() => removeCard(card.id, 'right')}
                    className="w-14 h-14 rounded-full bg-brand-emerald border-3 border-brand-ink flex items-center justify-center text-brand-ink shadow-brutal hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(20,20,20,1)] transition-all"
                  >
                    <Heart className="w-6 h-6 stroke-[3]" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
