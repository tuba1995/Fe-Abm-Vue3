export interface PaginationParams {
  _limit: number;
  _page: number;
  _totalRows: number;
}

export interface ListReponsive<T> {
  data: T[];
}
