'user client'

import { SignOutButton, useUser } from '@clerk/clerk-react';

import { ChevronsLeftRight } from 'lucide-react';

import {
    Avatar,
    AvatarImage
} from '@/components/ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';


const UserItem = () => {
    const { user } = useUser();

    return ( 
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div role='button' className='flex items-center text-sm p-2 w-full hover:bg-primary/5'>
                    <div className='gap-x-2 flex items-center max-w-[150px]'>
                        <div className='rounded-sm bg-neutral-300 dark:bg-neutral-600 p-1'>
                        <Avatar className='h-5 w-5'>
                            <AvatarImage src={user?.imageUrl}/>
                        </Avatar>

                        </div>
                        <span className='text-start font-medium line-clamp-1'>
                            {user?.fullName}&apos;s Jotion
                        </span>
                    </div>
                    <ChevronsLeftRight className='rotate-90 ml-2 text-muted-foreground h-4 w-4'/>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
            className='w-80 '
            align='start'
            alignOffset={11}
            forceMount 

            >
                <div className='flex flex-col space-y-4 p-2'>
                    <p className='text-sm font-medium leading-none text-muted-foreground'>
                        {user?.emailAddresses[0].emailAddress}
                    </p>
                    <div className='flex items-center gap-x-2'>
                        <div className='rounded-sm bg-[#37352f17] p-1'>
                            <Avatar className='h-8 w-8'>
                                <AvatarImage src={user?.imageUrl}/>
                            </Avatar>
                        </div>
                        <div className='space-y-1'>
                             <p className='text-sm line-clamp-1'>
                                {user?.fullName}&apos;s Jotion
                             </p>
                        </div>
                    </div>
                </div>
                <DropdownMenuSeparator/>
                    <DropdownMenuItem asChild className='w-full cursor-pointer text-muted-foreground'>
                        <SignOutButton>
                            Log out                
                        </SignOutButton>
                    </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
     );
}
 
export default UserItem;