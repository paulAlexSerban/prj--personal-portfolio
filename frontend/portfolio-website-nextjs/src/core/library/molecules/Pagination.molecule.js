import { Link } from '@/core/atoms/typography/all';
import styles, { base, list, listItem, link } from '@/styles/molecules/pagination.module.scss';
import classNames from 'classnames';

/**
 * Pagination component to display a list of pages with previous and next links.
 * @param {number} currentPage - The current page number.
 * @param {number} numPages - The total number of pages.
 * @returns {JSX.Element} - The pagination component.
 */
export default function Pagination({ currentPage, numPages }) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === numPages;
  const prevPage = `/blog/posts/page/${currentPage - 1}`;
  const nextPage = `/blog/posts/page/${currentPage + 1}`;
  const maxPagesToShow = 3;

  // If there is only one page, do not show pagination
  if (numPages === 1) {
    return <></>;
  }

  // Create an array of all page numbers
  const pages = Array.from({ length: numPages }, (_, i) => i + 1);

  // Create an array of pages to show, centered around the current page
  let pagesToShow = pages.slice(
    Math.max(0, currentPage - Math.floor(maxPagesToShow / 2) - 1),
    Math.min(numPages, currentPage + Math.floor(maxPagesToShow / 2))
  );

  // Add ellipsis if there are pages before the first page shown
  if (pagesToShow[0] > 2) {
    pagesToShow = [1, '...', ...pagesToShow];
  } else if (pagesToShow[0] === 2) {
    pagesToShow = [1, 2, ...pagesToShow.slice(2)];
  }

  // Add ellipsis if there are pages after the last page shown
  if (pagesToShow[pagesToShow.length - 1] < numPages - 1) {
    pagesToShow = [...pagesToShow, '...', numPages];
  } else if (pagesToShow[pagesToShow.length - 1] === numPages - 1) {
    pagesToShow = [...pagesToShow.slice(0, -2), numPages - 1, numPages];
  }

  // Render the pagination component
  return (
    <div className={base}>
      <ul className={list}>
        {/* Render the Previous link */}
        {!isFirstPage && (
          <li className={listItem}>
            <Link href={prevPage} label="Previous" className={link} isInternal={true} />
          </li>
        )}

        {/* Render the page links with ellipsis */}
        {pagesToShow.map((page) => {
          const classes = classNames(link, { [styles['link--isActive']]: currentPage === page });
          if (page === '...') {
            return (
              <li key={page} className={listItem}>
                <span>...</span>
              </li>
            );
          }
          return (
            <li className={listItem} key={`page-${page}`}>
              <Link
                href={`/blog/posts/page/${page}`}
                key={`page-${page}`}
                label={`${page}`}
                className={classes}
                isInternal={true}
              ></Link>
            </li>
          );
        })}

        {/* Render the Next link */}
        {!isLastPage && (
          <li>
            <Link href={nextPage} label="Next" className={link} isInternal={true}></Link>
          </li>
        )}
      </ul>
    </div>
  );
}
