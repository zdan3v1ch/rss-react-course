export interface IPagination {
  currentPage: number;
  limit: number;
  onClose: () => void;
}
