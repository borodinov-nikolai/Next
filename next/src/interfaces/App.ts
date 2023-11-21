export interface DefaultValues {
    pagination: {
      page: string;
    };
    sort: string[];
    filters: {
      genres: { name: string };
      platform: { name: string };
      name: Record<string, string>;
    };
  }