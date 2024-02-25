export const getLightDarkQuery = (type: string, query: string) =>
  `${type}-light-${query} dark:${type}-dark-${query}`