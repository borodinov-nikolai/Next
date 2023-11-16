export interface DefaultValues {
    pagination: {
      page: string;
    };
    sort: string[];
    filters: {
      genres: { name: string };
      platforms: { name: string };
      name: Record<string, string>;
    };
  }