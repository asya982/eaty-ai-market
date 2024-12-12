'use client';

import React from 'react'
import { Input } from "@nextui-org/input";
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { Search as SearchIcon } from "@geist-ui/icons";
import { useDebouncedCallback } from 'use-debounce';

export const Search = () => {

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {

    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <Input
      isClearable
      placeholder="Search among products..."
      radius="lg"
      startContent={<SearchIcon />}
      defaultValue={searchParams.get('query')?.toString()}
      onClear={() => handleSearch('')
      }
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      classNames={{
        base: 'w-2/5'
      }}
    />
  )
}
