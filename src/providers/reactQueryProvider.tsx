'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";











export default function ReactQueryProvider({children}:{children: React.ReactNode}) {
    const [cueryClient] = useState( new QueryClient());


    return (
        <QueryClientProvider client={cueryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}