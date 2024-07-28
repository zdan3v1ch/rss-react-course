export interface IPagination {
  currentPage: string;
  limit: number;
  onClose: () => void;
}
