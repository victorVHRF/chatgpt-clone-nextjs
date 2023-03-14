'use client';
import { createContext } from 'react';
import { ReactNode } from 'react';
import './globals.css';
import { Plus } from "@phosphor-icons/react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang='en' className='dark'>
      <head />
      <body>
        <div className='overflow-hidden w-full h-full relative'>
          <div className='flex h-full flex-1 flex-col md:pl-[260px]'>
            {children}
          </div>
          <div className='dark hidden bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-[260px] md:flex-col'>
            <div className='flex h-full min-h-0 flex-col '>
              <div className='flex h-full w-full flex-1 items-start border-white/20'>
                <nav className='flex h-full flex-1 flex-col space-y-1 p-2'>
                  <a className='flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-2 flex-shrink-0 border border-white/20'>
                    <Plus size={16}/>
                    New chat
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
