"use client";
import { useAppDispatch, useAppSelector } from "@/redux_toolkit/hooks";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import qs from "qs";
import { resetFilters } from "@/redux_toolkit/slices/filtersSlice";
import { useDebounce } from "usehooks-ts";
import { DefaultValues } from "@/interfaces/App";

interface Props {
  defaultValues: DefaultValues;
}

const QueryBuilder: React.FC<Props> = ({ defaultValues }) => {
  const filters = useAppSelector((state) => state.filters);
  const pagination = useAppSelector((state) => state.pagination);
  const dispatch = useAppDispatch();
  const router = useRouter();
  let debouncedSearch = useDebounce(filters.searchValue, 800);
  const searchParams = useSearchParams();

  React.useEffect(() => {
    if (searchParams.size < 1) {
      dispatch(resetFilters());
    }
  }, [searchParams.size]);

  React.useEffect(() => {
    const query = qs.stringify({
      pagination: {
        page:
          Number(pagination?.page) ||
          Number(defaultValues?.pagination?.page) ||
          1,
        pageSize: pagination?.pageSize,
      },

      sort: [filters.sortValue || defaultValues?.sort?.[0] || "price:asc"],

      filters: {
        genres: {
          name:
            filters.genre === "Все"
              ? undefined
              : filters.genre ||
                defaultValues?.filters?.genres?.name ||
                undefined,
        },
        platforms: {
          name:
            filters.platform === "Все"
              ? undefined
              : filters.platform ||
                defaultValues?.filters?.platforms?.name ||
                undefined,
        },
        name: {
          $containsi: debouncedSearch || undefined,
        },
      },
    });

    router.replace(`?${query}`);
  }, [filters, pagination, debouncedSearch]);

  return <></>;
};

export default QueryBuilder;
