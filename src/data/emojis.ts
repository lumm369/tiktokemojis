export interface TikTokEmoji {
  id: string;
  symbol: string;
  name: string;
  keywords: string[];
  category: 'happy' | 'sad' | 'angry' | 'surprised' | 'proud' | 'smug' | 'cute' | 'other';
  code: string;
  description: string;
  popular: boolean;
  hidden?: boolean; // New field for hidden emojis
  imagePath?: string; // New field for emoji image path
}

// Import keyword research data
// Note: In production, this data helps inform SEO strategy
export interface KeywordData {
  Keyword: string;
  Intent: string;
  Volume: number;
  Trend: string;
  "Keyword Difficulty": number;
  "CPC (USD)": number;
  "Competitive Density": number;
  "SERP Features": string;
  "Number of Results": number;
}

export const tikTokEmojis: TikTokEmoji[] = [
  // Hidden TikTok Emojis (46 total)
  {
    id: 'smile',
    symbol: '[smile]',
    name: 'Smile',
    keywords: ['smile', 'happy', 'secret'],
    category: 'happy',
    code: '[smile]',
    description: 'A small, round, pink smiling face used to show happiness or appreciation',
    popular: true,
    hidden: true,
    imagePath: '/emojis/smile.png'
  },
  {
    id: 'happy',
    symbol: '[happy]',
    name: 'Happy',
    keywords: ['happy', 'joy', 'excited'],
    category: 'happy',
    code: '[happy]',
    description: 'A peach-colored face with squinty eyes and a big open mouth, expressing extreme excitement',
    popular: true,
    hidden: true,
    imagePath: '/emojis/happy.png'
  },
  {
    id: 'angry',
    symbol: '[angry]',
    name: 'Angry',
    keywords: ['angry', 'mad', 'upset'],
    category: 'angry',
    code: '[angry]',
    description: 'A red face with furrowed brows, used to convey anger or displeasure',
    popular: true,
    hidden: true,
    imagePath: '/emojis/angry.png'
  },
  {
    id: 'cry',
    symbol: '[cry]',
    name: 'Cry',
    keywords: ['cry', 'sad', 'tears'],
    category: 'sad',
    code: '[cry]',
    description: 'A blue face with tears streaming down, representing sadness or emotional overwhelm',
    popular: true,
    hidden: true,
    imagePath: '/emojis/cry.png'
  },
  {
    id: 'embarrassed',
    symbol: '[embarrassed]',
    name: 'Embarrassed',
    keywords: ['embarrassed', 'shy', 'awkward'],
    category: 'cute',
    code: '[embarrassed]',
    description: 'A face with rosy cheeks and a shy smile, indicating embarrassment or shyness',
    popular: false,
    hidden: true,
    imagePath: '/emojis/embarrassed.png'
  },
  {
    id: 'surprised',
    symbol: '[surprised]',
    name: 'Surprised',
    keywords: ['surprised', 'shock', 'amazed'],
    category: 'surprised',
    code: '[surprised]',
    description: 'A face with wide eyes and an open mouth, expressing shock or surprise',
    popular: true,
    hidden: true,
    imagePath: '/emojis/surprised.png'
  },
  {
    id: 'wronged',
    symbol: '[wronged]',
    name: 'Wronged',
    keywords: ['wronged', 'shy', 'bashful'],
    category: 'cute',
    code: '[wronged]',
    description: 'A yellow face with sad eyes and two fingers pointing at each other, indicating shyness or embarrassment',
    popular: true,
    hidden: true,
    imagePath: '/emojis/wronged.png'
  },
  {
    id: 'shout',
    symbol: '[shout]',
    name: 'Shout',
    keywords: ['shout', 'yell', 'loud'],
    category: 'other',
    code: '[shout]',
    description: 'A face with an open mouth, often used to express excitement or yelling',
    popular: false,
    hidden: true,
    imagePath: '/emojis/shout.png'
  },
  {
    id: 'flushed',
    symbol: '[flushed]',
    name: 'Flushed',
    keywords: ['flushed', 'embarrassed', 'shy'],
    category: 'cute',
    code: '[flushed]',
    description: 'A face with red cheeks, indicating embarrassment or shyness',
    popular: true,
    hidden: true,
    imagePath: '/emojis/flushed.png'
  },
  {
    id: 'yummy',
    symbol: '[yummy]',
    name: 'Yummy',
    keywords: ['yummy', 'delicious', 'food'],
    category: 'other',
    code: '[yummy]',
    description: 'A face licking its lips, expressing deliciousness or craving for food',
    popular: true,
    hidden: true,
    imagePath: '/emojis/yummy.png'
  },
  {
    id: 'complacent',
    symbol: '[complacent]',
    name: 'Complacent',
    keywords: ['complacent', 'smug', 'satisfied'],
    category: 'smug',
    code: '[complacent]',
    description: 'A smug face with a self-satisfied smile, indicating complacency',
    popular: false,
    hidden: true,
    imagePath: '/emojis/complacent.png'
  },
  {
    id: 'drool',
    symbol: '[drool]',
    name: 'Drool',
    keywords: ['drool', 'desire', 'want'],
    category: 'other',
    code: '[drool]',
    description: 'A face with drool coming out of its mouth, indicating hunger or desire',
    popular: true,
    hidden: true,
    imagePath: '/emojis/drool.png'
  },
  {
    id: 'scream',
    symbol: '[scream]',
    name: 'Scream',
    keywords: ['scream', 'fear', 'shock'],
    category: 'surprised',
    code: '[scream]',
    description: 'A face with wide eyes and an open mouth, expressing fear or shock',
    popular: true,
    hidden: true,
    imagePath: '/emojis/scream.png'
  },
  {
    id: 'weep',
    symbol: '[weep]',
    name: 'Weep',
    keywords: ['weep', 'cry', 'sad'],
    category: 'sad',
    code: '[weep]',
    description: 'A face with tears, indicating deep sadness or sorrow',
    popular: false,
    hidden: true,
    imagePath: '/emojis/weep.png'
  },
  {
    id: 'speechless',
    symbol: '[speechless]',
    name: 'Speechless',
    keywords: ['speechless', 'shocked', 'amazed'],
    category: 'surprised',
    code: '[speechless]',
    description: 'A face with a hand over its mouth, indicating shock or being speechless',
    popular: true,
    hidden: true,
    imagePath: '/emojis/speechless.png'
  },
  {
    id: 'funnyface',
    symbol: '[funnyface]',
    name: 'Funny Face',
    keywords: ['funny', 'silly', 'humor'],
    category: 'other',
    code: '[funnyface]',
    description: 'A silly face with exaggerated features, used to indicate humor',
    popular: true,
    hidden: true,
    imagePath: '/emojis/funnyface.png'
  },
  {
    id: 'laughwithtears',
    symbol: '[laughwithtears]',
    name: 'Laugh with Tears',
    keywords: ['laugh', 'tears', 'funny'],
    category: 'happy',
    code: '[laughwithtears]',
    description: 'A face laughing with tears streaming down, indicating extreme laughter',
    popular: true,
    hidden: true,
    imagePath: '/emojis/laughwithtears.png'
  },
  {
    id: 'wicked',
    symbol: '[wicked]',
    name: 'Wicked',
    keywords: ['wicked', 'evil', 'mischievous'],
    category: 'smug',
    code: '[wicked]',
    description: 'A mischievous face with a sly smile, indicating wickedness or playfulness',
    popular: true,
    hidden: true,
    imagePath: '/emojis/wicked.png'
  },
  {
    id: 'facewithrollingeyes',
    symbol: '[facewithrollingeyes]',
    name: 'Face with Rolling Eyes',
    keywords: ['rolling eyes', 'annoyed', 'disbelief'],
    category: 'angry',
    code: '[facewithrollingeyes]',
    description: 'A face rolling its eyes, indicating annoyance or disbelief',
    popular: true,
    hidden: true,
    imagePath: '/emojis/facewithrollingeyes.png'
  },
  {
    id: 'sulk',
    symbol: '[sulk]',
    name: 'Sulk',
    keywords: ['sulk', 'pout', 'disappointed'],
    category: 'sad',
    code: '[sulk]',
    description: 'A face with a frown, indicating sulking or disappointment',
    popular: false,
    hidden: true,
    imagePath: '/emojis/sulk.png'
  },
  {
    id: 'thinking',
    symbol: '[thinking]',
    name: 'Thinking',
    keywords: ['thinking', 'contemplating', 'wondering'],
    category: 'other',
    code: '[thinking]',
    description: 'A face with a hand on its chin, indicating deep thought or contemplation',
    popular: true,
    hidden: true,
    imagePath: '/emojis/thinking.png'
  },
  {
    id: 'lovely',
    symbol: '[lovely]',
    name: 'Lovely',
    keywords: ['lovely', 'love', 'heart'],
    category: 'cute',
    code: '[lovely]',
    description: 'A face with hearts in its eyes, indicating love or admiration',
    popular: true,
    hidden: true,
    imagePath: '/emojis/lovely.png'
  },
  {
    id: 'greedy',
    symbol: '[greedy]',
    name: 'Greedy',
    keywords: ['greedy', 'money', 'desire'],
    category: 'other',
    code: '[greedy]',
    description: 'A face with a greedy smile, indicating greed or desire for more',
    popular: false,
    hidden: true,
    imagePath: '/emojis/greedy.png'
  },
  {
    id: 'wow',
    symbol: '[wow]',
    name: 'Wow',
    keywords: ['wow', 'amazed', 'impressed'],
    category: 'surprised',
    code: '[wow]',
    description: 'A face with wide eyes and an open mouth, expressing amazement or wonder',
    popular: true,
    hidden: true,
    imagePath: '/emojis/wow.png'
  },
  {
    id: 'joyful',
    symbol: '[joyful]',
    name: 'Joyful',
    keywords: ['joyful', 'happy', 'excited'],
    category: 'happy',
    code: '[joyful]',
    description: 'A face with a big smile and sparkling eyes, indicating joy or happiness',
    popular: true,
    hidden: true,
    imagePath: '/emojis/joyful.png'
  },
  {
    id: 'hehe',
    symbol: '[hehe]',
    name: 'Hehe',
    keywords: ['hehe', 'giggle', 'mischievous'],
    category: 'happy',
    code: '[hehe]',
    description: 'A face with a mischievous grin, indicating a light-hearted or playful mood',
    popular: true,
    hidden: true,
    imagePath: '/emojis/hehe.png'
  },
  {
    id: 'slap',
    symbol: '[slap]',
    name: 'Slap',
    keywords: ['slap', 'hit', 'shocked'],
    category: 'surprised',
    code: '[slap]',
    description: 'A face with a hand raised, indicating a slap or playful hit',
    popular: false,
    hidden: true,
    imagePath: '/emojis/slap.png'
  },
  {
    id: 'tears',
    symbol: '[tears]',
    name: 'Tears',
    keywords: ['tears', 'crying', 'sad'],
    category: 'sad',
    code: '[tears]',
    description: 'A face with tears, indicating sadness or emotional release',
    popular: true,
    hidden: true,
    imagePath: '/emojis/tears.png'
  },
  {
    id: 'stun',
    symbol: '[stun]',
    name: 'Stun',
    keywords: ['stun', 'shocked', 'amazed'],
    category: 'surprised',
    code: '[stun]',
    description: 'A face with a shocked expression, indicating surprise or disbelief',
    popular: true,
    hidden: true,
    imagePath: '/emojis/stun.png'
  },
  {
    id: 'cute',
    symbol: '[cute]',
    name: 'Cute',
    keywords: ['cute', 'adorable', 'sweet'],
    category: 'cute',
    code: '[cute]',
    description: 'A face with a sweet smile, indicating cuteness or affection',
    popular: true,
    hidden: true,
    imagePath: '/emojis/cute.png'
  },
  {
    id: 'blink',
    symbol: '[blink]',
    name: 'Blink',
    keywords: ['blink', 'wink', 'flirt'],
    category: 'cute',
    code: '[blink]',
    description: 'A face with one eye closed, indicating a wink or playful gesture',
    popular: true,
    hidden: true,
    imagePath: '/emojis/blink.png'
  },
  {
    id: 'disdain',
    symbol: '[disdain]',
    name: 'Disdain',
    keywords: ['disdain', 'contempt', 'disapproval'],
    category: 'angry',
    code: '[disdain]',
    description: 'A face with a raised eyebrow, indicating disdain or disapproval',
    popular: false,
    hidden: true,
    imagePath: '/emojis/disdain.png'
  },
  {
    id: 'astonish',
    symbol: '[astonish]',
    name: 'Astonish',
    keywords: ['astonish', 'amazed', 'surprised'],
    category: 'surprised',
    code: '[astonish]',
    description: 'A face with wide eyes and raised eyebrows, indicating astonishment',
    popular: true,
    hidden: true,
    imagePath: '/emojis/astonish.png'
  },
  {
    id: 'rage',
    symbol: '[rage]',
    name: 'Rage',
    keywords: ['rage', 'fury', 'angry'],
    category: 'angry',
    code: '[rage]',
    description: 'A face with a furious expression, indicating intense anger',
    popular: true,
    hidden: true,
    imagePath: '/emojis/rage.png'
  },
  {
    id: 'cool',
    symbol: '[cool]',
    name: 'Cool',
    keywords: ['cool', 'sunglasses', 'confident'],
    category: 'proud',
    code: '[cool]',
    description: 'A face with sunglasses, indicating coolness or confidence',
    popular: true,
    hidden: true,
    imagePath: '/emojis/cool.png'
  },
  {
    id: 'excited',
    symbol: '[excited]',
    name: 'Excited',
    keywords: ['excited', 'enthusiastic', 'happy'],
    category: 'happy',
    code: '[excited]',
    description: 'A face with sparkling eyes and a big smile, indicating excitement',
    popular: true,
    hidden: true,
    imagePath: '/emojis/excited.png'
  },
  {
    id: 'proud',
    symbol: '[proud]',
    name: 'Proud',
    keywords: ['proud', 'satisfied', 'confident'],
    category: 'proud',
    code: '[proud]',
    description: 'A face with a smug smile, indicating pride or satisfaction',
    popular: true,
    hidden: true,
    imagePath: '/emojis/proud.png'
  },
  {
    id: 'smileface',
    symbol: '[smileface]',
    name: 'Smile Face',
    keywords: ['smile', 'happy', 'friendly'],
    category: 'happy',
    code: '[smileface]',
    description: 'A face with a big smile, indicating happiness or friendliness',
    popular: true,
    hidden: true,
    imagePath: '/emojis/smileface.png'
  },
  {
    id: 'evil',
    symbol: '[evil]',
    name: 'Evil',
    keywords: ['evil', 'devilish', 'mischievous'],
    category: 'smug',
    code: '[evil]',
    description: 'A face with a devilish grin, indicating mischief or evil intent',
    popular: true,
    hidden: true,
    imagePath: '/emojis/evil.png'
  },
  {
    id: 'angel',
    symbol: '[angel]',
    name: 'Angel',
    keywords: ['angel', 'innocent', 'pure'],
    category: 'cute',
    code: '[angel]',
    description: 'A face with a halo, indicating innocence or goodness',
    popular: true,
    hidden: true,
    imagePath: '/emojis/angel.png'
  },
  {
    id: 'laugh',
    symbol: '[laugh]',
    name: 'Laugh',
    keywords: ['laugh', 'joy', 'amusement'],
    category: 'happy',
    code: '[laugh]',
    description: 'A face laughing, indicating joy or amusement',
    popular: true,
    hidden: true,
    imagePath: '/emojis/laugh.png'
  },
  {
    id: 'pride',
    symbol: '[pride]',
    name: 'Pride',
    keywords: ['pride', 'proud', 'confident'],
    category: 'proud',
    code: '[pride]',
    description: 'A face with a proud expression, indicating self-satisfaction',
    popular: false,
    hidden: true,
    imagePath: '/emojis/pride.png'
  },
  {
    id: 'nap',
    symbol: '[nap]',
    name: 'Nap',
    keywords: ['nap', 'sleep', 'tired'],
    category: 'other',
    code: '[nap]',
    description: 'A face with closed eyes, indicating sleepiness or a desire to nap',
    popular: false,
    hidden: true,
    imagePath: '/emojis/nap.png'
  },
  {
    id: 'loveface',
    symbol: '[loveface]',
    name: 'Love Face',
    keywords: ['love', 'heart eyes', 'infatuation'],
    category: 'cute',
    code: '[loveface]',
    description: 'A face with heart-shaped eyes, indicating love or infatuation',
    popular: true,
    hidden: true,
    imagePath: '/emojis/loveface.png'
  },
  {
    id: 'awkward',
    symbol: '[awkward]',
    name: 'Awkward',
    keywords: ['awkward', 'uncomfortable', 'nervous'],
    category: 'other',
    code: '[awkward]',
    description: 'A face with a nervous smile, indicating awkwardness or discomfort',
    popular: true,
    hidden: true,
    imagePath: '/emojis/awkward.png'
  },
  {
    id: 'shock',
    symbol: '[shock]',
    name: 'Shock',
    keywords: ['shock', 'surprised', 'disbelief'],
    category: 'surprised',
    code: '[shock]',
    description: 'A face with a shocked expression, indicating surprise or disbelief',
    popular: true,
    hidden: true,
    imagePath: '/emojis/shock.png'
  }
];

export const getEmojisByCategory = (category: TikTokEmoji['category']) => {
  return tikTokEmojis.filter(emoji => emoji.category === category);
};

export const getPopularEmojis = () => {
  return tikTokEmojis.filter(emoji => emoji.popular);
};

export const getHiddenEmojis = () => {
  return tikTokEmojis.filter(emoji => emoji.hidden);
};

export const getStandardEmojis = () => {
  return tikTokEmojis.filter(emoji => !emoji.hidden);
};

export const searchEmojis = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return tikTokEmojis.filter(emoji => 
    emoji.name.toLowerCase().includes(lowercaseQuery) ||
    emoji.keywords.some(keyword => keyword.toLowerCase().includes(lowercaseQuery)) ||
    emoji.description.toLowerCase().includes(lowercaseQuery)
  );
};

// Categories optimized for SEO based on keyword research
export const categories = [
  { id: 'proud', name: 'Proud' },
  { id: 'happy', name: 'Happy' },
  { id: 'sad', name: 'Crying' },
  { id: 'surprised', name: 'Shocked' },
  { id: 'angry', name: 'Angry' },
  { id: 'cute', name: 'Cute' },
  { id: 'smug', name: 'Smug' },
  { id: 'other', name: 'Other' }
] as const;

// Utility function to get high-volume keywords for meta descriptions
export const getHighVolumeKeywords = () => [
  'tiktok hidden emojis',
  'tiktok secret emojis', 
  'hidden tiktok emoji codes',
  'tiktok emoji shortcuts',
  'secret tiktok emoji list',
  'tiktok hidden emoticons',
  'tiktok exclusive emojis',
  'hidden emoji codes tiktok',
  'tiktok secret symbols'
];

// Get keywords for specific categories (helps with category page SEO)
export const getCategoryKeywords = (category: string) => {
  const keywordMap: Record<string, string[]> = {
    happy: ['happy hidden emoji tiktok', 'tiktok happy secret emoji', 'hidden smile emoji'],
    proud: ['proud hidden emoji tiktok', 'tiktok secret proud emoji', 'hidden cool emoji'],
    smug: ['tiktok hidden smirk emoji', 'secret smug emoji tiktok', 'hidden wicked emoji'],
    sad: ['tiktok hidden crying emoji', 'secret sad emoji tiktok', 'hidden tears emoji'],
    surprised: ['hidden shock emoji tiktok', 'secret surprised emoji tiktok', 'hidden wow emoji'],
    angry: ['hidden angry emoji tiktok', 'secret mad emoji tiktok', 'hidden rage emoji'],
    cute: ['hidden cute emoji tiktok', 'secret adorable emoji tiktok', 'hidden lovely emoji'],
    other: ['tiktok hidden emojis', 'all secret tiktok emojis', 'hidden tiktok emoji codes']
  };
  
  return keywordMap[category] || [];
}; 