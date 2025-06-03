'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Copy, Download, Check, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { TikTokEmoji } from '@/data/emojis';
import { saveAs } from 'file-saver';

interface EmojiCardProps {
  emoji: TikTokEmoji;
  showCategory?: boolean;
}

export default function EmojiCard({ emoji, showCategory = true }: EmojiCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(emoji.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (emoji.imagePath) {
      // Remove the leading slash if it exists
      const path = emoji.imagePath.startsWith('/') ? emoji.imagePath.substring(1) : emoji.imagePath;
      saveAs(path, `tiktok-emoji-${emoji.id}.png`);
    }
  };

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 group hover:border-[#FE2C55] dark:hover:border-[#25F4EE]">
      <Link href={`/emojis/${emoji.id}-tiktok-emoji`} className="block">
        <CardContent className="p-6">
          <div className="flex flex-col items-center space-y-4">
            {/* Emoji Image */}
            <div className="relative w-full pt-[100%] bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden group-hover:bg-[#fff5f7] dark:group-hover:bg-[#1a1a1a]">
              {emoji.imagePath ? (
                <Image
                  src={emoji.imagePath}
                  alt={emoji.name}
                  fill
                  className="object-contain p-4"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-3xl font-mono text-gray-400">
                  {emoji.code}
                </div>
              )}
            </div>

            {/* Emoji Info */}
            <div className="text-center w-full">
              <h3 className="font-bold truncate">{emoji.name}</h3>
              {showCategory && emoji.category && (
                <Badge variant="outline" className="text-xs capitalize mt-1">
                  {emoji.category}
                </Badge>
              )}
              <p className="text-sm font-mono text-gray-500 dark:text-gray-400 mt-1 truncate">
                {emoji.code}
              </p>
            </div>
          </div>
        </CardContent>
      </Link>
      
      <CardFooter className="p-4 pt-0">
        {/* Single row for all buttons */}
        <div className="flex items-center gap-1 w-full">
          {/* View Details Button - Shorter text to fit better */}
          <Link href={`/emojis/${emoji.id}-tiktok-emoji`} className="flex-1 min-w-0">
            <Button variant="outline" size="sm" className="w-full text-xs cursor-pointer hover:bg-[#FE2C55] hover:text-white">
              <ExternalLink className="h-3 w-3 mr-1" />
              Details
            </Button>
          </Link>
          
          {/* Copy Button - Icon only */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopy}
                  className="px-2 cursor-pointer flex-shrink-0 hover:bg-[#FE2C55] hover:text-white"
                >
                  {copied ? (
                    <Check className="h-3 w-3" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{copied ? 'Copied!' : (emoji.hidden ? 'Copy code to clipboard' : 'Copy emoji to clipboard')}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          {/* Download Button - Icon only */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDownload}
                  className="px-2 cursor-pointer flex-shrink-0 hover:bg-[#25F4EE] hover:text-black"
                >
                  <Download className="h-3 w-3" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{emoji.hidden && emoji.imagePath ? 'Download PNG image' : 'Download PNG format'}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardFooter>
    </Card>
  );
} 