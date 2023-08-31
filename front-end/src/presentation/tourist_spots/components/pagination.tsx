interface PaginationProps {
  arrayLength: number;
  currentPage: number;
  pageSize: number;
  onNextPage: () => void;
  onPreviousPage: () => void;
}

export const Pagination = (props: PaginationProps) => {
  const maxPages = props.arrayLength / props.pageSize;
  return (
    <div className="flex flex-col items-center">
      <span className="text-sm text-gray-700 dark:text-gray-400">
      Página <span className="font-semibold text-gray-900 dark:text-white">{props.currentPage}</span> de <span
        className="font-semibold text-gray-900 dark:text-white">{Math.ceil(maxPages)}</span>
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          disabled={props.currentPage === 1}
          className="flex items-center justify-center px-3 h-8 text-sm disabled:opacity-50 font-medium text-white bg-dark-blue rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={props.onPreviousPage}
        >
          Anterior
        </button>
        <button
          disabled={props.currentPage === Math.ceil(maxPages)}
          className="flex items-center justify-center px-3 h-8 text-sm disabled:opacity-50 font-medium text-white bg-dark-blue border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={props.onNextPage}
        >
          Próximo
        </button>
      </div>
    </div>
  )
}
