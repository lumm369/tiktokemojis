export interface UsageScenario {
  title: string;
  description: string;
  example: string;
}

export interface EmojiDetails {
  id: string;
  symbol: string;
  name: string;
  meaning: string;
  usageScenarios: UsageScenario[];
  examples: string[];
  bestPractices: string[];
  relatedEmojis: string[];
  category: string;
  hidden?: boolean;
  shortcode?: string;
}

export const emojiDetails: { [key: string]: EmojiDetails } = {
  'smile': {
    id: 'smile',
    symbol: '[smile]',
    name: 'Hidden Smile',
    meaning: 'The hidden smile tiktok emoji is a TikTok exclusive featuring a small, round, pink smiling face. Unlike standard emojis, this secret emoji only appears when you type [smile] in TikTok comments or captions, making it secret for TikTok users in the know.',
    usageScenarios: [
      {
        title: 'Secret TikTok Culture',
        description: 'Show you\'re part of the TikTok insider community by using hidden emojis',
        example: 'Only real TikTok users know about this [smile]'
      },
      {
        title: 'Exclusive Content',
        description: 'Add a special touch to your comments that stands out from regular emojis',
        example: 'This video is amazing [smile]'
      },
      {
        title: 'Community Building',
        description: 'Connect with other users who recognize the hidden emoji tiktok codes',
        example: 'If you know, you know [smile]'
      }
    ],
    examples: [
      'Love this trend [smile]',
      'So wholesome [smile]',
      'This made me happy [smile]',
      'Perfect vibes [smile]'
    ],
    bestPractices: [
      'Type [smile] exactly with square brackets to activate',
      'Use in TikTok comments and captions only',
      'Great for building community with other TikTok insiders',
      'Remember that not all users will recognize hidden emojis'
    ],
    relatedEmojis: ['[happy]', '[joyful]', '[smileface]'],
    category: 'happy',
    hidden: true,
    shortcode: '[smile]'
  },

  'happy': {
    id: 'happy',
    symbol: '[happy]',
    name: 'Hidden Happy',
    meaning: 'The hidden happy tiktok emoji features a peach-colored face with squinty eyes and a big open mouth, expressing extreme excitement and joy. This TikTok exclusive emoji is perfect for showing intense happiness that goes beyond a regular smile.',
    usageScenarios: [
      {
        title: 'Extreme Joy',
        description: 'Use when regular happy emojis aren\'t enough to express your excitement',
        example: 'Just hit 1M followers [happy]'
      },
      {
        title: 'Celebration Content',
        description: 'Perfect for major achievements and exciting announcements',
        example: 'Best day ever [happy]'
      },
      {
        title: 'Viral Moments',
        description: 'Express overwhelming happiness when your content goes viral',
        example: 'This is incredible [happy]'
      }
    ],
    examples: [
      'I can\'t believe it [happy]',
      'Dreams do come true [happy]',
      'So blessed [happy]',
      'Life is amazing [happy]'
    ],
    bestPractices: [
      'Use for major celebrations and achievements',
      'Perfect for expressing overwhelming positive emotions',
      'Great for milestone celebration videos',
      'More intense than regular happy emojis'
    ],
    relatedEmojis: ['[excited]', '[joyful]', '[smile]'],
    category: 'happy',
    hidden: true,
    shortcode: '[happy]'
  },

  'angry': {
    id: 'angry',
    symbol: '[angry]',
    name: 'Hidden Angry',
    meaning: 'The hidden angry tiktok emoji shows a red face with furrowed brows, used to convey anger or displeasure. This TikTok secret emoji provides a unique way to express frustration that\'s exclusive to the platform.',
    usageScenarios: [
      {
        title: 'Playful Anger',
        description: 'Express mock anger or frustration in a lighthearted way',
        example: 'When someone steals your food [angry]'
      },
      {
        title: 'Reaction Videos',
        description: 'Perfect for angry reaction content and rants',
        example: 'This makes me so mad [angry]'
      },
      {
        title: 'Dramatic Effect',
        description: 'Add dramatic flair to storytelling videos',
        example: 'And then I got angry [angry]'
      }
    ],
    examples: [
      'This is so frustrating [angry]',
      'I\'m done with this [angry]',
      'Makes me so mad [angry]',
      'Ugh why [angry]'
    ],
    bestPractices: [
      'Use for dramatic storytelling and reactions',
      'Perfect for expressing mock or playful anger',
      'Great for rant videos and complaint content',
      'Avoid in serious situations where real anger is involved'
    ],
    relatedEmojis: ['[rage]', '[disdain]', '[facewithrollingeyes]'],
    category: 'angry',
    hidden: true,
    shortcode: '[angry]'
  },

  'cry': {
    id: 'cry',
    symbol: '[cry]',
    name: 'Hidden Cry',
    meaning: 'The hidden cry tiktok emoji features a blue face with tears streaming down, representing sadness or emotional overwhelm. This exclusive TikTok emoji allows for unique emotional expression in your content.',
    usageScenarios: [
      {
        title: 'Emotional Content',
        description: 'Express deep sadness or emotional moments',
        example: 'This movie ending [cry]'
      },
      {
        title: 'Relatable Moments',
        description: 'Share relatable sad or overwhelming experiences',
        example: 'When you see your exam grade [cry]'
      },
      {
        title: 'Dramatic Storytelling',
        description: 'Add emotional depth to your narrative content',
        example: 'And then everything fell apart [cry]'
      }
    ],
    examples: [
      'This is so sad [cry]',
      'I\'m emotional [cry]',
      'Why does this happen [cry]',
      'Feeling overwhelmed [cry]'
    ],
    bestPractices: [
      'Perfect for emotional and dramatic content',
      'Use to express genuine sadness or overwhelming feelings',
      'Great for storytelling videos with emotional depth',
      'Helps create empathy with your audience'
    ],
    relatedEmojis: ['[weep]', '[tears]', '[sulk]'],
    category: 'sad',
    hidden: true,
    shortcode: '[cry]'
  },

  'embarrassed': {
    id: 'embarrassed',
    symbol: '[embarrassed]',
    name: 'Hidden Embarrassed',
    meaning: 'The hidden embarrassed tiktok emoji shows a face with rosy cheeks and a shy smile, perfect for those awkward or embarrassing moments that make for great TikTok content. This secret emoji captures the feeling of being caught off guard or feeling shy.',
    usageScenarios: [
      {
        title: 'Awkward Moments',
        description: 'Perfect for sharing those cringe-worthy but relatable moments',
        example: 'When you wave back but they weren\'t waving at you [embarrassed]'
      },
      {
        title: 'Shy Content',
        description: 'Express bashfulness when sharing personal or vulnerable content',
        example: 'First time singing on TikTok [embarrassed]'
      },
      {
        title: 'Humble Reactions',
        description: 'Show modesty when receiving compliments or recognition',
        example: 'You guys are too kind [embarrassed]'
      }
    ],
    examples: [
      'This is so awkward [embarrassed]',
      'Why did I do that [embarrassed]',
      'So shy right now [embarrassed]',
      'Feeling vulnerable [embarrassed]'
    ],
    bestPractices: [
      'Perfect for relatable, awkward content that resonates with viewers',
      'Use when showing vulnerability or sharing embarrassing stories',
      'Great for humble responses to positive feedback',
      'Adds authenticity to your TikTok persona'
    ],
    relatedEmojis: ['[flushed]', '[awkward]', '[cute]'],
    category: 'cute',
    hidden: true,
    shortcode: '[embarrassed]'
  },

  'wronged': {
    id: 'wronged',
    symbol: '[wronged]',
    name: 'Hidden Wronged',
    meaning: 'The hidden wronged tiktok emoji features a yellow face with sad eyes and two fingers pointing at each other, representing the shy, bashful feeling similar to 🥺👉👈. This TikTok secret emoji has become popular for expressing shyness or feeling wronged.',
    usageScenarios: [
      {
        title: 'Shy Requests',
        description: 'Use when making bashful requests or asking for something timidly',
        example: 'Could you maybe follow me [wronged]'
      },
      {
        title: 'Feeling Wronged',
        description: 'Express feeling unfairly treated or misunderstood',
        example: 'Everyone\'s being mean to me [wronged]'
      },
      {
        title: 'Bashful Content',
        description: 'Perfect for showing vulnerability and seeking sympathy',
        example: 'I tried my best [wronged]'
      }
    ],
    examples: [
      'Please be nice [wronged]',
      'I\'m just trying to help [wronged]',
      'Don\'t hate me [wronged]',
      'Feeling misunderstood [wronged]'
    ],
    bestPractices: [
      'Use for vulnerable, emotional content that seeks empathy',
      'Perfect for expressing shyness or bashfulness',
      'Great for creating emotional connection with viewers',
      'Similar effect to the popular 🥺👉👈 combination'
    ],
    relatedEmojis: ['[cute]', '[embarrassed]', '[flushed]'],
    category: 'cute',
    hidden: true,
    shortcode: '[wronged]'
  },

  'yummy': {
    id: 'yummy',
    symbol: '[yummy]',
    name: 'Hidden Yummy',
    meaning: 'The hidden yummy tiktok emoji shows a face licking its lips, expressing deliciousness or craving for food. This TikTok exclusive emoji is perfect for food content and expressing desire or appetite.',
    usageScenarios: [
      {
        title: 'Food Content',
        description: 'Perfect for food reviews, cooking videos, and restaurant content',
        example: 'This pizza looks [yummy]'
      },
      {
        title: 'Craving Expression',
        description: 'Express desire or craving for something delicious',
        example: 'I need this in my life [yummy]'
      },
      {
        title: 'Taste Reviews',
        description: 'Show appreciation for delicious food or drinks',
        example: 'This tastes incredible [yummy]'
      }
    ],
    examples: [
      'This looks so good [yummy]',
      'My mouth is watering [yummy]',
      'I\'m so hungry now [yummy]',
      'Need this recipe [yummy]'
    ],
    bestPractices: [
      'Perfect for food and cooking TikTok content',
      'Use to express genuine appreciation for delicious food',
      'Great for food review videos and restaurant visits',
      'Helps engage food-loving audiences'
    ],
    relatedEmojis: ['[drool]', '[smile]', '[happy]'],
    category: 'other',
    hidden: true,
    shortcode: '[yummy]'
  },

  'funnyface': {
    id: 'funnyface',
    symbol: '[funnyface]',
    name: 'Hidden Funny Face',
    meaning: 'The hidden funny tiktok face emoji features a silly face with exaggerated features, perfect for humor and comedy content. This TikTok exclusive emoji adds a goofy, playful element to your videos and comments.',
    usageScenarios: [
      {
        title: 'Comedy Content',
        description: 'Perfect for funny videos and comedic moments',
        example: 'When you try to be serious but fail [funnyface]'
      },
      {
        title: 'Self-Deprecating Humor',
        description: 'Use for making fun of yourself in a lighthearted way',
        example: 'Me trying to adult [funnyface]'
      },
      {
        title: 'Silly Moments',
        description: 'Express goofiness and playful energy',
        example: 'Being weird and loving it [funnyface]'
      }
    ],
    examples: [
      'Oops did I do that [funnyface]',
      'Professional goofball [funnyface]',
      'Silly mode activated [funnyface]',
      'Zero brain cells [funnyface]'
    ],
    bestPractices: [
      'Perfect for comedy and humor content',
      'Use to lighten the mood in comments',
      'Great for self-deprecating jokes',
      'Adds playful energy to your TikTok presence'
    ],
    relatedEmojis: ['[laugh]', '[hehe]', '[laughwithtears]'],
    category: 'other',
    hidden: true,
    shortcode: '[funnyface]'
  },

  'wicked': {
    id: 'wicked',
    symbol: '[wicked]',
    name: 'Hidden Wicked',
    meaning: 'The hidden wicked tiktok emoji features a mischievous face with a sly smile, perfect for indicating wickedness, mischief, or playful evil intent. This TikTok exclusive emoji adds a devilish touch to your content.',
    usageScenarios: [
      {
        title: 'Mischievous Content',
        description: 'Use when planning pranks or showing your mischievous side',
        example: 'About to prank my roommate [wicked]'
      },
      {
        title: 'Playful Evil',
        description: 'Express harmless villainy or playful troublemaking',
        example: 'Plot twist incoming [wicked]'
      },
      {
        title: 'Sarcastic Comments',
        description: 'Add a devilish tone to sarcastic or witty observations',
        example: 'Oh this will be fun [wicked]'
      }
    ],
    examples: [
      'Evil plans loading [wicked]',
      'Chaos mode activated [wicked]',
      'Being a little devil [wicked]',
      'Mischief managed [wicked]'
    ],
    bestPractices: [
      'Perfect for prank videos and mischievous content',
      'Use to add a playful, devilish tone to comments',
      'Great for plot twist reveals and surprise content',
      'Adds personality to sarcastic or witty observations'
    ],
    relatedEmojis: ['[evil]', '[smileface]', '[hehe]'],
    category: 'smug',
    hidden: true,
    shortcode: '[wicked]'
  },

  'thinking': {
    id: 'thinking',
    symbol: '[thinking]',
    name: 'Hidden Thinking',
    meaning: 'The hidden thinking tiktok emoji shows a face with a hand on its chin, indicating deep thought, contemplation, or pondering. This TikTok secret emoji is perfect for educational content, decision-making videos, or when you want to show you\'re considering something carefully.',
    usageScenarios: [
      {
        title: 'Educational Content',
        description: 'Use in educational TikToks to show thoughtful consideration of topics',
        example: 'Let me think about this carefully [thinking]'
      },
      {
        title: 'Decision Making',
        description: 'Perfect for videos about making important life choices',
        example: 'Should I quit my job [thinking]'
      },
      {
        title: 'Contemplative Moments',
        description: 'Express deep thinking about philosophical or complex topics',
        example: 'What\'s the meaning of life [thinking]'
      }
    ],
    examples: [
      'Hmm, interesting point [thinking]',
      'Let me consider this [thinking]',
      'Deep thoughts incoming [thinking]',
      'Processing this information [thinking]'
    ],
    bestPractices: [
      'Perfect for educational and thoughtful content',
      'Use to show you\'re carefully considering viewer comments',
      'Great for philosophical or deep-thinking videos',
      'Adds credibility to analytical content'
    ],
    relatedEmojis: ['[speechless]', '[wow]', '[astonish]'],
    category: 'other',
    hidden: true,
    shortcode: '[thinking]'
  },

  'cool': {
    id: 'cool',
    symbol: '[cool]',
    name: 'Hidden Cool',
    meaning: 'The hidden cool tiktok emoji features a face with sunglasses, representing confidence, coolness, and a laid-back attitude. This TikTok exclusive emoji is perfect for showing you\'re unfazed by drama or simply too cool for the situation.',
    usageScenarios: [
      {
        title: 'Confidence Content',
        description: 'Show your cool, confident attitude in any situation',
        example: 'Handling the haters like [cool]'
      },
      {
        title: 'Achievement Flexing',
        description: 'Casually flex your accomplishments without being too boastful',
        example: 'Just another day being awesome [cool]'
      },
      {
        title: 'Unbothered Energy',
        description: 'Express that you\'re completely unfazed by negativity or drama',
        example: 'Comments can\'t touch this energy [cool]'
      }
    ],
    examples: [
      'Too cool for school [cool]',
      'Unbothered and blessed [cool]',
      'Living my best life [cool]',
      'Main character energy [cool]'
    ],
    bestPractices: [
      'Use to project confidence and coolness',
      'Perfect for responding to negative comments with style',
      'Great for showing you\'re unfazed by drama',
      'Adds a chill, confident vibe to your content'
    ],
    relatedEmojis: ['[proud]', '[smileface]', '[wicked]'],
    category: 'proud',
    hidden: true,
    shortcode: '[cool]'
  },

  'wow': {
    id: 'wow',
    symbol: '[wow]',
    name: 'Hidden Wow',
    meaning: 'The hidden wow tiktok emoji shows a face with wide eyes and an open mouth, expressing amazement or wonder. This TikTok secret emoji is perfect for reaction content and expressing genuine surprise.',
    usageScenarios: [
      {
        title: 'Reaction Content',
        description: 'Perfect for amazing reaction videos and surprising moments',
        example: 'Did you see that trick [wow]'
      },
      {
        title: 'Discovery Videos',
        description: 'Express amazement when discovering something incredible',
        example: 'I never knew this existed [wow]'
      },
      {
        title: 'Impressive Content',
        description: 'Show appreciation for impressive skills or achievements',
        example: 'This talent is incredible [wow]'
      }
    ],
    examples: [
      'This is amazing [wow]',
      'I\'m so impressed [wow]',
      'Mind = blown [wow]',
      'Incredible talent [wow]'
    ],
    bestPractices: [
      'Perfect for reaction videos and surprising content',
      'Use to show genuine amazement and wonder',
      'Great for discovery and educational content',
      'Helps express authentic surprise and appreciation'
    ],
    relatedEmojis: ['[astonish]', '[stun]', '[speechless]'],
    category: 'surprised',
    hidden: true,
    shortcode: '[wow]'
  },

  'surprised': {
    id: 'surprised',
    symbol: '[surprised]',
    name: 'Hidden Surprised',
    meaning: 'The hidden surprised tiktok emoji features a face with wide eyes and an open mouth, expressing shock or surprise. This TikTok exclusive emoji captures those unexpected moments that make great content.',
    usageScenarios: [
      {
        title: 'Unexpected Moments',
        description: 'Use when something catches you completely off guard',
        example: 'Plot twist nobody saw coming [surprised]'
      },
      {
        title: 'Reveal Videos',
        description: 'Perfect for big reveals and shocking announcements',
        example: 'The truth behind this trend [surprised]'
      },
      {
        title: 'Reaction Content',
        description: 'Express genuine shock in reaction videos',
        example: 'I cannot believe this happened [surprised]'
      }
    ],
    examples: [
      'Wait what just happened [surprised]',
      'This is so unexpected [surprised]',
      'Nobody told me about this [surprised]',
      'My mind is blown [surprised]'
    ],
    bestPractices: [
      'Perfect for plot twist and reveal content',
      'Use to express genuine shock and surprise',
      'Great for reaction videos and unexpected moments',
      'Adds dramatic impact to storytelling'
    ],
    relatedEmojis: ['[wow]', '[shock]', '[stun]'],
    category: 'surprised',
    hidden: true,
    shortcode: '[surprised]'
  },

  'shout': {
    id: 'shout',
    symbol: '[shout]',
    name: 'Hidden Shout',
    meaning: 'The hidden shout tiktok emoji shows a face with an open mouth, expressing excitement, yelling, or loud expression. This TikTok secret emoji is perfect for energetic and enthusiastic content.',
    usageScenarios: [
      {
        title: 'Energetic Content',
        description: 'Use for high-energy videos and enthusiastic moments',
        example: 'LET\'S GOOO [shout]'
      },
      {
        title: 'Announcement Videos',
        description: 'Perfect for exciting announcements and big news',
        example: 'HUGE NEWS COMING [shout]'
      },
      {
        title: 'Hype Building',
        description: 'Create excitement and build energy in your content',
        example: 'WHO\'S READY FOR THIS [shout]'
      }
    ],
    examples: [
      'THIS IS INCREDIBLE [shout]',
      'EVERYONE NEEDS TO SEE THIS [shout]',
      'MAJOR UPDATE [shout]',
      'YELLING BECAUSE I\'M EXCITED [shout]'
    ],
    bestPractices: [
      'Perfect for high-energy and enthusiastic content',
      'Use to build excitement and hype',
      'Great for announcements and big reveals',
      'Adds energy to motivational content'
    ],
    relatedEmojis: ['[excited]', '[happy]', '[joyful]'],
    category: 'other',
    hidden: true,
    shortcode: '[shout]'
  },

  'flushed': {
    id: 'flushed',
    symbol: '[flushed]',
    name: 'Hidden Flushed',
    meaning: 'The hidden flushed tiktok emoji features a face with red cheeks, indicating embarrassment, shyness, or being caught off guard. This TikTok exclusive emoji is perfect for those relatable awkward moments.',
    usageScenarios: [
      {
        title: 'Embarrassing Moments',
        description: 'Use when sharing embarrassing but relatable experiences',
        example: 'When you realize you\'ve been singing the wrong lyrics [flushed]'
      },
      {
        title: 'Compliment Reactions',
        description: 'Show bashful reaction to compliments and praise',
        example: 'You guys are making me blush [flushed]'
      },
      {
        title: 'Awkward Situations',
        description: 'Express discomfort in awkward social situations',
        example: 'When you wave at someone but they weren\'t waving at you [flushed]'
      }
    ],
    examples: [
      'This is so embarrassing [flushed]',
      'I can\'t handle compliments [flushed]',
      'Why did I say that [flushed]',
      'Caught red-handed [flushed]'
    ],
    bestPractices: [
      'Perfect for relatable embarrassment content',
      'Use to show vulnerability and authenticity',
      'Great for awkward moment compilations',
      'Helps create connection through shared experiences'
    ],
    relatedEmojis: ['[embarrassed]', '[awkward]', '[cute]'],
    category: 'cute',
    hidden: true,
    shortcode: '[flushed]'
  },

  'complacent': {
    id: 'complacent',
    symbol: '[complacent]',
    name: 'Hidden Complacent',
    meaning: 'The hidden complacent tiktok emoji features a smug face with a self-satisfied smile, indicating complacency or satisfaction with oneself. This TikTok secret emoji is perfect for showing confidence and self-assurance.',
    usageScenarios: [
      {
        title: 'Achievement Flexing',
        description: 'Show satisfaction with your accomplishments',
        example: 'Just casually aced that exam [complacent]'
      },
      {
        title: 'Confident Moments',
        description: 'Express self-assurance and confidence',
        example: 'Knew I was right all along [complacent]'
      },
      {
        title: 'Success Stories',
        description: 'Share victories with quiet confidence',
        example: 'When your plan works perfectly [complacent]'
      }
    ],
    examples: [
      'Called it [complacent]',
      'Just being amazing as usual [complacent]',
      'Effortless perfection [complacent]',
      'Told you so [complacent]'
    ],
    bestPractices: [
      'Use to show quiet confidence and satisfaction',
      'Perfect for sharing achievements subtly',
      'Great for \'I told you so\' moments',
      'Adds personality to success content'
    ],
    relatedEmojis: ['[proud]', '[cool]', '[smileface]'],
    category: 'smug',
    hidden: true,
    shortcode: '[complacent]'
  },

  'drool': {
    id: 'drool',
    symbol: '[drool]',
    name: 'Hidden Drool',
    meaning: 'The hidden drool tiktok emoji shows a face with drool coming out of its mouth, indicating hunger, desire, or craving for something. This TikTok exclusive emoji is perfect for food content and expressing want.',
    usageScenarios: [
      {
        title: 'Food Content',
        description: 'Express craving and desire for delicious food',
        example: 'This pizza has me like [drool]'
      },
      {
        title: 'Desire Expression',
        description: 'Show intense wanting or craving for something',
        example: 'I need this in my life [drool]'
      },
      {
        title: 'Reaction Videos',
        description: 'React to amazing food or desirable items',
        example: 'This looks absolutely incredible [drool]'
      }
    ],
    examples: [
      'My mouth is watering [drool]',
      'I\'m literally drooling [drool]',
      'Need this right now [drool]',
      'This looks too good [drool]'
    ],
    bestPractices: [
      'Perfect for food and craving content',
      'Use to express intense desire or want',
      'Great for food review and restaurant videos',
      'Adds humor to reaction content'
    ],
    relatedEmojis: ['[yummy]', '[greedy]', '[smile]'],
    category: 'other',
    hidden: true,
    shortcode: '[drool]'
  },

  'scream': {
    id: 'scream',
    symbol: '[scream]',
    name: 'Hidden Scream',
    meaning: 'The hidden scream tiktok emoji shows a face with wide eyes and an open mouth, expressing fear, shock, or intense emotion. This TikTok secret emoji is perfect for dramatic and intense content.',
    usageScenarios: [
      {
        title: 'Horror Content',
        description: 'Express fear and terror in scary content',
        example: 'This horror movie has me like [scream]'
      },
      {
        title: 'Intense Moments',
        description: 'React to overwhelming or intense situations',
        example: 'When the plot twist hits [scream]'
      },
      {
        title: 'Dramatic Reactions',
        description: 'Show extreme emotional reactions',
        example: 'This is too much to handle [scream]'
      }
    ],
    examples: [
      'I\'m literally screaming [scream]',
      'This is terrifying [scream]',
      'Can\'t handle this intensity [scream]',
      'My heart is racing [scream]'
    ],
    bestPractices: [
      'Perfect for horror and thriller content',
      'Use for intense emotional reactions',
      'Great for dramatic storytelling',
      'Adds impact to shocking moments'
    ],
    relatedEmojis: ['[shocked]', '[stun]', '[wow]'],
    category: 'surprised',
    hidden: true,
    shortcode: '[scream]'
  },

  'weep': {
    id: 'weep',
    symbol: '[weep]',
    name: 'Hidden Weep',
    meaning: 'The hidden weep tiktok emoji shows a face with tears, indicating deep sadness, sorrow, or emotional overwhelm. This TikTok exclusive emoji expresses profound emotional moments.',
    usageScenarios: [
      {
        title: 'Emotional Content',
        description: 'Express deep sadness and emotional moments',
        example: 'This story broke my heart [weep]'
      },
      {
        title: 'Touching Moments',
        description: 'React to heartwarming or sad content',
        example: 'Why am I crying over this [weep]'
      },
      {
        title: 'Personal Struggles',
        description: 'Share vulnerable emotional experiences',
        example: 'Going through a tough time [weep]'
      }
    ],
    examples: [
      'This made me emotional [weep]',
      'I\'m actually crying [weep]',
      'My heart hurts [weep]',
      'Too many feelings [weep]'
    ],
    bestPractices: [
      'Use for deeply emotional and touching content',
      'Perfect for vulnerable storytelling',
      'Great for expressing empathy and sadness',
      'Helps create emotional connection with audience'
    ],
    relatedEmojis: ['[cry]', '[tears]', '[sulk]'],
    category: 'sad',
    hidden: true,
    shortcode: '[weep]'
  },

  'speechless': {
    id: 'speechless',
    symbol: '[speechless]',
    name: 'Hidden Speechless',
    meaning: 'The hidden speechless tiktok emoji shows a face with a hand over its mouth, indicating shock, surprise, or being at a loss for words. This TikTok secret emoji captures those moments when words fail.',
    usageScenarios: [
      {
        title: 'Shocking Reveals',
        description: 'Use when something leaves you completely speechless',
        example: 'The plot twist in this series [speechless]'
      },
      {
        title: 'Amazing Discoveries',
        description: 'Express being overwhelmed by incredible information',
        example: 'Just learned this mind-blowing fact [speechless]'
      },
      {
        title: 'Overwhelming Moments',
        description: 'Show when emotions or situations are too much to process',
        example: 'I have no words for this [speechless]'
      }
    ],
    examples: [
      'I\'m literally speechless [speechless]',
      'No words [speechless]',
      'How do I even respond to this [speechless]',
      'My brain can\'t process this [speechless]'
    ],
    bestPractices: [
      'Perfect for shocking and overwhelming content',
      'Use when words truly cannot express your reaction',
      'Great for mind-blowing fact videos',
      'Adds drama to revelation content'
    ],
    relatedEmojis: ['[wow]', '[stun]', '[astonish]'],
    category: 'surprised',
    hidden: true,
    shortcode: '[speechless]'
  },

  'laughwithtears': {
    id: 'laughwithtears',
    symbol: '[laughwithtears]',
    name: 'Hidden Laugh with Tears',
    meaning: 'The hidden laugh tiktok with tears emoji shows a face laughing with tears streaming down, indicating extreme laughter or finding something hilariously funny. This TikTok exclusive emoji is perfect for comedy content.',
    usageScenarios: [
      {
        title: 'Comedy Content',
        description: 'Express extreme laughter and amusement',
        example: 'This joke has me dying [laughwithtears]'
      },
      {
        title: 'Funny Reactions',
        description: 'React to hilarious videos and memes',
        example: 'I can\'t stop laughing at this [laughwithtears]'
      },
      {
        title: 'Absurd Moments',
        description: 'Show amusement at ridiculous situations',
        example: 'This is too funny to be real [laughwithtears]'
      }
    ],
    examples: [
      'I\'m literally crying from laughter [laughwithtears]',
      'This is the funniest thing ever [laughwithtears]',
      'Can\'t breathe from laughing [laughwithtears]',
      'My stomach hurts from laughing [laughwithtears]'
    ],
    bestPractices: [
      'Perfect for comedy and humor content',
      'Use for extremely funny reactions',
      'Great for meme and joke videos',
      'Helps show genuine amusement and joy'
    ],
    relatedEmojis: ['[laugh]', '[funnyface]', '[hehe]'],
    category: 'happy',
    hidden: true,
    shortcode: '[laughwithtears]'
  },

  'facewithrollingeyes': {
    id: 'facewithrollingeyes',
    symbol: '[facewithrollingeyes]',
    name: 'Hidden Face with Rolling Eyes',
    meaning: 'The hidden face tiktok with rolling eyes emoji shows a face rolling its eyes, indicating annoyance, disbelief, or sarcasm. This TikTok secret emoji is perfect for expressing exasperation and eye-rolling moments.',
    usageScenarios: [
      {
        title: 'Sarcastic Comments',
        description: 'Express sarcasm and disbelief in responses',
        example: 'Oh sure, that totally makes sense [facewithrollingeyes]'
      },
      {
        title: 'Annoying Situations',
        description: 'React to frustrating or annoying circumstances',
        example: 'Here we go again [facewithrollingeyes]'
      },
      {
        title: 'Dramatic Reactions',
        description: 'Show exaggerated annoyance for comedic effect',
        example: 'Really? Right now? [facewithrollingeyes]'
      }
    ],
    examples: [
      'Of course this happens [facewithrollingeyes]',
      'Can you believe this [facewithrollingeyes]',
      'Not surprised at all [facewithrollingeyes]',
      'Here we go with this again [facewithrollingeyes]'
    ],
    bestPractices: [
      'Perfect for sarcastic and annoyed reactions',
      'Use to express disbelief and exasperation',
      'Great for relatable frustration content',
      'Adds personality to complaint videos'
    ],
    relatedEmojis: ['[disdain]', '[angry]', '[sulk]'],
    category: 'angry',
    hidden: true,
    shortcode: '[facewithrollingeyes]'
  },

  'sulk': {
    id: 'sulk',
    symbol: '[sulk]',
    name: 'Hidden Sulk',
    meaning: 'The hidden sulk tiktok emoji shows a face with a frown, indicating sulking, pouting, or disappointment. This TikTok exclusive emoji is perfect for expressing when things don\'t go your way.',
    usageScenarios: [
      {
        title: 'Disappointment',
        description: 'Express disappointment when things don\'t work out',
        example: 'Plans got cancelled again [sulk]'
      },
      {
        title: 'Playful Pouting',
        description: 'Show playful sulking for comedic effect',
        example: 'Nobody liked my video [sulk]'
      },
      {
        title: 'Minor Setbacks',
        description: 'React to small disappointments and setbacks',
        example: 'My favorite restaurant is closed [sulk]'
      }
    ],
    examples: [
      'Not fair [sulk]',
      'Why does this always happen [sulk]',
      'I\'m officially pouting [sulk]',
      'Life is so unfair [sulk]'
    ],
    bestPractices: [
      'Use for playful disappointment and pouting',
      'Perfect for relatable frustration content',
      'Great for showing minor setbacks dramatically',
      'Adds humor to complaint videos'
    ],
    relatedEmojis: ['[cry]', '[weep]', '[embarrassed]'],
    category: 'sad',
    hidden: true,
    shortcode: '[sulk]'
  },

  'lovely': {
    id: 'lovely',
    symbol: '[lovely]',
    name: 'Hidden Lovely',
    meaning: 'The hidden lovely tiktok emoji shows a face with hearts in its eyes, indicating love, admiration, or being lovestruck. This TikTok secret emoji is perfect for expressing affection and adoration.',
    usageScenarios: [
      {
        title: 'Love Content',
        description: 'Express love and adoration for someone or something',
        example: 'This couple is goals [lovely]'
      },
      {
        title: 'Appreciation Posts',
        description: 'Show deep appreciation and admiration',
        example: 'This person is amazing [lovely]'
      },
      {
        title: 'Cute Reactions',
        description: 'React to adorable and heartwarming content',
        example: 'This is the cutest thing ever [lovely]'
      }
    ],
    examples: [
      'I\'m in love with this [lovely]',
      'My heart is melting [lovely]',
      'This is so precious [lovely]',
      'Absolutely adorable [lovely]'
    ],
    bestPractices: [
      'Perfect for love and relationship content',
      'Use to express deep appreciation and admiration',
      'Great for cute and heartwarming videos',
      'Helps show genuine affection and care'
    ],
    relatedEmojis: ['[loveface]', '[cute]', '[angel]'],
    category: 'cute',
    hidden: true,
    shortcode: '[lovely]'
  },

  'greedy': {
    id: 'greedy',
    symbol: '[greedy]',
    name: 'Hidden Greedy',
    meaning: 'The hidden greedy tiktok emoji shows a face with a greedy smile, indicating greed, desire for more, or materialistic wants. This TikTok exclusive emoji is perfect for expressing wanting more of something.',
    usageScenarios: [
      {
        title: 'Material Desires',
        description: 'Express wanting more money, items, or luxuries',
        example: 'Need all the designer clothes [greedy]'
      },
      {
        title: 'Food Cravings',
        description: 'Show desire for more food or treats',
        example: 'One slice of pizza is never enough [greedy]'
      },
      {
        title: 'Success Ambitions',
        description: 'Express ambitious goals and wanting more success',
        example: 'Always hungry for more success [greedy]'
      }
    ],
    examples: [
      'I want it all [greedy]',
      'More, more, more [greedy]',
      'Never enough [greedy]',
      'Gimme all of that [greedy]'
    ],
    bestPractices: [
      'Use for materialistic and ambitious content',
      'Perfect for expressing intense desires',
      'Great for food and luxury content',
      'Adds humor to want and desire videos'
    ],
    relatedEmojis: ['[drool]', '[yummy]', '[wicked]'],
    category: 'other',
    hidden: true,
    shortcode: '[greedy]'
  },

  'joyful': {
    id: 'joyful',
    symbol: '[joyful]',
    name: 'Hidden Joyful',
    meaning: 'The hidden joyful tiktok emoji shows a face with a big smile and sparkling eyes, indicating pure joy and happiness. This TikTok exclusive emoji radiates positive energy and excitement.',
    usageScenarios: [
      {
        title: 'Pure Happiness',
        description: 'Express genuine joy and happiness',
        example: 'This made my entire day [joyful]'
      },
      {
        title: 'Celebration Content',
        description: 'Share joyful moments and celebrations',
        example: 'Living my best life [joyful]'
      },
      {
        title: 'Positive Vibes',
        description: 'Spread positivity and good energy',
        example: 'Sending good vibes to everyone [joyful]'
      }
    ],
    examples: [
      'So much happiness right now [joyful]',
      'My heart is full [joyful]',
      'Pure joy [joyful]',
      'This energy is everything [joyful]'
    ],
    bestPractices: [
      'Perfect for positive and uplifting content',
      'Use to express genuine happiness and joy',
      'Great for celebration and achievement videos',
      'Helps spread positive energy to viewers'
    ],
    relatedEmojis: ['[happy]', '[excited]', '[smile]'],
    category: 'happy',
    hidden: true,
    shortcode: '[joyful]'
  },

  'hehe': {
    id: 'hehe',
    symbol: '[hehe]',
    name: 'Hidden Hehe',
    meaning: 'The hidden hehe tiktok emoji shows a face with a mischievous grin, indicating light-hearted laughter, giggling, or playful mischief. This TikTok secret emoji is perfect for subtle humor and playful moments.',
    usageScenarios: [
      {
        title: 'Playful Mischief',
        description: 'Show light-hearted mischief and playfulness',
        example: 'Maybe I did something sneaky [hehe]'
      },
      {
        title: 'Subtle Humor',
        description: 'Express gentle amusement and light laughing',
        example: 'That was kinda funny [hehe]'
      },
      {
        title: 'Innocent Jokes',
        description: 'React to mild humor and innocent pranks',
        example: 'Oops did I do that [hehe]'
      }
    ],
    examples: [
      'I may have caused some chaos [hehe]',
      'Just a little mischief [hehe]',
      'Giggling quietly [hehe]',
      'That was sneaky [hehe]'
    ],
    bestPractices: [
      'Perfect for playful and mischievous content',
      'Use for light humor and gentle pranks',
      'Great for innocent joke videos',
      'Adds personality to playful interactions'
    ],
    relatedEmojis: ['[wicked]', '[laugh]', '[funnyface]'],
    category: 'happy',
    hidden: true,
    shortcode: '[hehe]'
  },

  'slap': {
    id: 'slap',
    symbol: '[slap]',
    name: 'Hidden Slap',
    meaning: 'The hidden slap tiktok emoji shows a face with a hand raised, indicating a slap gesture, shock, or dramatic reaction. This TikTok exclusive emoji is perfect for dramatic moments and playful reactions.',
    usageScenarios: [
      {
        title: 'Dramatic Reactions',
        description: 'Express shock or dramatic surprise',
        example: 'This plot twist has me like [slap]'
      },
      {
        title: 'Playful Violence',
        description: 'Show playful hitting or slapping reactions',
        example: 'Want to slap some sense into them [slap]'
      },
      {
        title: 'Reality Check',
        description: 'React to unbelievable or ridiculous situations',
        example: 'Someone needs a reality check [slap]'
      }
    ],
    examples: [
      'This deserves a slap [slap]',
      'I can\'t with this person [slap]',
      'Wake up call needed [slap]',
      'The audacity [slap]'
    ],
    bestPractices: [
      'Use for dramatic and playful reactions',
      'Perfect for expressing shock and disbelief',
      'Great for reaction videos and commentary',
      'Adds drama to response content'
    ],
    relatedEmojis: ['[shocked]', '[stun]', '[rage]'],
    category: 'surprised',
    hidden: true,
    shortcode: '[slap]'
  },

  'tears': {
    id: 'tears',
    symbol: '[tears]',
    name: 'Hidden Tears',
    meaning: 'The hidden tears tiktok emoji shows a face with tears, indicating sadness, emotional release, or being moved to tears. This TikTok secret emoji captures moments of deep emotion.',
    usageScenarios: [
      {
        title: 'Emotional Moments',
        description: 'Express being moved to tears by touching content',
        example: 'This story has me in tears [tears]'
      },
      {
        title: 'Sad Content',
        description: 'React to sad or heartbreaking situations',
        example: 'Why am I crying over this [tears]'
      },
      {
        title: 'Overwhelming Feelings',
        description: 'Show emotional overwhelm and sensitivity',
        example: 'Too many feelings right now [tears]'
      }
    ],
    examples: [
      'I\'m actually crying [tears]',
      'This hit me right in the feels [tears]',
      'Emotional damage [tears]',
      'My heart [tears]'
    ],
    bestPractices: [
      'Perfect for emotional and touching content',
      'Use to show vulnerability and sensitivity',
      'Great for reaction videos to sad content',
      'Helps create emotional connection with viewers'
    ],
    relatedEmojis: ['[cry]', '[weep]', '[sulk]'],
    category: 'sad',
    hidden: true,
    shortcode: '[tears]'
  },

  'stun': {
    id: 'stun',
    symbol: '[stun]',
    name: 'Hidden Stun',
    meaning: 'The hidden stun tiktok emoji shows a face with a shocked expression, indicating being stunned, amazed, or caught completely off guard. This TikTok exclusive emoji captures those jaw-dropping moments.',
    usageScenarios: [
      {
        title: 'Shocking Moments',
        description: 'Express being completely stunned by surprising events',
        example: 'This news just stunned me [stun]'
      },
      {
        title: 'Amazing Discoveries',
        description: 'React to incredible revelations and discoveries',
        example: 'I\'m stunned by this talent [stun]'
      },
      {
        title: 'Overwhelming Surprises',
        description: 'Show being overwhelmed by unexpected situations',
        example: 'This completely stunned me [stun]'
      }
    ],
    examples: [
      'I\'m literally stunned [stun]',
      'This left me speechless [stun]',
      'Completely blown away [stun]',
      'My brain just stopped [stun]'
    ],
    bestPractices: [
      'Perfect for shocking and amazing content',
      'Use when genuinely stunned or amazed',
      'Great for reaction videos and discoveries',
      'Adds impact to surprising revelations'
    ],
    relatedEmojis: ['[wow]', '[speechless]', '[astonish]'],
    category: 'surprised',
    hidden: true,
    shortcode: '[stun]'
  },

  'cute': {
    id: 'cute',
    symbol: '[cute]',
    name: 'Hidden Cute',
    meaning: 'The hidden cute tiktok emoji shows a face with a sweet smile, indicating cuteness, adorableness, or affection. This TikTok secret emoji is perfect for expressing when something is simply too cute to handle.',
    usageScenarios: [
      {
        title: 'Adorable Content',
        description: 'React to cute animals, babies, or sweet moments',
        example: 'This puppy is too cute [cute]'
      },
      {
        title: 'Sweet Interactions',
        description: 'Express affection and sweetness',
        example: 'You\'re so cute [cute]'
      },
      {
        title: 'Heartwarming Moments',
        description: 'React to touching and sweet situations',
        example: 'This is the cutest thing ever [cute]'
      }
    ],
    examples: [
      'So adorable [cute]',
      'My heart is melting [cute]',
      'Too cute to handle [cute]',
      'Cuteness overload [cute]'
    ],
    bestPractices: [
      'Perfect for adorable and sweet content',
      'Use to express genuine affection and sweetness',
      'Great for pet videos and wholesome content',
      'Helps create warm, positive interactions'
    ],
    relatedEmojis: ['[lovely]', '[angel]', '[blink]'],
    category: 'cute',
    hidden: true,
    shortcode: '[cute]'
  },

  'blink': {
    id: 'blink',
    symbol: '[blink]',
    name: 'Hidden Blink',
    meaning: 'The hidden blink tiktok emoji shows a face with one eye closed, indicating a wink, flirtation, or playful gesture. This TikTok exclusive emoji adds a flirty and playful touch to your content.',
    usageScenarios: [
      {
        title: 'Flirty Content',
        description: 'Add a flirtatious or charming element to content',
        example: 'Looking good today [blink]'
      },
      {
        title: 'Playful Secrets',
        description: 'Share secrets or inside jokes playfully',
        example: 'If you know, you know [blink]'
      },
      {
        title: 'Confident Moments',
        description: 'Show confidence and playful charm',
        example: 'Just being cute [blink]'
      }
    ],
    examples: [
      'Hey there [blink]',
      'You caught me [blink]',
      'Just saying [blink]',
      'Maybe [blink]'
    ],
    bestPractices: [
      'Perfect for flirty and playful content',
      'Use to add charm and personality',
      'Great for confident and cheeky videos',
      'Helps create playful interactions with viewers'
    ],
    relatedEmojis: ['[cute]', '[wicked]', '[smileface]'],
    category: 'cute',
    hidden: true,
    shortcode: '[blink]'
  },

  'disdain': {
    id: 'disdain',
    symbol: '[disdain]',
    name: 'Hidden Disdain',
    meaning: 'The hidden disdain tiktok emoji shows a face with a raised eyebrow, indicating disdain, contempt, or disapproval. This TikTok secret emoji is perfect for expressing judgment and disapproval.',
    usageScenarios: [
      {
        title: 'Judgmental Reactions',
        description: 'Express disapproval and judgment',
        example: 'Really? That\'s your choice? [disdain]'
      },
      {
        title: 'Sarcastic Responses',
        description: 'Show contempt through sarcastic reactions',
        example: 'How original [disdain]'
      },
      {
        title: 'Superior Attitudes',
        description: 'Express feeling superior or unimpressed',
        example: 'I expected better [disdain]'
      }
    ],
    examples: [
      'That\'s questionable [disdain]',
      'Not impressed [disdain]',
      'Could do better [disdain]',
      'Seriously? [disdain]'
    ],
    bestPractices: [
      'Use for expressing disapproval and judgment',
      'Perfect for sarcastic and critical content',
      'Great for reaction videos to poor choices',
      'Adds personality to critical commentary'
    ],
    relatedEmojis: ['[facewithrollingeyes]', '[angry]', '[sulk]'],
    category: 'angry',
    hidden: true,
    shortcode: '[disdain]'
  },

  'astonish': {
    id: 'astonish',
    symbol: '[astonish]',
    name: 'Hidden Astonish',
    meaning: 'The hidden astonish tiktok emoji shows a face with wide eyes and raised eyebrows, indicating astonishment, amazement, or being completely taken aback. This TikTok exclusive emoji captures moments of pure wonder.',
    usageScenarios: [
      {
        title: 'Mind-Blowing Content',
        description: 'React to absolutely astonishing information or events',
        example: 'This fact just astonished me [astonish]'
      },
      {
        title: 'Incredible Discoveries',
        description: 'Express amazement at incredible discoveries',
        example: 'I\'m astonished by this talent [astonish]'
      },
      {
        title: 'Shocking Revelations',
        description: 'React to shocking and unexpected revelations',
        example: 'This plot twist is astonishing [astonish]'
      }
    ],
    examples: [
      'I\'m absolutely astonished [astonish]',
      'This is mind-blowing [astonish]',
      'Completely taken aback [astonish]',
      'How is this even possible [astonish]'
    ],
    bestPractices: [
      'Perfect for mind-blowing and amazing content',
      'Use for genuine astonishment and wonder',
      'Great for educational and discovery videos',
      'Adds impact to incredible revelations'
    ],
    relatedEmojis: ['[wow]', '[stun]', '[speechless]'],
    category: 'surprised',
    hidden: true,
    shortcode: '[astonish]'
  },

  'rage': {
    id: 'rage',
    symbol: '[rage]',
    name: 'Hidden Rage',
    meaning: 'The hidden rage tiktok emoji shows a face with a furious expression, indicating intense anger, fury, or extreme frustration. This TikTok secret emoji is perfect for expressing intense emotional reactions.',
    usageScenarios: [
      {
        title: 'Intense Anger',
        description: 'Express extreme frustration and anger',
        example: 'This makes me absolutely furious [rage]'
      },
      {
        title: 'Injustice Reactions',
        description: 'React to unfair or infuriating situations',
        example: 'This injustice fills me with rage [rage]'
      },
      {
        title: 'Dramatic Fury',
        description: 'Show intense emotional reactions for dramatic effect',
        example: 'My rage is uncontainable [rage]'
      }
    ],
    examples: [
      'I\'m absolutely furious [rage]',
      'This makes my blood boil [rage]',
      'Rage mode activated [rage]',
      'I can\'t contain this anger [rage]'
    ],
    bestPractices: [
      'Use for intense anger and frustration',
      'Perfect for dramatic emotional content',
      'Great for reaction videos to infuriating content',
      'Adds intensity to passionate responses'
    ],
    relatedEmojis: ['[angry]', '[disdain]', '[facewithrollingeyes]'],
    category: 'angry',
    hidden: true,
    shortcode: '[rage]'
  },

  'excited': {
    id: 'excited',
    symbol: '[excited]',
    name: 'Hidden Excited',
    meaning: 'The hidden excited tiktok emoji shows a face with sparkling eyes and a big smile, indicating excitement, enthusiasm, and anticipation. This TikTok exclusive emoji radiates pure excitement and energy.',
    usageScenarios: [
      {
        title: 'Anticipation Content',
        description: 'Express excitement for upcoming events or reveals',
        example: 'So excited for this announcement [excited]'
      },
      {
        title: 'Energetic Moments',
        description: 'Show high energy and enthusiasm',
        example: 'My energy is through the roof [excited]'
      },
      {
        title: 'Achievement Celebrations',
        description: 'Celebrate accomplishments with excitement',
        example: 'Just achieved my goal [excited]'
      }
    ],
    examples: [
      'I\'m so excited I can\'t contain it [excited]',
      'This has me bouncing off the walls [excited]',
      'Pure excitement [excited]',
      'My heart is racing with excitement [excited]'
    ],
    bestPractices: [
      'Perfect for high-energy and enthusiastic content',
      'Use to express genuine excitement and anticipation',
      'Great for announcement and celebration videos',
      'Helps energize and engage your audience'
    ],
    relatedEmojis: ['[happy]', '[joyful]', '[proud]'],
    category: 'happy',
    hidden: true,
    shortcode: '[excited]'
  },

  'proud': {
    id: 'proud',
    symbol: '[proud]',
    name: 'Hidden Proud',
    meaning: 'The hidden proud tiktok emoji shows a face with a smug smile, indicating pride, satisfaction, and confidence in achievements. This TikTok secret emoji is perfect for showcasing accomplishments.',
    usageScenarios: [
      {
        title: 'Achievement Sharing',
        description: 'Show pride in personal accomplishments',
        example: 'Just reached my goal and feeling proud [proud]'
      },
      {
        title: 'Confident Moments',
        description: 'Express confidence and self-satisfaction',
        example: 'Proud of how far I\'ve come [proud]'
      },
      {
        title: 'Success Celebration',
        description: 'Celebrate victories and successes',
        example: 'Hard work paying off [proud]'
      }
    ],
    examples: [
      'So proud of this achievement [proud]',
      'Feeling accomplished [proud]',
      'My hard work is showing [proud]',
      'Proud moment [proud]'
    ],
    bestPractices: [
      'Perfect for achievement and success content',
      'Use to show legitimate pride in accomplishments',
      'Great for motivational and inspirational videos',
      'Helps celebrate personal growth and success'
    ],
    relatedEmojis: ['[cool]', '[excited]', '[smileface]'],
    category: 'proud',
    hidden: true,
    shortcode: '[proud]'
  },

  'smileface': {
    id: 'smileface',
    symbol: '[smileface]',
    name: 'Hidden Smile Face',
    meaning: 'The hidden smile tiktok face emoji shows a face with a big smile, indicating happiness, friendliness, and positive vibes. This TikTok exclusive emoji spreads warmth and positivity.',
    usageScenarios: [
      {
        title: 'Positive Content',
        description: 'Spread positivity and good vibes',
        example: 'Sending everyone positive energy [smileface]'
      },
      {
        title: 'Friendly Interactions',
        description: 'Show friendliness and warmth to viewers',
        example: 'Hope everyone has a great day [smileface]'
      },
      {
        title: 'Happy Moments',
        description: 'Express simple happiness and contentment',
        example: 'Life is good right now [smileface]'
      }
    ],
    examples: [
      'Spreading good vibes [smileface]',
      'Happy to be here [smileface]',
      'Smiling because life is good [smileface]',
      'Choose happiness [smileface]'
    ],
    bestPractices: [
      'Perfect for positive and uplifting content',
      'Use to spread happiness and good vibes',
      'Great for motivational and feel-good videos',
      'Helps create warm connections with viewers'
    ],
    relatedEmojis: ['[smile]', '[happy]', '[joyful]'],
    category: 'happy',
    hidden: true,
    shortcode: '[smileface]'
  },

  'evil': {
    id: 'evil',
    symbol: '[evil]',
    name: 'Hidden Evil',
    meaning: 'The hidden evil tiktok emoji shows a face with a devilish grin, indicating mischief, evil intent, or playful villainy. This TikTok secret emoji adds a mischievous and devilish element to your content.',
    usageScenarios: [
      {
        title: 'Mischievous Plans',
        description: 'Show playful evil intentions and mischief',
        example: 'My evil plan is working [evil]'
      },
      {
        title: 'Villainous Content',
        description: 'Express playful villainy and dark humor',
        example: 'Embracing my dark side [evil]'
      },
      {
        title: 'Devious Moments',
        description: 'Share moments of being cunningly clever',
        example: 'Being deliciously evil [evil]'
      }
    ],
    examples: [
      'My evil genius is showing [evil]',
      'Chaos is my specialty [evil]',
      'Being wickedly clever [evil]',
      'Embrace the dark side [evil]'
    ],
    bestPractices: [
      'Perfect for mischievous and villainous content',
      'Use for playful evil and dark humor',
      'Great for prank videos and clever schemes',
      'Adds personality to mischievous interactions'
    ],
    relatedEmojis: ['[wicked]', '[hehe]', '[disdain]'],
    category: 'smug',
    hidden: true,
    shortcode: '[evil]'
  },

  'angel': {
    id: 'angel',
    symbol: '[angel]',
    name: 'Hidden Angel',
    meaning: 'The hidden angel tiktok emoji shows a face with a halo, indicating innocence, goodness, or pure intentions. This TikTok exclusive emoji is perfect for showing your innocent and angelic side.',
    usageScenarios: [
      {
        title: 'Innocent Moments',
        description: 'Show your pure and innocent side',
        example: 'Who me? I\'m innocent [angel]'
      },
      {
        title: 'Good Deeds',
        description: 'Share acts of kindness and goodness',
        example: 'Just helping everyone out [angel]'
      },
      {
        title: 'Pure Intentions',
        description: 'Express having good and pure motives',
        example: 'My intentions are pure [angel]'
      }
    ],
    examples: [
      'I\'m an angel, I swear [angel]',
      'Pure and innocent [angel]',
      'Being good today [angel]',
      'Halo is showing [angel]'
    ],
    bestPractices: [
      'Perfect for innocent and wholesome content',
      'Use to show your good and pure side',
      'Great for charitable and helpful videos',
      'Adds sweetness to your content persona'
    ],
    relatedEmojis: ['[cute]', '[lovely]', '[smile]'],
    category: 'cute',
    hidden: true,
    shortcode: '[angel]'
  },

  'laugh': {
    id: 'laugh',
    symbol: '[laugh]',
    name: 'Hidden Laugh',
    meaning: 'The hidden laugh tiktok emoji shows a face laughing, indicating joy, amusement, and finding something genuinely funny. This TikTok secret emoji is perfect for comedy and humorous content.',
    usageScenarios: [
      {
        title: 'Comedy Content',
        description: 'Express genuine laughter and amusement',
        example: 'This had me laughing so hard [laugh]'
      },
      {
        title: 'Funny Reactions',
        description: 'React to hilarious videos and jokes',
        example: 'I can\'t stop laughing [laugh]'
      },
      {
        title: 'Joyful Moments',
        description: 'Share moments of pure joy and laughter',
        example: 'Laughing until my stomach hurts [laugh]'
      }
    ],
    examples: [
      'This is so funny [laugh]',
      'Dying of laughter [laugh]',
      'Can\'t contain my laughter [laugh]',
      'Hilarious content [laugh]'
    ],
    bestPractices: [
      'Perfect for comedy and humor content',
      'Use to show genuine amusement and joy',
      'Great for funny reaction videos',
      'Helps create a lighthearted atmosphere'
    ],
    relatedEmojis: ['[laughwithtears]', '[funnyface]', '[hehe]'],
    category: 'happy',
    hidden: true,
    shortcode: '[laugh]'
  },

  'pride': {
    id: 'pride',
    symbol: '[pride]',
    name: 'Hidden Pride',
    meaning: 'The hidden pride tiktok emoji shows a face with a proud expression, indicating self-satisfaction, accomplishment, and confidence. This TikTok exclusive emoji expresses justified pride and satisfaction.',
    usageScenarios: [
      {
        title: 'Personal Achievements',
        description: 'Show pride in personal accomplishments and growth',
        example: 'Look how far I\'ve come [pride]'
      },
      {
        title: 'Success Moments',
        description: 'Celebrate victories and successful outcomes',
        example: 'Hard work finally paying off [pride]'
      },
      {
        title: 'Self-Satisfaction',
        description: 'Express justified pride and self-approval',
        example: 'Proud of this accomplishment [pride]'
      }
    ],
    examples: [
      'Feeling proud of myself [pride]',
      'This achievement means everything [pride]',
      'Successfully accomplished my goal [pride]',
      'Pride in my work [pride]'
    ],
    bestPractices: [
      'Use for legitimate accomplishments and achievements',
      'Perfect for motivational and success content',
      'Great for showing personal growth journeys',
      'Helps inspire others through your success'
    ],
    relatedEmojis: ['[proud]', '[cool]', '[excited]'],
    category: 'proud',
    hidden: true,
    shortcode: '[pride]'
  },

  'nap': {
    id: 'nap',
    symbol: '[nap]',
    name: 'Hidden Nap',
    meaning: 'The hidden nap tiktok emoji shows a face with closed eyes, indicating sleepiness, tiredness, or the desire to nap. This TikTok secret emoji is perfect for expressing fatigue and sleepy moods.',
    usageScenarios: [
      {
        title: 'Tired Content',
        description: 'Express exhaustion and need for sleep',
        example: 'So tired, need a nap [nap]'
      },
      {
        title: 'Sleepy Moods',
        description: 'Show drowsiness and sleepy feelings',
        example: 'Fighting sleep right now [nap]'
      },
      {
        title: 'Relaxation Time',
        description: 'Express desire for rest and relaxation',
        example: 'Perfect weather for a nap [nap]'
      }
    ],
    examples: [
      'Running on no sleep [nap]',
      'Nap time is calling [nap]',
      'Too tired to function [nap]',
      'Sleep is life [nap]'
    ],
    bestPractices: [
      'Perfect for relatable tired and sleepy content',
      'Use to express exhaustion and need for rest',
      'Great for student life and work stress videos',
      'Helps create relatable content about fatigue'
    ],
    relatedEmojis: ['[awkward]', '[sulk]', '[thinking]'],
    category: 'other',
    hidden: true,
    shortcode: '[nap]'
  },

  'loveface': {
    id: 'loveface',
    symbol: '[loveface]',
    name: 'Hidden Love Face',
    meaning: 'The hidden love tiktok face emoji shows a face with heart-shaped eyes, indicating love, infatuation, or being completely smitten. This TikTok exclusive emoji is perfect for expressing deep affection and admiration.',
    usageScenarios: [
      {
        title: 'Romance Content',
        description: 'Express love and romantic feelings',
        example: 'Completely in love with this person [loveface]'
      },
      {
        title: 'Admiration Posts',
        description: 'Show deep admiration and appreciation',
        example: 'Obsessed with this talent [loveface]'
      },
      {
        title: 'Crush Content',
        description: 'Express having a crush or being smitten',
        example: 'This celebrity has my heart [loveface]'
      }
    ],
    examples: [
      'Heart eyes activated [loveface]',
      'Completely smitten [loveface]',
      'This has my whole heart [loveface]',
      'Love at first sight [loveface]'
    ],
    bestPractices: [
      'Perfect for love and romance content',
      'Use to express deep admiration and affection',
      'Great for crush and relationship videos',
      'Helps show emotional investment and care'
    ],
    relatedEmojis: ['[lovely]', '[cute]', '[angel]'],
    category: 'cute',
    hidden: true,
    shortcode: '[loveface]'
  },

  'awkward': {
    id: 'awkward',
    symbol: '[awkward]',
    name: 'Hidden Awkward',
    meaning: 'The hidden awkward tiktok emoji shows a face with a nervous smile, indicating awkwardness, discomfort, or uncomfortable situations. This TikTok secret emoji captures those cringeworthy moments perfectly.',
    usageScenarios: [
      {
        title: 'Uncomfortable Situations',
        description: 'Express awkwardness in social situations',
        example: 'That conversation was so awkward [awkward]'
      },
      {
        title: 'Cringe Moments',
        description: 'React to cringeworthy and embarrassing content',
        example: 'This is giving me secondhand embarrassment [awkward]'
      },
      {
        title: 'Nervous Energy',
        description: 'Show discomfort and nervous feelings',
        example: 'Feeling so awkward right now [awkward]'
      }
    ],
    examples: [
      'This is so uncomfortable [awkward]',
      'Major awkward energy [awkward]',
      'Why is this so cringe [awkward]',
      'Nervous laughing intensifies [awkward]'
    ],
    bestPractices: [
      'Perfect for awkward and cringe content',
      'Use to express discomfort and nervousness',
      'Great for relatable social anxiety videos',
      'Helps normalize awkward social experiences'
    ],
    relatedEmojis: ['[embarrassed]', '[flushed]', '[nervous]'],
    category: 'other',
    hidden: true,
    shortcode: '[awkward]'
  },

  'shock': {
    id: 'shock',
    symbol: '[shock]',
    name: 'Hidden Shock',
    meaning: 'The hidden shock tiktok emoji shows a face with a shocked expression, indicating surprise, disbelief, or being completely taken aback. This TikTok exclusive emoji captures those mind-blowing moments.',
    usageScenarios: [
      {
        title: 'Surprising News',
        description: 'React to shocking and unexpected news',
        example: 'This news just shocked me [shock]'
      },
      {
        title: 'Plot Twists',
        description: 'Express surprise at unexpected revelations',
        example: 'Did not see that coming [shock]'
      },
      {
        title: 'Disbelief Moments',
        description: 'Show disbelief and amazement',
        example: 'I can\'t believe this is real [shock]'
      }
    ],
    examples: [
      'I\'m in complete shock [shock]',
      'This is unbelievable [shock]',
      'My mind is blown [shock]',
      'Cannot process this [shock]'
    ],
    bestPractices: [
      'Perfect for shocking and surprising content',
      'Use to express genuine disbelief and amazement',
      'Great for reaction videos and plot twists',
      'Adds drama to unexpected revelations'
    ],
    relatedEmojis: ['[stun]', '[wow]', '[speechless]'],
    category: 'surprised',
    hidden: true,
    shortcode: '[shock]'
  }
};

export const getDetailsByCategory = (category: string) => {
  return Object.values(emojiDetails).filter(detail => detail.category === category);
};

export const getHiddenEmojiDetails = () => {
  return Object.values(emojiDetails).filter(detail => detail.hidden);
};

export const getStandardEmojiDetails = () => {
  return Object.values(emojiDetails).filter(detail => !detail.hidden);
};

export const searchEmojiDetails = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return Object.values(emojiDetails).filter(detail => 
    detail.name.toLowerCase().includes(lowercaseQuery) ||
    detail.meaning.toLowerCase().includes(lowercaseQuery) ||
    detail.usageScenarios.some(scenario => 
      scenario.title.toLowerCase().includes(lowercaseQuery) ||
      scenario.description.toLowerCase().includes(lowercaseQuery)
    )
  );
}; 