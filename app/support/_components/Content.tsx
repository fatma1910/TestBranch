'use client';

import React from 'react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { ChevronUp, ChevronDown, ClipboardList } from 'lucide-react';
import mockData from './__mocks__/data';

const Content = ({ searchTerm }: { searchTerm: string }) => {
    const [openItems, setOpenItems] = React.useState<string[]>([]);

    const handleToggle = (category: string) => {
        if (openItems.includes(category)) {
        setOpenItems(openItems.filter(item => item !== category));
        } else {
        setOpenItems([...openItems, category]);
        }
    };

    const filteredData = mockData
        .map(category => ({
        ...category,
        items: category.items.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        }))
        .filter(category => category.items.length > 0);

    return (
        <div className='flex flex-col items-center justify-center px-4'>
        <div className='w-full max-w-[846px] mx-4 sm:mx-10 xl:mx-[297px] mt-16 mb-32 gap-6'>
            <h3 className='font-medium text-[28px] sm:text-[36px] leading-10 text-left mb-8'>Topics</h3>

            <div className="space-y-4">
            {filteredData.length > 0 ? (
                filteredData.map((category) => (
                <Collapsible key={category.category} open={openItems.includes(category.category)} className="w-full">
                    <CollapsibleTrigger asChild>
                    <div 
                        onClick={() => handleToggle(category.category)}
                        className="flex items-center justify-between space-x-4 px-4 cursor-pointer py-4 rounded-lg bg-[#F7F7F7]"
                    >
                        <h4 className="font-normal text-[18px] sm:text-[21px] text-[#242521]">{category.category}</h4>
                        <Button variant="ghost" size="sm" className="w-9 p-0">
                        {openItems.includes(category.category) ? (
                            <ChevronUp className="h-4 w-4" />
                        ) : (
                            <ChevronDown className="h-4 w-4" />
                        )}
                        <span className="sr-only">Toggle</span>
                        </Button>
                    </div>
                    </CollapsibleTrigger>

                    <CollapsibleContent className="space-y-2 mt-4">
                    {category.items.map((item) => (
                        <div key={item.slug} className="rounded-md border px-4 py-4 font-mono text-sm flex gap-2 items-center bg-white">
                        <ClipboardList className='h-6 w-6' strokeWidth={.6} />
                        <a href={`/support/${item.slug}`} className="text-[#3E3D3D] text-[16px] sm:text-[18px]">
                            {item.title}
                        </a>
                        </div>
                    ))}
                    </CollapsibleContent>
                </Collapsible>
                ))
            ) : (
                <p className="text-center text-[16px] text-[#3E3D3D]">No topics found</p>
            )}
            </div>
        </div>
        </div>
    );
};

export default Content;
